'use client';

import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const certifications = [
  {
    title: "NPTEL – Design and Analysis of Algorithms",
    subtitle: "Course Topper – Top 5%",
    description:
      "Ranked in the top 5% nationally in a rigorous algorithmic course conducted by IIT. Covered complexity analysis, divide and conquer, dynamic programming, and more. Demonstrates strong grasp of algorithm design and optimization.",
    proofLink: "https://drive.google.com/file/d/1_VHDgChJuMkyze9dM2cHqUHTxnNaDMMl/view?usp=sharing",
    img: "/certifications/nptel daa.png",
  },
  {
    title: "Coursera – Machine Learning by Andrew Ng",
    subtitle: "Stanford University",
    description:
      "One of the most renowned ML courses globally. Learned supervised and unsupervised learning, neural networks, SVMs, clustering, and best practices. Built a solid foundation for applied machine learning and data science.",
    proofLink: "https://drive.google.com/file/d/1JEXl752vJQpHgBe8gTASYaufJVHdZb_U/view?usp=sharing",
    img: "/certifications/coursera ml.png",
  },
  {
    title: "Udemy – Full Stack Web Development",
    subtitle: "Online Bootcamp",
    description:
      "Completed an extensive course covering frontend (React, Tailwind), backend (Node.js, Express), and databases (MongoDB). Built several real-world projects with modern tooling and deployment strategies.",
    proofLink: "https://drive.google.com/file/d/1JCL0HqEm6iQUm9VbRsq73-B_hrNc3bUB/view?usp=sharing",
    img: "/certifications/udemy web.png",
  },
  {
    title: "IIT Kharagpur – Programming in Java",
    subtitle: "NPTEL Certification",
    description:
      "Focused on core and advanced Java: OOP concepts, exception handling, GUI programming, file handling, and JDBC. Reinforced by graded assignments and proctored exams by IIT Kharagpur professors.",
    proofLink: "https://drive.google.com/file/d/1ZJ0-VeefKjrlnJt5-6TkrNv_5ECsivVI/view?usp=sharing",
    img: "/certifications/nptel java.png",
  },
];

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
      staggerChildren: 0.2,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function CertificationsPage() {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="px-6 py-12 lg:px-20 space-y-10"
    >
      <motion.h1
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="text-4xl font-bold text-white text-center"
      >
        Certifications
      </motion.h1>

      <Separator className="bg-white/10" />

      <motion.div variants={containerVariants} className="space-y-10">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
            className="rounded-xl border border-white/10 bg-white/5 p-6 shadow-md flex flex-col md:flex-row gap-6 items-center"
          >
            <div className="w-full md:w-1/4">
              <Image
                src={cert.img}
                alt={cert.title}
                width={300}
                height={100}
                className="rounded-lg object-contain w-full h-auto"
              />
            </div>

            <div className="w-full md:w-3/4 space-y-3 text-left">
              <h2 className="text-2xl font-semibold text-white">{cert.title}</h2>
              <h3 className="text-md text-white/80 font-medium">{cert.subtitle}</h3>
              <p className="text-white/70 text-sm leading-relaxed">{cert.description}</p>

              <Button asChild className="mt-2 bg-white text-black hover:bg-gray-100">
                <a href={cert.proofLink} target="_blank" rel="noopener noreferrer">
                  View Proof ↗
                </a>
              </Button>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}
