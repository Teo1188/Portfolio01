'use client';

import Link from 'next/link';
import { ReactNode } from 'react';

interface ScrollLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export const ScrollLink = ({ href, children, className }: ScrollLinkProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <a href={href} onClick={handleClick} className={className}>
      {children}
    </a>
  );
};