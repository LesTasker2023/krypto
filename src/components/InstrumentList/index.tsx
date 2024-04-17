import './styles.scss';

import React from 'react';

import type Props from './types';
import { InstrumentCard } from '../InstrumentCard';

export const InstrumentList = ({ instruments }: Props) => {
  return (
    <div className="instrument-list">
      {instruments?.map((instrument) => {
        return (
          <InstrumentCard
            key={instrument.id}
            coinSymbol={instrument.symbol}
            coinId={instrument.id}
          />
        );
      })}
    </div>
  );
};
