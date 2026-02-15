"use client"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import { Trophy, Code2, ExternalLink, ChevronDown, ChevronUp, Filter } from "lucide-react"

type Project = {
  id: string
  title: string
  category: "hackathon" | "personal"
  tech: string[]
  description: string
  highlights: string[]
  award?: string
  awardCategory?: string
  link?: string
  event?: string
}

const projects: Project[] = [
  {
    id: "tree-datalize",
    title: "Tree Datalize",
    category: "hackathon",
    tech: ["Python", "Dash", "Plotly"],
    description: "An interactive data visualization platform to educate users on tree planting benefits, showcasing cost savings and energy efficiency correlations.",
    highlights: [
      "Built interactive dashboards with real-time data filtering",
      "Visualized complex datasets to show environmental impact",
      "Created engaging UI to educate users on sustainability"
    ],
    award: "Category Winner",
    awardCategory: "Best TreeDavis Hack",
    event: "HackDavis 2023",
    link: "https://devpost.com/software/tree-datalize"
  },
  {
    id: "medication-guide",
    title: "Medication Guide",
    category: "hackathon",
    tech: ["FastAPI", "Perplexity API", "Google Places API"],
    description: "A virtual health assistant for international students that recommends medications based on symptoms and locates nearby pharmacies.",
    highlights: [
      "Integrated Perplexity/Sonar AI for intelligent medication recommendations",
      "Built location-aware pharmacy finder using Google Places API",
      "Created accessible health resource for international community"
    ],
    award: "Category Winner",
    awardCategory: "Best Use of Perplexity/Sonar",
    event: "HackHayward 2025",
    link: "https://devpost.com/software/medication-guide"
  },
  {
    id: "rat-maze",
    title: "Rat In The Maze",
    category: "personal",
    tech: ["C++"],
    description: "A maze-solving algorithm employing a backtracking mechanism for efficient and thorough exploration of complex labyrinth patterns.",
    highlights: [
      "Devised a maze-solving algorithm using backtracking for thorough exploration",
      "Application accepts various input formats and interprets grid structures",
      "Calculates the optimal route from start point to target point"
    ]
  },
  {
    id: "jobs-organizer",
    title: "Jobs Organizer",
    category: "personal",
    tech: ["C++"],
    description: "A job organizing application with CRUD functionality and greedy algorithm optimization for scheduling and profit maximization.",
    highlights: [
      "Developed comprehensive job record management with CRUD operations",
      "Categorizes jobs by unique ID, deadline, and projected profit",
      "Implemented greedy algorithm to maximize profit within deadlines"
    ]
  },
  {
    id: "slapjack",
    title: "Slap-jack",
    category: "personal",
    tech: ["Swift", "XCode"],
    description: "An interactive and engaging multiplayer card game with polished UI and robust game mechanics.",
    highlights: [
      "Built using Swift in XCode with user-friendly UI design",
      "Incorporated game mechanics with multi-player support",
      "Applied robust error handling for seamless gameplay"
    ]
  }
]

type FilterType = "all" | "hackathon" | "personal"

export default function ProjectsPage() {
  const [filter, setFilter] = useState<FilterType>("all")
  const [expandedProject, setExpandedProject] = useState<string | null>("tree-datalize")

  const filteredProjects = projects.filter(
    (p) => filter === "all" || p.category === filter
  )

  const hackathonProjects = filteredProjects.filter((p) => p.category === "hackathon")
  const personalProjects = filteredProjects.filter((p) => p.category === "personal")

  return (
    <main className="min-h-screen">
      {/* Header */}
      <section className="container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            <Badge variant="secondary" className="text-sm">
              Portfolio
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Projects</h1>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
              A collection of my work, from hackathon victories to personal explorations. 
              Click on any project to learn more about the technical details and my contributions.
            </p>
          </div>
        </div>
      </section>

      {/* Filter */}
      <section className="container mx-auto px-4 pb-8">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-4">
            <Filter className="h-4 w-4 text-muted-foreground" />
            <div className="flex gap-2">
              {(["all", "hackathon", "personal"] as FilterType[]).map((type) => (
                <Button
                  key={type}
                  variant={filter === type ? "default" : "outline"}
                  size="sm"
                  onClick={() => setFilter(type)}
                  className={cn(filter !== type && "bg-transparent")}
                >
                  {type === "all" ? "All Projects" : type === "hackathon" ? "Hackathon Wins" : "Personal"}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Hackathon Projects */}
      {hackathonProjects.length > 0 && (
        <section className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Trophy className="h-5 w-5 text-accent" />
              <h2 className="text-2xl font-bold">Award-Winning Projects</h2>
            </div>
            <div className="space-y-4">
              {hackathonProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isExpanded={expandedProject === project.id}
                  onToggle={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Personal Projects */}
      {personalProjects.length > 0 && (
        <section className="container mx-auto px-4 py-8 pb-32">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <Code2 className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-bold">Personal Projects</h2>
            </div>
            <div className="space-y-4">
              {personalProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  isExpanded={expandedProject === project.id}
                  onToggle={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

function ProjectCard({ 
  project, 
  isExpanded, 
  onToggle 
}: { 
  project: Project
  isExpanded: boolean
  onToggle: () => void
}) {
  const isHackathon = project.category === "hackathon"
  
  return (
    <Card 
      className={cn(
        "overflow-hidden transition-all duration-300 cursor-pointer",
        isHackathon && "border-accent/30 bg-gradient-to-br from-card to-accent/5",
        isExpanded && "ring-2 ring-primary/20"
      )}
      onClick={onToggle}
    >
      <div className="p-6">
        {/* Header */}
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2 flex-1">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="text-xl font-bold">{project.title}</h3>
              {project.award && (
                <Badge className="bg-accent text-accent-foreground text-xs">
                  {project.award}
                </Badge>
              )}
            </div>
            {project.event && (
              <p className="text-sm font-medium text-accent">{project.event}</p>
            )}
            {project.awardCategory && (
              <p className="text-sm text-muted-foreground">{project.awardCategory}</p>
            )}
          </div>
          <Button variant="ghost" size="icon" className="shrink-0" onClick={(e) => { e.stopPropagation(); onToggle() }}>
            {isExpanded ? <ChevronUp className="h-5 w-5" /> : <ChevronDown className="h-5 w-5" />}
          </Button>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.tech.map((tech) => (
            <Badge key={tech} variant="outline" className="text-xs">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Description - Always visible */}
        <p className="mt-4 text-muted-foreground leading-relaxed">
          {project.description}
        </p>

        {/* Expanded Content */}
        <div className={cn(
          "grid transition-all duration-300",
          isExpanded ? "grid-rows-[1fr] opacity-100 mt-6" : "grid-rows-[0fr] opacity-0"
        )}>
          <div className="overflow-hidden">
            <div className="pt-4 border-t">
              <h4 className="text-sm font-semibold mb-3">Key Highlights</h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground">
                    <span className={cn("mt-1.5 shrink-0", isHackathon ? "text-accent" : "text-primary")}>•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
              
              {project.link && (
                <Button variant="link" className="px-0 mt-4 text-accent" asChild onClick={(e) => e.stopPropagation()}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    View on Devpost <ExternalLink className="h-3 w-3 ml-1" />
                  </a>
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}
