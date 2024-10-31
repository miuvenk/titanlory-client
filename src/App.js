import { useState, useEffect } from 'react';
import './App.css';
import Leaderboard from './components/Leaderboard';
import Topbar from './components/Topbar';
import leaderboardService from './services/LeaderboardService';
import { setLeaderboard } from './redux/leaderboardSlice';
import { useDispatch, useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import { SnackbarProvider } from 'notistack';
import CustomSnackbar from './components/CustomSnackbar';

function App() {

  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode === 'true';
  });

  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState('');

  const dispatch = useDispatch();
  const searchTerm = useSelector((state) => state.leaderboard.searchTerm);

  const socket = io(process.env.REACT_APP_API_URL);

  const toggleTheme = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode);
      return newMode;
    });
  };

  useEffect(() => {
    getLeaderboard();
  }, [])


  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    getLeaderboard(searchTerm);
  }, [searchTerm]);

  useEffect(() => {
    socket.on('leaderboardUpdated', (data) => {
      console.log("SOCKET UPDATE")
      dispatch(setLeaderboard(data));
    });

    return () => {
      socket.off('leaderboardUpdated');
    };
  }, []);

  const getLeaderboard = async (playerName) => {
    try {
      leaderboardService.getLeaderboard({ playerName: playerName }).then(response => {
        dispatch(setLeaderboard(response));
        if(response?.message){
          setSnackbarOpen(true)
          setSnackbarMessage('Player not found!')
          setSnackbarSeverity('error')
      }
      }).catch(error => {
        console.log(error)
      })
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <SnackbarProvider 
      maxSnack={4}
      preventDuplicate
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right'
      }}
      autoHideDuration={6000}
    >
      <div className="
    min-h-screen 
      bg-gradient-to-l from-emerald-400 via-teal-300 to-blue-400 
      text-white rounded-lg font-mono 
      dark:bg-gradient-to-l dark:from-emerald-950 dark:via-teal-800 dark:to-blue-900
      ">
        <Topbar toggleTheme={toggleTheme} darkMode={darkMode} />

        <div className="text-center my-6">
          <h2 className="text-3xl font-bold text-emerald-800 dark:text-emerald-300">
            Leaderboard
          </h2>
          <p className="text-gray-600 dark:text-gray-200">
            Prizes are distributed every Sunday night at 00:00.
          </p>
        </div>

        <Leaderboard />
      </div>
      {snackbarOpen &&
                <CustomSnackbar
                    open={snackbarOpen}
                    setOpen={setSnackbarOpen}
                    message={snackbarMessage}
                    severity={snackbarSeverity}
                />
            }
    </SnackbarProvider>
  );
}

export default App;
