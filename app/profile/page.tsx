"use client";

import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  MapPin,
  Clock,
  Star,
  Award,
  Shield,
  Heart,
  Settings,
  Edit3,
  Users,
  Activity,
  CheckCircle,
  Phone,
  Mail
} from "lucide-react";

const skills = [
  { name: "Plumbing", level: 90, verified: true },
  { name: "Electrical Work", level: 75, verified: true },
  { name: "Elderly Care", level: 85, verified: false },
  { name: "Food Delivery", level: 95, verified: true },
];

const badges = [
  { name: "Verified Resident", icon: Shield, color: "bg-teal-500/20 text-teal-400", earned: true },
  { name: "Top Helper", icon: Star, color: "bg-yellow-500/20 text-yellow-400", earned: true },
  { name: "Crisis Responder", icon: Activity, color: "bg-red-500/20 text-red-400", earned: true },
  { name: "Mentor", icon: Award, color: "bg-purple-500/20 text-purple-400", earned: false },
  { name: "100 Helped", icon: Heart, color: "bg-pink-500/20 text-pink-400", earned: false },
];

const recentActivity = [
  { action: "Helped repair water pipe", recipient: "Mrs. Lakshmi, Adyar", time: "2 hours ago", impact: "Critical" },
  { action: "Delivered groceries", recipient: "Mr. Patel, Anna Nagar", time: "Yesterday", impact: "Normal" },
  { action: "Blood donation", recipient: "Hospital Network", time: "3 days ago", impact: "Emergency" },
  { action: "Elderly check-in", recipient: "10 residents, T. Nagar", time: "Last week", impact: "Routine" },
];

export default function ProfilePage() {
  return (
    <main className="min-h-screen bg-gray-950">
      <Container className="py-24">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Sidebar */}
          <div className="lg:col-span-1">
            <Card className="bg-gray-900/50 border-gray-800 sticky top-24">
              <CardContent className="p-8">
                <div className="text-center mb-6">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-teal-500 to-cyan-500 p-1 mb-4">
                    <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                      <Users className="w-10 h-10 text-gray-400" />
                    </div>
                  </div>
                  <h2 className="text-xl font-bold text-white mb-1">Arun Venkatesh</h2>
                  <div className="flex items-center justify-center gap-2 text-sm text-gray-400 mb-4">
                    <MapPin className="w-4 h-4" />
                    Adyar, Chennai
                  </div>
                  <Badge className="bg-teal-500/20 text-teal-400 border-teal-500/30">
                    <Shield className="w-4 h-4 mr-2" />
                    Verified Resident
                  </Badge>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-800/50 rounded-xl">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-white">47</div>
                    <div className="text-xs text-gray-400">Helped</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-yellow-400">4.9</div>
                    <div className="text-xs text-gray-400">Rating</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-400">12</div>
                    <div className="text-xs text-gray-400">Badges</div>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 text-gray-300">
                    <Mail className="w-4 h-4 text-gray-500" />
                    arun.venkatesh@email.com
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Phone className="w-4 h-4 text-gray-500" />
                    +91 98765 43210
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <Clock className="w-4 h-4 text-gray-500" />
                    Member since Jan 2024
                  </div>
                </div>

                <Button variant="outline" className="w-full border-gray-700 text-gray-300 hover:bg-gray-800">
                  <Edit3 className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Skills */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg text-white">Skills & Expertise</CardTitle>
                  <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                    <Edit3 className="w-4 h-4 mr-2" />
                    Add Skill
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  {skills.map((skill, i) => (
                    <div key={i} className="p-4 bg-gray-800/50 rounded-xl">
                      <div className="flex items-center justify-between mb-3">
                        <span className="font-medium text-white">{skill.name}</span>
                        {skill.verified && (
                          <CheckCircle className="w-4 h-4 text-teal-400" />
                        )}
                      </div>
                      <div className="h-2 bg-gray-700 rounded-full overflow-hidden mb-2">
                        <div 
                          className="h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                      <div className="text-xs text-gray-400">{skill.level}% proficiency</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Badges */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-lg text-white">Achievements</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                  {badges.map((badge, i) => (
                    <div 
                      key={i} 
                      className={`p-4 rounded-xl text-center transition-all duration-300 ${
                        badge.earned 
                          ? `${badge.color} border ${badge.color.replace("/20", "/30")}`
                          : "bg-gray-800/30 text-gray-600 border border-gray-800"
                      }`}
                    >
                      <badge.icon className="w-8 h-8 mx-auto mb-2" />
                      <div className="text-xs font-medium">{badge.name}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-lg text-white">Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivity.map((activity, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-gray-800/50 rounded-xl">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        activity.impact === "Critical" ? "bg-red-500/20" :
                        activity.impact === "Emergency" ? "bg-orange-500/20" :
                        "bg-teal-500/20"
                      }`}>
                        <Heart className={`w-5 h-5 ${
                          activity.impact === "Critical" ? "text-red-400" :
                          activity.impact === "Emergency" ? "text-orange-400" :
                          "text-teal-400"
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-white mb-1">{activity.action}</div>
                        <div className="text-sm text-gray-400">{activity.recipient}</div>
                      </div>
                      <div className="text-right">
                        <Badge className={`mb-1 ${
                          activity.impact === "Critical" ? "bg-red-500/20 text-red-400" :
                          activity.impact === "Emergency" ? "bg-orange-500/20 text-orange-400" :
                          "bg-teal-500/20 text-teal-400"
                        }`}>
                          {activity.impact}
                        </Badge>
                        <div className="text-xs text-gray-500">{activity.time}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Availability Settings */}
            <Card className="bg-gray-900/50 border-gray-800">
              <CardHeader>
                <CardTitle className="text-lg text-white">Availability Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                    <div>
                      <div className="font-medium text-white">Emergency Response</div>
                      <div className="text-sm text-gray-400">Receive emergency alerts</div>
                    </div>
                    <button className="w-12 h-6 bg-teal-500 rounded-full relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                    <div>
                      <div className="font-medium text-white">Blood Donation Alerts</div>
                      <div className="text-sm text-gray-400">Get notified for nearby blood emergencies</div>
                    </div>
                    <button className="w-12 h-6 bg-teal-500 rounded-full relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute right-0.5 top-0.5" />
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-800/50 rounded-xl">
                    <div>
                      <div className="font-medium text-white">Mutual Aid Requests</div>
                      <div className="text-sm text-gray-400">Show in AI matching results</div>
                    </div>
                    <button className="w-12 h-6 bg-gray-600 rounded-full relative">
                      <div className="w-5 h-5 bg-white rounded-full absolute left-0.5 top-0.5" />
                    </button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </Container>
    </main>
  );
}