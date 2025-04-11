'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "Carpooling System",
    desc: "A real-time ride-sharing web app allowing users to offer or request carpooling with OTP-based ride confirmation and robust auth.",
    image: "/projects/Carpool Image.png",
    live: "https://carpool-theta.vercel.app/",
    github: "https://github.com/arnav-343-agarwal/Carpool.git",
    stack: ["Next.js", "MongoDB", "Tailwind", "JWT","Leaflet"]
  },
  {
    title: "MyCamp",
    desc: "A campsite booking platform with user reviews, image uploads, and full CRUD operations built using modern web dev stack.",
    image: "/projects/Camp Image.jpg",
    live: "https://arnavcamps.onrender.com/",
    github: "https://github.com/arnav-343-agarwal/MyCamp-Complete.git",
    stack: ["Express.js", "MongoDB", "Cloudinary", "Mapbox", "Node.js"]
  },
  {
    title: "Turbo Search",
    desc: "A lightning-fast search engine project leveraging efficient indexing algorithms for instant search response.",
    image: "/projects/Turbo Seacrh Image.png",
    live: "https://turbo-search-7b7hd9d4o-arnav-agarwals-projects-abdc176f.vercel.app/",
    github: "https://github.com/yourusername/turbo-search",
    stack: ["Cloudflare Workers", "Redis", "Hono", "Next.js"]
  },
  {
    title: "Link-Lite",
    desc: "Custom URL shortener with analytics, easy copy/delete functionality, and a minimal interface. Built with performance in mind.",
    image: "/projects/Link Lite Image.jpg",
    live: "https://github.com/arnav-343-agarwal/Link-Lite.git",
    github: "https://github.com/arnav-343-agarwal/Link-Lite.git",
    stack: ["React.js", "TailwindCSS", "Express.js", "Hooks"]
  },
  {
    title: "2FA System",
    desc: "Secure Two-Factor Authentication system with Time based OTP & session management for login verification.",
    image: "/projects/Two Fa Image.jpg",
    live: "https://github.com/arnav-343-agarwal/Two-FA-system.git",
    github: "https://github.com/arnav-343-agarwal/Two-FA-system.git",
    stack: ["Express.js", "Passport", "Context Management", "JWT"]
  }
];

// Animation for cards
const cardVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: (i) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      type: 'spring',
      stiffness: 70
    }
  })
};

export default function ProjectsPage() {
  return (
    <motion.div
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      transition={{ duration: 1 }}
      className="max-w-5xl mx-auto px-6 py-16"
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="text-4xl font-bold mb-12 text-center text-purple-500"
      >
        My Projects
      </motion.h1>

      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            custom={idx}
            initial="hidden"
            animate="visible"
            variants={cardVariants}
          >
            <Card className="bg-neutral-950 border border-neutral-800 hover:shadow-purple-700/30 hover:scale-[1.02] transition-all duration-300">
              <CardHeader>
                <Image
                  src={proj.image}
                  alt={proj.title}
                  width={600}
                  height={300}
                  className="rounded-lg mb-4 object-cover h-56 w-full"
                />
                <CardTitle className="text-white text-xl mb-2">{proj.title}</CardTitle>
                <CardDescription className="text-gray-400">{proj.desc}</CardDescription>
              </CardHeader>
              <CardContent className="mt-2 mb-4 flex flex-wrap gap-2">
                {proj.stack.map((tech, i) => (
                  <Badge key={i} variant="outline" className="border-purple-500 text-purple-400">
                    {tech}
                  </Badge>
                ))}
              </CardContent>
              <CardFooter className="flex justify-between mt-2">
                <Button variant="outline" asChild className="text-purple-500 border-purple-600 hover:bg-purple-900">
                  <Link href={proj.live} target="_blank">Live Demo</Link>
                </Button>
                <Button variant="outline" asChild className="text-purple-500 border-purple-600 hover:bg-purple-900">
                  <Link href={proj.github} target="_blank">GitHub</Link>
                </Button>
              </CardFooter>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
