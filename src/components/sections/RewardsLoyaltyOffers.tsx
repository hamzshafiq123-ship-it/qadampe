import { Button } from "@/components/ui/button";
import { 
  Gift, 
  QrCode, 
  Store, 
  Ticket, 
  Users, 
  Sparkles,
  ArrowRight,
  Check,
  Crown,
  TrendingUp,
  BarChart3,
  Target,
  Award,
  DollarSign
} from "lucide-react";

const userRewards = [
  {
    icon: QrCode,
    title: "Scan → Earn Loyalty Points",
    description: "Every QR scan earns you points automatically. The more you scan, the more you earn!",
    color: "primary",
    badge: "Instant"
  },
  {
    icon: Store,
    title: "Merchant-Specific Rewards",
    description: "Get exclusive rewards from your favorite merchants. Each shop has unique offers just for you.",
    color: "orange",
    badge: "Exclusive"
  },
  {
    icon: Ticket,
    title: "Vouchers and Limited Offers",
    description: "Access time-limited vouchers and special deals. Don't miss out on flash sales and seasonal offers.",
    color: "purple",
    badge: "Limited"
  },
  {
    icon: Users,
    title: "Referral Rewards",
    description: "Invite friends and earn bonus points. Share the app and get rewarded for every successful referral.",
    color: "success",
    badge: "Bonus"
  },
  {
    icon: Sparkles,
    title: "Win Prizes & Giveaways",
    description: "Participate in exciting campaigns, contests, and giveaways. Win amazing prizes and cash rewards.",
    color: "primary",
    badge: "Campaigns"
  },
  {
    icon: Crown,
    title: "Partner Offers (Coming Soon)",
    description: "Access exclusive offers from our partner network. More rewards, more value, more opportunities.",
    color: "purple",
    badge: "Future"
  },
];

const colorClasses = {
  primary: "bg-primary/10 text-primary",
  purple: "bg-qadampe-purple/10 text-qadampe-purple",
  orange: "bg-qadampe-orange/10 text-qadampe-orange",
  success: "bg-qadampe-success/10 text-qadampe-success",
};

const merchantRewards = [
  {
    icon: TrendingUp,
    title: "Increased Sales Volume",
    description: "Rewards drive repeat visits and higher transaction volumes. Customers who earn rewards come back more often and spend more.",
    color: "success",
    badge: "Instant"
  },
  {
    icon: Users,
    title: "Customer Retention",
    description: "Build lasting relationships with customers through loyalty programs. Keep them coming back with personalized rewards and offers.",
    color: "primary",
    badge: "Exclusive"
  },
  {
    icon: BarChart3,
    title: "Customer Insights & Analytics",
    description: "Get valuable data about customer behavior, preferences, and spending patterns. Use insights to create targeted campaigns.",
    color: "purple",
    badge: "Bonus"
  },
  {
    icon: Target,
    title: "Marketing Opportunities",
    description: "Promote your business through Qadampe's discovery features. Get featured in app searches and attract new customers.",
    color: "orange",
    badge: "Campaigns"
  },
  {
    icon: Award,
    title: "Performance Bonuses",
    description: "Earn bonuses based on transaction volume and customer engagement. The more active you are, the more you benefit.",
    color: "success",
    badge: "Bonus"
  },
  {
    icon: DollarSign,
    title: "Reduced Marketing Costs",
    description: "Save on traditional advertising. Our rewards platform helps you reach customers directly and cost-effectively.",
    color: "primary",
    badge: "Instant"
  },
];

const badgeColors = {
  Instant: "bg-primary/20 text-primary border-primary/30",
  Exclusive: "bg-qadampe-orange/20 text-qadampe-orange border-qadampe-orange/30",
  Limited: "bg-qadampe-purple/20 text-qadampe-purple border-qadampe-purple/30",
  Bonus: "bg-qadampe-success/20 text-qadampe-success border-qadampe-success/30",
  Campaigns: "bg-primary/20 text-primary border-primary/30",
  Future: "bg-muted text-muted-foreground border-border",
};

export const RewardsLoyaltyOffers = () => {
  return (
    <section id="rewards" className="py-20 bg-section-gradient overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium">
            <div className="w-8 h-0.5 bg-primary rounded-full" />
            Rewards, Loyalty & Offers
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-foreground">Engagement That</span>
            <br />
            <span className="text-gradient">Works Both Ways</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A powerful rewards ecosystem that benefits both users and merchants. 
            Scan, earn, engage, and grow together.
          </p>
        </div>

        {/* For Users Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl gradient-primary flex items-center justify-center">
              <Gift className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">For Users</h3>
              <p className="text-sm text-muted-foreground">Earn rewards with every scan</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {userRewards.map((reward, index) => (
              <div
                key={reward.title}
                className="bg-white rounded-2xl p-6 shadow-3d border border-[#00BAF2]/30 hover:shadow-3d-hover card-3d transition-all duration-300 group animate-fade-in-up relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-all duration-300 group-hover:scale-110 ${badgeColors[reward.badge as keyof typeof badgeColors]}`}>
                    {reward.badge}
                  </span>
                </div>

                <div className={`w-12 h-12 rounded-xl ${colorClasses[reward.color as keyof typeof colorClasses]} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <reward.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                
                <h4 className="text-lg font-semibold text-foreground mb-2 pr-16 transition-colors duration-300 group-hover:text-primary">
                  {reward.title}
                </h4>
                
                <p className="text-sm text-muted-foreground">
                  {reward.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* For Merchants Section */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-qadampe-orange/10 flex items-center justify-center">
              <Store className="w-5 h-5 text-qadampe-orange" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">For Merchants</h3>
              <p className="text-sm text-muted-foreground">Grow your business with rewards</p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {merchantRewards.map((reward, index) => (
              <div
                key={reward.title}
                className="bg-white rounded-2xl p-6 shadow-3d border border-[#00BAF2]/30 hover:shadow-3d-hover card-3d transition-all duration-300 group animate-fade-in-up relative overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium border transition-all duration-300 group-hover:scale-110 ${badgeColors[reward.badge as keyof typeof badgeColors]}`}>
                    {reward.badge}
                  </span>
                </div>

                <div className={`w-12 h-12 rounded-xl ${colorClasses[reward.color as keyof typeof colorClasses]} flex items-center justify-center mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                  <reward.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />
                </div>
                
                <h4 className="text-lg font-semibold text-foreground mb-2 pr-16 transition-colors duration-300 group-hover:text-primary">
                  {reward.title}
                </h4>
                
                <p className="text-sm text-muted-foreground">
                  {reward.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Start Earning & Engaging Today
            </h3>
            
            <p className="text-muted-foreground">
              Join thousands of users earning rewards and merchants growing their business 
              through our powerful engagement platform.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" className="gap-2" asChild>
                <a href="#download">
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <a href="#rewards">
                  Learn More
                </a>
              </Button>
            </div>

            {/* Key Points */}
            <div className="flex flex-wrap justify-center gap-6 pt-6">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-qadampe-success" />
                <span>Instant Rewards</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-qadampe-success" />
                <span>No Hidden Fees</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Check className="w-4 h-4 text-qadampe-success" />
                <span>Easy Setup</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

