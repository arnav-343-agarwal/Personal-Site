'use client';

import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

const experiences = [
  {
    title: 'Samsung PRISM Research Internship',
    role: 'Research Intern – ML/AI (Stable Diffusion Optimization)',
    duration: 'Jan 2024 – Aug 2024',
    description: `Collaborated with Samsung engineers and faculty to improve Stable Diffusion models using DeepCache. Researched multiple academic papers and learned various machine learning and deep learning algorithms to focus on memory-efficient inference and optimizing computational graphs for better real-world performance.`,
    image: '/experience/Samsung logo.jpg',
  },
  {
    title: 'SRM IST Official Placement Issue Web App',
    role: 'Lead Developer',
    duration: 'Jan 2025 – Present',
    description: `Currently developing SRM’s official placement issue management system for students using Next.js, TypeScript, Express, and MongoDB. The app supports secure logins, detailed issue submissions, admin-side filtering, Excel downloads, and resolution tracking.`,
    image: '/experience/srm logo.png',
  },
];

const ExperienceCard = ({ title, role, duration, description, image }) => (
  <motion.div
    whileHover={{ scale: 1.01 }}
    whileTap={{ scale: 0.98 }}
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4 }}
    className="flex flex-col md:flex-row gap-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-xl shadow-md p-6 hover:ring-1 hover:ring-white/20 transition-all"
  >
    <div className="w-full md:w-1/3 flex justify-center items-center">
      <Image
        src={image}
        alt={title}
        width={120}
        height={120}
        className="object-contain rounded-xl h-28 w-auto"
      />
    </div>
    <div className="flex-1">
      <h2 className="text-2xl font-semibold text-white">{title}</h2>
      <p className="text-white/80 mt-1">{role}</p>
      <p className="text-sm text-white/60 italic mb-4">{duration}</p>
      <Separator className="bg-white/10 mb-4" />
      <p className="text-white/80 text-justify leading-relaxed">{description}</p>
    </div>
  </motion.div>
);

export default function ExperiencePage() {
  return (
    <div className="px-6 py-12 lg:px-24 space-y-12">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl md:text-5xl font-bold text-center text-white mb-10"
      >
        My Experience
      </motion.h1>

      <div className="space-y-12">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} {...exp} />
        ))}
      </div>
    </div>
  );
}
