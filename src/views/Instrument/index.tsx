import "./styles.scss";

import React from "react";

import type Props from "./types";
import { TradingViewChart } from "../../shared-components/TradingViewChart";
import { TradingViewTicker } from "../../shared-components/TradingViewTicker";

export const Instrument = ({ symbol }: Props) => {
  return (
    <div className="instrument-container">
      <TradingViewTicker />
      <div className="instrument">
        <TradingViewChart id={1} symbol={symbol} interval={0.05} />
        <TradingViewChart id={2} symbol={symbol} interval={0.25} />
        <TradingViewChart id={3} symbol={symbol} interval={1} />
        <TradingViewChart id={4} symbol={symbol} interval={24} />
      </div>
    </div>
  );
};
