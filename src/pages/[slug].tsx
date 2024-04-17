import { Instrument } from '@/views/Instrument';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

export default function InstrumentPage() {
  const [symbol, setSymbol] = useState<string | string[] | null>(null);
  const router = useRouter();

  useEffect(() => {
    const { slug } = router.query;
    if (slug) {
      setSymbol(slug);
    }
  }, [router.query]);

  return (
    <div>
      {symbol === null ? (
        <div>Loading...</div>
      ) : (
        <Instrument symbol={`${symbol}USD`} />
      )}
    </div>
  );
}
