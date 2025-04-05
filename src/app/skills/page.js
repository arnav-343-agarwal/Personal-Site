'use client';

import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { TooltipProvider } from '@/components/ui/tooltip';

import {
  FaReact, FaNodeJs, FaPython, FaGitAlt, FaDatabase, FaRobot, FaBrain, FaJava, FaCode
} from 'react-icons/fa';
import {
  SiJavascript, SiTypescript, SiMongodb, SiTailwindcss,
  SiRedux, SiRedis, SiExpress, SiNextdotjs,
  SiTensorflow, SiPytorch
} from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';

const webDev = {
  title: "Web Development",
  categories: [
    {
      title: "Frontend",
      skills: [
        { name: "React", icon: FaReact, color: "text-cyan-400" },
        { name: "Redux", icon: SiRedux, color: "text-purple-500" },
        { name: "Context API", icon: CgWebsite, color: "text-orange-400" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", icon: FaNodeJs, color: "text-green-600" },
        { name: "Express.js", icon: SiExpress, color: "text-gray-400" },
        { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
        { name: "REST APIs", icon: CgWebsite, color: "text-yellow-400" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
        { name: "Redis", icon: SiRedis, color: "text-red-500" },
        { name: "Git", icon: FaGitAlt, color: "text-orange-500" },
      ],
    },
  ],
};

const problemSolving = {
  title: "Problem Solving & DSA",
  categories: [
    {
      title: "Core Topics",
      skills: [
        { name: "Linked List" },
        { name: "Stack" },
        { name: "Queue" },
        { name: "Binary Trees" },
        { name: "Graphs" },
        { name: "Dynamic Programming" },
      ]
    },
    {
      title: "Online Judges",
      skills: [
        {
          name: "LeetCode (350+ Qs)",
          icon: "/icons/leetcode.png",
          link: "https://leetcode.com/yourprofile"
        },
        {
          name: "GeeksForGeeks",
          icon: "/icons/gfg icon.jpg",
          link: "https://auth.geeksforgeeks.org/user/yourprofile"
        },
        {
          name: "HackerRank",
          icon: "/icons/HackerRank Icon.webp",
          link: "https://www.hackerrank.com/yourprofile"
        }
      ]
    }
  ]
};

const languages = {
  title: "Programming Languages",
  categories: [
    {
      title: "Languages",
      skills: [
        { name: "C++", icon: FaCode, color: "text-gray-500" },
        { name: "C", icon: FaCode, color: "text-red-400" },
        { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
        { name: "Java", icon: FaJava, color: "text-blue-500" },
        { name: "Python", icon: FaPython, color: "text-yellow-300" },
        { name: "SQL", icon: FaDatabase, color: "text-blue-300" },
      ]
    }
  ]
};

const mlDl = {
  title: "Machine Learning / Deep Learning",
  categories: [
    {
      title: "Technologies",
      skills: [
        { name: "Python", icon: FaPython, color: "text-yellow-300" },
        { name: "TensorFlow", icon: SiTensorflow, color: "text-orange-400" },
        { name: "PyTorch", icon: SiPytorch, color: "text-red-500" },
      ],
    },
    {
      title: "Applications",
      skills: [
        { name: "Computer Vision", icon: FaBrain, color: "text-pink-400" },
        { name: "NLP", icon: FaRobot, color: "text-violet-400" },
      ],
    },
  ],
};

const SectionCard = ({ title, categories }) => (
  <motion.div
    whileHover={{ scale: 1.01 }}
    whileTap={{ scale: 0.99 }}
    className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-md transition-all hover:ring-1 hover:ring-white/20"
  >
    <h2 className="text-2xl font-bold mb-4 text-white">{title}</h2>
    <Separator className="mb-6 bg-white/10" />
    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
      {categories.map((category, idx) => (
        <div key={idx}>
          <h3 className="text-lg font-semibold text-white mb-3">{category.title}</h3>
          <div className="flex flex-wrap gap-6">
            {category.skills.map((skill, i) => (
              skill.icon?.startsWith?.("/") ? (
                <a key={i} href={skill.link} target="_blank" rel="noopener noreferrer" className="flex flex-col items-center gap-2">
                  <img src={skill.icon} className="w-12 h-12 rounded" alt={skill.name} />
                  <p className="text-white text-sm font-medium">{skill.name}</p>
                </a>
              ) : (
                <div key={i} className="flex flex-col items-center gap-2">
                  {skill.icon && <skill.icon className={`text-5xl ${skill.color}`} />}
                  <p className="text-white text-sm font-medium text-center">{skill.name}</p>
                </div>
              )
            ))}
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

export default function SkillsPage() {
  return (
    <div className="px-6 py-10 lg:px-20 space-y-10">
      <h1 className="text-4xl font-bold text-center text-white mb-6">My Skills & Expertise</h1>
      <TooltipProvider>
        <div className="space-y-16">
  
          {/* Web Development Section */}
          <div className="space-y-4">
            <SectionCard title={webDev.title} categories={webDev.categories} />
            <p className="text-white/80 text-left max-w-5xl mx-auto text-sm md:text-base">
              With multiple full-stack projects under my belt, I’ve developed a strong grip on frontend and backend technologies. From crafting elegant UIs using Tailwind & React to building scalable APIs with Node.js and Express, I’m fully confident in delivering production-ready web apps.
            </p>
          </div>
  
          {/* Problem Solving Section */}
          <div className="space-y-4">
            <SectionCard title={problemSolving.title} categories={problemSolving.categories} />
            <p className="text-white/80 text-left max-w-5xl mx-auto text-sm md:text-base">
              DSA is my daily workout. With 350+ questions solved on LeetCode and deep dives into topics like DP, Trees, and Graphs, I’ve built a solid intuition for problem solving. It’s not just about getting the solution — it’s about thinking like an engineer.
            </p>
          </div>
  
          {/* Programming Languages Section */}
          <div className="space-y-4">
            <SectionCard title={languages.title} categories={languages.categories} />
            <p className="text-white/80 text-left max-w-5xl mx-auto text-sm md:text-base">
              I’ve coded in C, C++, Java, Python, and more — but C++ is my weapon of choice. Be it system-level programming or high-level scripting, I pick the best language for the task and write clean, efficient, and maintainable code every time.
            </p>
          </div>
  
          {/* ML/DL Section */}
          <div className="space-y-4">
            <SectionCard title={mlDl.title} categories={mlDl.categories} />
            <p className="text-white/80 text-left max-w-5xl mx-auto text-sm md:text-base">
              As a research intern on ML projects like Stable Diffusion optimization, I’ve worked hands-on with TensorFlow and PyTorch. I love applying AI in areas like CV and NLP, and I’m deeply fascinated by how machines can learn and adapt.
            </p>
          </div>
  
        </div>
      </TooltipProvider>
    </div>
  );
  
}
