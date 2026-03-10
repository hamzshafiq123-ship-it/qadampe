import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const features = [
  "Instant payment notifications",
  "Zero transaction fees",
  "Works with all bank apps",
  "Secure & encrypted",
];

export const QRPayments = () => {
  return (
    <section id="qr-payments" className="py-20 bg-section-gradient-alt overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium animate-fade-in-left">
              <div className="w-8 h-0.5 bg-primary rounded-full" />
              QR Payments
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in-up animation-delay-100">
              <span className="text-foreground">Pay anyone directly</span>
              <br />
              <span className="text-foreground">from your </span>
              <span className="text-gradient">bank account</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in-up animation-delay-200">
              Pay anyone, everywhere. Make contactless & secure payments in-stores 
              or online using Qadampe QR. Plus, send & receive money from anyone.
            </p>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 animate-fade-in-up group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-5 h-5 rounded-full bg-qadampe-success/10 flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:bg-qadampe-success/20">
                    <Check className="w-3 h-3 text-qadampe-success transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  <span className="text-foreground transition-colors duration-300 group-hover:text-primary">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3 pt-4">
              <Button variant="hero" size="lg" className="gap-2">
                Start Accepting
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>

          {/* Right Content - Floating Bubbles Animation */}
          <div className="relative h-[400px] lg:h-[500px] animate-fade-in-up animation-delay-300">
            {/* Central QR Illustration */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-white rounded-3xl shadow-3d border-2 border-[#00BAF2]/40 flex items-center justify-center animate-pulse-soft card-3d">
              <div className="w-20 h-20 rounded-2xl gradient-primary flex items-center justify-center shadow-lg">
                <span className="text-primary-foreground font-bold text-2xl">Q</span>
              </div>
            </div>

            {/* Floating Payment Bubbles */}
            <div className="absolute top-8 right-8 bg-white rounded-2xl shadow-3d p-4 animate-float border border-[#00BAF2]/30 card-3d">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg">
                  RS
                </div>
                <div>
                  <p className="text-sm font-medium text-[#012a72]">₨250</p>
                  <p className="text-xs text-qadampe-success flex items-center gap-1">
                    <Check className="w-3 h-3" /> Paid Successfully
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute top-24 left-4 bg-white rounded-2xl shadow-3d p-4 animate-float-delayed border border-[#00BAF2]/30 card-3d">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-qadampe-orange flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg">
                  AK
                </div>
                <div>
                  <p className="text-sm font-medium text-[#012a72]">Ali Khan</p>
                  <p className="text-xs text-[#012a72]/60">Received ₨1,500</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-20 right-4 bg-white rounded-2xl shadow-3d p-4 animate-float animation-delay-300 border border-[#00BAF2]/30 card-3d">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-qadampe-purple flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg">
                  SM
                </div>
                <div>
                  <p className="text-sm font-medium text-[#012a72]">Sara Malik</p>
                  <p className="text-xs text-[#012a72]/60">Pay Request</p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 bg-white rounded-2xl shadow-3d p-4 animate-float animation-delay-400 border border-[#00BAF2]/30 card-3d">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-qadampe-success flex items-center justify-center text-primary-foreground font-bold text-sm shadow-lg">
                  ZH
                </div>
                <div>
                  <p className="text-sm font-medium text-[#012a72]">Zain Hassan</p>
                  <p className="text-xs text-[#012a72]/60">₨3,200</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
