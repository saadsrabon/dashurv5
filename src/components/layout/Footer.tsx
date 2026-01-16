import { Link } from "react-router-dom";
import logo from "@/assets/footerlight.png"
const footerLinks = {
  company: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
  ],
  capabilities: [
    { name: "AI & Automation", href: "/capabilities#ai" },
    { name: "Software Engineering", href: "/capabilities#engineering" },
    { name: "Product Architecture", href: "/capabilities#product" },
  ],
  markets: [
    { name: "Fintech", href: "/markets#fintech" },
    { name: "Healthcare", href: "/markets#healthcare" },
    { name: "Enterprise", href: "/markets#enterprise" },
  ],
};

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="container-wide section-padding-sm">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 md:gap-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link to="/" className="text-lg font-semibold text-foreground">
            <img src={logo} alt="" />
            </Link>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Engineering intelligent systems for companies that scale.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-caption mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div>
            <h4 className="text-caption mb-4">Capabilities</h4>
            <ul className="space-y-3">
              {footerLinks.capabilities.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Markets */}
          <div>
            <h4 className="text-caption mb-4">Markets</h4>
            <ul className="space-y-3">
              {footerLinks.markets.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Dashur AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
