'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function AnimalFarmRedirect() {
  const router = useRouter();
  
  useEffect(() => {
    router.replace('/books/animal-farm');
  }, [router]);
  
  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-gray-500">Redirecting to new location...</p>
    </div>
  );
} 