import React from 'react'
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Topbar = ({toggleTheme, darkMode}) => {
  return (
    <div className="bg-teal-700 dark:bg-blue-950 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-4xl tracking-widest 
        font-semibold text-center flex-grow ml-8
        text-teal-100 dark:text-teal-200">
            TITANLORY
        </h1>
        <button
          className="flex items-center border rounded px-1 py-1 transition-colors duration-200
            dark:border-gray-300 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-teal-700
            border-white text-white hover:bg-white hover:text-teal-700
          "
          onClick={toggleTheme}
        >
          {darkMode ? (
            <>
              <LightModeIcon className="" /> 
            </>
          ) : (
            <>
              <DarkModeIcon className="" /> 
            </>
          )}
        </button>
      </div>
    </div>
  )
}

export default Topbar