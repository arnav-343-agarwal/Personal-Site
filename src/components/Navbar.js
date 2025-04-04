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
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <h1 className="text-xl font-semibold text-white tracking-wide">Arnav</h1>
        <nav className="flex items-center gap-6">
          {navItems.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                'flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-white transition',
                pathname === href && 'text-white font-semibold'
              )}
            >
              <Icon className="w-4 h-4" />
              {label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
