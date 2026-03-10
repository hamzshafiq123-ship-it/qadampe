import { Button } from "@/components/ui/button";
import { Check, X, ArrowRight, Zap, Crown, Rocket } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    description: "Perfect for getting started",
    price: "₨ 0",
    period: "Forever",
    icon: Zap,
    color: "primary",
    popular: false,
    features: [
      { text: "QR Code Payments", included: true },
      { text: "Basic Dashboard", included: true },
      { text: "Transaction History", included: true },
      { text: "Customer Rewards Setup", included: true },
      { text: "Basic Analytics", included: true },
      { text: "Email Support", included: true },
      { text: "Advanced Analytics", included: false },
      { text: "Custom Branding", included: false },
      { text: "Priority Support", included: false },
      { text: "API Access", included: false },
      { text: "Multi-location Management", included: false },
      { text: "Advanced Reports", included: false },
    ],
  },
  {
    name: "Pro",
    description: "For growing businesses",
    price: "₨ 2,999",
    period: "per month",
    icon: Rocket,
    color: "orange",
    popular: true,
    features: [
      { text: "Everything in Free", included: true },
      { text: "Advanced Analytics", included: true },
      { text: "Custom Branding", included: true },
      { text: "Priority Support", included: true },
      { text: "API Access", included: true },
      { text: "Multi-location Management", included: true },
      { text: "Advanced Reports", included: true },
      { text: "Dedicated Account Manager", included: true },
      { text: "Custom Integrations", included: true },
      { text: "White-label Options", included: false },
      { text: "Enterprise Features", included: false },
      { text: "SLA Guarantee", included: false },
    ],
  },
  {
    name: "Enterprise",
    description: "For large organizations",
    price: "Custom",
    period: "Contact us",
    icon: Crown,
    color: "purple",
    popular: false,
    features: [
      { text: "Everything in Pro", included: true },
      { text: "White-label Options", included: true },
      { text: "Enterprise Features", included: true },
      { text: "SLA Guarantee", included: true },
      { text: "24/7 Phone Support", included: true },
      { text: "Custom Development", included: true },
      { text: "On-site Training", included: true },
      { text: "Dedicated Infrastructure", included: true },
      { text: "Compliance Support", included: true },
      { text: "Multi-currency Support", included: true },
      { text: "Advanced Security", included: true },
      { text: "Custom Contracts", included: true },
    ],
  },
];

const colorClasses = {
  primary: "bg-primary/10 text-primary border-primary/20",
  orange: "bg-qadampe-orange/10 text-qadampe-orange border-qadampe-orange/20",
  purple: "bg-qadampe-purple/10 text-qadampe-purple border-qadampe-purple/20",
};

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 bg-section-gradient overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium">
            <div className="w-8 h-0.5 bg-primary rounded-full animate-fade-in-left" />
            Pricing & Plans
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in-up animation-delay-100">
            <span className="text-foreground">Choose the Right</span>
            <br />
            <span className="text-gradient">Plan for You</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Start free and scale as you grow. All plans include core payment features. 
            Upgrade anytime to unlock advanced tools and insights.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            return (
              <div
                key={plan.name}
                className={`bg-card rounded-3xl p-8 shadow-card border-2 transition-all duration-300 group animate-fade-in-up relative ${
                  plan.popular
                    ? "border-primary shadow-xl scale-105 md:-mt-4"
                    : "border-border hover:border-primary/50 hover:shadow-card-hover"
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-xs font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Plan Header */}
                <div className="text-center mb-8">
                  <div
                    className={`w-16 h-16 rounded-2xl ${colorClasses[plan.color as keyof typeof colorClasses]} flex items-center justify-center mx-auto mb-4 transition-all duration-300 group-hover:scale-110 group-hover:rotate-3`}
                  >
                    <Icon className="w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{plan.description}</p>
                  
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    {plan.period !== "Forever" && plan.period !== "Contact us" && (
                      <span className="text-muted-foreground text-sm">/{plan.period}</span>
                    )}
                    {plan.period === "Forever" && (
                      <span className="text-muted-foreground text-sm ml-2">{plan.period}</span>
                    )}
                    {plan.period === "Contact us" && (
                      <p className="text-muted-foreground text-sm mt-2">{plan.period}</p>
                    )}
                  </div>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      {feature.included ? (
                        <Check className="w-5 h-5 text-qadampe-success flex-shrink-0 mt-0.5" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground/50 flex-shrink-0 mt-0.5" />
                      )}
                      <span
                        className={`text-sm ${
                          feature.included ? "text-foreground" : "text-muted-foreground line-through"
                        }`}
                      >
                        {feature.text}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button
                  variant={plan.popular ? "hero" : "hero-outline"}
                  className="w-full gap-2"
                  size="lg"
                  asChild
                >
                  {plan.name === "Enterprise" ? (
                    <Link to="/content#contact">
                      Contact Sales
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  ) : (
                    <Link to="/content#contact">
                      Get Started
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </Button>
              </div>
            );
          })}
        </div>

        {/* Free vs Paid Comparison */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up animation-delay-500">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-6 text-center">
              Free vs Paid Features
            </h3>
            
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left py-4 px-4 font-semibold text-foreground">Feature</th>
                    <th className="text-center py-4 px-4 font-semibold text-foreground">Free</th>
                    <th className="text-center py-4 px-4 font-semibold text-foreground">Pro</th>
                    <th className="text-center py-4 px-4 font-semibold text-foreground">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { feature: "QR Code Payments", free: true, pro: true, enterprise: true },
                    { feature: "Basic Dashboard", free: true, pro: true, enterprise: true },
                    { feature: "Transaction History", free: true, pro: true, enterprise: true },
                    { feature: "Customer Rewards", free: true, pro: true, enterprise: true },
                    { feature: "Basic Analytics", free: true, pro: true, enterprise: true },
                    { feature: "Advanced Analytics", free: false, pro: true, enterprise: true },
                    { feature: "Custom Branding", free: false, pro: true, enterprise: true },
                    { feature: "Priority Support", free: false, pro: true, enterprise: true },
                    { feature: "API Access", free: false, pro: true, enterprise: true },
                    { feature: "Multi-location", free: false, pro: true, enterprise: true },
                    { feature: "Advanced Reports", free: false, pro: true, enterprise: true },
                    { feature: "White-label Options", free: false, pro: false, enterprise: true },
                    { feature: "Dedicated Manager", free: false, pro: true, enterprise: true },
                    { feature: "24/7 Phone Support", free: false, pro: false, enterprise: true },
                    { feature: "Custom Development", free: false, pro: false, enterprise: true },
                  ].map((row, idx) => (
                    <tr key={idx} className="border-b border-border/50 hover:bg-secondary/50 transition-colors">
                      <td className="py-4 px-4 text-foreground font-medium">{row.feature}</td>
                      <td className="py-4 px-4 text-center">
                        {row.free ? (
                          <Check className="w-5 h-5 text-qadampe-success mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {row.pro ? (
                          <Check className="w-5 h-5 text-qadampe-success mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                        )}
                      </td>
                      <td className="py-4 px-4 text-center">
                        {row.enterprise ? (
                          <Check className="w-5 h-5 text-qadampe-success mx-auto" />
                        ) : (
                          <X className="w-5 h-5 text-muted-foreground/50 mx-auto" />
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up animation-delay-600">
          <h3 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h3>
          <div className="space-y-4 text-left">
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h4 className="font-semibold text-foreground mb-2">Can I switch plans later?</h4>
              <p className="text-sm text-muted-foreground">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h4 className="font-semibold text-foreground mb-2">What payment methods do you accept?</h4>
              <p className="text-sm text-muted-foreground">
                We accept all major credit cards, bank transfers, and digital wallets. Enterprise plans can be invoiced.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h4 className="font-semibold text-foreground mb-2">Is there a setup fee?</h4>
              <p className="text-sm text-muted-foreground">
                No setup fees for any plan. The Free plan is completely free forever, and paid plans start immediately after subscription.
              </p>
            </div>
            <div className="bg-card rounded-2xl p-6 border border-border">
              <h4 className="font-semibold text-foreground mb-2">What happens if I exceed my plan limits?</h4>
              <p className="text-sm text-muted-foreground">
                We'll notify you before you reach your limits. You can upgrade your plan or purchase additional capacity as needed.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20 text-center animate-fade-in-up animation-delay-700">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Start with our free plan and upgrade when you're ready. No credit card required for the free plan.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" className="gap-2" asChild>
              <Link to="/content#contact">
                Get Started Free
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/content#contact">
                Contact Sales
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

