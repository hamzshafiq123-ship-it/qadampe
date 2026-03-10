import { Button } from "@/components/ui/button";
import {
  QrCode, 
  Gift, 
  Tag, 
  MapPin, 
  History, 
  Smartphone,
  ArrowRight,
  Check
} from "lucide-react";
import { Services } from "./Services";

const userBenefits = [
  {
    icon: QrCode,
    title: "Scan QR at shops and restaurants",
    description: "Quick and easy payments with a simple scan",
    color: "primary"
  },
  {
    icon: Gift,
    title: "Earn loyalty points, vouchers, and rewards",
    description: "Get rewarded for every transaction you make",
    color: "orange"
  },
  {
    icon: Tag,
    title: "View offers, deals, and campaigns",
    description: "Never miss out on exclusive discounts",
    color: "purple"
  },
  {
    icon: MapPin,
    title: "Discover nearby verified merchants",
    description: "Find trusted businesses in your area",
    color: "success"
  },
  {
    icon: History,
    title: "Track your scans, rewards, and history",
    description: "Keep track of all your transactions and earnings",
    color: "primary"
  },
  {
    icon: Smartphone,
    title: "No wallet explanation, no bank complexity",
    description: "Simple, straightforward, and hassle-free",
    color: "success"
  },
];

const colorClasses = {
  primary: "bg-primary/10 text-primary",
  purple: "bg-qadampe-purple/10 text-qadampe-purple",
  orange: "bg-qadampe-orange/10 text-qadampe-orange",
  success: "bg-qadampe-success/10 text-qadampe-success",
};

export const ForUsers = () => {
  return (
    <section id="for-users" className="py-20 bg-section-gradient overflow-hidden">
      <Services />
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium">
            <div className="w-8 h-0.5 bg-primary rounded-full animate-fade-in-left" />
            For Users
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in-up animation-delay-100">
            <span className="text-foreground">Why Download</span>
            <br />
            <span className="text-gradient">Qadampe?</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Experience seamless payments, earn rewards, and discover amazing deals 
            — all without the complexity of traditional banking or digital wallets.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {userBenefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className="bg-white rounded-2xl p-6 shadow-3d border border-[#00BAF2]/30 hover:shadow-3d-hover card-3d transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl ${colorClasses[benefit.color as keyof typeof colorClasses]} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <benefit.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              </div>
              
              <h3 className="text-lg font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">
                {benefit.title}
              </h3>
              
              <p className="text-sm text-muted-foreground">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Ready to Get Started?
            </h3>
            
            <p className="text-muted-foreground">
              Join thousands of users who are already enjoying seamless payments 
              and amazing rewards. Download the app today and start earning!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" className="gap-2" asChild>
                <a href="/content#download">
                  Download Now
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="/content#about">
                  Learn More
                </a>
              </Button>
            </div>

            {/* Key Points */}
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-qadampe-success" />
                <span>Free to Download</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-qadampe-success" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-qadampe-success" />
                <span>Secure & Safe</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

