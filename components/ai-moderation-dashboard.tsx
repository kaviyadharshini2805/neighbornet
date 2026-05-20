"use client";

import { motion } from "framer-motion";
import { Shield, AlertTriangle, CheckCircle, XCircle, Brain, Activity } from "lucide-react";

export function AIModerationDashboard() {
  const alerts = [
    { type: "suspicious", message: "Unusual request frequency detected", score: 92, time: "2 min ago" },
    { type: "verified", message: "Post verified as legitimate emergency", score: 8, time: "5 min ago" },
    { type: "warning", message: "Potential price gouging language", score: 78, time: "12 min ago" },
    { type: "safe", message: "Community post approved", score: 3, time: "15 min ago" },
  ];

  const stats = [
    { label: "Posts Analyzed", value: "12,847", change: "+847 today", icon: Activity },
    { label: "Threats Blocked", value: "234", change: "+12 this week", icon: Shield },
    { label: "Trust Score", value: "94.2%", change: "+2.1% improvement", icon: CheckCircle },
    { label: "False Positives", value: "1.8%", change: "-0.4% reduction", icon: Brain },
  ];

  const getStatusColor = (score: number) => {
    if (score < 30) return "text-emerald-400";
    if (score < 70) return "text-amber-400";
    return "text-red-400";
  };

  const getStatusBg = (score: number) => {
    if (score < 30) return "bg-emerald-500/20";
    if (score < 70) return "bg-amber-500/20";
    return "bg-red-500/20";
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-sm font-medium mb-6">
            <Shield className="w-4 h-4" />
            AI Safety Engine
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Trust & Safety
            <span className="block bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Powered by AI
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Real-time moderation, fraud detection, and community safety scoring
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-orange-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 hover:border-red-500/50 transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <stat.icon className="w-8 h-8 text-red-400" />
                  <span className="text-xs text-emerald-400 font-medium">{stat.change}</span>
                </div>
                <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Live Alerts */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-6"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse" />
            <h3 className="text-xl font-semibold text-white">Live Moderation Feed</h3>
          </div>
          <div className="space-y-4">
            {alerts.map((alert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl border border-gray-700/50"
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 rounded-lg ${getStatusBg(alert.score)}`}>
                    {alert.score > 70 ? (
                      <XCircle className={`w-5 h-5 ${getStatusColor(alert.score)}`} />
                    ) : alert.score > 30 ? (
                      <AlertTriangle className={`w-5 h-5 ${getStatusColor(alert.score)}`} />
                    ) : (
                      <CheckCircle className={`w-5 h-5 ${getStatusColor(alert.score)}`} />
                    )}
                  </div>
                  <div>
                    <p className="text-white font-medium">{alert.message}</p>
                    <p className="text-sm text-gray-500">{alert.time}</p>
                  </div>
                </div>
                <div className={`text-sm font-bold ${getStatusColor(alert.score)}`}>
                  {alert.score}% risk
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Detection Capabilities */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { title: "Spam Detection", desc: "Identifies repetitive requests and suspicious patterns", color: "from-red-500 to-orange-500" },
            { title: "Sentiment Analysis", desc: "Detects manipulative language and emotional exploitation", color: "from-amber-500 to-yellow-500" },
            { title: "Behavior Tracking", desc: "Monitors user history for trust scoring", color: "from-emerald-500 to-teal-500" },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 hover:border-gray-700 transition-all duration-300"
            >
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.color} flex items-center justify-center mb-4`}>
                <Brain className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">{item.title}</h4>
              <p className="text-gray-400 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
