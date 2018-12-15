import React from 'react';

const OkNotification = ({ message }) => {
  if (message === null) {
    return null;
    console.log('OkNotification with null message');
  }
  console.log('OkNotification with message', message);
  return (
    <div className="noerror">
      {message}
    </div>
  );
};
export default OkNotification;
