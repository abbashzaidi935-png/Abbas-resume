"use client"

import React from "react"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"
import { cn } from "@/lib/utils"

type Message = {
  role: "assistant" | "user"
  content: string
}

const quickActions = [
  "Tell me about Abbas",
  "What projects has he built?",
  "Hackathon achievements?",
  "How can I contact him?",
]

const responses: Record<string, string> = {
  default: "Hi! I'm Abbas's virtual assistant. I can tell you about his skills, projects, hackathon achievements, or how to get in touch. What would you like to know?",
  about: "Abbas is a Computer Science graduate from California State University, East Bay. He's a passionate software developer with experience in full-stack development, algorithm design, and building innovative solutions. He's won multiple hackathon awards and loves tackling complex problems with elegant code.",
  projects: "Abbas has built several impressive projects:\n\n• **Rat In The Maze** (C++) - A maze-solving algorithm using backtracking that efficiently navigates complex labyrinths\n\n• **Jobs Organizer** (C++) - A job scheduling app with a greedy algorithm for profit optimization\n\n• **Slap-jack** (Swift) - A multiplayer card game with polished UI and robust error handling\n\nCheck out the Projects page for more details!",
  hackathon: "Abbas is a 2x hackathon category winner:\n\n🏆 **HackDavis 2023** - Won 'Best TreeDavis Hack' with Tree Datalize, an interactive data visualization platform for tree planting benefits\n\n🏆 **HackHayward 2025** - Won 'Best Use of Perplexity/Sonar' with Medication Guide, a virtual health assistant for international students",
  contact: "You can reach Abbas through:\n\n📧 **Email:** abbashzaidi@yahoo.com\n\n💼 **LinkedIn:** linkedin.com/in/abbaszaid1\n\nHe's always open to discussing new opportunities and exciting projects!",
  skills: "Abbas's technical skills include:\n\n• **Languages:** C++, Swift, Python, JavaScript\n• **Focus Areas:** Full-Stack Development, Algorithm Design, Data Visualization\n• **Strengths:** Rapid Prototyping, Problem Solving, Team Collaboration\n\nHis hackathon experience shows his ability to build under pressure and deliver innovative solutions quickly.",
  hire: "Looking to hire Abbas? Here's why he'd be a great fit:\n\n✓ Proven problem-solver with hackathon wins\n✓ Strong foundation in algorithms and data structures\n✓ Experience building full-stack applications\n✓ Quick learner who thrives in fast-paced environments\n\nReach out at abbashzaidi@yahoo.com to discuss opportunities!",
}

function getResponse(input: string): string {
  const lower = input.toLowerCase()
  
  if (lower.includes("about") || lower.includes("who") || lower.includes("tell me about")) {
    return responses.about
  }
  if (lower.includes("project") || lower.includes("built") || lower.includes("portfolio")) {
    return responses.projects
  }
  if (lower.includes("hackathon") || lower.includes("award") || lower.includes("achievement") || lower.includes("win")) {
    return responses.hackathon
  }
  if (lower.includes("contact") || lower.includes("email") || lower.includes("reach") || lower.includes("linkedin")) {
    return responses.contact
  }
  if (lower.includes("skill") || lower.includes("tech") || lower.includes("language") || lower.includes("stack")) {
    return responses.skills
  }
  if (lower.includes("hire") || lower.includes("job") || lower.includes("work") || lower.includes("opportunity")) {
    return responses.hire
  }
  
  return "I can help you learn about Abbas's projects, hackathon achievements, skills, or how to contact him. What interests you?"
}

export function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: responses.default }
  ])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const handleSend = (text?: string) => {
    const messageText = text || input
    if (!messageText.trim()) return

    const userMessage: Message = { role: "user", content: messageText }
    const assistantMessage: Message = { role: "assistant", content: getResponse(messageText) }
    
    setMessages(prev => [...prev, userMessage, assistantMessage])
    setInput("")
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={cn(
          "fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 transition-all hover:scale-110",
          isOpen && "hidden"
        )}
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-[380px] max-w-[calc(100vw-3rem)] h-[500px] max-h-[calc(100vh-6rem)] z-50 flex flex-col shadow-2xl border-2">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b bg-primary text-primary-foreground rounded-t-lg">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <p className="font-semibold text-sm">Abbas's Assistant</p>
                <p className="text-xs text-primary-foreground/80">Ask me anything</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={cn(
                  "flex gap-2",
                  message.role === "user" ? "justify-end" : "justify-start"
                )}
              >
                {message.role === "assistant" && (
                  <div className="h-7 w-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <Bot className="h-4 w-4 text-primary" />
                  </div>
                )}
                <div
                  className={cn(
                    "max-w-[80%] rounded-2xl px-4 py-2.5 text-sm whitespace-pre-line",
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted"
                  )}
                >
                  {message.content}
                </div>
                {message.role === "user" && (
                  <div className="h-7 w-7 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <User className="h-4 w-4" />
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Actions */}
          {messages.length === 1 && (
            <div className="px-4 pb-2">
              <div className="flex flex-wrap gap-2">
                {quickActions.map((action) => (
                  <Button
                    key={action}
                    variant="outline"
                    size="sm"
                    className="text-xs h-7 bg-transparent"
                    onClick={() => handleSend(action)}
                  >
                    {action}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Input */}
          <div className="p-4 border-t">
            <div className="flex gap-2">
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask about Abbas..."
                className="flex-1"
              />
              <Button onClick={() => handleSend()} size="icon" disabled={!input.trim()}>
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </Card>
      )}
    </>
  )
}
