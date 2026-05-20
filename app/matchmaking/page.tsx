"use client";

import { useState } from "react";
import { Container } from "@/components/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Brain,
  Sparkles,
  MapPin,
  Star,
  MessageSquare,
  Filter,
  Zap,
  ChevronRight,
  Mic,
  Upload,
  Tag,
  Clock,
  User,
  ArrowRight,
  Users
} from "lucide-react";

const categories = [
  { name: "Food", color: "bg-orange-500/20 text-orange-400", icon: "🍲" },
  { name: "Medical", color: "bg-red-500/20 text-red-400", icon: "💊" },
  { name: "Repairs", color: "bg-blue-500/20 text-blue-400", icon: "🔧" },
  { name: "Elderly Care", color: "bg-purple-500/20 text-purple-400", icon: "👵" },
  { name: "Shelter", color: "bg-green-500/20 text-green-400", icon: "🏠" },
  { name: "Childcare", color: "bg-pink-500/20 text-pink-400", icon: "👶" },
  { name: "Transportation", color: "bg-cyan-500/20 text-cyan-400", icon: "🚗" },
  { name: "Mental Support", color: "bg-indigo-500/20 text-indigo-400", icon: "💜" },
  { name: "Emergency", color: "bg-red-500/20 text-red-400", icon: "🚨" }
];

const sampleRequests = [
  {
    id: 1,
    text: "My sink is flooding badly and I don't know who to call",
    category: "Repairs",
    urgency: "high",
    location: "Anna Nagar",
    matches: 12,
    topMatch: {
      name: "Rajesh Kumar",
      skill: "Plumbing Expert",
      rating: 4.9,
      distance: "0.8 km",
      verified: true
    }
  },
  {
    id: 2,
    text: "Need groceries for elderly neighbor who can't go out",
    category: "Elderly Care",
    urgency: "medium",
    location: "Adyar",
    matches: 8,
    topMatch: {
      name: "Priya Sharma",
      skill: "Community Volunteer",
      rating: 4.8,
      distance: "0.3 km",
      verified: true
    }
  },
  {
    id: 3,
    text: "Looking for someone to help with blood donation",
    category: "Medical",
    urgency: "high",
    location: "Tambaram",
    matches: 24,
    topMatch: {
      name: "Arun Venkat",
      skill: "Blood Donor Network",
      rating: 5.0,
      distance: "1.2 km",
      verified: true
    }
  }
];

export default function MatchmakingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showVoiceInput, setShowVoiceInput] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      <Container>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 mb-4">
            <Brain className="w-4 h-4 text-teal-400" />
            <span className="text-sm text-teal-400">Semantic AI Matching</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI-Powered{" "}
            <span className="bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
              Semantic Matchmaking
            </span>
          </h1>
          <p className="text-xl text-gray-400">
            Describe your need naturally. Our AI understands intent and connects you with the right helpers.
          </p>
        </div>

        {/* Search Input */}
        <Card className="p-8 bg-white/[0.03] border-white/10 backdrop-blur-xl mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <Input
                placeholder="Describe your need naturally... (e.g., 'My grandmother needs medicine urgently')"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-14 bg-white/5 border-white/10 text-white placeholder:text-gray-500 text-lg"
              />
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => setShowVoiceInput(!showVoiceInput)}
                className={`h-14 px-6 ${showVoiceInput ? "bg-red-500 hover:bg-red-600" : "bg-white/10 hover:bg-white/20"} text-white`}
              >
                <Mic className="w-5 h-5 mr-2" />
                Voice
              </Button>
              <Button className="h-14 px-8 bg-gradient-to-r from-teal-500 to-cyan-500 hover:opacity-90 text-white">
                <Sparkles className="w-5 h-5 mr-2" />
                Find Matches
              </Button>
            </div>
          </div>
          
          {showVoiceInput && (
            <div className="mt-6 p-6 rounded-xl bg-gradient-to-r from-teal-500/10 to-cyan-500/10 border border-teal-500/20">
              <div className="flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-red-500/20 flex items-center justify-center animate-pulse">
                  <Mic className="w-10 h-10 text-red-400" />
                </div>
              </div>
              <p className="text-center text-gray-400 mt-4">Listening... Speak naturally</p>
              <p className="text-center text-sm text-gray-500 mt-2">
                "Try saying: 'My sink is flooding badly and I need help quickly'"
              </p>
            </div>
          )}

          {/* AI Analysis Preview */}
          <div className="mt-6 p-4 rounded-xl bg-white/[0.02] border border-white/5">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-4 h-4 text-teal-400" />
              <span className="text-sm text-teal-400 font-medium">AI Analysis</span>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div>
                <p className="text-xs text-gray-500 mb-1">Detected Category</p>
                <Badge className="bg-orange-500/20 text-orange-400">Repairs</Badge>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Urgency Level</p>
                <Badge className="bg-red-500/20 text-red-400">High</Badge>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Location</p>
                <span className="text-sm text-white">Anna Nagar</span>
              </div>
              <div>
                <p className="text-xs text-gray-500 mb-1">Suggested Radius</p>
                <span className="text-sm text-white">2 km</span>
              </div>
            </div>
          </div>
        </Card>

        {/* Categories */}
        <div className="mb-8">
          <h2 className="text-lg font-semibold text-white mb-4">Browse Categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => setSelectedCategory(selectedCategory === cat.name ? null : cat.name)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedCategory === cat.name
                    ? "bg-teal-500 text-white"
                    : `${cat.color} hover:opacity-80`
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        {/* Match Results */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">How It Works</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-6 bg-white/[0.03] border-white/10 backdrop-blur-xl text-center">
              <div className="w-14 h-14 rounded-xl bg-teal-500/20 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">1</span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Describe Naturally</h3>
              <p className="text-gray-400 text-sm">Type or speak your need in plain language. No forms or categories to select.</p>
            </Card>
            <Card className="p-6 bg-white/[0.03] border-white/10 backdrop-blur-xl text-center">
              <div className="w-14 h-14 rounded-xl bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                <Brain className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">AI Understanding</h3>
              <p className="text-gray-400 text-sm">Our semantic AI understands context, urgency, and intent automatically.</p>
            </Card>
            <Card className="p-6 bg-white/[0.03] border-white/10 backdrop-blur-xl text-center">
              <div className="w-14 h-14 rounded-xl bg-orange-500/20 flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Smart Matching</h3>
              <p className="text-gray-400 text-sm">Get connected with verified helpers who have the right skills nearby.</p>
            </Card>
          </div>
        </div>

        {/* Sample Matches */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-white">Recent Semantic Matches</h2>
            <Button variant="ghost" className="text-teal-400">
              View All <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {sampleRequests.map((request) => (
              <Card key={request.id} className="p-6 bg-white/[0.03] border-white/10 backdrop-blur-xl hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <Badge className={categories.find(c => c.name === request.category)?.color}>
                    {request.category}
                  </Badge>
                  <Badge variant={request.urgency === "high" ? "destructive" : "secondary"}>
                    {request.urgency}
                  </Badge>
                </div>
                <p className="text-gray-300 mb-4 line-clamp-2">"{request.text}"</p>
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-4">
                  <MapPin className="w-4 h-4" />
                  {request.location}
                </div>
                
                <div className="pt-4 border-t border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs text-gray-500">Best Match</span>
                    <span className="text-xs text-teal-400">{request.matches} helpers available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 flex items-center justify-center text-white font-semibold">
                      {request.topMatch.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-white font-medium">{request.topMatch.name}</p>
                        {request.topMatch.verified && (
                          <Badge className="bg-teal-500/20 text-teal-400 text-xs">Verified</Badge>
                        )}
                      </div>
                      <p className="text-sm text-gray-400">{request.topMatch.skill}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between mt-3">
                    <div className="flex items-center gap-3 text-xs text-gray-500">
                      <span className="flex items-center gap-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                        {request.topMatch.rating}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {request.topMatch.distance}
                      </span>
                    </div>
                    <Button size="sm" className="bg-teal-500 hover:bg-teal-600 text-white">
                      <MessageSquare className="w-4 h-4 mr-1" />
                      Connect
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Card className="p-8 bg-gradient-to-r from-teal-500/20 to-cyan-500/20 border-teal-500/30 backdrop-blur-xl text-center">
          <Zap className="w-12 h-12 text-teal-400 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-white mb-2">Ready to Get Matched?</h2>
          <p className="text-gray-400 mb-6 max-w-lg mx-auto">
            Join thousands of neighbors who found the right help through semantic AI matching.
          </p>
          <Button size="lg" className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:opacity-90 text-white px-8">
            Start Your Search
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </Card>
      </Container>
    </div>
  );
}
