"use client";

import { motion } from "framer-motion";
import { Heart, Users, TrendingUp, MapPin, ArrowRight, Zap } from "lucide-react";
import Image from "next/image";

const donationPoolImage = "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/21806/images/1779276043330-donation-pool";

export function CommunityDonations() {
  const pools = [
    { name: "Food Relief Fund", amount: "$12,450", donors: 234, recipients: 89, trend: "+18%" },
    { name: "Medical Supplies", amount: "$8,200", donors: 156, recipients: 42, trend: "+12%" },
    { name: "Elderly Care", amount: "$15,800", donors: 312, recipients: 67, trend: "+24%" },
    { name: "Emergency Housing", amount: "$22,100", donors: 178, recipients: 23, trend: "+31%" },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-950 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-rose-500/10 border border-rose-500/30 text-rose-400 text-sm font-medium mb-6">
              <Heart className="w-4 h-4" />
              Community Pool
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Collective Impact,
              <span className="block bg-gradient-to-r from-rose-400 to-orange-400 bg-clip-text text-transparent">
                Shared Relief
              </span>
            </h2>
            <p className="text-xl text-gray-400 mb-8">
              Transform individual donations into community-level shared support. AI clusters similar needs and redistributes resources fairly across neighborhoods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-3 bg-gradient-to-r from-rose-500 to-orange-500 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-rose-500/25 transition-all duration-300 flex items-center justify-center gap-2">
                <Zap className="w-5 h-5" />
                Contribute Now
              </button>
              <button className="px-6 py-3 bg-gray-800/50 text-white font-semibold rounded-xl border border-gray-700 hover:border-gray-600 transition-all duration-300 flex items-center justify-center gap-2">
                View Pool
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-rose-500/20 to-orange-500/20 rounded-3xl blur-3xl" />
            <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
              <Image
                src={donationPoolImage}
                alt="Community Donation Pool"
                width={600}
                height={400}
                className="w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-gray-900 border border-gray-800 rounded-2xl p-4 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-rose-500/20 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-rose-400" />
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">2,847</div>
                  <div className="text-sm text-gray-400">Active Contributors</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Donation Pools */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pools.map((pool, index) => (
            <motion.div
              key={pool.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group bg-gray-900/50 backdrop-blur-xl border border-gray-800 rounded-2xl p-6 hover:border-rose-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-rose-500/10"
            >
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-1">{pool.name}</h3>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <MapPin className="w-4 h-4" />
                    Adyar, Chennai
                  </div>
                </div>
                <div className="flex items-center gap-1 px-3 py-1 bg-emerald-500/20 rounded-full text-emerald-400 text-sm font-medium">
                  <TrendingUp className="w-4 h-4" />
                  {pool.trend}
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-4">{pool.amount}</div>
              <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                <div className="text-center">
                  <div className="text-lg font-semibold text-rose-400">{pool.donors}</div>
                  <div className="text-xs text-gray-500">Donors</div>
                </div>
                <div className="h-8 w-px bg-gray-800" />
                <div className="text-center">
                  <div className="text-lg font-semibold text-emerald-400">{pool.recipients}</div>
                  <div className="text-xs text-gray-500">Recipients</div>
                </div>
                <button className="ml-auto px-4 py-2 bg-rose-500/20 text-rose-400 font-medium rounded-lg hover:bg-rose-500/30 transition-colors">
                  Donate
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
