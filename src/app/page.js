"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ChatBot from "@/components/ChatBot";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";

export default function HomePage() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setShowIntro(false), 3000); // Show intro for 3 seconds
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      {/* Intro Overlay */}
      <AnimatePresence>
        {showIntro && (
          <motion.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white px-4"
          >
            <motion.div
              initial={{ opacity: 1 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black text-white px-4"
            >
              {/* Background Image with fade effect */}
              <div className="absolute inset-0">
                <Image
                  src="/home/download.jpg"
                  alt="Background"
                  layout="fill"
                  objectFit="cover"
                  className="opacity-20"
                />
              </div>

              {/* Text Content */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1 }}
                className="relative z-10 text-center"
              >
                <h1 className="text-4xl md:text-5xl font-bold mb-2">
                  Welcome!
                </h1>
                <p className="text-xl text-purple-400">Explore Arnav's World</p>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-2">Welcome!</h1>
              <p className="text-xl text-purple-400">Explore Arnav's World </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {!showIntro && (
        <>
          {/* Top Section */}
          <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mt-20 px-8">
            <div className="flex-1">
              <h1 className="text-4xl md:text-6xl font-bold">
                Hey, I'm <span className="text-purple-500">Arnav</span>
                <br />
                <span className="text-white text-2xl md:text-3xl block mt-2">
                  <Typewriter
                    words={["Software Developer", "Problem Solver"]}
                    loop={0}
                    cursor
                    cursorStyle="|"
                    typeSpeed={80}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                </span>
              </h1>

              <div className="flex flex-wrap gap-3 mt-4">
                <span className="bg-purple-700 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Web Developer
                </span>
                <span className="bg-purple-700 text-white px-4 py-1 rounded-full text-sm font-medium">
                  MERN Stack
                </span>
                <span className="bg-purple-700 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Next.js
                </span>
                <span className="bg-purple-700 text-white px-4 py-1 rounded-full text-sm font-medium">
                  Problem Solver
                </span>
              </div>

              <p className="text-lg text-gray-300 mt-4">
                I craft bold, beautiful, and blazing-fast web experiences. As a
                passionate developer, I’ve built some amazing projects using the
                MERN stack, Next.js, Hono and more — combining creativity with clean,
                scalable code. Dive in and explore what I’ve made!
              </p>

              <div className="mt-6">
                <Link href="/projects">
                  <button className="bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded transition duration-300">
                    View Projects
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <Image
                src="/Arnav Image.jpg"
                alt="Arnav"
                width={220}
                height={220}
                className="rounded-full border-4 border-purple-600 shadow-lg"
                priority
              />
            </div>
          </section>

          {/* Bottom Section */}
          <section className="max-w-5xl mx-auto mt-10 px-6 text-center">
            <hr className="border-neutral-800 mb-10" />
            <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
              I’m a 3rd-year Computer Science student at SRM Institute of
              Science and Technology with a strong foundation in full-stack
              development and a love for problem-solving through DSA. From
              modern web apps using infamous tech stack to experimenting
              with scalable backend systems, I enjoy turning complex ideas into
              elegant digital solutions.
            </p>

            <div className="mt-8">
              <Link href="/experience">
                <button className="bg-transparent border border-purple-500 hover:bg-purple-500 hover:text-black text-purple-500 font-semibold py-3 px-6 rounded transition duration-300">
                  View My Journey
                </button>
              </Link>
            </div>
          </section>

          <ChatBot />
        </>
      )}
    </>
  );
}
