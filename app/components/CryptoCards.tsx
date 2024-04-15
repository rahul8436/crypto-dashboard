'use client';

import { useState, useEffect } from 'react';
import { useCryptoData } from '../hooks/useCryptoData';
import { Grid, Card, CardContent, Typography } from '@mui/material';

const CryptoCards = () => {
  const [cardData, setCardData] = useState<any[]>([]);
  const { fetchAdditionalData } = useCryptoData();

  useEffect(() => {
    fetchAdditionalData('BTC/USD').then((data) => {
      setCardData(data);
    });
  }, [fetchAdditionalData]);

  return (
    <Grid container spacing={2}>
      {cardData.map((item, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card>
            <CardContent>
              <Typography variant='h6'>{item.title}</Typography>
              <Typography variant='body1'>{item.value}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default CryptoCards;
