import { Button } from "@/components/ui/button";
import { ArrowRight, Smartphone, Store, Gift } from "lucide-react";
import { HashLink } from 'react-router-hash-link';


export const Hero = () => {
  return (
    <section className="pt-24 pb-12 md:pt-28 md:pb-16 bg-section-gradient overflow-hidden min-h-screen flex items-center">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 w-full">
        {/* Top Banner */}
        <div className="flex justify-center mb-8 md:mb-10 animate-slide-up">
          <div className="inline-flex items-center gap-3 bg-secondary border border-primary/20 rounded-2xl px-4 py-2.5 md:px-6 md:py-3 text-sm md:text-base shadow-sm hover:shadow-md transition-all duration-300">
            <span className="bg-primary text-primary-foreground text-xs md:text-sm font-semibold px-3 py-1 rounded-lg">
              NEW
            </span>
            <span className="text-foreground font-medium">
              Get your transactions in Excel/PDF format. Track all expenses easily.
            </span>
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-primary flex-shrink-0 transition-transform duration-300 hover:translate-x-1" />
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start lg:items-center">
          {/* Left Content */}
          <div className="space-y-6 md:space-y-8 animate-slide-in-left">
            {/* Brand Tagline */}
            <div className="inline-flex items-center gap-3 mb-4">
              <div className="w-1.5 h-8 md:h-10 bg-primary rounded-full" />
              <span className="text-primary font-bold text-lg md:text-xl lg:text-2xl tracking-tight">
                Har Qadam Asaan
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="text-foreground">Payments Made</span>
              <br />
              <span className="text-gradient">Simple & Smart</span>
            </h1>

            <p className="text-base md:text-lg text-muted-foreground max-w-lg leading-relaxed">
              Accept payments via QR codes, manage your business dashboard, track analytics,
              and reward your customers — all in one powerful platform.
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button
                variant="hero"
                size="xl"
                className="gap-2 text-base md:text-lg px-8 md:px-10 py-6 md:py-7"
                asChild
              >
                <a href="/content#download">
                  Get Started
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
              <Button
                variant="hero-outline"
                size="xl"
                className="text-base md:text-lg px-8 md:px-10 py-6 md:py-7"
                asChild
              >
                <a href="/content#about">
                  Learn More
                </a>
              </Button>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className="relative animate-slide-in-right mt-8 lg:mt-0">
            <div className="grid gap-4 md:gap-5">
              {/* Main Card - Get Detailed Spend Summary */}
              <div className="bg-card rounded-2xl shadow-card p-6 md:p-7 border border-border hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 group">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1 pr-4">
                    <h3 className="text-lg md:text-xl font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">Get Detailed Spend Summary</h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Now check your transactions. Only on Qadampe.
                    </p>
                  </div>
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-qadampe-blue-light flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Smartphone className="w-6 h-6 md:w-7 md:h-7 text-primary transition-transform duration-300 group-hover:scale-110" />
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1.5 bg-secondary rounded-full text-xs md:text-sm font-medium text-secondary-foreground transition-all duration-300 group-hover:scale-105">Weekly</span>
                  <span className="px-3 py-1.5 bg-primary/10 rounded-full text-xs md:text-sm font-medium text-primary transition-all duration-300 group-hover:scale-105">Monthly Spend Summary</span>
                </div>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-4">
                {/* <Link to="/ForMerchants" > */}
                <div className="bg-card rounded-2xl shadow-card p-5 md:p-6 border border-border hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Store className="w-6 h-6 md:w-7 md:h-7 text-primary-foreground transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  {/* <Link to="#Merchants" >

                    <h4 className="font-semibold text-foreground text-base md:text-lg mb-1 transition-colors duration-300 group-hover:text-primary">For Merchants</h4>
                    </Link> */}

                  <HashLink smooth to="/content#merchants">
                    <h4 className="font-semibold text-foreground text-base md:text-lg mb-1 transition-colors duration-300 group-hover:text-primary">
                      For Merchants
                    </h4>
                  </HashLink>
                  <p className="text-xs md:text-sm text-muted-foreground">Dashboard & Analytics</p>
                </div>
                {/* </Link> */}
                <div className="bg-card rounded-2xl shadow-card p-5 md:p-6 border border-border hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 group">
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-qadampe-orange/10 flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                    <Gift className="w-6 h-6 md:w-7 md:h-7 text-qadampe-orange transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <HashLink smooth to="/content#rewards">
                    <h4 className="font-semibold text-foreground text-base md:text-lg mb-1 transition-colors duration-300 group-hover:text-primary">
                      Rewards
                    </h4>
                  </HashLink>
                  <p className="text-xs md:text-sm text-muted-foreground">Cashback & Offers</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
