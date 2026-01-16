import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageTransition } from "@/components/PageTransition";
import { AbstractArt } from "@/components/AbstractArt";
import { useEffect } from "react";

const expectations = [
  {
    title: "Ownership",
    description: "You own your work from idea to production. No handoffs, no excuses.",
  },
  {
    title: "Quality",
    description: "You're not satisfied until the code is something you'd proudly show to peers.",
  },
  {
    title: "Clarity",
    description: "You communicate clearly—in code, in writing, in conversation.",
  },
  {
    title: "Long-term thinking",
    description: "You build for the future, not just the current sprint.",
  },
];

const openings = [
  {
    title: "Senior Software Engineer",
    location: "Remote",
    type: "Full-time",
    description: "Build production systems for enterprise clients. Experience with distributed systems required.",
  },
  {
    title: "ML/AI Engineer",
    location: "Remote",
    type: "Full-time",
    description: "Design and implement machine learning systems that solve real business problems.",
  },
  {
    title: "Technical Architect",
    location: "Remote",
    type: "Full-time",
    description: "Lead technical strategy for complex engagements. 10+ years of engineering experience.",
  },
];

export default function Careers() {
    useEffect(() => {window.scrollTo(0, 0);}, []);
  return (
    <PageTransition>
      <Layout>
        {/* Header */}
        <section className="section-padding-sm border-b border-border/50 relative overflow-hidden">
          <AbstractArt variant="waves" className="right-10 top-10 opacity-40" />
          
          <div className="container-wide relative z-10">
            <ScrollReveal>
              <p className="text-caption mb-4">Careers</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-display max-w-4xl text-foreground">
                For people who build things that matter
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mt-10 text-body-lg max-w-2xl">
                We hire builders, not managers of builders. If you want to do the best work of your career, keep reading.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* What we expect */}
        <section className="section-padding border-b border-border/50 relative overflow-hidden">
          <AbstractArt variant="dots" className="left-10 top-40 opacity-30" />
          
          <div className="container-wide relative z-10">
            <ScrollReveal>
              <p className="text-caption mb-16">What we expect</p>
            </ScrollReveal>
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              {expectations.map((item, index) => (
                <ScrollReveal key={item.title} delay={index * 100}>
                  <div className="group p-8 rounded-2xl hover:bg-accent/30 transition-all duration-500 hover-lift">
                    <h3 className="text-xl font-semibold mb-4 text-foreground group-hover:text-foreground/80 transition-colors">{item.title}</h3>
                    <p className="text-body">{item.description}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="section-padding border-b border-border/50 relative overflow-hidden">
          <AbstractArt variant="lines" className="right-20 top-20 opacity-30" />
          
          <div className="container-wide relative z-10">
            <ScrollReveal>
              <p className="text-caption mb-16">Open positions</p>
            </ScrollReveal>
            
            <div className="space-y-0">
              {openings.map((job, index) => (
                <ScrollReveal key={job.title} delay={index * 100}>
                  <div className="group border-b border-border/50 last:border-b-0 py-12 hover:bg-accent/20 transition-colors duration-500 -mx-8 px-8 rounded-2xl">
                    <div className="grid md:grid-cols-3 gap-6 md:gap-8">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:translate-x-1 transition-transform duration-300">{job.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">
                          {job.location} · {job.type}
                        </p>
                      </div>
                      <div className="md:col-span-2 flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <p className="text-body max-w-lg">{job.description}</p>
                        <Button variant="minimal" asChild className="self-start md:self-center shrink-0">
                          <Link to="/contact" className="inline-flex items-center gap-2">
                            Apply
                            <ArrowRight className="h-4 w-4" />
                          </Link>
                        </Button>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* No openings */}
        <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-64 h-64 rounded-full border border-primary-foreground/20" />
            <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border border-primary-foreground/10" />
          </div>
          
          <div className="container-wide relative z-10">
            <div className="max-w-2xl">
              <ScrollReveal direction="none">
                <h2 className="text-headline">
                  Don't see the right role?
                </h2>
                <p className="mt-6 text-xl opacity-70">
                  We're always interested in hearing from exceptional builders. If you believe you'd be a great fit, reach out anyway.
                </p>
              </ScrollReveal>
              <ScrollReveal delay={100} direction="none">
                <div className="mt-10">
                  <Button 
                    variant="hero-outline" 
                    className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50"
                    asChild
                  >
                    <Link to="/contact" className="inline-flex items-center gap-2">
                      Get in touch
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
