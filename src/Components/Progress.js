import React from 'react';
import { Spinner } from 'react-bootstrap';

const Progress = ({ isSmall = false }) => {
  if (isSmall) {
    return <Spinner
      // className="ms-2"
      size="sm"
      animation="grow"
    />
  }
  return (
    <h3 className='text-center py-4'>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </h3>
  );
}

export default Progress;