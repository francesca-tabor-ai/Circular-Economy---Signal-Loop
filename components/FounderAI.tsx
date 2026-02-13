
import React, { useState, useRef, useEffect } from 'react';
import { getFounderResponseStream } from '../services/geminiService';
import { ChatMessage, ViewType } from '../types';
import { FOUNDER_IMAGE } from '../constants';

interface FounderAIProps {
  onClose?: () => void;
  currentView: ViewType;
}

const STARTER_PROBES: Record<ViewType, string[]> = {
  [ViewType.CREATOR_DASHBOARD]: [
    "How can I stabilize my monthly revenue?",
    "What are circular revenue loops?",
    "Explain the Stability Score."
  ],
  [ViewType.FAN_EXPERIENCE]: [
    "How does the status ladder work?",
    "What is identity membership?",
    "Why join an experience drop?"
  ],
  [ViewType.MARKETPLACE]: [
    "How do secondary royalties work?",
    "What determines resale value?",
    "How do I trade assets safely?"
  ],
  [ViewType.STRATEGY_AI]: [
    "Design a membership structure.",
    "Help me price my next drop.",
    "Identify my audience churn risks."
  ],
  [ViewType.ABOUT]: [
    "Why did you build SignalLoop, Adrian?",
    "Tell me about your systems background.",
    "What's the future of culture economics?"
  ]
};

const FounderAI: React.FC<FounderAIProps> = ({ onClose, currentView }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    { 
      role: 'model', 
      text: "I'm Adrian Kovač, founder of SignalLoop. My background is in systems reliability—I view creator economies as complex systems that need predictable memory. How can I help you architect a more stable lifecycle for your community today?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (textOverride?: string) => {
    const textToSend = textOverride || input;
    if (!textToSend.trim() || isLoading) return;

    const userMessage: ChatMessage = { role: 'user', text: textToSend };
    setMessages(prev => [...prev, userMessage]);
    if (!textOverride) setInput('');
    setIsLoading(true);

    try {
      const history = messages.map(m => ({
        role: m.role,
        parts: [{ text: m.text }]
      }));
      history.push({ role: 'user', parts: [{ text: textToSend }] });

      const stream = await getFounderResponseStream(history);
      let fullText = '';
      
      setMessages(prev => [...prev, { role: 'model', text: '' }]);

      for await (const chunk of stream) {
        fullText += chunk.text;
        setMessages(prev => {
          const newMessages = [...prev];
          newMessages[newMessages.length - 1].text = fullText;
          return newMessages;
        });
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm having trouble connecting to my strategy modules. Let's try again in a moment." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const probes = STARTER_PROBES[currentView] || STARTER_PROBES[ViewType.ABOUT];

  return (
    <div className="flex flex-col h-full bg-white font-sans">
      {/* Widget Header */}
      <div className="p-6 border-b border-gray-100 flex items-center justify-between glass shrink-0">
        <div className="flex items-center gap-3">
          <img src={FOUNDER_IMAGE} alt="Adrian" className="w-10 h-10 rounded-full object-cover shadow-sm ring-2 ring-gray-100" />
          <div>
            <h3 className="text-sm font-heading font-bold text-gray-950 leading-tight">Adrian Kovač</h3>
            <p className="text-[10px] text-emerald-500 font-bold uppercase tracking-widest">Founder & CEO • Online</p>
          </div>
        </div>
        {onClose && (
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-900 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        )}
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-gray-50/20" ref={scrollRef}>
        {messages.map((m, i) => (
          <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[90%] p-4 rounded-2xl text-xs leading-relaxed ${
              m.role === 'user' 
              ? 'bg-gray-950 text-white rounded-tr-none shadow-md' 
              : 'bg-white border border-gray-100 card-shadow text-gray-800 rounded-tl-none'
            }`}>
              <p className="whitespace-pre-wrap">{m.text}</p>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-white border border-gray-100 p-3 rounded-2xl flex gap-1 animate-pulse">
              <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
              <div className="w-1.5 h-1.5 rounded-full bg-gray-200"></div>
            </div>
          </div>
        )}
      </div>

      {/* Input & Starter Probes */}
      <div className="p-4 border-t border-gray-100 bg-white shrink-0">
        <div className="flex flex-wrap gap-2 mb-4">
          {probes.map((probe, i) => (
            <button
              key={i}
              onClick={() => handleSend(probe)}
              disabled={isLoading}
              className="text-[10px] font-bold text-gray-500 hover:text-gray-950 hover:bg-gray-50 border border-gray-100 rounded-full px-3 py-1.5 transition-all text-left max-w-full truncate whitespace-nowrap"
            >
              {probe}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-2 bg-gray-50 rounded-2xl p-1 px-3 border border-gray-100 focus-within:border-gray-200 transition-colors">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask Adrian about systems..."
            className="flex-1 bg-transparent border-none py-3 text-xs outline-none font-medium text-gray-700"
          />
          <button
            onClick={() => handleSend()}
            disabled={isLoading || !input.trim()}
            className="p-2 bg-gray-950 text-white rounded-xl hover:bg-gray-800 transition-all disabled:opacity-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
        <p className="text-[8px] text-center text-gray-400 mt-3 uppercase tracking-widest font-bold">
          Founder Intelligence Layer • SignalLoop
        </p>
      </div>
    </div>
  );
};

export default FounderAI;
