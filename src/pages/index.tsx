import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import { Dashboard } from '@/views';
import Default from '@/views/Dashboard/mockData';
import { Coin } from '@/components';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div>
      <Dashboard {...Default} />
      {/* <Coin symbol={'BTC'} isMini={false} isSelected={false} /> */}
    </div>
  );
}
