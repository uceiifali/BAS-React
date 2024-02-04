import React from 'react';

const ResultComponent = ({ result }) => {
  return (
    <div className="flex items-center w-full h-24 p-1 bg-[#1E1E2D] text-white">
      <p className='text-[40px] m-1'>{result}</p>
    </div>
  );
};

export default ResultComponent;
