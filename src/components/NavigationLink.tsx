'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface NavigationLinkProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export const NavigationLink = ({ href, children, className }: NavigationLinkProps) => {
  const pathname = usePathname();
  const isAnchor = href.startsWith('#');
  const targetId = href.replace('#', '');

  // Si es un anchor y NO estamos en la página principal
  if (isAnchor && pathname !== '/') {
    return (
      <Link 
        href={`/#${targetId}`} 
        className={className}
        scroll={false} // Important para preservar el anchor
      >
        {children}
      </Link>
    );
  }

  // Si es un anchor y estamos en la página principal
  if (isAnchor) {
    return (
      <a 
        href={href} 
        className={className}
        onClick={(e) => {
          e.preventDefault();
          const element = document.getElementById(targetId);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        {children}
      </a>
    );
  }

  // Si es un link normal
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};