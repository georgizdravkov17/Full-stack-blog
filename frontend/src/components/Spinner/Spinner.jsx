import React from 'react';
import './Spinner.css';

const Spinner = () => {
  return(
      <div className="spinner-container">
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
    </div>
  );
}

export default Spinner;