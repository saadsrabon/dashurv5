import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageTransition } from "@/components/PageTransition";
import { AbstractArt } from "@/components/AbstractArt";
import { useEffect } from "react";

const markets = [
  {
    id: "Hospitality/Entertainment",
    name: "Hospitality/Entertainment",
    challenge: "Navigating complex regulations while delivering seamless user experiences",
    approach: "Our AI and robotics solutions on Hospitality are streamlining operations and enhancing guest experiences. From automated check-in systems to robot concierges for hotels and resorts deliver services. Also, providing automated adjusting equipment for Entertainment.",
  },
  {
    id: "healthcare",
    name: "Healthcare",
    challenge: "Balancing innovation with patient privacy and clinical accuracy",
    approach: "We are revolutionizing patient care, assisting in diagnosis, surgery, and rehabilitation, while also streamlining administrative tasks, leading to improved treatment outcomes and operational efficiency within medical facilities.",
  },
  {
    id: "Manufacturing",
    name: "Manufacturing",
    challenge: "Optimizing complex supply chains with real-time visibility",
    approach: "Dashur AI is transforming the Manufacturing industry, enhancing efficiency and precision through automated assembly lines, predictive maintenance algorithms, and robotic arms to cope with the evolving market demands.",
  },
  {
    id: "DOD",
    name: "DOD",
    challenge: "Scaling product development without sacrificing velocity",
    approach: "In Defense, we are reshaping military capabilities, enabling autonomous drones, unmanned vehicles, and intelligent surveillance systems to enhance situational awareness, strategic planning, and mission execution, while also minimizing risks to human personnel on the battlefield.",
  },
  {
    id: "Aerospace",
    name: "Enterprise Systems",
    challenge: "Modernizing legacy systems without disrupting operations",
    approach: "We help designing and producing advanced aircraft and spacecraft, enabling precise engineering, autonomous navigation, and predictive maintenance, ultimately ensuring safer and more efficient air and space travel. Also, managing aero plane show to attract people in Aerospace.",
  },
];

export default function Markets() {
    useEffect(() => {window.scrollTo(0, 0);}, []);
  return (
    <PageTransition>
      <Layout>
        {/* Header */}
        <section className="section-padding-sm border-b border-border/50 relative overflow-hidden">
          <AbstractArt variant="lines" className="right-10 top-10 opacity-40" />
          
          <div className="container-wide relative z-10">
            <ScrollReveal>
              <p className="text-caption mb-4">Markets</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-display max-w-4xl text-foreground">
                Industry expertise that accelerates delivery
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mt-10 text-body-lg max-w-2xl">
                We understand the unique constraints and opportunities in each sector we serve.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Markets Grid */}
        <section className="section-padding relative overflow-hidden">
          <AbstractArt variant="dots" className="left-10 top-40 opacity-30" />
          
          <div className="container-wide relative z-10">
            <div className="space-y-0">
              {markets.map((market, index) => (
                <ScrollReveal key={market.id} delay={index * 50}>
                  <div
                    id={market.id}
                    className="group border-b border-border/50 last:border-b-0 py-16 grid md:grid-cols-3 gap-8 md:gap-16 hover:bg-accent/20 transition-colors duration-500 -mx-8 px-8 rounded-2xl"
                  >
                    {/* Market name */}
                    <div>
                      <h2 className="text-2xl font-semibold text-foreground group-hover:translate-x-1 transition-transform duration-300">{market.name}</h2>
                    </div>

                    {/* Challenge */}
                    <div>
                      <p className="text-caption mb-3">The challenge</p>
                      <p className="text-body">{market.challenge}</p>
                    </div>

                    {/* Approach */}
                    <div>
                      <p className="text-caption mb-3">Our approach</p>
                      <p className="text-body">{market.approach}</p>
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
            <div className="absolute top-10 right-20 w-64 h-64 rounded-full border border-primary-foreground/20" />
          </div>
          
          <div className="container-wide text-center relative z-10">
            <ScrollReveal>
              <h2 className="text-headline max-w-2xl mx-auto">
                Building for a different industry?
              </h2>
              <p className="mt-6 text-xl opacity-70 max-w-xl mx-auto">
                Our engineering principles apply across domains. Let's discuss your specific challenges.
              </p>
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
