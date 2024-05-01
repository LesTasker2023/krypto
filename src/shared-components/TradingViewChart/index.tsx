import React, { useEffect } from 'react';
import './styles.scss';

interface Props {
  id: number;
  symbol: string;
  interval: number;
}

export const TradingViewChart = ({ id, symbol, interval }: Props) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      symbol: `KRAKEN:${symbol}`,
      interval: `${(interval * 60).toString()}`,
      autosize: true,

      timezone: 'Etc/UTC',
      theme: 'dark',
      style: '1',
      locale: 'en',
      enable_publishing: false,
      hide_legend: false,
      allow_symbol_change: true,
      save_image: false,
      calendar: false,
      hide_side_toolbar: false,

      studies: ['STD;TEMA'],
    });
    const chart = document.querySelector(
      `.tradingview-widget-container__widget--${id}`
    );
    if (chart) {
      chart.appendChild(script);
    }

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      className={`tradingview-widget-container__widget tradingview-widget-container__widget--${id} widget-wrapper widget-wrapper--${id}`}
    />
  );
};
