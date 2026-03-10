import { Button } from "@/components/ui/button";
import { 
  UserPlus, 
  QrCode, 
  Smartphone, 
  BarChart3, 
  Gift,
  ArrowRight,
  Check,
  Store,
  Download,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const userSteps = [
  {
    step: 1,
    icon: Download,
    title: "Download the App",
    description: "Get Qadampe from the App Store or Google Play. It's free and takes just a minute to install.",
    color: "primary"
  },
  {
    step: 2,
    icon: QrCode,
    title: "Scan QR at Shops",
    description: "When you're at a merchant, simply open the app and scan their QR code to make a payment.",
    color: "success"
  },
  {
    step: 3,
    icon: Smartphone,
    title: "Pay Directly",
    description: "Pay directly from your bank account. No wallet needed, no complex setup required.",
    color: "orange"
  },
  {
    step: 4,
    icon: Gift,
    title: "Earn Rewards",
    description: "Automatically earn loyalty points, cashback, and exclusive offers with every transaction.",
    color: "purple"
  },
];

const merchantSteps = [
  {
    step: 1,
    icon: UserPlus,
    title: "Merchant Signs Up",
    description: "Quick and easy registration process. Get started in minutes with no complex setup required.",
    color: "primary"
  },
  {
    step: 2,
    icon: QrCode,
    title: "Gets a QR",
    description: "Receive your unique QR code instantly. Print it, display it, and start accepting payments right away.",
    color: "success"
  },
  {
    step: 3,
    icon: Smartphone,
    title: "Customer Scans and Pays",
    description: "Customers simply scan your QR code with their phone and pay directly from their bank account.",
    color: "orange"
  },
  {
    step: 4,
    icon: BarChart3,
    title: "Merchant Sees Activity on Dashboard",
    description: "Track all transactions, view analytics, and monitor your business performance in real-time.",
    color: "purple"
  },
  {
    step: 5,
    icon: TrendingUp,
    title: "Grow Your Business",
    description: "Engage customers with rewards, increase visibility, and watch your business grow.",
    color: "success"
  },
];

const colorClasses = {
  primary: "bg-primary/10 text-primary",
  purple: "bg-qadampe-purple/10 text-qadampe-purple",
  orange: "bg-qadampe-orange/10 text-qadampe-orange",
  success: "bg-qadampe-success/10 text-qadampe-success",
};

export const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 bg-section-gradient-alt overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium">
            <div className="w-8 h-0.5 bg-primary rounded-full animate-fade-in-left" />
            How It Works
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in-up animation-delay-100">
            <span className="text-foreground">Simple Flow,</span>
            <br />
            <span className="text-gradient">Powerful Results</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            No technical complexity, no banking jargon. Just a straightforward process 
            that works for everyone.
          </p>
        </div>

        {/* For Users Section */}
        <div className="mb-20">
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
              <Smartphone className="w-4 h-4" />
              <span>For Users</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              How It Works for You
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start using Qadampe in just a few simple steps. No wallet, no complexity.
            </p>
          </div>

          {/* User Steps */}
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8 relative">
              {userSteps.map((step, index) => (
                <div
                  key={step.step}
                  className="flex flex-col md:flex-row gap-6 items-start animate-fade-in-up relative group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0 flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                      {step.step}
                    </div>
                    <div className={`w-12 h-12 rounded-xl ${colorClasses[step.color as keyof typeof colorClasses]} flex items-center justify-center hidden md:flex transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <step.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl ${colorClasses[step.color as keyof typeof colorClasses]} flex items-center justify-center md:hidden transition-all duration-300 group-hover:scale-110`}>
                        <step.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>

                  {/* Connector Arrow */}
                  {index < userSteps.length - 1 && (
                    <div className="hidden md:block absolute left-8 top-20 w-0.5 h-12 bg-primary/20" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA for Users */}
          <div className="mt-12 text-center animate-fade-in-up animation-delay-500">
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/content#for-users">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        {/* Divider */}
        <div className="my-16 flex items-center justify-center">
          <div className="flex-1 h-px bg-border"></div>
          <div className="px-4 text-muted-foreground text-sm">OR</div>
          <div className="flex-1 h-px bg-border"></div>
        </div>

        {/* For Merchants Section */}
        <div>
          <div className="text-center mb-12 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
              <Store className="w-4 h-4" />
              <span>For Merchants</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              How It Works for Your Business
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start accepting payments and growing your business in minutes.
            </p>
          </div>

          {/* Merchant Steps */}
          <div className="max-w-5xl mx-auto">
            <div className="space-y-8 relative">
              {merchantSteps.map((step, index) => (
                <div
                  key={step.step}
                  className="flex flex-col md:flex-row gap-6 items-start animate-fade-in-up relative group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  {/* Step Number & Icon */}
                  <div className="flex-shrink-0 flex items-center gap-4">
                    <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center text-primary-foreground font-bold text-xl shadow-lg relative z-10 transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                      {step.step}
                    </div>
                    <div className={`w-12 h-12 rounded-xl ${colorClasses[step.color as keyof typeof colorClasses]} flex items-center justify-center hidden md:flex transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}>
                      <step.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1 bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl ${colorClasses[step.color as keyof typeof colorClasses]} flex items-center justify-center md:hidden transition-all duration-300 group-hover:scale-110`}>
                        <step.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>

                  {/* Connector Arrow */}
                  {index < merchantSteps.length - 1 && (
                    <div className="hidden md:block absolute left-8 top-20 w-0.5 h-12 bg-primary/20" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA for Merchants */}
          <div className="mt-12 text-center animate-fade-in-up animation-delay-600">
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/content#merchants">
                Learn More
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        {/* General CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20 animate-fade-in-up animation-delay-700">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Ready to Get Started?
            </h3>
            
            <p className="text-muted-foreground">
              Join thousands of merchants and customers using Qadampe. 
              Simple, fast, and rewarding for everyone.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" className="gap-2" asChild>
                <Link to="/content#download">
                  Start Now
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* Key Points */}
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-qadampe-success" />
                <span>No Technical Knowledge Required</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-qadampe-success" />
                <span>Instant Setup</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-qadampe-success" />
                <span>Works Immediately</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

