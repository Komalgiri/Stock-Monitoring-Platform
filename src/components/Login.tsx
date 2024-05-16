import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';

interface LoginProps {
  onLogin: () => void; // Define the onLogin prop as a function that takes no arguments
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const handleLogin = () => {
    // Implement login functionality (call onLogin prop)
    onLogin(); // Call the onLogin function passed as a prop
  };

  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 8, textAlign: 'center' }}>
        <img src="/stock-market-icon.png" alt="Stock Market Icon" style={{ width: 100, height: 100 }} />
        <Typography variant="h5" component="h1" gutterBottom>
          Stock Monitoring Platform
        </Typography>
        <Box component="form" noValidate onSubmit={handleLogin}>
          <TextField
            id="username"
            label="Username or Email"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            fullWidth
            required
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Login
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
