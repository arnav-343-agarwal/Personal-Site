'use client';

import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const achievements = [
  {
    title: 'Hackrush 1.0 Hackathon Runner-Up',
    description:
      'Participated in Hackrush 1.0, a 36-hour hackathon, and secured runner-up position among 100+ teams. Built a real-time platform solving social good problems with modern tech stack and scalable backend.',
    image: '/achievements/hackrush.jpg',
    proofLink: 'https://drive.google.com/file/d/1_O7g80cVWpJpdB08RkaW18-g2ZgGqOtE/view?usp=sharing',
  },
  {
    title: 'JEE Mains+Advanced Achiever',
    description:
      'Cracked one of the toughest engineering entrance exams in India. This demonstrates deep analytical thinking, mathematical ability, and perseverance. Scored 96.85 percentile in JEE Mains and qualified Advanced.',
    image: '/achievements/jee image.jpg',
    proofLink: 'https://drive.google.com/file/d/1hc6cdzN9lqpm9gQcMpGLsAyAkE2SdF_j/view?usp=sharing',
  },
  {
    title: 'Problem-Solving Expert (400+ Qs)',
    description:
      'Solved over 400+ problems across platforms like Leetcode, GFG, and HackerRank. Strong grasp over algorithms, data structures, and time-space optimization. Regular contributor and contest participant.',
    image: '/achievements/leetcode image.png',
    proofLink: 'https://leetcode.com/u/Arnav343Agarwal/',
    isLeetcode: true,
  },
];

const AchievementCard = ({ title, description, image, proofLink, isLeetcode }) => (
  <motion.div
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4 }}
    className="flex flex-col md:flex-row items-start gap-6 bg-white/5 p-6 rounded-xl border border-white/10 shadow-md hover:ring-1 hover:ring-white/20"
  >
    <img src={image} alt={title} className="w-24 h-24 object-contain rounded-md" />
    <div className="flex-1 space-y-3">
      <h2 className="text-2xl font-bold text-white">{title}</h2>
      <Separator className="bg-white/10" />
      <p className="text-white/80">{description}</p>

      <div className="mt-2 flex items-center gap-4">
        {proofLink && !isLeetcode && (
          <a
            href={proofLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-cyan-400 underline inline-flex items-center gap-1 hover:text-cyan-300"
          >
            Proof <FaExternalLinkAlt className="text-xs" />
          </a>
        )}

        {isLeetcode && (
          <a
            href={proofLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-yellow-400 underline inline-flex items-center gap-2 hover:text-yellow-300"
          >
            <SiLeetcode className="text-lg" />
            View LeetCode Profile
          </a>
        )}
      </div>
    </div>
  </motion.div>
);

export default function AchievementsPage() {
  return (
    <div className="px-6 py-12 lg:px-24 space-y-12">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center text-white"
      >
        My Achievements
      </motion.h1>

      <div className="space-y-10">
        {achievements.map((a, i) => (
          <AchievementCard key={i} {...a} />
        ))}
      </div>
    </div>
  );
}
