
import { ReactNode, useEffect, useState } from 'react';
import { useLenis } from '@/hooks/useLenis';

interface LenisProps {
  children: ReactNode;
}

export const Lenis = ({ children }: LenisProps) => {
  const [isReady, setIsReady] = useState(false);
  
  // Initialize Lenis for smooth scrolling
  const lenis = useLenis();
  
  useEffect(() => {
    if (lenis) {
      setIsReady(true);
    }
  }, [lenis]);
  
  return <>{children}</>;
};
