import { Button } from "@/components/ui/button";
import { 
  Mail, 
  Building2, 
  Handshake, 
  ArrowRight,
  FileText,
  Users
} from "lucide-react";

export const ContactPartner = () => {
  return (
    <section id="contact" className="py-20 bg-section-gradient overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 text-primary text-sm font-medium">
            <div className="w-8 h-0.5 bg-primary rounded-full" />
            Contact & Partner With Us
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            <span className="text-foreground">Let's Work</span>
            <br />
            <span className="text-gradient">Together</span>
          </h2>
          
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're a merchant, bank, or potential partner, we'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Merchant Onboarding */}
          <div className="bg-white rounded-2xl p-6 shadow-3d border border-[#00BAF2]/30 card-3d">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <Building2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Merchant Onboarding</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Ready to start accepting QR payments? Get in touch with us and get started today.
            </p>
            <Button variant="hero-outline" className="w-full gap-2" asChild>
              <a href="/content#download">
                Apply as Merchant
                <ArrowRight className="w-4 h-4" />
              </a>
            </Button>
          </div>

          {/* Bank / Partner Inquiry */}
          <div className="bg-white rounded-2xl p-6 shadow-3d border border-[#00BAF2]/30 card-3d">
            <div className="w-12 h-12 rounded-xl bg-qadampe-orange/10 flex items-center justify-center mb-4">
              <Handshake className="w-6 h-6 text-qadampe-orange" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Bank / Partner Inquiry</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Interested in partnering with us? Let's explore opportunities together.
            </p>
            <Button variant="hero-outline" className="w-full gap-2">
              Partner Inquiry
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Support Email */}
          <div className="bg-white rounded-2xl p-6 shadow-3d border border-[#00BAF2]/30 card-3d">
            <div className="w-12 h-12 rounded-xl bg-qadampe-success/10 flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-qadampe-success" />
            </div>
            <h3 className="text-xl font-bold text-foreground mb-2">Support Email</h3>
            <p className="text-sm text-muted-foreground mb-6">
              Have questions or need help? Our support team is ready to assist you.
            </p>
            <a
              href="mailto:support@qadampe.com"
              className="inline-flex items-center gap-2 text-primary hover:underline font-medium"
            >
              support@qadampe.com
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

