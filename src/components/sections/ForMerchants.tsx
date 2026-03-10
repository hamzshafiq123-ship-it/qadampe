import { Button } from "@/components/ui/button";
import { 
  QrCode, 
  BarChart3, 
  Calendar, 
  Users, 
  Eye, 
  Shield, 
  TrendingUp,
  ArrowRight,
  Check,
  Store
} from "lucide-react";
import { Services } from "./Services";

const merchantBenefits = [
  {
    icon: QrCode,
    title: "One QR for your business",
    description: "A single QR code that handles all your payment needs",
    color: "primary"
  },
  {
    icon: BarChart3,
    title: "Business dashboard to track QR activity",
    description: "Monitor all transactions and customer interactions in real-time",
    color: "purple"
  },
  {
    icon: Calendar,
    title: "See daily and weekly performance",
    description: "Get insights into your sales trends and patterns",
    color: "orange"
  },
  {
    icon: Users,
    title: "Customer engagement through rewards",
    description: "Build loyalty and increase repeat business with reward programs",
    color: "success"
  },
  {
    icon: Eye,
    title: "Visibility inside the Qadampe app",
    description: "Get discovered by thousands of active users in your area",
    color: "primary"
  },
  {
    icon: Shield,
    title: "Trust badge and merchant profile",
    description: "Build credibility with verified status and professional profile",
    color: "success"
  },
  {
    icon: TrendingUp,
    title: "Future-ready for analytics and growth",
    description: "Advanced tools and insights to scale your business",
    color: "purple"
  },
];

const colorClasses = {
  primary: "bg-primary/10 text-primary",
  purple: "bg-qadampe-purple/10 text-qadampe-purple",
  orange: "bg-qadampe-orange/10 text-qadampe-orange",
  success: "bg-qadampe-success/10 text-qadampe-success",
};

export const ForMerchants = () => {
  return (
    <section className="py-20 bg-section-gradient-alt overflow-hidden">
      {/* <Services /> */}
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium animate-fade-in-left">
            <div className="w-8 h-0.5 bg-primary rounded-full" />
            For Merchants
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in-up animation-delay-100">
            <span className="text-foreground">More Than Just</span>
            <br />
            <span className="text-gradient">Receiving Payments</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Unlock powerful business tools that help you grow, engage customers, 
            and make data-driven decisions — all from one simple platform.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {merchantBenefits.map((benefit, index) => (
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
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center">
                <Store className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Grow Your Business with Qadampe
            </h3>
            
            <p className="text-muted-foreground">
              Join thousands of merchants who are already growing their business 
              with our comprehensive payment and analytics platform. Get started today!
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" className="gap-2" asChild>
                <a href="/content#download">
                  Apply Now
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
                <span>Free Setup</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-qadampe-success" />
                <span>No Monthly Fees</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-qadampe-success" />
                <span>24/7 Support</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

