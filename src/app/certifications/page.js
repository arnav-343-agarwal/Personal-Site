'use client';

import { motion } from 'framer-motion';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const certifications = [
  {
    title: "NPTEL – Design and Analysis of Algorithms",
    subtitle: "Topper – Top 5%",
    description:
      "Ranked in the top 5% nationally in a rigorous algorithmic course conducted by IIT. Covered complexity analysis, divide and conquer, dynamic programming, and more. Demonstrates strong grasp of algorithm design and optimization.",
    proofLink: "https://example.com/nptel-proof",
    img: "/certifications/nptel daa.png", // Replace this with your image path
  },
  {
    title: "Coursera – Machine Learning by Andrew Ng",
    subtitle: "Stanford University",
    description:
      "One of the most renowned ML courses globally. Learned supervised and unsupervised learning, neural networks, SVMs, clustering, and best practices. Built a solid foundation for applied machine learning and data science.",
    proofLink: "https://example.com/coursera-proof",
    img: "/certifications/coursera ml.png", // Replace this
  },
  {
    title: "Udemy – Full Stack Web Development",
    subtitle: "Online Bootcamp",
    description:
      "Completed an extensive course covering frontend (React, Tailwind), backend (Node.js, Express), and databases (MongoDB). Built several real-world projects with modern tooling and deployment strategies.",
    proofLink: "https://example.com/udemy-proof",
    img: "/certifications/udemy web.png", //  Replace this
  },
  {
    title: "IIT Kharagpur – Programming in Java",
    subtitle: "NPTEL Certification",
    description:
      "Focused on core and advanced Java: OOP concepts, exception handling, GUI programming, file handling, and JDBC. Reinforced by graded assignments and proctored exams by IIT Kharagpur professors.",
    proofLink: "https://example.com/java-proof",
    img: "/certifications/nptel java.png", // Replace this
  },
];

export default function CertificationsPage() {
  return (
    <div className="px-6 py-12 lg:px-20 space-y-10">
      <h1 className="text-4xl font-bold text-white text-center">Certifications</h1>
      <Separator className="bg-white/10" />

      <div className="space-y-10">
        {certifications.map((cert, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.3 }}
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
      </div>
    </div>
  );
}
