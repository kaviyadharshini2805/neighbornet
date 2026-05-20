"use client";

import { motion } from "framer-motion";
import { MapPin, AlertTriangle, Heart, Home, Users } from "lucide-react";

export function SmartMapPreview() {
  const markers = [
    { type: "emergency", count: 12, lat: 20, lng: 25 },
    { type: "medical", count: 8, lat: 45, lng: 35 },
    { type: "food", count: 15, lat: 30, lng: 60 },
    { type: "volunteer", count: 24, lat: 65, lng: 45 },
    { type: "shelter", count: 5, lat: 55, lng: 20 },
  ];

  const getMarkerColor = (type: string) => {
    switch (type) {
      case "emergency": return "bg-rose-500";
      case "medical": return "bg-red-500";
      case "food": return "bg-amber-500";
      case "volunteer": return "bg-emerald-500";
      case "shelter": return "bg-blue-500";
      default: return "bg-gray-500";
    }
  };

  const getMarkerIcon = (type: string) => {
    switch (type) {
      case "emergency": return AlertTriangle;
      case "medical": return Heart;
      case "food": return MapPin;
      case "volunteer": return Users;
      case "shelter": return Home;
      default: return MapPin;
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-medium mb-6">
            <MapPin className="w-4 h-4" />
            Smart Map
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Real-Time Community
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Intelligence Map
            </span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Interactive visualization of requests, volunteers, safe zones, and resource distribution
          </p>
        </motion.div>

        {/* Map Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Map Background */}
          <div className="relative h-[500px] bg-gradient-to-br from-gray-800 via-gray-900 to-gray-950 overflow-hidden">
            {/* Grid Lines */}
            <div className="absolute inset-0 opacity-20">
              <svg width="100%" height="100%">
                <defs>
                  <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                    <path d="M 50 0 L 0 0 0 50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-gray-600" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>

            {/* Heat Zones */}
            <div className="absolute top-1/4 left-1/3 w-48 h-48 bg-rose-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-1/2 right-1/4 w-40 h-40 bg-amber-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/3 left-1/2 w-56 h-56 bg-emerald-500/10 rounded-full blur-3xl animate-pulse" />

            {/* Markers */}
            {markers.map((marker, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="absolute"
                style={{ top: `${marker.lat}%`, left: `${marker.lng}%` }}
              >
                <div className={`${getMarkerColor(marker.type)} w-10 h-10 rounded-full flex items-center justify-center shadow-lg transform -translate-x-1/2 -translate-y-1/2 cursor-pointer hover:scale-110 transition-transform`}>
                  {(() => {
                    const Icon = getMarkerIcon(marker.type);
                    return <Icon className="w-5 h-5 text-white" />;
                  })()}
                </div>
                <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-gray-900 px-2 py-1 rounded text-xs text-white font-medium">
                  {marker.count} {marker.type}
                </div>
              </motion.div>
            ))}

            {/* Map Legend */}
            <div className="absolute top-4 left-4 bg-gray-900/90 backdrop-blur-xl border border-gray-800 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-white mb-3">Legend</h4>
              <div className="space-y-2">
                {[
                  { color: "bg-rose-500", label: "Emergency" },
                  { color: "bg-red-500", label: "Medical" },
                  { color: "bg-amber-500", label: "Food" },
                  { color: "bg-emerald-500", label: "Volunteers" },
                  { color: "bg-blue-500", label: "Shelter" },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2">
                    <div className={`w-3 h-3 ${item.color} rounded-full`} />
                    <span className="text-xs text-gray-300">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats Overlay */}
            <div className="absolute top-4 right-4 bg-gray-900/90 backdrop-blur-xl border border-gray-800 rounded-xl p-4">
              <h4 className="text-sm font-semibold text-white mb-3">Live Stats</h4>
              <div className="space-y-2">
                <div className="flex justify-between gap-4">
                  <span className="text-xs text-gray-400">Active Requests</span>
                  <span className="text-xs text-rose-400 font-medium">47</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-xs text-gray-400">Volunteers Nearby</span>
                  <span className="text-xs text-emerald-400 font-medium">128</span>
                </div>
                <div className="flex justify-between gap-4">
                  <span className="text-xs text-gray-400">Resolved Today</span>
                  <span className="text-xs text-blue-400 font-medium">23</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Map Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {[
            { title: "Dynamic Filters", desc: "Filter by category, urgency, distance" },
            { title: "Live Updates", desc: "Real-time marker updates via Socket.IO" },
            { title: "Safe Zones", desc: "Visualize shelters and evacuation routes" },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-gray-900/30 border border-gray-800 rounded-2xl p-6 text-center hover:border-blue-500/50 transition-all duration-300"
            >
              <h4 className="text-lg font-semibold text-white mb-2">{feature.title}</h4>
              <p className="text-sm text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
