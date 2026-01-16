import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Layout } from "@/components/layout/Layout";
import { ScrollReveal } from "@/components/ScrollReveal";
import { PageTransition } from "@/components/PageTransition";
import { AbstractArt } from "@/components/AbstractArt";
import { useToast } from "@/hooks/use-toast";
import { Mail, Clock, MapPin } from "lucide-react";

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent",
      description: "We'll be in touch within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };
  useEffect(() => {window.scrollTo(0, 0);}, []);
  return (
    <PageTransition>
      <Layout>
        {/* Header */}
        <section className="section-padding-sm border-b border-border/50 relative overflow-hidden">
          <AbstractArt variant="circles" className="right-0 top-0 opacity-40" />
          
          <div className="container-wide relative z-10">
            <ScrollReveal>
              <p className="text-caption mb-4">Contact</p>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h1 className="text-display max-w-3xl text-foreground">
                Start a conversation
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="mt-10 text-body-lg max-w-xl">
                Tell us about your project. We'll respond within 24 hours.
              </p>
            </ScrollReveal>
          </div>
        </section>

        {/* Form */}
        <section className="section-padding relative overflow-hidden">
          <AbstractArt variant="lines" className="left-10 bottom-20 opacity-30" />
          
          <div className="container-wide relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
              <div>
                <form onSubmit={handleSubmit} className="space-y-10">
                  <ScrollReveal delay={100}>
                    <div className="group">
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-3">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Your name"
                        className="bg-transparent border-0 border-b-2 border-border rounded-none px-0 h-14 text-lg focus-visible:ring-0 focus-visible:border-foreground transition-colors"
                      />
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={150}>
                    <div className="group">
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-3">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="you@company.com"
                        className="bg-transparent border-0 border-b-2 border-border rounded-none px-0 h-14 text-lg focus-visible:ring-0 focus-visible:border-foreground transition-colors"
                      />
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={200}>
                    <div className="group">
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-3">
                        Company
                      </label>
                      <Input
                        id="company"
                        name="company"
                        type="text"
                        placeholder="Your company (optional)"
                        className="bg-transparent border-0 border-b-2 border-border rounded-none px-0 h-14 text-lg focus-visible:ring-0 focus-visible:border-foreground transition-colors"
                      />
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={250}>
                    <div className="group">
                      <label htmlFor="message" className="block text-sm font-medium text-foreground mb-3">
                        Tell us about your project
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        placeholder="What are you building? What challenges are you facing?"
                        rows={5}
                        className="bg-transparent border-0 border-b-2 border-border rounded-none px-0 text-lg focus-visible:ring-0 focus-visible:border-foreground transition-colors resize-none"
                      />
                    </div>
                  </ScrollReveal>

                  <ScrollReveal delay={300}>
                    <div className="pt-6">
                      <Button
                        type="submit"
                        variant="hero"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto"
                      >
                        {isSubmitting ? "Sending..." : "Send message"}
                      </Button>
                    </div>
                  </ScrollReveal>
                </form>
              </div>

              <div className="lg:pt-16">
                <ScrollReveal delay={200}>
                  <div className="space-y-10">
                    <div className="group p-6 rounded-2xl hover:bg-accent/30 transition-all duration-500">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                          <Mail className="w-5 h-5 text-foreground" />
                        </div>
                        <div>
                          <p className="text-caption mb-2">Email</p>
                          <a
                            href="mailto:hello@dashur.ai"
                            className="text-xl text-foreground hover:text-muted-foreground transition-colors"
                          >
                            hello@dashur.ai
                          </a>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group p-6 rounded-2xl hover:bg-accent/30 transition-all duration-500">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                          <Clock className="w-5 h-5 text-foreground" />
                        </div>
                        <div>
                          <p className="text-caption mb-2">Response time</p>
                          <p className="text-xl text-foreground">Within 24 hours</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="group p-6 rounded-2xl hover:bg-accent/30 transition-all duration-500">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors duration-300">
                          <MapPin className="w-5 h-5 text-foreground" />
                        </div>
                        <div>
                          <p className="text-caption mb-2">Location</p>
                          <p className="text-xl text-foreground">Remote-first, globally distributed</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </PageTransition>
  );
}
