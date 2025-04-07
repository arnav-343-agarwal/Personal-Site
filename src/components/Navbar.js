"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  Home,
  Mail,
  Briefcase,
  Folder,
  Settings,
  Trophy,
  BookOpen,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "/", icon: Home },
  { label: "Projects", href: "/projects", icon: Folder },
  { label: "Experience", href: "/experience", icon: Briefcase },
  { label: "Skills", href: "/skills", icon: Settings },
  { label: "Achievements", href: "/achievements", icon: Trophy },
  { label: "Certifications", href: "/certifications", icon: BookOpen },
  { label: "Contact", href: "/contact", icon: Mail },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="w-full fixed top-0 z-50 bg-black border-b border-neutral-800 shadow-md">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <h1 className="text-xl font-semibold text-white tracking-wide">
          Arnav
        </h1>

        <nav className="flex items-center gap-6 flex-wrap justify-center">
          {navItems.map(({ label, href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={cn(
                "flex items-center gap-2 text-base font-medium text-gray-400 hover:text-white transition",
                pathname === href && "text-white font-semibold"
              )}
            >
              <Icon className="w-5 h-5" />
              {label}
            </Link>
          ))}
        </nav>

        {/* Resume Button */}
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            asChild
            className="bg-white text-black hover:bg-gray-200 transition"
          >
            <a
              href="https://drive.google.com/file/d/YOUR_RESUME_ID/view"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </Button>
        </motion.div>
      </div>
    </header>
  );
}
