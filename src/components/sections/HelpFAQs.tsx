import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { 
  HelpCircle, 
  Download, 
  Gift, 
  Wallet, 
  QrCode, 
  Smartphone,
  Store,
  User,
  Mail,
  Phone,
  Clock,
  MessageSquare,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Link } from "react-router-dom";

const userFAQs = [
  {
    question: "Is it free?",
    answer: "Yes! Qadampe is completely free for users. There are no hidden fees, no subscription costs, and no charges for downloading or using the app. You can scan QR codes and make payments without any cost.",
    icon: Download
  },
  {
    question: "How do rewards work?",
    answer: "Every time you scan a QR code and make a payment, you automatically earn loyalty points. These points can be redeemed for vouchers, discounts, and special offers. The more you scan, the more you earn! Merchants can also set up their own reward programs to give you additional benefits.",
    icon: Gift
  },
  {
    question: "Do I need a wallet?",
    answer: "No! You don't need a digital wallet or any special account. Qadampe works directly with your existing bank account. Just scan the QR code and pay using your bank's app - it's that simple. No wallet setup, no bank complexity.",
    icon: Wallet
  },
  {
    question: "Is the app available on iOS and Android?",
    answer: "Yes! Qadampe is available for both iOS and Android devices. You can download it from the App Store (iOS) or Google Play Store (Android). The app works on all modern smartphones and tablets.",
    icon: Smartphone
  },
  {
    question: "How do I find merchants near me?",
    answer: "Open the Qadampe app and use the 'Discover' feature to find verified merchants in your area. You can see their locations, ratings, and available offers all in one place.",
    icon: QrCode
  },
  {
    question: "Can I track my spending?",
    answer: "Yes! The app provides a detailed spend summary showing all your transactions. You can view weekly and monthly summaries, track your rewards, and export your transaction history.",
    icon: Download
  },
];

const merchantFAQs = [
  {
    question: "How do I get a QR code?",
    answer: "Merchants can sign up for Qadampe Business in just a few minutes. After registration, you instantly receive your unique QR code. You can print it, display it in your store, or use it digitally. There's no complex setup or technical knowledge required.",
    icon: QrCode
  },
  {
    question: "What are the fees?",
    answer: "Merchants pay only a small transaction fee per payment, with no monthly fees or setup costs. There are no hidden charges, and you only pay when you receive payments. Contact us for detailed pricing information.",
    icon: Download
  },
  {
    question: "How do I track my sales?",
    answer: "The Qadampe Business dashboard provides real-time analytics showing all your transactions, customer data, sales trends, and performance metrics. You can view daily, weekly, and monthly summaries with detailed insights.",
    icon: Store
  },
  {
    question: "Can I set up rewards for my customers?",
    answer: "Absolutely! You can create custom reward programs, loyalty points, and promotional campaigns directly from your dashboard. Set up offers, discounts, and special deals to engage and retain customers.",
    icon: Gift
  },
  {
    question: "How long does setup take?",
    answer: "Setup is instant! Once you complete the registration process, you'll receive your QR code immediately. You can start accepting payments right away. No waiting period, no approval delays.",
    icon: Clock
  },
  {
    question: "What support do you provide?",
    answer: "We offer comprehensive support through email, phone, and our help center. Merchants also get priority support with dedicated assistance for setup, troubleshooting, and business growth strategies.",
    icon: HelpCircle
  },
];

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export const HelpFAQs = () => {
  return (
    <section id="faqs" className="py-20 bg-section-gradient-alt overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 space-y-4 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium">
            <div className="w-8 h-0.5 bg-primary rounded-full animate-fade-in-left" />
            Help & Support
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight animate-fade-in-up animation-delay-100">
            <span className="text-foreground">We're Here</span>
            <br />
            <span className="text-gradient">to Help You</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
            Find answers to common questions or get in touch with our support team. 
            We're available to assist you every step of the way.
          </p>
        </div>

        {/* Quick Support Info */}
        <div className="grid md:grid-cols-3 gap-6 mb-16 max-w-5xl mx-auto">
          <div className="bg-card rounded-2xl p-6 shadow-card border border-border text-center animate-fade-in-up animation-delay-300">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-primary" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Response Time</h3>
            <p className="text-sm text-muted-foreground">We typically respond within 24 hours</p>
          </div>
          <div className="bg-card rounded-2xl p-6 shadow-card border border-border text-center animate-fade-in-up animation-delay-400">
            <div className="w-12 h-12 rounded-xl bg-qadampe-success/10 flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-6 h-6 text-qadampe-success" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Available Support</h3>
            <p className="text-sm text-muted-foreground">Email, phone, and live chat available</p>
          </div>
          <div className="bg-card rounded-2xl p-6 shadow-card border border-border text-center animate-fade-in-up animation-delay-500">
            <div className="w-12 h-12 rounded-xl bg-qadampe-orange/10 flex items-center justify-center mx-auto mb-4">
              <HelpCircle className="w-6 h-6 text-qadampe-orange" />
            </div>
            <h3 className="font-semibold text-foreground mb-2">Help Center</h3>
            <p className="text-sm text-muted-foreground">Browse our comprehensive FAQ section</p>
          </div>
        </div>

        {/* FAQs for Users */}
        <div className="mb-16 animate-fade-in-up animation-delay-600">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <User className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Common Questions for Users</h3>
              <p className="text-sm text-muted-foreground">Everything you need to know as a Qadampe user</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {userFAQs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`user-${index}`}
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
        </div>

        {/* FAQs for Merchants */}
        <div className="mb-16 animate-fade-in-up animation-delay-700">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-xl bg-qadampe-orange/10 flex items-center justify-center">
              <Store className="w-5 h-5 text-qadampe-orange" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Common Questions for Merchants</h3>
              <p className="text-sm text-muted-foreground">Everything you need to know as a Qadampe merchant</p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {merchantFAQs.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`merchant-${index}`}
                  className="bg-card rounded-2xl px-6 border border-border shadow-card hover:shadow-card-hover transition-all"
                >
                  <AccordionTrigger className="hover:no-underline py-6">
                    <div className="flex items-center gap-4 flex-1 text-left">
                      <div className="w-10 h-10 rounded-xl bg-qadampe-orange/10 flex items-center justify-center flex-shrink-0">
                        <faq.icon className="w-5 h-5 text-qadampe-orange" />
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
        </div>

        {/* Contact / Support Section */}
        <div className="max-w-4xl mx-auto mb-16 animate-fade-in-up animation-delay-800">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              Contact & Support
            </h3>
            <p className="text-muted-foreground">
              Can't find what you're looking for? Get in touch with us directly.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Email Support */}
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border text-center">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Email Support</h4>
                <p className="text-sm text-muted-foreground mb-4">Get help via email</p>
                <a
                  href="mailto:support@qadampe.com"
                  className="text-primary hover:underline font-medium text-sm"
                >
                  support@qadampe.com
                </a>
              </div>

              {/* Phone Support */}
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border text-center">
                <div className="w-12 h-12 rounded-xl bg-qadampe-success/10 flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-qadampe-success" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Phone Support</h4>
                <p className="text-sm text-muted-foreground mb-4">Call us directly</p>
                <a
                  href="tel:+923001234567"
                  className="text-primary hover:underline font-medium text-sm"
                >
                  +92 300 123 4567
                </a>
              </div>

              {/* Social Media Links */}
              <div className="bg-card rounded-2xl p-6 shadow-card border border-border text-center">
                <div className="w-12 h-12 rounded-xl bg-qadampe-orange/10 flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-6 h-6 text-qadampe-orange" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Follow Us</h4>
                <p className="text-sm text-muted-foreground mb-4">Connect on social media</p>
                <div className="flex gap-2 justify-center">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                        aria-label={social.label}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-8 md:p-12 border border-primary/20 text-center animate-fade-in-up animation-delay-900">
          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Still Need Help?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our support team is available 24/7 to assist you. Don't hesitate to reach out!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="hero" size="lg" className="gap-2" asChild>
              <Link to="/content#contact">
                Contact Support
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <Link to="/content#download">
                Download App
                <Download className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

