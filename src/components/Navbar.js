'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Home, Mail, Briefcase, Folder, Settings } from 'lucide-react';

const navItems = [
  { label: 'Home', href: '/', icon: Home },
  { label: 'Projects', href: '/projects', icon: Folder },
  { label: 'Experience', href: '/experience', icon: Briefcase },
  { label: 'Skills', href: '/skills', icon: Settings },
  { label: 'Contact', href: '/contact', icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full fixed top-0 z-50 bg-black border-b border-neutral-800 shadow-md">
      <div className="max-w-7xl mx-auto px-10 py-4 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-white tracking-wide">Arnav</h1>
        <nav className="flex items-center gap-8">
          {navItems.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-2 text-base font-medium text-gray-400 hover:text-white transition',
                pathname === href && 'text-white font-semibold'
              )}
            >
              <Icon className="w-5 h-5" />
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
