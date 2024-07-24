import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotForYou = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/Home');
  };

  return (
    <div>
      <h2>This application is not available in your country.</h2>
      <button onClick={handleGoHome}>Go to Home</button>
    </div>
  );
};

export default NotForYou;
