"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Heart,
  Users,
  TrendingUp,
  MapPin,
  ArrowRight,
  Droplet,
  Home,
  Pizza,
  Pill,
  Phone,
  ChevronRight,
  Target,
  Shield
} from "lucide-react";
import { useState } from "react";

const donationPoolImage = "https://lrggyvioreorxttbasgi.supabase.co/storage/v1/object/public/app-assets/21806/images/1779276043330-donation-pool";

const categoryStats = [
  { icon: Pizza, label: "Food", amount: "$45,230", color: "text-orange-500", bg: "bg-orange-500/20", raised: 45230, goal: 60000 },
  { icon: Pill, label: "Medical", amount: "$32,150", color: "text-red-500", bg: "bg-red-500/20", raised: 32150, goal: 40000 },
  { icon: Home, label: "Shelter", amount: "$28,400", color: "text-blue-500", bg: "bg-blue-500/20", raised: 28400, goal: 35000 },
  { icon: Droplet, label: "Blood", units: "2,340", color: "text-purple-500", bg: "bg-purple-500/20", donors: 2340 },
];

const recentDonations = [
  { name: "Anonymous", amount: "$500", cause: "Flood Relief - Adyar", time: "2 min ago" },
  { name: "Priya M.", amount: "$1,200", cause: "Elderly Care Fund", time: "15 min ago" },
  { name: "TechCorp Inc.", amount: "$5,000", cause: "Community Kitchen", time: "32 min ago" },
  { name: "Rajesh K.", amount: "$250", cause: "Medical Emergency", time: "1 hour ago" },
  { name: "Anonymous", amount: "$100", cause: "Child Education", time: "2 hours ago" },
];

const impactStats = [
  { value: "$125,000+", label: "Total Raised" },
  { value: "1,200+", label: "Families Helped" },
  { value: "89%", label: "Distribution Rate" },
  { value: "48hrs", label: "Avg. Response Time" },
];

export default function DonationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("all");

  return (
    <main className="min-h-screen bg-gray-950">
      <Container className="py-24">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="bg-gradient-to-r from-rose-500/20 to-pink-500/20 text-rose-400 border-rose-500/30 px-4 py-2 mb-6">
            <Heart className="w-4 h-4 mr-2" />
            Community Donation Pool
          </Badge>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Transform Donations Into{" "}
            <span className="bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
              Collective Impact
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Your contributions pool with others to create meaningful, AI-optimized support for neighbors in need.
          </p>
        </div>

        {/* AI Distribution Engine */}
        <Card className="bg-gray-900/50 border-gray-800 mb-12">
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-500 flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <CardTitle className="text-xl text-white">AI Fair Distribution Engine</CardTitle>
                <p className="text-sm text-gray-400">Intelligent allocation based on need, proximity, and urgency</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <div className="text-2xl font-bold text-white mb-1">$125,000</div>
                <div className="text-sm text-gray-400">Total Pool</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <div className="text-2xl font-bold text-rose-400 mb-1">89%</div>
                <div className="text-sm text-gray-400">To Recipients</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <div className="text-2xl font-bold text-teal-400 mb-1">1,200+</div>
                <div className="text-sm text-gray-400">Families Supported</div>
              </div>
              <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700">
                <div className="text-2xl font-bold text-purple-400 mb-1">48hrs</div>
                <div className="text-sm text-gray-400">Avg Response</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Donation Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categoryStats.map((cat) => (
            <Card key={cat.label} className="bg-gray-900/50 border-gray-800 hover:border-gray-700 transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className={`w-12 h-12 rounded-xl ${cat.bg} flex items-center justify-center mb-4`}>
                  <cat.icon className={`w-6 h-6 ${cat.color}`} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{cat.label}</h3>
                {'amount' in cat ? (
                  <>
                    <div className="text-2xl font-bold text-white mb-3">{cat.amount}</div>
                    <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                      <div 
                        className={`h-full bg-gradient-to-r ${cat.color.replace('text-', 'from-')} to-rose-500 rounded-full`}
                        style={{ width: `${(cat.raised / cat.goal) * 100}%` }}
                      />
                    </div>
                    <div className="text-xs text-gray-400 mt-2">{Math.round((cat.raised / cat.goal) * 100)}% of ${cat.goal.toLocaleString()} goal</div>
                  </>
                ) : (
                  <>
                    <div className="text-2xl font-bold text-white mb-1">{cat.units}</div>
                    <div className="text-sm text-gray-400">{cat.donors} active donors</div>
                  </>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Donate CTA */}
          <Card className="bg-gradient-to-br from-gray-900 to-gray-800 border-gray-700 lg:col-span-2">
            <CardContent className="p-8">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Make a Donation</h3>
                  <p className="text-gray-400">100% of your donation goes directly to community support</p>
                </div>
                <Shield className="w-6 h-6 text-teal-400" />
              </div>
              
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                {["$25", "$50", "$100", "$250", "$500", "Other"].map((amount) => (
                  <button
                    key={amount}
                    onClick={() => setSelectedCategory(amount)}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      selectedCategory === amount
                        ? "border-teal-500 bg-teal-500/20 text-teal-400"
                        : "border-gray-700 bg-gray-800/50 text-gray-300 hover:border-gray-600"
                    }`}
                  >
                    <span className="text-lg font-semibold">{amount}</span>
                  </button>
                ))}
              </div>

              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2">Or enter custom amount</label>
                <input
                  type="number"
                  placeholder="Enter amount"
                  className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-teal-500"
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm text-gray-400 mb-2">Choose category</label>
                <select className="w-full px-4 py-3 rounded-xl bg-gray-800/50 border border-gray-700 text-white focus:outline-none focus:border-teal-500">
                  <option>General Fund</option>
                  <option>Food & Supplies</option>
                  <option>Medical Emergency</option>
                  <option>Elderly Care</option>
                  <option>Child Support</option>
                  <option>Disaster Relief</option>
                </select>
              </div>

              <Button className="w-full bg-gradient-to-r from-rose-500 to-pink-500 hover:opacity-90 text-white py-4 text-lg">
                <Heart className="w-5 h-5 mr-2" />
                Donate Now
              </Button>
            </CardContent>
          </Card>

          {/* Recent Donations */}
          <Card className="bg-gray-900/50 border-gray-800">
            <CardHeader>
              <CardTitle className="text-lg text-white flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-teal-400" />
                Live Feed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentDonations.map((donation, i) => (
                  <div key={i} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center">
                        <Users className="w-5 h-5 text-gray-400" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-white">{donation.name}</div>
                        <div className="text-xs text-gray-500">{donation.cause}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-semibold text-emerald-400">{donation.amount}</div>
                      <div className="text-xs text-gray-500">{donation.time}</div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Impact Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {impactStats.map((stat, i) => (
            <div key={i} className="text-center p-6 bg-gray-900/30 rounded-2xl border border-gray-800">
              <div className="text-3xl font-bold bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </main>
  );
}