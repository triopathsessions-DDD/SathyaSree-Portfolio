import { ReactNode } from 'react';
import { useLocation } from 'react-router-dom';

export default function PageTransition({ children }: { children: ReactNode }) {
  const { pathname } = useLocation();

  return (
    <div
      key={pathname}
      className="opacity-0 animate-fade-in"
    >
      {children}
    </div>
  );
}
