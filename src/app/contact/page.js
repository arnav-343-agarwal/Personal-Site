'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import emailjs from 'emailjs-com';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = 'your_service_id';
    const templateId = 'your_template_id';
    const userId = 'your_user_id';

    emailjs
      .send(serviceId, templateId, formData, userId)
      .then((response) => {
        console.log('Message sent successfully:', response);
        alert('Your message has been sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      })
      .catch((error) => {
        console.error('Error sending message:', error);
        alert('Failed to send the message. Please try again later.');
      });
  };

  return (
    <motion.div
      className="min-h-screen px-6 py-12 lg:px-24 bg-black text-white"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-2xl mx-auto space-y-12">
        {/* Intro Section */}
        <motion.div
          className="space-y-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h1 className="text-4xl font-bold">Contact Me</h1>
          <p className="text-gray-400">
            I'm always open to connect, collaborate, and explore new ideas.
            Whether it's for work, mentorship, or just a chat—feel free to reach out!
          </p>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6"
          initial="hidden"
          animate="visible"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
        >
          {[
            {
              icon: FaLinkedin,
              color: 'text-blue-500',
              label: 'LinkedIn',
              link: 'https://www.linkedin.com/in/arnav-agarwal-b6334a247/',
              handle: 'arnav-agarwal-b6334a247',
            },
            {
              icon: FaEnvelope,
              color: 'text-red-500',
              label: 'Email',
              link: 'mailto:agarwalarnav2003@gmail.com',
              handle: 'agarwalarnav2003@gmail.com',
            },
            {
              icon: FaInstagram,
              color: 'text-pink-500',
              label: 'Instagram',
              link: 'https://www.instagram.com/arnav343agarwal/',
              handle: 'arnav343agarwal',
            },
          ].map((item, idx) => (
            <motion.a
              key={idx}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 bg-white/5 rounded-lg shadow-md hover:bg-white/10 transition-all border border-white/10 space-y-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              <item.icon className={`${item.color} text-3xl`} />
              <div className="text-center text-sm">{item.handle}</div>
            </motion.a>
          ))}
        </motion.div>

        {/* Contact Form */}
        <motion.div
          className="bg-white/5 p-8 rounded-xl shadow-lg backdrop-blur-md border border-white/10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-semibold mb-6 text-center">Send a Message</h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="text-sm font-semibold text-gray-300 mb-1 block">Your Name</label>
              <Input
                type="text"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
                className="bg-black/20 text-white placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-300 mb-1 block">Email</label>
              <Input
                type="email"
                name="email"
                placeholder="johndoe@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="bg-black/20 text-white placeholder:text-gray-400"
              />
            </div>
            <div>
              <label className="text-sm font-semibold text-gray-300 mb-1 block">Message</label>
              <Textarea
                name="message"
                placeholder="Your message here..."
                value={formData.message}
                onChange={handleChange}
                required
                className="bg-black/20 text-white placeholder:text-gray-400"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:brightness-110"
            >
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
}
