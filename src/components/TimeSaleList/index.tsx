import { useEffect, useState } from "react";

import "./styles.scss";

const MEXC_WS_URL = "wss://wbs.mexc.com/ws";

interface Trade {
  side: "Buy" | "Sell";
  price: string;
  timestamp: number;
  volume: string;
}

const MAX_TRADES = 30;

const TimeSaleList = ({ symbol = "BTCUSDT" }) => {
  const [trades, setTrades] = useState<Trade[]>([]);

  useEffect(() => {
    console.log(trades);
  }, [trades]);
  useEffect(() => {
    const ws = new WebSocket(MEXC_WS_URL);

    ws.onopen = () => {
      console.log("Connected to MEXC WebSocket");

      // Send subscription request
      setTimeout(() => {
        ws.send(
          JSON.stringify({
            method: "SUBSCRIPTION",
            params: [`spot@public.deals.v3.api@${symbol}`],
          })
        );
      }, 100);
    };

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (data?.code === 0) {
        console.log(`Successfully subscribed to ${symbol} trades.`);
      }

      const tradeData = data?.d?.deals[0];
      if (!tradeData) return;

      const orderElements = document.getElementsByClassName("order");
      if (orderElements.length > MAX_TRADES) {
        // Remove the last trade from the list
        orderElements[orderElements.length - 1].remove();
      }

      const newTrade: Trade = {
        side: tradeData.S === 1 ? "Buy" : "Sell",
        price: tradeData.p,
        timestamp: tradeData.t,
        volume: tradeData.v,
      };

      if (parseFloat(newTrade.volume) > 0.00005) {
        setTrades((prevTrades) => {
          // Add the new trade to the front of the list
          const updatedTrades = [newTrade, ...prevTrades];

          // Trim the array to a maximum of MAX_TRADES items
          return updatedTrades.length > MAX_TRADES
            ? updatedTrades.slice(0, MAX_TRADES)
            : updatedTrades;
        });
      }
    };

    ws.onerror = (error) => console.error("WebSocket Error:", error);
    ws.onclose = () => console.log("Disconnected from MEXC WebSocket");

    return () => ws.close();
  }, [symbol]);

  const getSizeClass = (trade: Trade) => {
    const tradeValue = parseFloat(trade.price) * parseFloat(trade.volume);

    if (trade.side === "Buy") {
      if (tradeValue < 1000) return "average";
      else if (tradeValue < 5000) return "above-average";
      else if (tradeValue < 10000) return "high";
      else if (tradeValue < 50000) return "mega";
      else return "whale";
    } else {
      if (tradeValue < 1000) return "average";
      else if (tradeValue < 5000) return "above-average";
      else if (tradeValue < 10000) return "high";
      else if (tradeValue < 50000) return "mega";
      else return "whale";
    }
  };

  return (
    <div className="trade-container">
      <h2 className="trade-title">Trades for {symbol}</h2>
      <ul className="trade-list">
        {trades.map((trade) => (
          <li
            key={trade.timestamp + trade.volume}
            className={`trade-item ${trade.side.toLowerCase()} order ${getSizeClass(trade)}`}
          >
            <span className="trade-time">
              {new Date(trade.timestamp).toLocaleTimeString()}
            </span>
            <span className="trade-price">Price: {trade.price}</span>
            <span className="trade-volume">Qty: {trade.volume}</span>
            <span className="trade-side">Side: {trade.side}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TimeSaleList;
