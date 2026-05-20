"use client";

import { useState, useRef, useEffect } from "react";
import { Container } from "@/components/container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Search,
  Send,
  Paperclip,
  MoreVertical,
  Phone,
  Video,
  Image,
  Smile,
  Clock,
  CheckCircle,
  CheckCheck,
  MessageSquare,
  Users,
  Bell,
  Star,
  Pin,
  Trash2,
  Shield,
  AlertTriangle
} from "lucide-react";

const conversations = [
  {
    id: 1,
    name: "Priya Sharma",
    avatar: "PS",
    lastMessage: "Thank you for the groceries! You're a lifesaver 🙏",
    time: "2 min ago",
    unread: 2,
    online: true,
    verified: true,
    role: "Community Organizer"
  },
  {
    id: 2,
    name: "Emergency Response Team",
    avatar: "ER",
    lastMessage: "New alert: Medical assistance needed at Anna Nagar",
    time: "15 min ago",
    unread: 5,
    online: true,
    verified: true,
    role: "Group",
    isGroup: true
  },
  {
    id: 3,
    name: "Rajesh Kumar",
    avatar: "RK",
    lastMessage: "I'll be there in 10 minutes with the tools",
    time: "1 hour ago",
    unread: 0,
    online: false,
    verified: true,
    role: "Volunteer"
  },
  {
    id: 4,
    name: "Anita Devi",
    avatar: "AD",
    lastMessage: "The medicine worked perfectly. Thank you!",
    time: "3 hours ago",
    unread: 0,
    online: true,
    verified: true,
    role: "Resident"
  },
  {
    id: 5,
    name: "Blood Donor Network",
    avatar: "BD",
    lastMessage: "Urgent: B+ donor needed for Tambaram Hospital",
    time: "5 hours ago",
    unread: 0,
    online: true,
    verified: true,
    role: "Group",
    isGroup: true
  }
];

const messages = [
  {
    id: 1,
    sender: "other",
    text: "Hi! I saw your request for groceries. I can help!",
    time: "10:30 AM",
    status: "read"
  },
  {
    id: 2,
    sender: "me",
    text: "Oh that's wonderful! My grandmother can't go out due to her arthritis. She's been needing fresh vegetables for a week.",
    time: "10:32 AM",
    status: "read"
  },
  {
    id: 3,
    sender: "other",
    text: "I completely understand. I have some fresh produce from my garden. Would that help?",
    time: "10:33 AM",
    status: "read"
  },
  {
    id: 4,
    sender: "me",
    text: "That would be amazing! She's so happy to have fresh tomatoes and greens. When would be a good time?",
    time: "10:35 AM",
    status: "read"
  },
  {
    id: 5,
    sender: "other",
    text: "I'm free this afternoon around 3 PM. Is that okay?",
    time: "10:36 AM",
    status: "read"
  },
  {
    id: 6,
    sender: "me",
    text: "Perfect! Thank you so much. You're a true neighbor 🙏",
    time: "10:37 AM",
    status: "delivered"
  },
  {
    id: 7,
    sender: "other",
    text: "Thank you for the groceries! You're a lifesaver 🙏",
    time: "3:45 PM",
    status: "delivered"
  }
];

export default function MessagesPage() {
  const [selectedConversation, setSelectedConversation] = useState(conversations[0]);
  const [newMessage, setNewMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredConversations = conversations.filter(conv =>
    conv.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-950 pt-20">
      <Container>
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-white">Messages</h1>
            <p className="text-gray-400 mt-1">Secure community communication</p>
          </div>
          <Button className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:opacity-90 text-white">
            <MessageSquare className="w-4 h-4 mr-2" />
            New Message
          </Button>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 h-[calc(100vh-220px)]">
          {/* Conversations List */}
          <Card className="lg:col-span-1 p-4 bg-white/[0.03] border-white/10 backdrop-blur-xl flex flex-col">
            {/* Search */}
            <div className="relative mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <Input
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-white/5 border-white/10 text-white"
              />
            </div>

            {/* Tabs */}
            <div className="flex gap-2 mb-4">
              <Button size="sm" variant="default" className="flex-1 bg-teal-500">
                All
              </Button>
              <Button size="sm" variant="ghost" className="flex-1 text-gray-400">
                <Shield className="w-4 h-4 mr-1" />
                Safe
              </Button>
              <Button size="sm" variant="ghost" className="flex-1 text-gray-400">
                <Users className="w-4 h-4 mr-1" />
                Groups
              </Button>
            </div>

            {/* Conversation List */}
            <div className="flex-1 overflow-y-auto space-y-2">
              {filteredConversations.map((conv) => (
                <button
                  key={conv.id}
                  onClick={() => setSelectedConversation(conv)}
                  className={`w-full p-3 rounded-xl text-left transition-all ${
                    selectedConversation.id === conv.id
                      ? "bg-teal-500/20 border border-teal-500/30"
                      : "bg-white/[0.02] hover:bg-white/[0.05]"
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <div className="relative">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold ${
                        conv.isGroup ? "bg-gradient-to-br from-purple-500 to-pink-500" : "bg-gradient-to-br from-teal-500 to-cyan-500"
                      }`}>
                        {conv.avatar}
                      </div>
                      {conv.online && !conv.isGroup && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-950" />
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <div className="flex items-center gap-1">
                          <span className="text-white font-medium truncate">{conv.name}</span>
                          {conv.verified && <Shield className="w-3 h-3 text-teal-400" />}
                        </div>
                        <span className="text-xs text-gray-500">{conv.time}</span>
                      </div>
                      <p className="text-sm text-gray-400 truncate">{conv.lastMessage}</p>
                      {conv.unread > 0 && (
                        <Badge className="mt-1 bg-teal-500 text-white text-xs">
                          {conv.unread} new
                        </Badge>
                      )}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </Card>

          {/* Chat Area */}
          <Card className="lg:col-span-3 p-0 bg-white/[0.03] border-white/10 backdrop-blur-xl flex flex-col">
            {/* Chat Header */}
            <div className="p-4 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-semibold ${
                    selectedConversation.isGroup ? "bg-gradient-to-br from-purple-500 to-pink-500" : "bg-gradient-to-br from-teal-500 to-cyan-500"
                  }`}>
                    {selectedConversation.avatar}
                  </div>
                  {selectedConversation.online && !selectedConversation.isGroup && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-950" />
                  )}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-white font-semibold">{selectedConversation.name}</h3>
                    {selectedConversation.verified && <Shield className="w-4 h-4 text-teal-400" />}
                  </div>
                  <p className="text-sm text-gray-400">
                    {selectedConversation.isGroup ? `${Math.floor(Math.random() * 10 + 5)} members` : selectedConversation.role}
                    {selectedConversation.online && !selectedConversation.isGroup && " • Online"}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Button size="icon" variant="ghost" className="text-gray-400">
                  <Phone className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400">
                  <Video className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400">
                  <MoreVertical className="w-5 h-5" />
                </Button>
              </div>
            </div>

            {/* Safety Notice */}
            <div className="px-4 py-2 bg-teal-500/10 border-b border-teal-500/20 flex items-center gap-2">
              <Shield className="w-4 h-4 text-teal-400" />
              <span className="text-xs text-teal-400">
                This conversation is monitored by AI safety systems
              </span>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
                >
                  <div className={`max-w-[70%] ${message.sender === "me" ? "order-2" : "order-1"}`}>
                    <div
                      className={`px-4 py-3 rounded-2xl ${
                        message.sender === "me"
                          ? "bg-gradient-to-r from-teal-500 to-cyan-500 text-white"
                          : "bg-white/10 text-white"
                      }`}
                    >
                      <p>{message.text}</p>
                    </div>
                    <div className={`flex items-center gap-1 mt-1 ${message.sender === "me" ? "justify-end" : "justify-start"}`}>
                      <span className="text-xs text-gray-500">{message.time}</span>
                      {message.sender === "me" && (
                        message.status === "read" ? (
                          <CheckCheck className="w-3 h-3 text-teal-400" />
                        ) : message.status === "delivered" ? (
                          <CheckCheck className="w-3 h-3 text-gray-400" />
                        ) : (
                          <CheckCircle className="w-3 h-3 text-gray-400" />
                        )
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Message Input */}
            <div className="p-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <Button size="icon" variant="ghost" className="text-gray-400">
                  <Paperclip className="w-5 h-5" />
                </Button>
                <Button size="icon" variant="ghost" className="text-gray-400">
                  <Image className="w-5 h-5" />
                </Button>
                <div className="flex-1 relative">
                  <Input
                    placeholder="Type your message..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    className="pr-10 bg-white/5 border-white/10 text-white"
                  />
                </div>
                <Button size="icon" variant="ghost" className="text-gray-400">
                  <Smile className="w-5 h-5" />
                </Button>
                <Button
                  size="icon"
                  className="bg-gradient-to-r from-teal-500 to-cyan-500 hover:opacity-90"
                  disabled={!newMessage.trim()}
                >
                  <Send className="w-5 h-5" />
                </Button>
              </div>
              <div className="flex items-center justify-between mt-3 text-xs text-gray-500">
                <span>Messages are encrypted end-to-end</span>
                <span>AI monitoring active for your safety</span>
              </div>
            </div>
          </Card>
        </div>
      </Container>
    </div>
  );
}
