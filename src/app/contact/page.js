'use client';

import { useState } from 'react';
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

    emailjs.send(serviceId, templateId, formData, userId)
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
    <div className="min-h-screen px-6 py-12 lg:px-24 bg-black text-white">
      <div className="max-w-2xl mx-auto space-y-12">
        {/* Social Links Section */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-center">Contact Me</h1>
          <div className="flex flex-col items-center space-y-4">
            <a href="https://www.linkedin.com/in/your-linkedin-profile" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <FaLinkedin className="text-blue-500 text-2xl" />
              <span>LinkedIn: your-linkedin-profile</span>
            </a>
            <a href="mailto:your-email@gmail.com" className="flex items-center space-x-2">
              <FaEnvelope className="text-red-500 text-2xl" />
              <span>Email: your-email@gmail.com</span>
            </a>
            <a href="https://www.instagram.com/your-instagram-handle" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2">
              <FaInstagram className="text-pink-500 text-2xl" />
              <span>Instagram: @your-instagram-handle</span>
            </a>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="bg-white/5 p-8 rounded-xl shadow-lg backdrop-blur-md border border-white/10">
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
            <Button type="submit" className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:brightness-110">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}
