'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
  return (
    <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mt-20 px-8">
      {/* Left Side - Intro Text */}
      <div className="flex-1">
        <h1 className="text-4xl md:text-6xl font-bold">
          Hey, I'm <span className="text-purple-500">Arnav</span>
        </h1>
        <p className="text-lg text-gray-300 mt-4">
          I’m a full-stack developer passionate about building beautiful and functional web apps.
          This is my personal portfolio where I showcase my work, experience, and skills.
        </p>
        <div className="mt-6">
          <Link href="/projects">
            <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded transition duration-300">
              View Projects
            </button>
          </Link>
        </div>
      </div>

      {/* Right Side - Smaller Image */}
      <div className="flex justify-center">
        <Image
          src="/Arnav Image.jpg"
          alt="Arnav"
          width={220}  // Slightly smaller image
          height={220}
          className="rounded-full border-4 border-purple-600 shadow-lg"
          priority
        />
      </div>
    </section>
  );
}
