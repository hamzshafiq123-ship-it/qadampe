import { Button } from "@/components/ui/button";
import { 
  Target, 
  Lightbulb, 
  TrendingUp, 
  Shield,
  ArrowRight,
  Check,
  Globe,
  Heart,
  Rocket,
  Star,
  Users,
  Zap
} from "lucide-react";

const problemSolutions = [
  {
    icon: Target,
    title: "The Problem We Solve",
    description: "Traditional payment systems are complex, fragmented, and don't help businesses grow. Customers want simple ways to pay and earn rewards, while merchants need better tools to understand and engage their customers.",
    color: "primary"
  },
  {
    icon: Lightbulb,
    title: "Why QR + Dashboard + Rewards Matter",
    description: "QR codes make payments instant. Dashboards give merchants insights they need. Rewards create engagement that drives repeat business. Together, they create a complete ecosystem that benefits everyone.",
    color: "orange"
  },
  {
    icon: TrendingUp,
    title: "Vision: Universal Business Layer",
    description: "We're building Qadampe to become the universal layer that connects businesses and customers. A platform where payments, analytics, and engagement work seamlessly together.",
    color: "success"
  },
];

const colorClasses = {
  primary: "bg-primary/10 text-primary",
  purple: "bg-qadampe-purple/10 text-qadampe-purple",
  orange: "bg-qadampe-orange/10 text-qadampe-orange",
  success: "bg-qadampe-success/10 text-qadampe-success",
};

export const AboutQadampe = () => {
  return (
    <section id="about" className="py-20 bg-section-gradient overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium">
            <div className="w-8 h-0.5 bg-primary rounded-full animate-fade-in-left" />
            About Qadampe
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in-up animation-delay-100">
            <span className="text-foreground">Our Story,</span>
            <br />
            <span className="text-gradient">Vision & Mission</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Understanding what we do, why we do it, and where we're heading.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up animation-delay-300">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-3d border border-[#00BAF2]/30 card-3d">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <Heart className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Our Story
              </h3>
            </div>
            
            <div className="space-y-4 text-muted-foreground">
              <p className="text-lg">
                Qadampe was born from a simple observation: payments in Pakistan were becoming digital, 
                but the experience was fragmented. Merchants struggled with multiple systems, customers 
                wanted simpler ways to pay, and everyone was missing opportunities to build better relationships.
              </p>
              <p>
                We saw that QR payments were the future, but they could be so much more than just a way 
                to transfer money. They could be a gateway to insights, engagement, and growth. So we set 
                out to build a platform that combines the simplicity of QR payments with powerful business 
                tools and meaningful rewards.
              </p>
              <p>
                Today, Qadampe is helping businesses across Pakistan accept payments, understand their 
                customers, and build loyalty—all from one unified platform. We're making every step easier 
                ("Har Qadam Asaan") for merchants and customers alike.
              </p>
            </div>
          </div>
        </div>

        {/* Vision & Mission Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Vision */}
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-8 md:p-10 border border-primary/20 animate-fade-in-up animation-delay-400">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center">
                <Globe className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Our Vision
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground mb-6">
              To become the universal business layer that connects merchants and customers through 
              seamless payments, powerful analytics, and engaging rewards. We envision a Pakistan 
              where every business transaction is simple, transparent, and rewarding.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-qadampe-success mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Pakistan-Focused:</span> Built specifically for the Pakistani market, understanding local needs and preferences.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-qadampe-success mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Universal Platform:</span> A single platform that serves all business needs—payments, analytics, and engagement.
                </p>
              </div>
            </div>
          </div>

          {/* Mission */}
          <div className="bg-gradient-to-r from-qadampe-orange/10 via-qadampe-orange/5 to-qadampe-orange/10 rounded-3xl p-8 md:p-10 border border-qadampe-orange/20 animate-fade-in-up animation-delay-500">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-qadampe-orange/20 flex items-center justify-center">
                <Rocket className="w-6 h-6 text-qadampe-orange" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Our Mission
              </h3>
            </div>
            
            <p className="text-lg text-muted-foreground mb-6">
              To make business operations simpler, more transparent, and more rewarding for everyone. 
              We're committed to empowering merchants with the tools they need to grow, while making 
              payments and rewards effortless for customers.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-qadampe-success mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Simplify Payments:</span> Make every transaction as easy as scanning a QR code.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-qadampe-success mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Empower Businesses:</span> Provide insights and tools that help merchants make better decisions.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <Check className="w-5 h-5 text-qadampe-success mt-0.5 flex-shrink-0" />
                <p className="text-sm text-muted-foreground">
                  <span className="font-semibold text-foreground">Build Engagement:</span> Create meaningful connections between merchants and customers through rewards.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Qadampe is Different */}
        <div className="mb-16 animate-fade-in-up animation-delay-600">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Why Qadampe is Different
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're not just another payment platform. Here's what sets us apart:
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                icon: Zap,
                title: "All-in-One Platform",
                description: "Payments, analytics, and rewards in one place. No need to juggle multiple systems or platforms.",
                color: "primary"
              },
              {
                icon: Star,
                title: "Rewards Built-In",
                description: "Unlike other payment solutions, we integrate rewards and loyalty programs directly into the payment flow.",
                color: "orange"
              },
              {
                icon: TrendingUp,
                title: "Business Intelligence",
                description: "Get real-time insights about your customers, sales trends, and business performance—not just transaction records.",
                color: "success"
              },
              {
                icon: Users,
                title: "Customer Engagement",
                description: "Build lasting relationships with customers through rewards, offers, and personalized experiences.",
                color: "purple"
              },
              {
                icon: Shield,
                title: "SBP-Compliant & Secure",
                description: "Built with State Bank of Pakistan standards in mind, ensuring compliance and enterprise-grade security.",
                color: "primary"
              },
              {
                icon: Globe,
                title: "Made for Pakistan",
                description: "Designed specifically for the Pakistani market, understanding local business needs and customer preferences.",
                color: "orange"
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl p-6 shadow-3d border border-[#00BAF2]/30 hover:shadow-3d-hover card-3d transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl ${colorClasses[item.color as keyof typeof colorClasses]} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <item.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                
                <h4 className="text-lg font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">
                  {item.title}
                </h4>
                
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* About Us Section */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20 animate-fade-in-up animation-delay-700">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                About Us
              </h3>
              <p className="text-lg text-muted-foreground">
                Qadampe is more than a payment platform. We're creating a universal business 
                layer that connects merchants and customers through seamless payments, powerful 
                analytics, and engaging rewards.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <div className="bg-white rounded-2xl p-6 shadow-3d border border-[#00BAF2]/30 card-3d">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  What We Do
                </h4>
                <p className="text-sm text-muted-foreground">
                  We provide QR payment solutions, business analytics dashboards, and customer 
                  reward programs—all integrated into one powerful platform that helps businesses 
                  grow and customers save.
                </p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-3d border border-[#00BAF2]/30 card-3d">
                <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                  <Lightbulb className="w-5 h-5 text-qadampe-orange" />
                  Our Approach
                </h4>
                <p className="text-sm text-muted-foreground">
                  We believe in simplicity, transparency, and value. Every feature we build is 
                  designed to make business operations easier and customer experiences better. 
                  No complexity, no hidden fees, just straightforward solutions that work.
                </p>
              </div>
            </div>

            {/* Core Values */}
            <div className="mt-8">
              <h4 className="font-semibold text-foreground mb-4 text-center">Our Core Values</h4>
              <div className="grid md:grid-cols-4 gap-4">
                {[
                  { title: "Simplicity", desc: "Easy to use for everyone" },
                  { title: "Transparency", desc: "Clear and honest operations" },
                  { title: "Innovation", desc: "Always improving and evolving" },
                  { title: "Trust", desc: "Security and reliability first" },
                ].map((value) => (
                  <div key={value.title} className="text-center bg-white rounded-xl p-4 shadow-3d border border-[#00BAF2]/30 card-3d">
                    <div className="text-lg font-bold text-foreground mb-1">{value.title}</div>
                    <div className="text-xs text-muted-foreground">{value.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

