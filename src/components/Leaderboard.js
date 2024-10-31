import React, { useState, useEffect, useRef } from 'react'
import LeaderboardItem from './LeaderboardItem'
import LayersIcon from '@mui/icons-material/Layers';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm } from '../redux/leaderboardSlice';
import CustomSnackbar from './CustomSnackbar';

const Leaderboard = () => {

    const [isStacked, setIsStacked] = useState(false);
    const leaderboard = useSelector((state) => state.leaderboard.leaderboard);
    const dispatch = useDispatch();
    const [searchValue, setSearchValue] = useState();
    const [isHighlighted, setIsHighlighted] = useState(false);
  
    const searchRef = useRef(null);

    const mergedPlayers = [
        ...(leaderboard.topPlayers || []),
        ...(leaderboard.surroundingPlayers || [])
    ].sort((a, b) => a.rank - b.rank);

    useEffect(() => {
        if (leaderboard.searchingPlayer && searchRef.current) {
            searchRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            setIsHighlighted(true)
        }
    }, [leaderboard.searchingPlayer]);

    const handleSearch = () => {
        setSearchValue('')
        dispatch(setSearchTerm(searchValue));
    };

    return (
        <div className="container mx-auto p-6 max-w-3xl">
            <div className="flex gap-4 mb-6">
                <input
                    type="text"
                    className="border border-gray-300 dark:bg-blue-950 dark:border-blue-950
        rounded-lg p-2 w-full shadow-sm 
        focus:outline-none focus:border-blue-500 text-blue-800 dark:text-blue-200"
                    placeholder="Search player..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                />
                <button
                    className="bg-blue-400 dark:bg-blue-600 text-white px-4 py-2 
        rounded-lg shadow-sm hover:bg-blue-500 transition-colors duration-200"
                    onClick={handleSearch}
                >
                    <SearchIcon />
                </button>
                {/* <button
                    className="bg-blue-400 dark:bg-blue-600 text-white px-4 py-2 
        rounded-lg shadow-sm hover:bg-blue-500 transition-colors duration-200"
                    onClick={() => setIsStacked((prev) => !prev)}
                >
                    <LayersIcon />
                </button> */}
            </div>
            <div className="grid grid-cols-1 gap-4">
                <div className="grid grid-cols-[1fr,2fr,3fr,2fr,2fr] gap-5 p-4 rounded-lg font-extrabold text-md shadow-2xl
      bg-gray-100 text-green-800 dark:bg-blue-950 dark:text-teal-200 ">
                    <span>Rank</span>
                    <span>Name</span>
                    <span>Country</span>
                    <span>Money</span>
                    <span>Daily Diff</span>
                </div>
                {mergedPlayers.map((player) => (
                    <div key={player.rank}>
                        <LeaderboardItem
                            key={player.rank}
                            player={player}
                            ref={leaderboard.searchingPlayer?.rank === player.rank ? searchRef : null}
                            isHighlighted={leaderboard.searchingPlayer?.rank === player.rank}
                        />
                        {player.rank === 100 &&
                            (
                                <div className="flex flex-col items-center my-2 gap-2">
                                    <span className="w-3 h-3 bg-blue-500 dark:bg-blue-200 rounded-full mx-1"></span>
                                    <span className="w-3 h-3 bg-blue-500 dark:bg-blue-200 rounded-full mx-1"></span>
                                    <span className="w-3 h-3 bg-blue-500 dark:bg-blue-200 rounded-full mx-1"></span>
                                </div>
                            )
                        }
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Leaderboard