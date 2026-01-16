import { Link } from "react-router-dom";
import { ArrowRight, Award, Cloud, Terminal, Code, Database, GitBranch, Server, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageTransition } from "@/components/PageTransition";
import { AbstractArt } from "@/components/AbstractArt";
import { useEffect, useRef } from "react";
import { motion, useInView } from 'framer-motion';

const capabilities = [
  {
    id: "ai",
    category: "AI & Automation",
    title: "Intelligent systems that think ahead",
    description: "We build AI solutions that integrate seamlessly into existing workflows, automating complex processes while maintaining human oversight and control.",
    services: [
      "Machine learning model development",
      "Natural language processing systems",
      "Computer vision applications",
      "Predictive analytics platforms",
      "Intelligent process automation",
    ],
  },
  {
    id: "engineering",
    category: "Software Engineering",
    title: "Code that outlives projects",
    description: "Production-grade software built with obsessive attention to performance, security, and maintainability. Every line serves a purpose.",
    services: [
      "Full-stack application development",
      "API design and implementation",
      "Microservices architecture",
      "Cloud-native solutions",
      "Performance optimization",
    ],
  },
  {
    id: "product",
    category: "Product Architecture",
    title: "Foundations for rapid iteration",
    description: "Strategic technical decisions that enable speed without sacrificing quality. We design systems that grow with your ambitions.",
    services: [
      "Technical strategy consulting",
      "System architecture design",
      "Technology stack selection",
      "Scalability planning",
      "Technical due diligence",
    ],
  },
  {
    id: "data",
    category: "Data & Infrastructure",
    title: "Reliability at any scale",
    description: "Robust data systems and infrastructure engineered for performance, security, and growth. Built to handle whatever comes next.",
    services: [
      "Data pipeline architecture",
      "Real-time analytics systems",
      "Cloud infrastructure design",
      "Database optimization",
      "DevOps and CI/CD implementation",
    ],
  },
];

  const technologyGroups = [
    {
      title: "Mobile Development",
      subtext: "Cross-platform and native mobile solutions",
      items: [
        {
          name: "iOS",
          description: "Apple Platform Development",
          imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/apple/apple-original.svg",
        },
        {
          name: "Android",
          description: "Google Platform Development",
          imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg",
        },
        {
          name: "Flutter",
          description: "Cross-Platform Development",
          imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg",
        }
      ]
    },
    {
      title: "Backend & Systems",
      subtext: "Enterprise-grade server infrastructure",
      items: [
        {
          name: "Python",
          description: "Backend Development & AI/ML",
          imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "Django",
          description: "Python Web Framework",
          imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg",
        },
        {
          name: "Laravel",
          description: "PHP Framework",
          imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
        },
        {
          name: "Go",
          description: "System Programming",
          imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg",
        },
        {
          name: "Java",
          description: "Enterprise Applications",
          imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
        }
      ]
    },
    {
      title: "Frontend & Runtime",
      subtext: "Modern client-side and server-side JavaScript",
      items: [
        {
          name: "React JS",
          description: "Frontend Development",
          imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Node.js",
          description: "JavaScript Runtime",
          imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
        },
        {
          name: "TypeScript",
          description: "Typed JavaScript",
          imageLink: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
        }
      ]
    }
  ];

const certifications = [
  { name: "Ultimate AWS Cloud", icon: Cloud, category: "Cloud" },
  { name: "Mac OS Terminal", icon: Terminal, category: "Systems" },
  { name: "Python Intermediate", icon: Code, category: "Language" },
  { name: "Python Advanced", icon: Code, category: "Language" },
  { name: "GCP Associate Cloud", icon: Cloud, category: "Cloud" },
  { name: "Github/Git", icon: GitBranch, category: "DevOps" },
  { name: "Front-end Development", icon: Layers, category: "Development" },
  { name: "Full Stack Development", icon: Server, category: "Development" },
  { name: "Node.js", icon: Database, category: "Backend" },
];

const caseStudies = [
  {
    client: "FinServe Global",
    title: "Next-Gen Payment Gateway",
    description: "Built a high-throughput payment processing system handling millions of transactions daily with 99.99% uptime.",
    metrics: { value: "50M+", label: "Daily Transactions" },
    category: "Fintech",
  },
  {
    client: "MediCare Plus",
    title: "AI Diagnostic Platform",
    description: "Developed ML models for medical imaging analysis, improving diagnostic accuracy and reducing wait times.",
    metrics: { value: "97%", label: "Accuracy Rate" },
    category: "Healthcare",
  },
  {
    client: "LogiTrack",
    title: "Supply Chain Intelligence",
    description: "Real-time tracking and predictive analytics platform optimizing logistics across 3 continents.",
    metrics: { value: "40%", label: "Cost Reduction" },
    category: "Logistics",
  },
];

export default function Capabilities() {
   const technologiesRef = useRef(null);
   const technologiesInView = useInView(technologiesRef, { once: false, margin: "-100px" });
    useEffect(() => {window.scrollTo(0, 0);}, []);
  return (
    <PageTransition>
      <Layout>
        {/* Header */}
        <section className="section-padding-sm border-b border-border/50 relative overflow-hidden">
          <AbstractArt variant="circles" className="right-0 top-0 opacity-40" />
          
          <div className="container-wide relative z-10">
            <ScrollReveal>
              <p className="text-caption mb-4">Capabilities</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-display max-w-4xl text-foreground">
                Technical depth without the complexity
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mt-10 text-body-lg max-w-2xl">
                We approach every engagement with a clear methodology: understand deeply, design deliberately, execute precisely.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Capabilities List */}
        <section className="relative">
          <AbstractArt variant="lines" className="left-10 top-40 opacity-30" />
          
          {capabilities.map((capability, index) => (
            <div
              key={capability.id}
              id={capability.id}
              className="border-b border-border/50"
            >
              <div className="container-wide section-padding relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
                  {/* Left */}
                  <ScrollReveal direction={index % 2 === 0 ? "left" : "right"}>
                    <div>
                      <p className="text-caption mb-4">{capability.category}</p>
                      <h2 className="text-headline text-foreground">{capability.title}</h2>
                      <p className="mt-6 text-body max-w-lg">{capability.description}</p>
                    </div>
                  </ScrollReveal>

                  {/* Right - Services */}
                  <ScrollReveal delay={100} direction={index % 2 === 0 ? "right" : "left"}>
                    <ul className="space-y-5">
                      {capability.services.map((service, serviceIndex) => (
                        <li
                          key={service}
                          className="flex items-start gap-4 text-foreground group"
                        >
                          <span className="w-2 h-2 rounded-full bg-primary/40 mt-3 shrink-0 group-hover:bg-primary transition-colors duration-300" />
                          <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">{service}</span>
                        </li>
                      ))}
                    </ul>
                  </ScrollReveal>
                </div>
              </div>
            </div>
          ))}
        </section>
        <section 
          ref={technologiesRef}
          className="px-6 md:px-12 lg:px-24 xl:px-32 py-32"
        >
          <div className="max-w-7xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              animate={technologiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
              className="text-4xl md:text-5xl font-bold mb-20 tracking-tight"
            >
              Technologies
            </motion.h2>

            <div className="space-y-32">
              {technologyGroups.map((group, groupIndex) => (
                <motion.div
                  key={groupIndex}
                  initial={{ opacity: 0, y: 30 }}
                  animate={technologiesInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ 
                    duration: 0.8, 
                    ease: [0.25, 0.1, 0.25, 1],
                    delay: groupIndex * 0.2
                  }}
                  className="space-y-8"
                >
                  <div className="space-y-4 mb-12">
                    <h3 className="text-3xl md:text-4xl font-semibold tracking-tight">
                      {group.title}
                    </h3>
                    <p className="text-lg text-slate-500">
                      {group.subtext}
                    </p>
                    <div className="h-px w-24 bg-slate-800"></div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
                    {group.items.map((tech, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0 }}
                        animate={technologiesInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ 
                          duration: 0.6, 
                          ease: [0.25, 0.1, 0.25, 1],
                          delay: (groupIndex * 0.2) + (index * 0.1)
                        }}
                        className="group"
                      >
                        <div className="space-y-6">
                          {/* Logo */}
                          <div className="flex items-center space-x-4">
                            <div className="w-12 h-12 flex items-center justify-center opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                              <img 
                                src={tech.imageLink} 
                                alt={tech.name}
                                className={`w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all duration-300 ${ tech.name === "iOS" ? "brightness-0 invert" : "" }`} 
                              />
                            </div>
                          </div>

                          {/* Name and Description */}
                          <div className="space-y-2">
                            <h4 className="text-xl font-semibold tracking-tight group-hover:text-cyan-300 transition-colors duration-300">
                              {tech.name}
                            </h4>
                            <p className="text-sm text-slate-500 leading-relaxed">
                              {tech.description}
                            </p>
                          </div>

                          {/* Subtle underline on hover */}
                          <div className="h-px w-0 bg-slate-700 group-hover:w-full transition-all duration-500"></div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Certifications Section */}
        <section className="section-padding bg-secondary/30 relative overflow-hidden">
          <AbstractArt variant="dots" className="right-20 top-20 opacity-40" />
          
          <div className="container-wide relative z-10">
            <ScrollReveal>
              <div className="text-center mb-16">
                <p className="text-caption mb-5">Certifications</p>
                <h2 className="text-headline text-foreground">
                  Industry-recognized expertise
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <ScrollReveal key={cert.name} delay={index * 60}>
                  <div className="group flex items-center gap-5 p-6 rounded-2xl bg-card border border-border/30 hover:bg-accent/40 hover:border-border/50 transition-all duration-500 hover-lift">
                    <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                      <cert.icon className="w-6 h-6 text-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-foreground text-base">{cert.name}</h3>
                      <p className="text-sm text-muted-foreground mt-1">{cert.category}</p>
                    </div>
                    <Award className="w-5 h-5 text-muted-foreground/50 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="section-padding relative overflow-hidden">
          <AbstractArt variant="waves" className="left-10 bottom-20 opacity-40" />
          
          <div className="container-wide relative z-10">
            <ScrollReveal>
              <div className="mb-16">
                <p className="text-caption mb-5">Case Studies</p>
                <h2 className="text-headline text-foreground">
                  Proven track record
                </h2>
              </div>
            </ScrollReveal>

            <div className="grid md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <ScrollReveal key={study.title} delay={index * 100}>
                  <div className="group h-full p-8 rounded-3xl bg-card border border-border/30 hover:bg-accent/30 hover:border-border/50 transition-all duration-500 hover-lift flex flex-col">
                    <span className="inline-block px-4 py-1.5 rounded-full bg-primary/5 text-sm font-medium text-foreground mb-6 w-fit">
                      {study.category}
                    </span>
                    <p className="text-sm text-muted-foreground mb-3">{study.client}</p>
                    <h3 className="text-xl font-semibold text-foreground mb-4 group-hover:text-foreground/80 transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-body text-base flex-grow">{study.description}</p>
                    <div className="mt-6 pt-6 border-t border-border/30">
                      <p className="text-4xl font-semibold text-foreground tracking-tight">{study.metrics.value}</p>
                      <p className="text-sm text-muted-foreground mt-1">{study.metrics.label}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full border border-primary-foreground/20" />
            <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full border border-primary-foreground/15" />
          </div>
          
          <div className="container-wide text-center relative z-10">
            <ScrollReveal>
              <h2 className="text-headline max-w-2xl mx-auto">
                Let's discuss your technical challenges
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="mt-10">
                <Button 
                  variant="hero-outline" 
                  className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
                  asChild
                >
                  <Link to="/contact" className="inline-flex items-center gap-2">
                    Start a conversation
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </Layout>
    </PageTransition>
  );
}
