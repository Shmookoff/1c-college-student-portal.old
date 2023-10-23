'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';

const StartButton = () => {
  const router = useRouter();
  return (
    <Button onClick={() => router.push('/dashboard')}>Перейти на портал</Button>
  );
};

export default StartButton;
