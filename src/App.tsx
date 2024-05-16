import React, { useState } from 'react';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Watchlist from './components/Watchlist';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // Implement login functionality (set isLoggedIn to true)
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement logout functionality (set isLoggedIn to false)
    setIsLoggedIn(false);
  };

  return (
    <div>
      {!isLoggedIn && <Login onLogin={handleLogin} />}
      {isLoggedIn && (
        <>
          <Dashboard onLogout={handleLogout} />
          <Watchlist />
        </>
      )}
    </div>
  );
};

export default App;
