"use client";

import { useState } from "react";
import { Container } from "@/components/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Droplet,
  MapPin,
  Phone,
  Clock,
  Filter,
  AlertTriangle,
  Heart,
  Shield,
  Star,
  Bell,
  Users,
  ChevronRight,
  Activity,
  Zap
} from "lucide-react";

const bloodGroups = ["All", "A+", "A-", "B+", "B-", "AB+", "AB-", "O+", "O-"];

const donors = [
  {
    id: 1,
    name: "Arun Venkat",
    bloodGroup: "B+",
    age: 32,
    distance: "0.8 km",
    rating: 4.9,
    donations: 12,
    lastDonation: "3 months ago",
    verified: true,
    available: true,
    phone: "98765*****",
    location: "Anna Nagar",
    responseTime: "< 5 min"
  },
  {
    id: 2,
    name: "Priya Sharma",
    bloodGroup: "O+",
    age: 28,
    distance: "1.2 km",
    rating: 5.0,
    donations: 24,
    lastDonation: "2 months ago",
    verified: true,
    available: true,
    phone: "98765*****",
    location: "Adyar",
    responseTime: "< 10 min"
  },
  {
    id: 3,
    name: "Karthik Raja",
    bloodGroup: "A+",
    age: 35,
    distance: "2.1 km",
    rating: 4.8,
    donations: 8,
    lastDonation: "4 months ago",
    verified: true,
    available: true,
    phone: "98765*****",
    location: "Tambaram",
    responseTime: "< 15 min"
  },
  {
    id: 4,
    name: "Lakshmi Narayanan",
    bloodGroup: "AB+",
    age: 42,
    distance: "0.5 km",
    rating: 4.7,
    donations: 18,
    lastDonation: "1 month ago",
    verified: true,
    available: false,
    phone: "98765*****",
    location: "Nungambakkam",
    responseTime: "Unavailable"
  },
  {
    id: 5,
    name: "Senthil Kumar",
    bloodGroup: "O-",
    age: 29,
    distance: "1.8 km",
    rating: 4.9,
    donations: 15,
    lastDonation: "5 months ago",
    verified: true,
    available: true,
    phone: "98765*****",
    location: "Mylapore",
    responseTime: "< 8 min"
  }
];

const stats = [
  { label: "Active Donors", value: "1,247", icon: Users, color: "text-teal-400" },
  { label: "Lives Saved", value: "3,892", icon: Heart, color: "text-red-400" },
  { label: "Donations This Month", value: "156", icon: Droplet, color: "text-blue-400" },
  { label: "Avg Response Time", value: "8 min", icon: Clock, color: "text-orange-400" }
];

const recentRequests = [
  { bloodGroup: "B+", location: "Anna Nagar", time: "15 min ago", urgency: "critical" },
  { bloodGroup: "O-", location: "Adyar", time: "1 hour ago", urgency: "high" },
  { bloodGroup: "AB+", location: "Tambaram", time: "2 hours ago", urgency: "medium" }
];

export default function BloodDonorsPage() {
  const [selectedBloodGroup, setSelectedBloodGroup] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [showEmergencyModal, setShowEmergencyModal] = useState(false);

  const filteredDonors = donors.filter(donor => {
    const matchesBloodGroup = selectedBloodGroup === "All" || donor.bloodGroup === selectedBloodGroup;
    const matchesSearch = donor.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesBloodGroup && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      {/* Emergency Banner */}
      <div className="bg-gradient-to-r from-red-600 to-red-500 py-3">
        <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <AlertTriangle className="w-5 h-5 text-white animate-pulse" />
            <span className="text-white font-medium">3 Critical Blood Requests Active in Your Area</span>
          </div>
          <Button 
            size="sm" 
            variant="outline" 
            className="bg-white/20 border-white/40 text-white hover:bg-white/30"
            onClick={() => setShowEmergencyModal(true)}
          >
            View Requests
          </Button>
        </div>
      </div>

      <Container>
        {/* Header */}
        <div className="py-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-500/10 border border-red-500/20 mb-4">
            <Droplet className="w-4 h-4 text-red-400" />
            <span className="text-sm text-red-400">Blood Donor Intelligence</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            AI-Powered{" "}
            <span className="bg-gradient-to-r from-red-400 to-pink-400 bg-clip-text text-transparent">
              Blood Donor Network
            </span>
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Instant matching with compatible donors in your area. Save lives with intelligent emergency coordination.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {stats.map((stat) => (
            <Card key={stat.label} className="p-6 bg-white/[0.03] border-white/10 backdrop-blur-xl text-center">
              <div className={`w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mx-auto mb-3 ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <p className="text-2xl font-bold text-white">{stat.value}</p>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* Search & Filters */}
        <Card className="p-6 bg-white/[0.03] border-white/10 backdrop-blur-xl mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
              <Input
                placeholder="Search donors by name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500"
              />
            </div>
            <Button className="h-12 bg-gradient-to-r from-red-500 to-pink-500 hover:opacity-90 text-white">
              <Zap className="w-4 h-4 mr-2" />
              Emergency Search
            </Button>
          </div>

          {/* Blood Group Filter */}
          <div className="flex flex-wrap gap-2">
            {bloodGroups.map((group) => (
              <button
                key={group}
                onClick={() => setSelectedBloodGroup(group)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all ${
                  selectedBloodGroup === group
                    ? "bg-red-500 text-white"
                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
              >
                {group}
              </button>
            ))}
          </div>
        </Card>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Donors List */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-semibold text-white">Available Donors</h2>
              <Badge className="bg-teal-500/20 text-teal-400">
                {filteredDonors.filter(d => d.available).length} available
              </Badge>
            </div>
            
            <div className="space-y-4">
              {filteredDonors.map((donor) => (
                <Card key={donor.id} className="p-6 bg-white/[0.03] border-white/10 backdrop-blur-xl hover:bg-white/[0.06] transition-all">
                  <div className="flex items-start gap-4">
                    <div className="relative">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-pink-500 flex items-center justify-center text-white text-xl font-bold">
                        {donor.name.split(' ').map(n => n[0]).join('')}
                      </div>
                      {donor.available ? (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-gray-950" />
                      ) : (
                        <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gray-500 rounded-full border-2 border-gray-950" />
                      )}
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-lg font-semibold text-white">{donor.name}</h3>
                        {donor.verified && (
                          <Shield className="w-4 h-4 text-teal-400" />
                        )}
                        <Badge className={`${donor.available ? "bg-green-500/20 text-green-400" : "bg-gray-500/20 text-gray-400"}`}>
                          {donor.available ? "Available" : "Unavailable"}
                        </Badge>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Droplet className="w-4 h-4 text-red-400" />
                          {donor.bloodGroup}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {donor.location} ({donor.distance})
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          Response: {donor.responseTime}
                        </span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-sm">
                        <span className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                          <span className="text-white">{donor.rating}</span>
                        </span>
                        <span className="text-gray-400">
                          {donor.donations} donations
                        </span>
                        <span className="text-gray-500">
                          Last: {donor.lastDonation}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col gap-2">
                      <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white" disabled={!donor.available}>
                        <Phone className="w-4 h-4 mr-1" />
                        Contact
                      </Button>
                      <Button size="sm" variant="outline" className="border-white/20 hover:bg-white/10">
                        <Bell className="w-4 h-4 mr-1" />
                        Alert
                      </Button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Emergency Request */}
            <Card className="p-6 bg-gradient-to-br from-red-500/20 to-pink-500/20 border-red-500/30 backdrop-blur-xl">
              <div className="text-center mb-6">
                <div className="w-16 h-16 rounded-full bg-red-500/20 flex items-center justify-center mx-auto mb-4">
                  <Droplet className="w-8 h-8 text-red-400" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Emergency Blood Request</h3>
                <p className="text-sm text-gray-400">Create urgent request and alert nearby donors</p>
              </div>
              <Button className="w-full bg-gradient-to-r from-red-500 to-pink-500 hover:opacity-90 text-white">
                <AlertTriangle className="w-4 h-4 mr-2" />
                Create Emergency Request
              </Button>
            </Card>

            {/* Recent Requests */}
            <Card className="p-6 bg-white/[0.03] border-white/10 backdrop-blur-xl">
              <h3 className="text-lg font-semibold text-white mb-4">Recent Requests</h3>
              <div className="space-y-3">
                {recentRequests.map((request, index) => (
                  <div key={index} className="p-3 rounded-xl bg-white/[0.02] border border-white/5">
                    <div className="flex items-center justify-between mb-2">
                      <Badge className="bg-red-500/20 text-red-400">{request.bloodGroup}</Badge>
                      <Badge variant={request.urgency === "critical" ? "destructive" : "secondary"}>
                        {request.urgency}
                      </Badge>
                    </div>
                    <p className="text-sm text-gray-400">{request.location}</p>
                    <p className="text-xs text-gray-500">{request.time}</p>
                  </div>
                ))}
              </div>
            </Card>

            {/* AI Insights */}
            <Card className="p-6 bg-white/[0.03] border-white/10 backdrop-blur-xl">
              <div className="flex items-center gap-2 mb-4">
                <Activity className="w-5 h-5 text-teal-400" />
                <h3 className="text-lg font-semibold text-white">AI Insights</h3>
              </div>
              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-white/[0.02]">
                  <p className="text-sm text-gray-400 mb-1">Blood Type Distribution</p>
                  <p className="text-white font-medium">O+ most common (35%)</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02]">
                  <p className="text-sm text-gray-400 mb-1">Peak Donation Hours</p>
                  <p className="text-white font-medium">Weekends 9 AM - 2 PM</p>
                </div>
                <div className="p-3 rounded-xl bg-white/[0.02]">
                  <p className="text-sm text-gray-400 mb-1">Critical Shortage</p>
                  <p className="text-red-400 font-medium">AB- donors needed</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </Container>
    </div>
  );
}
