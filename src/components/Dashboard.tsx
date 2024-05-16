import React, { useEffect, useState } from 'react';
import { Container, Grid, IconButton, Typography } from '@mui/material';
import StockCard from './StockCard';

interface DashboardProps {
  onLogout: () => void;
}

const Dashboard: React.FC<DashboardProps> = ({ onLogout }) => {
  const [watchlist, setWatchlist] = useState<string[]>(['AAPL', 'GOOGLE', 'MSFT']); // Example watchlist

  const handleWishlistClick = () => {
    // Placeholder function for navigating to watchlist (replace with your logic)
    console.log('Navigating to watchlist...');
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Grid container spacing={3}>
        <Grid item xs={9}>
          <Typography variant="h4" gutterBottom>
            Dashboard
          </Typography>
        </Grid>
        <Grid item xs={3} style={{ textAlign: 'right' }}>
          <IconButton
            color="primary"
            aria-label="User Watchlist"
            onClick={handleWishlistClick}
          >
            ❤️
          </IconButton>
          <IconButton
            color="primary"
            aria-label="Logout"
            onClick={onLogout}
          >
            Logout
          </IconButton>
        </Grid>
        {watchlist.map((symbol) => (
          <Grid item xs={12} key={symbol}>
            <StockCard symbol={symbol} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;
