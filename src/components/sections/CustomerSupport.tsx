import { Headphones, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const CustomerSupport = () => {
  return (
    <section className="py-6 bg-background">
      <div className="container mx-auto px-4">
        <div className="gradient-primary rounded-full py-4 px-6 flex flex-col md:flex-row items-center justify-between gap-4 shadow-lg">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-primary-foreground/20 flex items-center justify-center">
              <Headphones className="w-6 h-6 text-primary-foreground" />
            </div>
            <p className="text-primary-foreground text-sm md:text-base font-medium text-center md:text-left">
              24×7 Trusted customer support to assist and help you in every step of your journey
            </p>
          </div>
          <Button variant="secondary" size="sm" className="gap-2 shrink-0 text-primary hover:text-primary" asChild>
            <a href="#contact">
              Learn More
              <ArrowRight className="w-4 h-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};
