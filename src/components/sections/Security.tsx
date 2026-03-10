import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

import {
  Shield,
  Lock,
  FileCheck,
  Building2,
  Check,
  ArrowRight,
  FileText // Added for policy buttons
} from "lucide-react";

const securityFeatures = [
  {
    icon: FileCheck,
    title: "Built with SBP Standards in Mind",
    description: "We follow State Bank of Pakistan guidelines to ensure compliance and trust. Your peace of mind is our priority.",
    color: "primary"
  },
  {
    icon: Shield,
    title: "Secure Infrastructure",
    description: "Robust security measures protect every transaction. Your information and payments are always safe.",
    color: "success"
  },
  {
    icon: Lock,
    title: "Data Privacy Commitment",
    description: "Your privacy matters. We handle your data responsibly and securely, always putting you first.",
    color: "purple"
  },
  {
    icon: Building2,
    title: "Banking Integrations",
    description: "Connected with trusted banks in Pakistan. Secure, reliable transactions you can count on.",
    color: "orange"
  },
];

const colorClasses = {
  primary: "bg-primary/10 text-primary",
  purple: "bg-qadampe-purple/10 text-qadampe-purple",
  orange: "bg-qadampe-orange/10 text-qadampe-orange",
  success: "bg-qadampe-success/10 text-qadampe-success",
};

export const Security = () => {
  return (
    <section id="compliance-security" className="py-20 bg-section-gradient-alt overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium animate-fade-in-left">
            <div className="w-8 h-0.5 bg-primary rounded-full" />
            Compliance & Security
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in-up animation-delay-100">
            <span className="text-foreground">Trust Without</span>
            <br />
            <span className="text-gradient">Over-Technical Detail</span>
          </h2>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            We handle the security and compliance requirements so you don't have to.
            Simple, secure, and trustworthy.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {securityFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-6 shadow-3d border border-[#00BAF2]/30 hover:shadow-3d-hover card-3d transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-12 h-12 rounded-xl ${colorClasses[feature.color as keyof typeof colorClasses]} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <feature.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-2 transition-colors duration-300 group-hover:text-primary">
                {feature.title}
              </h3>

              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Trust Section */}
        <div className="bg-gradient-to-r from-qadampe-success/10 via-qadampe-success/5 to-qadampe-success/10 rounded-3xl p-8 md:p-12 border border-qadampe-success/20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-qadampe-success/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-qadampe-success" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Your Security is Our Priority
              </h3>
            </div>

            <p className="text-muted-foreground mb-8">
              We understand that trust is built on security and compliance. That's why we've
              built Qadampe with security and SBP compliance in mind. You can focus on your business
              while we handle the security and compliance requirements.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-10">
              {[
                "Secure Transactions",
                "Regular Security Checks",
                "Compliance Standards",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 animate-fade-in-up">
                  <Check className="w-5 h-5 text-qadampe-success flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>
         
            <div className="pt-6 border-t border-qadampe-success/20">
              <p className="text-sm text-muted-foreground text-center">
                All transactions are processed securely through our banking partners.
                Your security and privacy are always protected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
