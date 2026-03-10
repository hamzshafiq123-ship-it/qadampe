import { Button } from "@/components/ui/button";
import { ArrowRight, Store, Smartphone, Globe } from "lucide-react";

export const BusinessPayments = () => {
  return (
    <section className="py-20 bg-qadampe-navy text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-slide-in-left">
            <div className="inline-flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-primary-foreground flex items-center justify-center">
                <span className="text-qadampe-navy font-bold text-sm">Q</span>
              </div>
              <span className="text-sm font-medium opacity-80">Qadampe Business</span>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Accept payments
              <br />
              <span className="text-primary">online & offline</span>
            </h2>

            <p className="text-lg opacity-80 max-w-lg">
              Millions of small & big businesses use Qadampe to accept payments 
              anywhere any time with a wide range of solutions for all kind of merchants.
            </p>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-lg px-4 py-2">
                <Store className="w-5 h-5" />
                <span className="text-sm">In-Store</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-lg px-4 py-2">
                <Smartphone className="w-5 h-5" />
                <span className="text-sm">Mobile</span>
              </div>
              <div className="flex items-center gap-2 bg-primary-foreground/10 rounded-lg px-4 py-2">
                <Globe className="w-5 h-5" />
                <span className="text-sm">Online</span>
              </div>
            </div>

            <Button variant="hero" size="lg" className="gap-2" asChild>
              <a href="#qr-payments">
                Learn More
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Right Content - App Preview */}
          <div className="relative animate-slide-in-right">
            <div className="bg-card rounded-3xl shadow-xl p-6 text-foreground">
              {/* App Header */}
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg gradient-primary flex items-center justify-center">
                    <span className="text-primary-foreground font-bold text-xs">Q</span>
                  </div>
                  <span className="text-sm font-medium">Qadampe Store</span>
                </div>
                <span className="text-xs text-muted-foreground">Active</span>
              </div>

              {/* Store Info */}
              <div className="bg-secondary rounded-2xl p-4 mb-4">
                <p className="text-sm text-muted-foreground mb-2">Business overview for</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-2xl font-bold">₨ 86,00,000</p>
                    <p className="text-xs text-qadampe-success">+15% this month</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-bold">₨ 77,00,000</p>
                    <p className="text-xs text-muted-foreground">Last month</p>
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-secondary rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Store className="w-4 h-4 text-primary" />
                    <span className="text-xs text-muted-foreground">Store Visits</span>
                  </div>
                  <p className="text-xl font-bold">12,450</p>
                </div>
                <div className="bg-secondary rounded-xl p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Smartphone className="w-4 h-4 text-qadampe-success" />
                    <span className="text-xs text-muted-foreground">App Orders</span>
                  </div>
                  <p className="text-xl font-bold">3,892</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
