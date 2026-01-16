import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Palette, Smartphone, Globe, TrendingUp, Search, Layout as LayoutIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageTransition } from "@/components/PageTransition";
import { AbstractArt } from "@/components/AbstractArt";

const services = [
  {
    icon: Palette,
    title: "Graphic Design",
    description: "Elevate your brand with our creative graphic design service. We transform ideas into captivating visuals that leave a lasting impression.",
  },
  {
    icon: LayoutIcon,
    title: "UI/UX Design",
    description: "Unlock the power of exceptional user experiences with our UI/UX design service. We ensure your product stands out and delights users.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Transform your ideas into exceptional mobile experiences with our cutting-edge app development services.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Revolutionize your online presence with our web development services. Our skilled team creates websites that captivate users.",
  },
  {
    icon: TrendingUp,
    title: "Digital Marketing",
    description: "Elevate your brand's online visibility and reach new heights with our comprehensive digital marketing services.",
  },
  {
    icon: Search,
    title: "SEO",
    description: "Boost your online presence and climb search engine rankings with our SEO expertise. Our tailored strategies focus on traffic.",
  },
];

const caseStudies = [
  {
    client: "Global Fintech",
    title: "Reduced transaction processing time by 94%",
    description: "Rebuilt core payment infrastructure to handle 50M+ daily transactions with sub-100ms latency.",
    metrics: [
      { value: "94%", label: "Faster processing" },
      { value: "50M+", label: "Daily transactions" },
      { value: "99.99%", label: "Uptime achieved" },
    ],
    category: "Infrastructure",
    image: "/placeholder.svg",
  },
  {
    client: "Healthcare Platform",
    title: "AI-powered diagnostics at scale",
    description: "Developed machine learning pipeline that analyzes medical imaging with 97% accuracy, deployed across 200+ hospitals.",
    metrics: [
      { value: "97%", label: "Diagnostic accuracy" },
      { value: "200+", label: "Hospitals deployed" },
      { value: "2M+", label: "Patients served" },
    ],
    category: "AI & ML",
    image: "/placeholder.svg",
  },
  {
    client: "Enterprise SaaS",
    title: "Zero-downtime migration to microservices",
    description: "Transformed monolithic architecture to event-driven microservices while serving 100K concurrent users.",
    metrics: [
      { value: "0", label: "Minutes downtime" },
      { value: "100K", label: "Concurrent users" },
      { value: "3x", label: "Developer velocity" },
    ],
    category: "Architecture",
    image: "/placeholder.svg",
  },
];

const techStack = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Frontend" },
  { name: "TypeScript", category: "Language" },
  { name: "Python", category: "Backend" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "AWS", category: "Cloud" },
  { name: "GCP", category: "Cloud" },
  { name: "Docker", category: "DevOps" },
  { name: "Kubernetes", category: "DevOps" },
  { name: "TensorFlow", category: "AI/ML" },
  { name: "PyTorch", category: "AI/ML" },
  { name: "OpenAI", category: "AI/ML" },
  { name: "Redis", category: "Cache" },
  { name: "GraphQL", category: "API" },
];

const metrics = [
  { value: "50+", label: "Enterprise clients" },
  { value: "99.9%", label: "System uptime" },
  { value: "12", label: "Countries served" },
  { value: "8+", label: "Years building" },
];

const principles = [
  "We write code that outlives projects.",
  "Simplicity is the ultimate sophistication.",
  "Every system should explain itself.",
];

export default function Home() {
  return (
    <PageTransition>
      <Layout>
        {/* Hero Section */}
        <section className="min-h-[90vh] flex items-center relative overflow-hidden">
          <AbstractArt variant="circles" className="right-0 top-20 opacity-60" />
          <AbstractArt variant="dots" className="left-20 bottom-40 opacity-40" />
          
          <div className="container-wide py-28 md:py-36 relative z-10">
            <div className="max-w-5xl">
              <ScrollReveal>
                <p className="text-caption mb-10">Software & AI Agency</p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h1 className="text-display text-foreground">
                  Engineering intelligent systems for companies that scale.
                </h1>
              </ScrollReveal>
              <ScrollReveal delay={200}>
                <p className="mt-12 text-body-lg max-w-2xl">
                  We partner with ambitious teams to build software that performs, endures, and evolves. From AI-powered platforms to mission-critical infrastructure.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={300}>
                <div className="mt-14 flex flex-wrap gap-5">
                  <Button variant="hero" asChild>
                    <Link to="/contact">Start a conversation</Link>
                  </Button>
                  <Button variant="hero-outline" asChild>
                    <Link to="/capabilities" className="inline-flex items-center gap-3">
                      View capabilities
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container-wide">
          <div className="divider" />
        </div>

        {/* Services Section */}
        <section className="section-padding relative overflow-hidden">
          <AbstractArt variant="lines" className="right-10 top-40 opacity-50" />
          
          <div className="container-wide relative z-10">
            <div className="mb-20">
              <ScrollReveal>
                <p className="text-caption mb-5">Our Services</p>
              </ScrollReveal>
              <ScrollReveal delay={100}>
                <h2 className="text-headline text-foreground max-w-3xl">
                  Comprehensive solutions for your digital transformation
                </h2>
              </ScrollReveal>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <ScrollReveal key={service.title} delay={index * 80}>
                  <div className="group p-8 rounded-2xl border border-border/30 bg-card hover:bg-accent/30 hover:border-border/50 transition-all duration-500 hover-lift h-full">
                    <div className="w-14 h-14 rounded-2xl bg-primary/5 flex items-center justify-center mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                      <service.icon className="w-7 h-7 text-foreground" />
                    </div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">{service.title}</h3>
                    <p className="text-body text-base">{service.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="section-padding-sm bg-secondary/30 relative overflow-hidden">
          <AbstractArt variant="grid" className="left-0 top-10 opacity-30" />
          
          <div className="container-wide relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-caption mb-5">Technology</p>
                <h2 className="text-headline text-foreground">
                  Built with modern tools
                </h2>
              </div>
            </ScrollReveal>

            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <ScrollReveal key={tech.name} delay={index * 30} direction="none">
                  <div className="tech-card flex items-center gap-3 cursor-default">
                    <span className="text-base font-medium text-foreground">{tech.name}</span>
                    <span className="text-xs text-muted-foreground bg-muted px-2 py-1 rounded-lg">{tech.category}</span>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="section-padding relative overflow-hidden">
          <AbstractArt variant="waves" className="right-20 top-20 opacity-40" />
          
          <div className="container-wide relative z-10">
            <ScrollReveal>
              <div className="flex items-end justify-between mb-20">
                <div>
                  <p className="text-caption mb-5">Case Studies</p>
                  <h2 className="text-headline text-foreground">
                    Results that speak
                  </h2>
                </div>
                <ScrollReveal delay={100}>
                  <Button variant="minimal" asChild className="hidden md:flex">
                    <Link to="/capabilities" className="inline-flex items-center gap-2">
                      View all work
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </ScrollReveal>
              </div>
            </ScrollReveal>

            <div className="space-y-8">
              {caseStudies.map((study, index) => (
                <ScrollReveal key={study.title} delay={index * 100}>
                  <div className="group relative bg-card py-12 lg:py-16 px-8 lg:px-12 rounded-3xl border border-border/30 hover:bg-accent/30 hover:border-border/50 transition-all duration-500 hover-lift overflow-hidden">
                    {/* Subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-14">
                      {/* Left - Meta */}
                      <div className="lg:col-span-3">
                        <span className="inline-block px-4 py-2 rounded-full bg-primary/5 text-sm font-medium text-foreground mb-4">
                          {study.category}
                        </span>
                        <p className="text-base text-muted-foreground">{study.client}</p>
                      </div>
                      
                      {/* Center - Content */}
                      <div className="lg:col-span-5">
                        <h3 className="text-2xl lg:text-3xl font-semibold text-foreground leading-tight mb-5 group-hover:text-foreground/80 transition-colors">
                          {study.title}
                        </h3>
                        <p className="text-body text-base">{study.description}</p>
                      </div>
                      
                      {/* Right - Metrics */}
                      <div className="lg:col-span-4">
                        <div className="grid grid-cols-3 gap-6">
                          {study.metrics.map((metric) => (
                            <div key={metric.label}>
                              <p className="text-3xl lg:text-4xl font-semibold text-foreground tracking-tight">{metric.value}</p>
                              <p className="text-sm text-muted-foreground mt-2">{metric.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics Section */}
        <section className="section-padding-sm relative">
          <AbstractArt variant="dots" className="right-32 bottom-20 opacity-30" />
          
          <div className="container-wide relative z-10">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-14 lg:gap-10">
              {metrics.map((metric, index) => (
                <ScrollReveal key={metric.label} delay={index * 100}>
                  <div className="text-center lg:text-left">
                    <p className="text-6xl md:text-7xl font-semibold tracking-tight text-foreground">{metric.value}</p>
                    <p className="mt-4 text-lg text-muted-foreground">{metric.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Divider */}
        <div className="container-wide">
          <div className="divider" />
        </div>

        {/* Philosophy Section */}
        <section className="section-padding relative overflow-hidden">
          <AbstractArt variant="circles" className="right-0 bottom-0 opacity-30" />
          
          <div className="container-wide relative z-10">
            <div className="max-w-5xl">
              <ScrollReveal>
                <p className="text-caption mb-10">Our philosophy</p>
              </ScrollReveal>
              <div className="space-y-10">
                {principles.map((principle, index) => (
                  <ScrollReveal key={index} delay={(index + 1) * 150} direction="left">
                    <p className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] text-foreground tracking-[-0.03em]">
                      {principle}
                    </p>
                  </ScrollReveal>
                ))}
              </div>
              <ScrollReveal delay={600}>
                <div className="mt-16">
                  <Button variant="minimal" asChild>
                    <Link to="/about" className="inline-flex items-center gap-3 text-lg">
                      Learn more about us
                      <ArrowRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-primary-foreground/20" />
            <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border border-primary-foreground/10" />
          </div>
          
          <div className="container-wide relative z-10">
            <div className="grid lg:grid-cols-2 gap-14 items-center">
              <div>
                <ScrollReveal direction="none">
                  <h2 className="text-headline">
                    Ready to build something that matters?
                  </h2>
                  <p className="mt-8 text-xl opacity-70 max-w-lg">
                    Let's discuss how we can help you achieve your technical ambitions.
                  </p>
                </ScrollReveal>
              </div>
              <div className="lg:text-right">
                <ScrollReveal delay={100} direction="none">
                  <Button
                    variant="hero-outline"
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
                    asChild
                  >
                    <Link to="/contact" className="inline-flex items-center gap-3">
                      Start a conversation
                      <ArrowUpRight className="h-5 w-5" />
                    </Link>
                  </Button>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </PageTransition>
  );
}
