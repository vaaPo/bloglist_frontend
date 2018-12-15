import React from 'react';

const OkNotification = ({ message }) => {
    if (message === null) {
      return null;
    }
    return (
      <div className="noerror">
        {message}
      </div>
    );
  };  
  export default OkNotification;
