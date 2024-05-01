import './styles.scss';

import React, { useState } from 'react';

import type Props from './types';

export const Header = ({ data }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="header">
      <nav className="nav nav--desktop">
        <a href="">1</a>
        <a href="">2</a>
        <a href="">3</a>
        <a href="">4</a>
        <a href="">5</a>
      </nav>
      <nav className={`${isOpen ? 'open' : 'closed'} nav nav--mobile`}>
        <a href="">1</a>
        <a href="">2</a>
        <a href="">3</a>
        <a href="">4</a>
        <a href="">5</a>
      </nav>
      <button onClick={() => setIsOpen(!isOpen)}>x</button>
    </div>
  );
};
