'use client';

import { useState, useCallback } from 'react';
import { fetchHistoricalData, fetchAdditionalData } from '../utils/api';

export const useCryptoData = () => {
  const [historicalData, setHistoricalData] = useState<any[]>([]);
  const [additionalData, setAdditionalData] = useState<any[]>([]);

  const fetchHistoricalData = useCallback(async (symbol: string) => {
    const data = await fetchHistoricalData(symbol);
    setHistoricalData(data);
    return data;
  }, []);

  const fetchAdditionalData = useCallback(async (symbol: string) => {
    const data = await fetchAdditionalData(symbol);
    setAdditionalData(data);
    return data;
  }, []);

  return {
    historicalData,
    additionalData,
    fetchHistoricalData,
    fetchAdditionalData,
  };
};
