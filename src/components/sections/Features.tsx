import { Button } from "@/components/ui/button";
import { ArrowRight, CreditCard, Shield, TrendingUp, Users } from "lucide-react";

export const Features = () => {
  return (
    <section id="features" className="py-20 bg-section-gradient overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Merchant Card */}
          <div className="bg-white rounded-3xl p-8 shadow-3d border border-[#00BAF2]/30 hover:shadow-3d-hover card-3d transition-all duration-300 group animate-fade-in-up">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <CreditCard className="w-4 h-4 text-primary transition-transform duration-300 group-hover:scale-110" />
              <span>For Merchants</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">
              One destination for
            </h3>
            <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-4">
              Business Growth
            </h3>
            
            <p className="text-muted-foreground mb-6">
              Accept payments with QR codes, track sales with powerful analytics, 
              and build customer loyalty with rewards programs.
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <span className="px-3 py-1.5 bg-secondary rounded-full text-xs font-medium text-secondary-foreground flex items-center gap-1 transition-all duration-300 group-hover:scale-105">
                <TrendingUp className="w-3 h-3" /> Analytics
              </span>
              <span className="px-3 py-1.5 bg-secondary rounded-full text-xs font-medium text-secondary-foreground flex items-center gap-1 transition-all duration-300 group-hover:scale-105">
                <Users className="w-3 h-3" /> Loyalty
              </span>
            </div>

            <Button variant="hero-outline" className="gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-105" asChild>
              <a href="/content#download">
                Apply Now
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Rewards Card */}
          <div className="bg-card rounded-3xl p-8 shadow-card border border-border hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up animation-delay-200">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Shield className="w-4 h-4 text-qadampe-success transition-transform duration-300 group-hover:scale-110" />
              <span className="text-qadampe-success font-medium">Qadampe Rewards</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">
              Rewards &
            </h3>
            <h3 className="text-2xl md:text-3xl font-bold text-gradient mb-4">
              Super Offers
            </h3>
            
            <p className="text-muted-foreground mb-6">
              A Smart, Simple & Transparent Platform to Explore Cashback, 
              Discounts and Exclusive Merchant Offers.
            </p>

            <Button variant="hero-outline" className="gap-2 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-105" asChild>
              <a href="#download">
                Get It Now
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>

            {/* Decorative Element */}
            <div className="mt-6 flex justify-end">
              <div className="w-16 h-16 rounded-full bg-qadampe-success/20 animate-float flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                <Shield className="w-8 h-8 text-qadampe-success" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
