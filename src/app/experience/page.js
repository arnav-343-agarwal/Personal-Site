'use client';

import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';

const experiences = [
  {
    title: 'Samsung PRISM Research Internship',
    role: 'Research Intern – ML/AI (Stable Diffusion Optimization)',
    duration: 'Feb 2024 – Present',
    description: `Collaborated with Samsung engineers and faculty to optimize Stable Diffusion models using PyTorch and DeepCache. Focused on memory-efficient inference and computational graph tuning to enhance performance for real-world deployment.`,
    image: '/experience/Samsung logo.jpg', // Make sure this image exists in public/images/
  },
  {
    title: 'SRM IST Official Placement Issue Web App',
    role: 'Lead Developer',
    duration: 'Jan 2024 – Present',
    description: `Developed SRM’s official placement issue management system for students using Node.js, Express, MongoDB, and EJS. The app facilitates secure logins, detailed issue submissions, admin filtering, Excel downloads, and resolution tracking.`,
    image: '/experience/srm logo.png', // Make sure this image exists in public/images/
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
      <img
        src={image}
        alt={title}
        className="h-28 object-contain rounded-xl"
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
