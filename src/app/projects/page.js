'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const projects = [
  {
    title: "Carpooling System",
    desc: "A real-time ride-sharing web app allowing users to offer or request carpooling with OTP-based ride confirmation and robust auth.",
    image: "/projects/Carpool Image.png",
    live: "https://carpooling-demo.vercel.app",
    github: "https://github.com/yourusername/carpooling-system",
    stack: ["Node.js", "MongoDB", "EJS", "Bootstrap", "JWT"]
  },
  {
    title: "MyCamp",
    desc: "A campsite booking platform with user reviews, image uploads, and full CRUD operations built using modern web dev stack.",
    image: "/projects/Camp Image.jpg",
    live: "https://mycamp.vercel.app",
    github: "https://github.com/yourusername/mycamp",
    stack: ["Express.js", "MongoDB", "Cloudinary", "Mapbox", "Bootstrap"]
  },
  {
    title: "Link-Lite",
    desc: "Custom URL shortener with analytics, QR code generation, and a minimal interface. Built with performance in mind.",
    image: "/projects/Link Lite Image.jpg",
    live: "https://linklite.vercel.app",
    github: "https://github.com/yourusername/link-lite",
    stack: ["Next.js", "Tailwind", "MongoDB", "QRCode"]
  },
  {
    title: "Turbo Search",
    desc: "A lightning-fast search engine project leveraging efficient indexing algorithms for instant search response.",
    image: "/projects/Turbo Seacrh Image.png",
    live: "https://turbosearch.vercel.app",
    github: "https://github.com/yourusername/turbo-search",
    stack: ["React", "Node.js", "Express", "Search Algorithms"]
  },
  {
    title: "2FA System",
    desc: "Secure Two-Factor Authentication system with email OTP & session management for login verification.",
    image: "/projects/Two Fa Image.jpg",
    live: "https://2fa-demo.vercel.app",
    github: "https://github.com/yourusername/two-factor-auth",
    stack: ["Express.js", "Nodemailer", "MongoDB", "JWT"]
  }
];

export default function ProjectsPage() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-12 text-center text-purple-500">My Projects</h1>
      <div className="grid gap-12 sm:grid-cols-1 md:grid-cols-2">
        {projects.map((proj, idx) => (
          <Card
            key={idx}
            className="bg-neutral-950 border border-neutral-800 hover:shadow-purple-700/30 hover:scale-[1.02] transition-all duration-300"
          >
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
        ))}
      </div>
    </div>
  );
}
