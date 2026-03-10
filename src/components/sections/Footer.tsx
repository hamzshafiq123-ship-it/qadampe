import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube,
  Apple,
  Smartphone,
  Github
} from "lucide-react";

const footerSections = [
  {
    title: "Product",
    links: [
      { label: "QR Payments", href: "/content#qr-payments" },
      { label: "For Merchants", href: "/content#merchants" },
      { label: "For Users", href: "/content#for-users" },
      { label: "Rewards & Offers", href: "/content#rewards" },
      { label: "Dashboard", href: "/content#merchants" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About Us", href: "/content#about" },
      { label: "Contact", href: "/content#contact" },
      { label: "Careers", href: "/content#contact" },
      { label: "Blog", href: "/content#blog" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Terms & Conditions", href: "/content#terms" },
      { label: "Privacy Policy", href: "/content#privacy" },
      { label: "Cookie Policy", href: "/content#privacy" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Help & FAQs", href: "/content#faqs" },
      { label: "Contact Support", href: "/content#contact" },
      { label: "Documentation", href: "/content#how-it-works" },
    ],
  },
];

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com", label: "Facebook" },
  { icon: Twitter, href: "https://x.com", label: "Twitter" },
  { icon: Instagram, href: "https://www.instagram.com", label: "Instagram" },
  { icon: Linkedin, href: "https://www.linkedin.com", label: "LinkedIn" },
  { icon: Youtube, href: "https://www.youtube.com", label: "YouTube" },
];

const appStores = [
  { 
    icon: Apple, 
    label: "Download on the App Store", 
    href: "https://apps.apple.com/",
    platform: "iOS"
  },
  { 
    icon: Smartphone, 
    label: "Get it on Google Play", 
    href: "https://play.google.com/store",
    platform: "Android"
  },
];

export const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-0">
              <img 
                src="/qadampe-logo.png" 
                alt="QadamPe" 
                className="h-[130px] w-auto object-contain"
              />
            </div>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Simple payments, powerful analytics, and engaging rewards. 
              All in one platform for businesses and customers.
            </p>

            {/* App Download Links */}
            <div id="download" className="space-y-3 mb-6">
              <p className="text-sm font-medium text-foreground mb-2">Download the App</p>
              {appStores.map((store) => (
                <a
                  key={store.platform}
                  href={store.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 bg-secondary hover:bg-secondary/80 rounded-lg transition-colors group"
                >
                  <store.icon className="w-5 h-5 text-foreground" />
                  <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                    {store.label}
                  </span>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links Sections */}
          {footerSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-sm font-semibold text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8 mb-6">
          {/* Developer Note */}
          <div className="bg-secondary/50 rounded-lg p-4 mb-6">
            <div className="flex items-start gap-3">
              <Github className="w-5 h-5 text-muted-foreground mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-sm font-medium text-foreground mb-1">
                  Important Note for Developers
                </p>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  This website is built with a modular architecture. Payments, memberships, 
                  and analytics pricing pages can be added later as separate modules. 
                  No hard dependency on Raast wording yet - we focus on experience, not regulation language.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-6 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Qadampe. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a href="/content#privacy" className="hover:text-primary transition-colors">
              Privacy
            </a>
            <a href="/content#terms" className="hover:text-primary transition-colors">
              Terms
            </a>
            <a href="/content#privacy" className="hover:text-primary transition-colors">
              Cookies
            </a>
          </div>
        </div>
      </div>

      {/* Accent Bar */}
      <div className="h-1 gradient-primary" />
    </footer>
  );
};
