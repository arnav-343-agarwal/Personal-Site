'use client';
import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { HiOutlineUser, HiOutlineCpuChip } from 'react-icons/hi2';

export default function ChatBot() {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef(null);

  useEffect(() => {
    setChat([
      {
        type: 'bot',
        text: "Hey there! I'm ArnavBot. Ask anything about my journey, skills or projects.",
      },
    ]);
  }, []);

  useEffect(() => {
    // Prevent scrolling on initial load
    if (chat.length > 1 || isTyping) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chat, isTyping]);
  

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { type: 'user', text: input };
    setChat((prev) => [...prev, userMsg]);
    setInput('');
    setIsTyping(true);

    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        body: JSON.stringify({ message: input }),
      });

      const data = await res.json();
      const botMsg = { type: 'bot', text: data.reply };
      setChat((prev) => [...prev, botMsg]);
    } catch (err) {
      setChat((prev) => [
        ...prev,
        { type: 'bot', text: 'Oops! Something went wrong. Try again later.' },
      ]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-20 p-6 bg-[#111111] rounded-lg shadow-xl border border-purple-800">
      <h3 className="text-2xl font-semibold mb-4 text-white flex items-center gap-2">
        <HiOutlineCpuChip className="text-purple-500 text-3xl" />
        Arnav ChatBot
      </h3>

      <div className="space-y-3 max-h-64 overflow-y-auto bg-neutral-900 p-4 rounded-md custom-scrollbar">
        {chat.map((msg, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`flex items-start gap-3 ${
              msg.type === 'user' ? 'justify-end' : 'justify-start'
            }`}
          >
            {msg.type === 'bot' && (
              <HiOutlineCpuChip className="text-purple-400 text-xl mt-1" />
            )}

            <div
              className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
                msg.type === 'user'
                  ? 'bg-purple-600 text-white'
                  : 'bg-neutral-800 text-purple-300'
              }`}
            >
              {msg.text}
            </div>

            {msg.type === 'user' && (
              <HiOutlineUser className="text-white text-xl mt-1" />
            )}
          </motion.div>
        ))}

        {isTyping && (
          <div className="flex items-center gap-2 text-purple-400 text-sm">
            <HiOutlineCpuChip className="text-xl" />
            <TypingDots />
          </div>
        )}

        <div ref={chatEndRef} />
      </div>

      <div className="flex mt-4">
        <input
          type="text"
          className="flex-1 p-2 rounded-l bg-neutral-800 text-white border border-neutral-700 focus:outline-none"
          placeholder="Ask something about Arnav..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && sendMessage()}
        />
        <button
          className="bg-purple-600 px-4 py-2 rounded-r text-white hover:bg-purple-700 transition"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

const TypingDots = () => (
  <div className="flex space-x-1">
    <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:0s]"></span>
    <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:0.1s]"></span>
    <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
  </div>
);
