import Link from 'next/link';
import { NavigationLink } from './../components/NavigationLink';

export const Header = () => {
  return (
  <div className="flex justify-center items-center fixed top-3 w-full z-10">
    <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
      <NavigationLink href="/" className="nav-item">Home</NavigationLink>
        <NavigationLink href="#projects" className="nav-item">Projects</NavigationLink>
        <NavigationLink href="/about" className="nav-item">About</NavigationLink>
        <NavigationLink href="/contact" className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900">Contact</NavigationLink>
    </nav>
  </div>
  );
};
