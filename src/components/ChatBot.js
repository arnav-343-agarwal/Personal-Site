'use client';
import { useState } from 'react';

export default function ChatBot() {
  const [input, setInput] = useState('');
  const [chat, setChat] = useState([]);

  const sendMessage = async () => {
    if (!input.trim()) return;

    const userMsg = { type: 'user', text: input };
    setChat([...chat, userMsg]);
    setInput('');

    const res = await fetch('/api/chat', {
      method: 'POST',
      body: JSON.stringify({ message: input }),
    });

    const data = await res.json();
    const botMsg = { type: 'bot', text: data.reply };
    setChat((prev) => [...prev, botMsg]);
  };

  return (
    <div className="max-w-4xl mx-auto mt-20 p-6 bg-neutral-900 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold mb-4 text-purple-500">🤖 Ask Me Anything!</h3>
      <div className="space-y-2 max-h-60 overflow-y-auto bg-black p-4 rounded">
        {chat.map((msg, idx) => (
          <div
            key={idx}
            className={`text-sm p-2 rounded ${
              msg.type === 'user' ? 'text-right text-white' : 'text-left text-purple-400'
            }`}
          >
            <span>{msg.text}</span>
          </div>
        ))}
      </div>
      <div className="flex mt-4">
        <input
          type="text"
          className="flex-1 p-2 rounded-l bg-neutral-800 text-white border border-neutral-700 focus:outline-none"
          placeholder="Ask something about Arnav..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          className="bg-purple-600 px-4 py-2 rounded-r text-white hover:bg-purple-700"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}
