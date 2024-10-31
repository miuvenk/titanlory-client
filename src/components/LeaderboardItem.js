import React, { forwardRef, useEffect } from 'react'
import countries from '../utils/countries'
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

const LeaderboardItem = forwardRef(({ player, isHighlighted }, ref) => {

  useEffect(() => {
    if (isHighlighted && ref.current) {
      ref.current.classList.add('animate-fade');
      const timeout = setTimeout(() => {
        ref.current.classList.remove('animate-fade');
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [isHighlighted, ref]);

  return (
    <div
      ref={ref}
      className={`grid grid grid-cols-[1fr,2fr,3fr,2fr,2fr] gap-6 py-2 px-4 rounded-lg shadow-lg mb-1
      ${player.rank === 1 ? 'bg-blue-300 ' :
          player.rank === 2 ? 'bg-blue-200' :
            player.rank === 3 ? 'bg-blue-100' :
              'bg-blue-50'}
      ${player.rank === 1 ? 'dark:bg-blue-900' :
          player.rank === 2 ? 'dark:bg-blue-800' :
            player.rank === 3 ? 'dark:bg-blue-700' :
              'dark:bg-blue-600'}
      text-gray-800 dark:text-gray-100 text-xs sm:text-sm md:text-md lg:text-md`}
    >
      <span className="font-bold flex items-center">{player.rank}</span>
      <span className="font-medium flex items-center">{player.name}</span>
      <span className="font-medium flex row gap-2 items-center">
        <img
          loading="lazy"
          width="24px"
          height="24px"
          srcSet={`https://flagcdn.com/w40/${countries[player.country.replace(/[\s-]/g, '')]?.code.toLowerCase()}.png 2x`}
          src={`https://flagcdn.com/w20/${countries[player.country.replace(/[\s-]/g, '')]?.code.toLowerCase()}.png`}
          alt=""
          className="rounded-full 
          w-[16px] h-[16px] 
          sm:w-[20px] sm:h-[20px] 
          md:w-[24px] md:h-[24px] 
          lg:w-[28px] lg:h-[28px]
          "
        />
        {player.country}
      </span>
      <span className="text-green-800 font-bold dark:text-green-300 flex items-center">${(player.money).toFixed(2)}</span>
      <span className="flex items-center space-x-1 font-bold flex row items-center text-xs sm:text-sm md:text-md lg:text-md">
        {player.dailyDiff > 0 && (
          <span className="text-green-800 dark:text-green-300">
           <ArrowCircleUpIcon style={{fontSize:'inherit'}} className="text-xs sm:text-sm md:text-md lg:text-md"/> {player.dailyDiff}
          </span>
        )}
        {player.dailyDiff === 0 && (
          <span className="text-yellow-500 dark:text-yellow-300">
            <RemoveCircleOutlineIcon style={{fontSize:'inherit'}} className="text-xs sm:text-sm md:text-md lg:text-md"/>  {player.dailyDiff}
          </span>
        )}
        {player.dailyDiff < 0 && (
          <span className="text-red-800 dark:text-red-400">
           <ArrowCircleDownIcon style={{fontSize:'inherit'}} className="text-xs sm:text-sm md:text-md lg:text-md"/> {player.dailyDiff}
          </span>
        )}
      </span>

    </div>
  )
})

export default LeaderboardItem