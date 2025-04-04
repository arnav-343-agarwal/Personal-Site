'use client';

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen px-6 py-12 lg:px-24 bg-black text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto bg-white/5 rounded-xl shadow-lg p-8 space-y-8 backdrop-blur-md border border-white/10"
      >
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="text-gray-300">Let’s create something amazing together ✨</p>
        </div>

        <Separator className="bg-white/10" />

        <form className="space-y-6">
          <div>
            <label className="text-sm font-semibold text-gray-300 mb-1 block">Your Name</label>
            <Input placeholder="John Doe" className="bg-black/20 text-white placeholder:text-gray-400" />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-300 mb-1 block">Email</label>
            <Input type="email" placeholder="johndoe@email.com" className="bg-black/20 text-white placeholder:text-gray-400" />
          </div>
          <div>
            <label className="text-sm font-semibold text-gray-300 mb-1 block">Message</label>
            <Textarea placeholder="Your message here..." className="bg-black/20 text-white placeholder:text-gray-400" />
          </div>
          <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:brightness-110">
            Send Message
          </Button>
        </form>

        <Separator className="bg-white/10" />

        <div className="flex justify-center gap-6">
          <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer">
            <FaGithub className="text-2xl hover:text-gray-400 transition" />
          </a>
          <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-400 transition" />
          </a>
          <a href="mailto:your@email.com">
            <FaEnvelope className="text-2xl hover:text-red-400 transition" />
          </a>
        </div>
      </motion.div>
    </div>
  );
}
