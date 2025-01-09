import React from 'react';

/** @type {React.FC<{children: React.ReactNode}>} */
export const Wrapper = ({children}) => {
  return (
    <div className='h-full w-full'>
      <div className='flex items-center flex-col mt-5'>{children}</div>
    </div>
  );
};
