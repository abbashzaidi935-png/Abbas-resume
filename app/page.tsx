import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Trophy, GraduationCap, Code2, Github, Linkedin, Mail, ArrowRight, Zap, Target, Users, Folder } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-28">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <Badge variant="secondary" className="text-sm">
                Software Developer
              </Badge>
              <Badge className="bg-accent/10 text-accent border-accent/20 text-sm">
                2x Hackathon Winner
              </Badge>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-balance">
              Hi, I'm <span className="text-primary">Abbas</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed text-pretty max-w-2xl">
              CS graduate from <span className="text-foreground font-medium">California State University, East Bay</span>. 
              I turn complex problems into elegant solutions and thrive under the pressure of building fast.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <Button size="lg" className="gap-2" asChild>
                <a href="mailto:abbashzaidi@yahoo.com">
                  <Mail className="h-4 w-4" />
                  Get in Touch
                </a>
              </Button>
              <Button size="lg" variant="outline" className="gap-2 bg-transparent" asChild>
                <Link href="/projects">
                  View Projects
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Card className="p-6 text-center bg-gradient-to-br from-card to-primary/5 border-primary/20">
              <div className="text-3xl md:text-4xl font-bold text-primary">2</div>
              <div className="text-sm text-muted-foreground mt-1">Hackathons Won</div>
            </Card>
            <Card className="p-6 text-center bg-gradient-to-br from-card to-accent/5 border-accent/20">
              <div className="text-3xl md:text-4xl font-bold text-accent">5+</div>
              <div className="text-sm text-muted-foreground mt-1">Projects Built</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold">3+</div>
              <div className="text-sm text-muted-foreground mt-1">Languages</div>
            </Card>
            <Card className="p-6 text-center">
              <div className="text-3xl md:text-4xl font-bold">2025</div>
              <div className="text-sm text-muted-foreground mt-1">CS Graduate</div>
            </Card>
          </div>
        </div>
      </section>

      {/* What Sets Me Apart */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">What Sets Me Apart</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Rapid Builder</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Proven ability to ship under pressure. Built award-winning apps in 24-48 hour hackathons from concept to working product.
              </p>
            </Card>
            <Card className="p-6">
              <div className="h-12 w-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                <Target className="h-6 w-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Problem Solver</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Strong foundation in algorithms and data structures. From maze-solving backtracking to greedy optimization algorithms.
              </p>
            </Card>
            <Card className="p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Team Player</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Collaborative mindset with hackathon team experience. Thrive in fast-paced environments where communication is key.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Education</h2>
          </div>
          <Card className="p-6 md:p-8">
            <div className="space-y-2">
              <h3 className="text-2xl font-semibold">California State University, East Bay</h3>
              <p className="text-lg text-muted-foreground">Bachelor of Science in Computer Science</p>
              <p className="text-muted-foreground">Hayward, CA</p>
            </div>
          </Card>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Trophy className="h-6 w-6 text-accent" />
            <h2 className="text-3xl font-bold">Hackathon Achievements</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="p-6 md:p-8 bg-gradient-to-br from-card to-accent/5 border-accent/20">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <Trophy className="h-8 w-8 text-accent" />
                  <Badge className="bg-accent text-accent-foreground">Category Winner</Badge>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">HackDavis 2023</h3>
                  <p className="text-lg font-semibold text-foreground mt-2">Tree Datalize</p>
                  <p className="text-sm font-medium text-accent mb-2">Best TreeDavis Hack</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Built an interactive data visualization platform to educate users on tree planting benefits,
                    showcasing cost savings and energy efficiency correlations using Python, Dash, and Plotly.
                  </p>
                  <Button variant="link" className="px-0 mt-3 text-accent" asChild>
                    <a href="https://devpost.com/software/tree-datalize" target="_blank" rel="noopener noreferrer">
                      View Project →
                    </a>
                  </Button>
                </div>
              </div>
            </Card>

            <Card className="p-6 md:p-8 bg-gradient-to-br from-card to-accent/5 border-accent/20">
              <div className="space-y-4">
                <div className="flex items-start justify-between">
                  <Trophy className="h-8 w-8 text-accent" />
                  <Badge className="bg-accent text-accent-foreground">Category Winner</Badge>
                </div>
                <div>
                  <h3 className="text-2xl font-bold">HackHayward 2025</h3>
                  <p className="text-lg font-semibold text-foreground mt-2">Medication Guide</p>
                  <p className="text-sm font-medium text-accent mb-2">Best Use of Perplexity/Sonar</p>
                  <p className="text-muted-foreground leading-relaxed">
                    Created a virtual health assistant for international students that recommends medications based on
                    symptoms and locates nearby pharmacies, built with FastAPI, Perplexity API, and Google Places API.
                  </p>
                  <Button variant="link" className="px-0 mt-3 text-accent" asChild>
                    <a href="https://devpost.com/software/medication-guide" target="_blank" rel="noopener noreferrer">
                      View Project →
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-8">
            <Code2 className="h-6 w-6 text-primary" />
            <h2 className="text-3xl font-bold">Technical Focus</h2>
          </div>
          <Card className="p-6 md:p-8">
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Passionate about building impactful software solutions with a focus on rapid prototyping and innovative
              problem-solving. Experience in collaborative development environments and competitive programming.
            </p>
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="text-sm">
                Full-Stack Development
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Algorithm Design
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Team Collaboration
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Rapid Prototyping
              </Badge>
              <Badge variant="secondary" className="text-sm">
                Problem Solving
              </Badge>
            </div>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto px-4 py-16 pb-32">
        <div className="max-w-4xl mx-auto">
          <Card className="p-8 md:p-12 bg-primary text-primary-foreground">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold text-balance">Let's build something amazing together</h2>
              <p className="text-lg text-primary-foreground/90 leading-relaxed">
                I'm always interested in discussing new projects, creative ideas, or opportunities to be part of your
                vision.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <Button size="lg" variant="secondary" className="gap-2" asChild>
                  <a href="mailto:abbashzaidi@yahoo.com">
                    <Mail className="h-4 w-4" />
                    Email Me
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/abbaszaid1/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-4 w-4" />
                    LinkedIn
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2 bg-transparent border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/10"
                  asChild
                >
                  <a href="https://github.com/abbaszaidi" target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4" />
                    GitHub
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  )
}
