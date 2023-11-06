import React from 'react';
import { Spinner } from 'react-bootstrap';

const Progress = ({ isSmall = false }) => {
  if (isSmall) {
    return <Spinner
      // className="ms-2"
      size="sm"
      animation="border"
      
    />
  }
  return (
    <div className='text-center py-4'>
      <Spinner animation="border"  />;
    </div>
  );
}

export default Progress;