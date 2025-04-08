"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import ChatBot from "@/components/ChatBot";
import Link from "next/link";

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
            className="fixed inset-0 z-50 flex flex-col md:flex-row items-center justify-center bg-black text-white px-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-center md:text-left md:mr-8"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome!</h1>
              <p className="text-xl text-purple-400">
                Explore Arnav's World
              </p>
            </motion.div>

            <motion.img
              src="home/download.jpg"
              alt="Cartoon Developer"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2 }}
              className="w-48 md:w-60 mt-6 md:mt-0"
            />
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
              </h1>
              <p className="text-lg text-gray-300 mt-4">
                I’m a full-stack developer passionate about building beautiful
                and functional web apps. This is my personal portfolio where I
                showcase my work, experience, and skills.
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
          <section className="max-w-5xl mx-auto mt-24 px-6 text-center">
            <hr className="border-neutral-800 mb-10" />
            <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
            <p className="text-lg text-gray-400 leading-relaxed max-w-3xl mx-auto">
              I’m a software developer with a strong foundation in full-stack
              development using the MERN stack, and I’m actively exploring
              machine learning and system design. From dynamic websites to
              intelligent apps, I love turning ideas into real-world solutions.
              Currently working on projects involving object detection with
              YOLOv8 and real-time monitoring for high-performance computing
              systems.
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
