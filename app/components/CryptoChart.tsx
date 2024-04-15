'use client';

import { useState, useEffect } from 'react';
import { useCryptoData } from '../hooks/useCryptoData';
import { createChart, IChartApi, ISeriesApi } from 'lightweight-charts';

const CryptoChart = () => {
  const [chart, setChart] = useState<IChartApi>();
  const [candlestickSeries, setCandlestickSeries] =
    useState<ISeriesApi<'candlestick'>>();
  const { fetchHistoricalData } = useCryptoData();

  useEffect(() => {
    const chartWidget = createChart(document.getElementById('crypto-chart')!, {
      width: '100%',
      height: 500,
      layout: {
        backgroundColor: '#ffffff',
        textColor: '#707070',
      },
      grid: {
        vertLines: {
          color: '#e6e6e6',
        },
        horzLines: {
          color: '#e6e6e6',
        },
      },
      crosshair: {
        mode: 0,
      },
      priceScale: {
        borderColor: '#e6e6e6',
      },
      timeScale: {
        borderColor: '#e6e6e6',
      },
    });

    const candlestickSeries = chartWidget.addCandlestickSeries({
      upColor: '#26a69a',
      downColor: '#ef5350',
      borderUpColor: '#26a69a',
      borderDownColor: '#ef5350',
      wickUpColor: '#26a69a',
      wickDownColor: '#ef5350',
    });

    setChart(chartWidget);
    setCandlestickSeries(candlestickSeries);

    return () => chartWidget.remove();
  }, []);

  useEffect(() => {
    if (candlestickSeries) {
      fetchHistoricalData('BTC/USD').then((data) => {
        candlestickSeries.setData(data);
      });
    }
  }, [candlestickSeries, fetchHistoricalData]);

  return <div id='crypto-chart' />;
};

export default CryptoChart;
