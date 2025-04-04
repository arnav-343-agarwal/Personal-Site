'use client';

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card';
import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaCode, FaDatabase,
} from 'react-icons/fa';
import {
  SiJavascript, SiTypescript, SiMongodb, SiTailwindcss,
  SiRedux, SiRedis, SiExpress
} from 'react-icons/si';

const skills = [
  {
    category: "Languages",
    stack: [
      { name: "JavaScript", icon: <SiJavascript />, color: "text-yellow-400" },
      { name: "TypeScript", icon: <SiTypescript />, color: "text-blue-400" },
      { name: "Python", icon: <FaPython />, color: "text-sky-400" },
      { name: "C++", icon: <FaCode />, color: "text-gray-300" },
    ]
  },
  {
    category: "Frameworks & Libraries",
    stack: [
      { name: "React", icon: <FaReact />, color: "text-cyan-400" },
      { name: "Node.js", icon: <FaNodeJs />, color: "text-green-500" },
      { name: "Express.js", icon: <SiExpress />, color: "text-gray-200" },
      { name: "Redux", icon: <SiRedux />, color: "text-purple-500" },
    ]
  },
  {
    category: "Databases & Tools",
    stack: [
      { name: "MongoDB", icon: <SiMongodb />, color: "text-green-400" },
      { name: "Redis", icon: <SiRedis />, color: "text-red-500" },
      { name: "Git", icon: <FaGitAlt />, color: "text-orange-400" },
    ]
  },
  {
    category: "Styling & UI",
    stack: [
      { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "text-sky-400" },
      { name: "Shadcn UI", icon: <FaDatabase />, color: "text-pink-400" },
    ]
  }
];

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function SkillsPage() {
  return (
    <div className="px-6 py-16 lg:px-20 bg-gradient-to-br from-black via-zinc-900 to-neutral-900 min-h-screen">
      <h1 className="text-5xl font-bold text-center text-white mb-16 animate-pulse">My Tech Arsenal</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
        {skills.map((section, idx) => (
          <motion.div
            key={idx}
            variants={fadeInUp}
            initial="hidden"
            animate="show"
            whileHover={{ scale: 1.03 }}
          >
            <Card className="bg-white/5 backdrop-blur-md border border-white/10 hover:shadow-lg transition-all">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-white">{section.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-6 mt-4">
                  {section.stack.map((skill, i) => (
                    <div
                      key={i}
                      className={`flex flex-col items-center justify-center w-24 h-24 p-4 rounded-lg bg-white/10 hover:bg-white/20 transition-all duration-300 border border-white/10 shadow-inner`}
                    >
                      <div className={`text-3xl ${skill.color}`}>{skill.icon}</div>
                      <p className="text-sm text-white mt-2 text-center">{skill.name}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
