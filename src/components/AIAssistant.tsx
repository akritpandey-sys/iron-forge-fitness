import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, Send, X, Bot, Sparkles, Loader2 } from "lucide-react";
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

interface Message {
  role: "user" | "bot";
  content: string;
}

export default function AIAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "bot",
      content: "Welcome to Iron Forge intelligence. I am your AI performance coach. How can I assist your evolution today?",
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput("");
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setIsLoading(true);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: userMessage,
        config: {
          systemInstruction: "You are the Iron Forge AI coach. You are professional, motivating, and elite. Your advice is focused on high-performance training, science-based nutrition, and disciplined recovery. Keep responses concise and impactful.",
        },
      });

      const botMessage = response.text || "I was unable to process that. Focus on the iron and try again.";
      setMessages((prev) => [...prev, { role: "bot", content: botMessage }]);
    } catch (error) {
      console.error("AI Assistant Error:", error);
      setMessages((prev) => [...prev, { role: "bot", content: "Communication line disrupted. Re-calibrate and try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[60]">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 flex h-[500px] w-[350px] flex-col overflow-hidden rounded-3xl border border-white/10 bg-dark-card shadow-2xl md:w-[400px]"
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-white/5 bg-brand-red p-4">
              <div className="flex items-center gap-2 text-white">
                <Bot size={20} />
                <span className="font-display text-sm font-bold tracking-widest uppercase">Forge Intelligence</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="rounded-full p-1 text-white/80 hover:bg-white/20 hover:text-white"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-hide"
            >
              {messages.map((m, i) => (
                <div 
                  key={i}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                    m.role === "user" 
                      ? "bg-brand-red text-white" 
                      : "bg-white/5 text-white/80 border border-white/5"
                  }`}>
                    {m.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="flex items-center gap-2 rounded-2xl bg-white/5 px-4 py-3 text-sm text-white/40 border border-white/5">
                    <Loader2 size={16} className="animate-spin text-brand-red" />
                    Analyzing performance data...
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-white/5">
              <div className="relative">
                <input 
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && handleSend()}
                  placeholder="Ask about training, diet..."
                  className="w-full rounded-xl bg-white/5 border border-white/10 py-3 pl-4 pr-12 text-sm text-white placeholder:text-white/20 focus:border-brand-red focus:outline-none transition-all"
                />
                <button 
                  onClick={handleSend}
                  disabled={isLoading}
                  className="absolute right-2 top-1.5 rounded-lg p-2 text-brand-red hover:bg-brand-red/10 disabled:opacity-50"
                >
                  <Send size={18} />
                </button>
              </div>
              <div className="mt-3 flex items-center gap-1.5 text-[10px] text-white/30 tracking-widest uppercase">
                <Sparkles size={10} className="text-brand-red" />
                Powered by Forge AI
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.1, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(!isOpen)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-red text-white shadow-lg shadow-brand-red/40"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
}
