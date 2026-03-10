import { Button } from "@/components/ui/button";
import { 
  Shield, 
  Store, 
  MapPin, 
  TrendingUp, 
  Star,
  ArrowRight,
  Check,
  BadgeCheck,
  Eye
} from "lucide-react";

const visibilityFeatures = [
  {
    icon: BadgeCheck,
    title: "Verified Merchant Badge",
    description: "Get a verified badge that builds instant trust with customers. Show them you're a legitimate, verified business.",
    color: "success",
    highlight: true
  },
  {
    icon: Store,
    title: "Business Profile Inside the App",
    description: "Create a complete business profile visible to all Qadampe users. Showcase your brand, location, and offerings.",
    color: "primary"
  },
  {
    icon: MapPin,
    title: "Discoverable in Nearby Search",
    description: "Appear in search results when customers look for businesses nearby. Get discovered by new customers effortlessly.",
    color: "orange"
  },
  {
    icon: Shield,
    title: "Builds Customer Trust",
    description: "Verified status and complete profile information help customers feel confident choosing your business.",
    color: "success"
  },
  {
    icon: Star,
    title: "Featured Placement (Coming Soon)",
    description: "Get premium visibility with featured placement in search results and app recommendations.",
    color: "purple",
    future: true
  },
];

const colorClasses = {
  primary: "bg-primary/10 text-primary",
  purple: "bg-qadampe-purple/10 text-qadampe-purple",
  orange: "bg-qadampe-orange/10 text-qadampe-orange",
  success: "bg-qadampe-success/10 text-qadampe-success",
};

export const MerchantVisibilityTrust = () => {
  return (
    <section className="py-20 bg-section-gradient-alt overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium">
            <div className="w-8 h-0.5 bg-primary rounded-full" />
            Merchant Visibility & Trust
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-foreground">Why Merchants</span>
            <br />
            <span className="text-gradient">Care About Visibility</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stand out from the crowd with verified status, complete profiles, and 
            discoverability that builds trust and drives customers to your door.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {visibilityFeatures.map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up relative ${
                feature.highlight ? 'ring-2 ring-qadampe-success/20' : ''
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {feature.future && (
                <div className="absolute top-4 right-4">
                  <span className="px-2.5 py-1 rounded-full text-xs font-medium bg-muted text-muted-foreground border border-border transition-all duration-300 group-hover:scale-110">
                    Coming Soon
                  </span>
                </div>
              )}
              
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

        {/* Trust Benefits */}
        <div className="bg-gradient-to-r from-qadampe-success/10 via-qadampe-success/5 to-qadampe-success/10 rounded-3xl p-8 md:p-12 border border-qadampe-success/20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-qadampe-success/10 flex items-center justify-center">
                <Eye className="w-6 h-6 text-qadampe-success" />
              </div>
              <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                Visibility = More Customers
              </h3>
            </div>
            
            <p className="text-muted-foreground mb-8 max-w-2xl">
              When customers can easily find and verify your business, they're more likely 
              to visit and make purchases. Trust and visibility go hand in hand.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                { stat: "3x", label: "More Discoverability" },
                { stat: "85%", label: "Trust Increase" },
                { stat: "2.5x", label: "Customer Confidence" },
              ].map((item) => (
                <div key={item.label} className="text-center">
                  <div className="text-3xl font-bold text-foreground mb-1">{item.stat}</div>
                  <div className="text-sm text-muted-foreground">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

