import React from 'react';

import { HabitDay } from './HabitDay';

export function SummaryTable() {
  const daysArray = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];

  return (
    <div className='w-full flex'>
      <div className='grid grid-rows-7 grid-flow-row gap-3'>
        {daysArray.map((day, dayIndex) => (
          <div
            key={`${dayIndex} - ${day}`}
            className='text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center'
          >
            {day}
          </div>
        ))}
      </div>

      <div className='grid grid-rows-7 grid-flow-col gap-3'>
        <HabitDay />
      </div>
    </div>
  );
}