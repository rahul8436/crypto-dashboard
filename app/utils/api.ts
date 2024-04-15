import axios from 'axios';

const bitMexApiUrl = 'https://www.bitmex.com/api/v1';

export const fetchHistoricalData = async (symbol: string) => {
  const response = await axios.get(
    `${bitMexApiUrl}/trade/bucketed?symbol=${symbol}&bin=1d&count=30`
  );
  return response.data.map((data: any) => ({
    time: data.timestamp,
    open: data.open,
    high: data.high,
    low: data.low,
    close: data.close,
    volume: data.volume,
  }));
};

export const fetchAdditionalData = async (symbol: string) => {
  const response = await axios.get(
    `${bitMexApiUrl}/instrument?symbol=${symbol}`
  );
  return [
    { title: 'Last Price', value: response.data[0].lastPrice },
    { title: 'Volume 24h', value: response.data[0].volume24h },
    { title: 'Open Interest', value: response.data[0].openInterest },
    { title: 'Funding Rate', value: response.data[0].fundingRate },
  ];
};
