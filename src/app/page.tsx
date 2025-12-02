'use client';

import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/signup');
  }, []);

  return (
    <main style={{ padding: '2rem', fontSize: '32px', lineHeight: 1.4 }}>
     
    </main>
  );
}