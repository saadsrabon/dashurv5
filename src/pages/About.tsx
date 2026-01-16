import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageTransition } from "@/components/PageTransition";
import { AbstractArt } from "@/components/AbstractArt";
import { useEffect } from "react";

const principles = [
  {
    title: "Clarity over cleverness",
    description: "We write code that explains itself. Every architectural decision should be obvious to the next engineer.",
  },
  {
    title: "Simplicity is the goal",
    description: "Complex problems don't require complex solutions. We find the elegant approach that reduces cognitive load.",
  },
  {
    title: "Quality is non-negotiable",
    description: "We don't ship code we wouldn't be proud to maintain. Every commit reflects our standards.",
  },
  {
    title: "Long-term thinking",
    description: "We build systems for years, not quarters. Technical debt is acknowledged and managed deliberately.",
  },
];

const standards = [
  "Every system must be observable",
  "Documentation is part of the deliverable",
  "Security is designed in, not bolted on",
  "Tests prove correctness, not coverage",
  "Performance is measured, not assumed",
  "Failure modes are designed explicitly",
];

export default function About() {
    useEffect(() => {window.scrollTo(0, 0);}, []);
  return (
    <PageTransition>
      <Layout>
        {/* Header */}
        <section className="section-padding-sm border-b border-border/50 relative overflow-hidden">
          <AbstractArt variant="circles" className="right-0 top-0 opacity-40" />
          
          <div className="container-wide relative z-10">
            <ScrollReveal>
              <p className="text-caption mb-4">About</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-display max-w-4xl text-foreground">
                We build systems, not slides
              </h1>
            </ScrollReveal>
          </div>
        </section>

        {/* Mission */}
        <section className="section-padding border-b border-border/50 relative overflow-hidden">
          <AbstractArt variant="lines" className="left-10 top-20 opacity-30" />
          
          <div className="container-wide relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
              <ScrollReveal direction="left">
                <div>
                  <p className="text-caption mb-4">Our mission</p>
                  <p className="text-2xl md:text-3xl font-medium leading-[1.2] text-foreground">
                    To be the engineering partner that ambitious companies trust with their most critical systems.
                  </p>
                </div>
              </ScrollReveal>
              <ScrollReveal delay={100} direction="right">
                <div>
                  <p className="text-body">
                    We're a team of engineers, architects, and builders who believe that exceptional software is still rare—and shouldn't be. We partner with companies that share our commitment to quality, working as an extension of their teams to solve problems that matter.
                  </p>
                  <p className="mt-6 text-body">
                    Every engagement starts with understanding. We ask questions until the problem is clear, then design solutions that address root causes rather than symptoms.
                  </p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Principles */}
        <section className="section-padding border-b border-border/50 relative overflow-hidden">
          <AbstractArt variant="grid" className="right-20 bottom-20 opacity-30" />
          
          <div className="container-wide relative z-10">
            <ScrollReveal>
              <p className="text-caption mb-16">Our principles</p>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {principles.map((principle, index) => (
                <ScrollReveal key={principle.title} delay={index * 100}>
                  <div className="group p-8 rounded-2xl hover:bg-accent/30 transition-all duration-500 hover-lift">
                    <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-foreground/80 transition-colors">{principle.title}</h3>
                    <p className="text-body">{principle.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Standards */}
        <section className="section-padding border-b border-border/50 relative overflow-hidden">
          <AbstractArt variant="dots" className="left-0 top-20 opacity-30" />
          
          <div className="container-wide relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
              <ScrollReveal direction="left">
                <div>
                  <p className="text-caption mb-4">Our standards</p>
                  <p className="text-headline text-foreground">
                    How we decide what's good enough
                  </p>
                </div>
              </ScrollReveal>
              <div>
                <ul className="space-y-6">
                  {standards.map((standard, index) => (
                    <ScrollReveal key={index} delay={index * 75}>
                      <li className="flex items-start gap-4 text-foreground group">
                        <span className="w-2 h-2 rounded-full bg-primary/40 mt-3 shrink-0 group-hover:bg-primary transition-colors duration-300" />
                        <span className="text-lg group-hover:translate-x-1 transition-transform duration-300">{standard}</span>
                      </li>
                    </ScrollReveal>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full border border-primary-foreground/20" />
          </div>
          
          <div className="container-wide relative z-10">
            <div className="max-w-2xl">
              <ScrollReveal direction="none">
                <h2 className="text-headline">
                  Interested in how we work?
                </h2>
                <p className="mt-6 text-xl opacity-70">
                  We're always open to conversations about interesting technical challenges.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100} direction="none">
                <div className="mt-10 flex flex-wrap gap-4">
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
                  <Button 
                    variant="hero-outline" 
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
                    asChild
                  >
                    <Link to="/careers" className="inline-flex items-center gap-2">
                      View open roles
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      </Layout>
    </PageTransition>
  );
}
