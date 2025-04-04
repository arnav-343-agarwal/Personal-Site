'use client';

import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-20 px-6">
      {/* Profile Pic or Illustration */}
      <div className="relative w-32 h-32 mb-6">
        <Image
          src="/avatar.png" // You can replace with your image
          alt="Arnav Avatar"
          fill
          className="rounded-full object-cover border-4 border-white/10"
        />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Hi, I&apos;m <span className="text-blue-500">Arnav</span>
      </h1>

      <p className="text-muted-foreground text-lg max-w-xl mb-6">
        A passionate full-stack web developer & machine learning enthusiast crafting beautiful and performant digital experiences.
      </p>

      <Button asChild>
        <a href="/projects" className="flex items-center gap-2">
          View My Work <ArrowRight className="w-4 h-4" />
        </a>
      </Button>
    </section>
  );
}
