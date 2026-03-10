import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp, Users, BarChart3, Store, Star, Zap } from "lucide-react";
import { Services } from "./Services";

const merchantBenefits = [
  {
    icon: TrendingUp,
    title: "Increase Customer Retention",
    description: "Reward loyal customers and watch them come back more often",
    color: "success"
  },
  {
    icon: Star,
    title: "Boost Engagement",
    description: "Create campaigns that drive more scans and transactions",
    color: "orange"
  },
  {
    icon: Zap,
    title: "Attract New Customers",
    description: "Use offers and rewards to bring in first-time visitors",
    color: "primary"
  },
];

const colorClasses = {
  primary: "bg-primary/10 text-primary",
  purple: "bg-qadampe-purple/10 text-qadampe-purple",
  orange: "bg-qadampe-orange/10 text-qadampe-orange",
  success: "bg-qadampe-success/10 text-qadampe-success",
};

export const MerchantDashboard = () => {
  return (
    <section id="merchants" className="py-20 bg-section-gradient-alt overflow-hidden">
      
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="inline-flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">Q</span>
              </div>
              <span className="text-sm font-medium text-muted-foreground">Qadampe Business</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              <span className="text-foreground">Switch to Qadampe.</span>
              <br />
              <span className="text-foreground">Grow More. </span>
              <span className="text-gradient">Earn More.</span>
            </h2>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-qadampe-blue">
                Business Analytics Dashboard
              </h3>
              <p className="text-muted-foreground">
                Get real-time insights on 1000+ transactions with our powerful 
                Analytics Dashboard by Qadampe Business.
              </p>
            </div>

            <Button variant="hero" size="lg" className="gap-2" asChild>
              <a href="#contact">
                Get Started
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>

            <p className="text-xs text-muted-foreground">
              * Free setup. No monthly fees. Pay only per transaction.
            </p>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative animate-slide-in-right  mb-4">
            <div className="bg-card rounded-3xl shadow-xl border border-border p-6 overflow-hidden">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-xs">Q</span>
                  </div>
                  <span className="text-sm font-medium text-foreground">Qadampe Business App</span>
                </div>
                <div className="flex gap-1">
                  <div className="w-2 h-2 rounded-full bg-qadampe-success" />
                  <div className="w-2 h-2 rounded-full bg-qadampe-orange" />
                  <div className="w-2 h-2 rounded-full bg-destructive" />
                </div>
              </div>

              {/* Business Overview */}
              <div className="bg-secondary rounded-2xl p-4 mb-4">
                <p className="text-sm text-muted-foreground mb-3">Business overview for</p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-3 shadow-3d border border-[#00BAF2]/20">
                    <p className="text-xs text-muted-foreground">Today</p>
                    <p className="text-lg font-bold text-foreground">₨ 86,000</p>
                    <p className="text-xs text-qadampe-success flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> +12%
                    </p>
                  </div>
                  <div className="bg-white rounded-xl p-3 shadow-3d border border-[#00BAF2]/20">
                    <p className="text-xs text-muted-foreground">This Week</p>
                    <p className="text-lg font-bold text-foreground">₨ 7,70,000</p>
                    <p className="text-xs text-qadampe-success flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" /> +8%
                    </p>
                  </div>
                </div>
              </div>

              {/* Chart Placeholder */}
              <div className="bg-secondary rounded-2xl p-4">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-foreground">Sales Analytics</span>
                  <BarChart3 className="w-4 h-4 text-primary" />
                </div>
                <div className="flex items-end gap-2 h-24">
                  {[40, 65, 45, 80, 55, 90, 70, 60, 85, 50, 75, 95].map((height, i) => (
                    <div
                      key={i}
                      className="flex-1 bg-primary/20 rounded-t hover:bg-primary/40 transition-colors"
                      style={{ height: `${height}%` }}
                    />
                  ))}
                </div>
                <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                  <span>Jan</span>
                  <span>Jun</span>
                  <span>Dec</span>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                <div className="text-center p-3 bg-secondary rounded-xl">
                  <Users className="w-4 h-4 text-primary mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground">Customers</p>
                  <p className="font-bold text-foreground">2,345</p>
                </div>
                <div className="text-center p-3 bg-secondary rounded-xl">
                  <TrendingUp className="w-4 h-4 text-qadampe-success mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground">Growth</p>
                  <p className="font-bold text-foreground">+24%</p>
                </div>
                <div className="text-center p-3 bg-secondary rounded-xl">
                  <BarChart3 className="w-4 h-4 text-qadampe-orange mx-auto mb-1" />
                  <p className="text-xs text-muted-foreground">Orders</p>
                  <p className="font-bold text-foreground">1,892</p>
                </div>
              </div>
            </div>
          </div>
        </div>

<Services/>
        {/* For Merchants Benefits Section */}
        <div className="mt-20 mb-20">
          <div className="flex items-center gap-3 mb-8 animate-fade-in-up">
            <div className="w-10 h-10 rounded-xl bg-qadampe-orange/10 flex items-center justify-center">
              <Store className="w-5 h-5 text-qadampe-orange" />
            </div>
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">For Merchants</h3>
              <p className="text-sm text-muted-foreground">Engage customers and drive growth</p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {merchantBenefits.map((benefit, index) => (
              <div
                key={benefit.title}
                className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className={`w-12 h-12 rounded-xl ${colorClasses[benefit.color as keyof typeof colorClasses]} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <benefit.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                
                <h4 className="text-lg font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">
                  {benefit.title}
                </h4>
                
                <p className="text-sm text-muted-foreground">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works for Merchants Section */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-qadampe-orange/10 via-qadampe-orange/5 to-qadampe-orange/10 rounded-3xl p-8 md:p-12 border border-qadampe-orange/20 animate-fade-in-up">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center">
              How It Works for Merchants
            </h3>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "1", title: "Set Up Rewards", desc: "Create your loyalty program" },
                { step: "2", title: "Customers Scan", desc: "They earn points automatically" },
                { step: "3", title: "Track Engagement", desc: "Monitor rewards performance" },
                { step: "4", title: "Grow Business", desc: "See increased retention & sales" },
              ].map((item, index) => (
                <div 
                  key={item.step} 
                  className="text-center animate-fade-in-up group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4 text-primary-foreground font-bold text-xl shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
                    {item.step}
                  </div>
                  <h5 className="font-semibold text-foreground mb-2 text-lg transition-colors duration-300 group-hover:text-primary">{item.title}</h5>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
