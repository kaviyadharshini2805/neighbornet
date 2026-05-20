"use client";

import { motion } from "framer-motion";
import { Mic, Sparkles, MessageSquare, Image, Tag } from "lucide-react";

export function VoiceAIFeature() {
  const features = [
    { icon: Mic, title: "Voice to Post", desc: "Speak naturally, AI transcribes and categorizes" },
    { icon: Sparkles, title: "AI Categorization", desc: "Auto-detects urgency, intent, and tags" },
    { icon: Image, title: "Contextual Images", desc: "AI generates relevant imagery for posts" },
    { icon: MessageSquare, title: "Smart Summaries", desc: "Concise, clear request summaries" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-teal-500/5 via-transparent to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-sm font-medium mb-6">
            <Mic className="w-4 h-4" />
            Voice AI
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Speak Your Request,
            <span className="block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              AI Handles the Rest
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            No typing required. Just speak naturally and our AI transforms your words into structured, categorized posts.
          </p>
        </motion.div>

        {/* Demo Interface */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 shadow-2xl">
            {/* Recording Interface */}
            <div className="flex flex-col items-center mb-8">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="w-24 h-24 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center mb-6 cursor-pointer hover:shadow-lg hover:shadow-teal-500/30 transition-shadow"
              >
                <Mic className="w-10 h-10 text-white" />
              </motion.div>
              <p className="text-gray-400 mb-2">Tap to start speaking</p>
              <p className="text-sm text-gray-500">"My grandmother urgently needs medicine..."</p>
            </div>

            {/* AI Processing */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl">
                <div className="w-10 h-10 bg-teal-500/20 rounded-lg flex items-center justify-center">
                  <Tag className="w-5 h-5 text-teal-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-sm text-gray-400">Category:</span>
                    <span className="px-3 py-1 bg-teal-500/20 text-teal-400 text-sm font-medium rounded-full">Medical</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-gray-400">Urgency:</span>
                    <span className="px-3 py-1 bg-rose-500/20 text-rose-400 text-sm font-medium rounded-full">High</span>
                  </div>
                </div>
                <div className="text-xs text-emerald-400 font-medium">Auto-detected</div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl">
                <div className="w-10 h-10 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-purple-400" />
                </div>
                <div className="flex-1">
                  <div className="text-sm text-gray-400 mb-1">AI Generated Tags:</div>
                  <div className="flex flex-wrap gap-2">
                    {["elderly-care", "medicine-delivery", "urgent", "home-care"].map((tag) => (
                      <span key={tag} className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs font-medium rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/30 border border-gray-800 rounded-2xl p-6 text-center hover:border-teal-500/50 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-teal-500/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-7 h-7 text-teal-400" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
