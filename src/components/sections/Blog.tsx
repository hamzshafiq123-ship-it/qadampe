import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Calendar, 
  User, 
  ArrowRight,
  BookOpen,
  TrendingUp,
  Lightbulb,
  Shield,
  QrCode,
  CreditCard,
  Smartphone,
  Gift,
  Megaphone,
  DollarSign,
  BarChart3,
  HelpCircle,
  Download,
  Wallet,
  Store
} from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: 1,
    title: "The Future of QR Payments in Pakistan",
    excerpt: "Discover how QR payments are revolutionizing the payment landscape in Pakistan and what it means for businesses and customers.",
    author: "Qadampe Team",
    date: "March 15, 2025",
    category: "QR Adoption",
    icon: QrCode,
    color: "primary",
    readTime: "5 min read"
  },
  {
    id: 2,
    title: "Why QR Code Adoption is Growing Rapidly in Pakistan",
    excerpt: "Explore the factors driving QR payment adoption across Pakistan and how businesses are benefiting from this digital transformation.",
    author: "Ahmed Hassan",
    date: "March 12, 2025",
    category: "QR Adoption",
    icon: Smartphone,
    color: "primary",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Digital Payments: The New Normal for Pakistani Businesses",
    excerpt: "How digital payment solutions are becoming essential for modern businesses in Pakistan and what you need to know.",
    author: "Sara Khan",
    date: "March 8, 2025",
    category: "Digital Payments",
    icon: CreditCard,
    color: "purple",
    readTime: "7 min read"
  },
  {
    id: 4,
    title: "Understanding Digital Payment Trends in 2025",
    excerpt: "A comprehensive analysis of digital payment trends, consumer behavior, and what businesses should expect in the coming year.",
    author: "Qadampe Team",
    date: "March 5, 2025",
    category: "Digital Payments",
    icon: DollarSign,
    color: "purple",
    readTime: "8 min read"
  },
  {
    id: 5,
    title: "How to Create Effective Promotional Campaigns",
    excerpt: "Learn the secrets of successful promotional campaigns that drive customer engagement and increase sales through QR payments.",
    author: "Fatima Ali",
    date: "March 1, 2025",
    category: "Promotions",
    icon: Megaphone,
    color: "orange",
    readTime: "6 min read"
  },
  {
    id: 6,
    title: "Maximizing Sales with Seasonal Promotions",
    excerpt: "Discover how to leverage seasonal promotions and special offers to boost your business revenue and customer loyalty.",
    author: "Hassan Malik",
    date: "February 28, 2025",
    category: "Promotions",
    icon: Gift,
    color: "orange",
    readTime: "5 min read"
  },
  {
    id: 7,
    title: "QR Payment Adoption: Success Stories from Pakistani Merchants",
    excerpt: "Real stories from merchants who have successfully adopted QR payments and transformed their business operations.",
    author: "Qadampe Team",
    date: "February 25, 2025",
    category: "QR Adoption",
    icon: TrendingUp,
    color: "success",
    readTime: "7 min read"
  },
  {
    id: 8,
    title: "The Security Behind Digital Payments",
    excerpt: "Understanding the security measures that protect digital transactions and how businesses can ensure safe payment processing.",
    author: "Qadampe Team",
    date: "February 22, 2025",
    category: "Digital Payments",
    icon: Shield,
    color: "purple",
    readTime: "6 min read"
  },
  {
    id: 9,
    title: "Promotional Strategies That Drive Customer Engagement",
    excerpt: "Effective promotional strategies that help businesses attract new customers and retain existing ones through rewards and offers.",
    author: "Ayesha Raza",
    date: "February 18, 2025",
    category: "Promotions",
    icon: BarChart3,
    color: "orange",
    readTime: "5 min read"
  },
];

const colorClasses = {
  primary: "bg-primary/10 text-primary",
  purple: "bg-qadampe-purple/10 text-qadampe-purple",
  orange: "bg-qadampe-orange/10 text-qadampe-orange",
  success: "bg-qadampe-success/10 text-qadampe-success",
};

const appFAQs = [
  {
    question: "Is Qadampe free to use?",
    answer: "Yes! Qadampe is completely free for users. There are no hidden fees, no subscription costs, and no charges for downloading or using the app. Merchants pay only a small transaction fee per payment, with no monthly fees or setup costs.",
    icon: Download
  },
  {
    question: "How do I earn rewards with Qadampe?",
    answer: "Every time you scan a QR code and make a payment, you automatically earn loyalty points. These points can be redeemed for vouchers, discounts, and special offers. The more you scan, the more you earn! Merchants can also set up their own reward programs to give you additional benefits.",
    icon: Gift
  },
  {
    question: "Do I need a digital wallet to use Qadampe?",
    answer: "No! You don't need a digital wallet or any special account. Qadampe works directly with your existing bank account. Just scan the QR code and pay using your bank's app - it's that simple. No wallet setup, no bank complexity.",
    icon: Wallet
  },
  {
    question: "How do merchants get started with Qadampe?",
    answer: "Merchants can sign up for Qadampe Business in just a few minutes. After registration, they instantly receive their unique QR code. They can print it, display it in their store, or use it digitally. There's no complex setup or technical knowledge required.",
    icon: Store
  },
  {
    question: "Is the Qadampe app available on both iOS and Android?",
    answer: "Yes! Qadampe is available for both iOS and Android devices. You can download it from the App Store (iOS) or Google Play Store (Android). The app works on all modern smartphones and tablets.",
    icon: Smartphone
  },
  {
    question: "How secure are QR payments with Qadampe?",
    answer: "Qadampe is built with State Bank of Pakistan standards in mind, ensuring compliance and security. All transactions are encrypted and secure. We never store sensitive banking information on our servers. Your payments are processed directly through your bank's secure systems.",
    icon: Shield
  },
  {
    question: "Can I track my spending and transactions?",
    answer: "Yes! The Qadampe app provides a detailed spend summary showing all your transactions. You can view weekly and monthly summaries, track your rewards, and export your transaction history in Excel or PDF format.",
    icon: BarChart3
  },
  {
    question: "How do I find merchants near me?",
    answer: "Open the Qadampe app and use the 'Discover' feature to find verified merchants in your area. You can see their locations, ratings, and available offers all in one place. This helps you discover new businesses and take advantage of special promotions.",
    icon: QrCode
  },
];

export const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-section-gradient overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium">
            <div className="w-8 h-0.5 bg-primary rounded-full" />
            Blog
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-foreground">Latest Insights</span>
            <br />
            <span className="text-gradient">and Updates</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Stay informed with the latest news, tips, and insights about payments, 
            business growth, and digital transformation.
          </p>
        </div>

        {/* Blog Posts Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 group animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 group-hover:scale-105 ${colorClasses[post.color as keyof typeof colorClasses]}`}>
                  {post.category}
                </span>
                <div className={`w-10 h-10 rounded-xl ${colorClasses[post.color as keyof typeof colorClasses]} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <post.icon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />
                </div>
              </div>

              {/* Post Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                {post.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                {post.excerpt}
              </p>

              {/* Meta Information */}
              <div className="flex items-center justify-between text-xs text-muted-foreground mb-4 pb-4 border-b border-border">
                <div className="flex items-center gap-2">
                  <User className="w-3 h-3" />
                  <span>{post.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-3 h-3" />
                  <span>{post.date}</span>
                </div>
              </div>

              {/* Read More */}
              <Button 
                variant="ghost" 
                size="sm" 
                className="w-full justify-between group-hover:text-primary transition-all duration-300"
                asChild
              >
                <a href={`#blog-post-${post.id}`}>
                  Read Article
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
            </article>
          ))}
        </div>

        {/* FAQs Section */}
        <div className="mb-16 animate-fade-in-up animation-delay-700">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 text-primary text-sm font-medium mb-4">
              <HelpCircle className="w-4 h-4" />
              <span>Frequently Asked Questions</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Common Questions About Qadampe
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to the most common questions about using Qadampe app.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {appFAQs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`faq-${index}`}
                  className="bg-card rounded-2xl px-6 border border-border shadow-card hover:shadow-card-hover transition-all"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 flex-1 text-left">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <faq.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-lg font-semibold text-foreground">
                        {faq.question}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 pt-0">
                    <div className="pl-14">
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

          <div className="text-center mt-8">
            <p className="text-muted-foreground mb-4">
              Still have questions? We're here to help.
            </p>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/content#faqs">
                Visit Help & Support
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20 animate-fade-in-up animation-delay-800">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 rounded-2xl gradient-primary flex items-center justify-center">
                <BookOpen className="w-8 h-8 text-primary-foreground" />
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">
              Stay Updated with Our Blog
            </h3>
            
            <p className="text-muted-foreground">
              Get the latest insights, tips, and updates delivered to your inbox. 
              Join our community of merchants and customers.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" size="lg" className="gap-2" asChild>
                <Link to="/content#download">
                  Download App
                  <Download className="w-4 h-4" />
                </Link>
              </Button>
              <Button variant="hero-outline" size="lg" asChild>
                <Link to="/content#faqs">
                  Get Help
                  <HelpCircle className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

