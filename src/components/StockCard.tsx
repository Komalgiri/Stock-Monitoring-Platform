import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

interface StockCardProps {
  symbol: string;
}

const StockCard: React.FC<StockCardProps> = ({ symbol }) => {
  // Example stock data (replace with actual data from API)
  const stockData = {
    companyName: 'Company Name',
    latestPrice: 100.0,
    change: -1.5,
    changePercent: -1.5,
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {symbol}
        </Typography>
        <Typography variant="body1">{stockData.companyName}</Typography>
        <Typography variant="body2">Latest Price: {stockData.latestPrice}</Typography>
        <Typography variant="body2">Change: {stockData.change} ({stockData.changePercent}%)</Typography>
        {/* Add more stock details or chart component here */}
      </CardContent>
    </Card>
  );
};

export default StockCard;
