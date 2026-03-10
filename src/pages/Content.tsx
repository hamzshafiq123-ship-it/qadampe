import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { QRPayments } from "@/components/sections/QRPayments";
import { ForUsers } from "@/components/sections/ForUsers";
import { RewardsLoyaltyOffers } from "@/components/sections/RewardsLoyaltyOffers";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { AboutQadampe } from "@/components/sections/AboutQadampe";
import { HelpFAQs } from "@/components/sections/HelpFAQs";
import { ContactPartner } from "@/components/sections/ContactPartner";
import { Blog } from "@/components/sections/Blog";
import { MerchantDashboard } from "@/components/sections/MerchantDashboard";
import { Pricing } from "@/components/sections/Pricing";
import { ComplianceSecurity } from "@/components/sections/ComplianceSecurity";
import { Footer } from "@/components/sections/Footer";
import { Services } from "@/components/sections/Services";
import Kyc from "@/components/sections/Kyc";
import QadampePolicy from "@/components/sections/QadampePolicy";
import { Security } from "@/components/sections/Security";

const Content = () => {
  const [activeSection, setActiveSection] = useState<string>("");
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Get hash from location
    const hash = location.hash.slice(1);

    if (hash) {
      setActiveSection(hash);
      // Smooth scroll to top when section changes
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      // If no hash, redirect to home
      navigate("/");
    }
  }, [location.hash, navigate]);

  // If no hash, show nothing
  if (!activeSection) {
    return null;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {activeSection === "blog" && <Blog />}
        {activeSection === "pricing" && <Pricing />}
        {activeSection === "how-it-works" && <HowItWorks />}
        {activeSection === "merchants" && <MerchantDashboard />}
        {activeSection === "for-users" && <ForUsers />}
        {activeSection === "about" && <AboutQadampe />}
        {activeSection === "qr-payments" && <QRPayments />}
        {activeSection === "rewards" && <RewardsLoyaltyOffers />}
        {activeSection === "compliance-security" && <ComplianceSecurity />}
        {activeSection === "security" && <Security />}
        {activeSection === "faqs" && <HelpFAQs />}
        {activeSection === "qadampepolicy" && <QadampePolicy />}
        {activeSection === "kyc" && <Kyc />}
        {activeSection === "contact" && <ContactPartner />}
        {activeSection === "download" && (
          <section id="download" className="py-20 bg-section-gradient animate-fade-in">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12 animate-fade-in-up">
                <h1 className="text-4xl font-bold mb-6">Download Qadampe</h1>
                <p className="text-muted-foreground">Get the app on your device</p>
              </div>
              <div className="max-w-2xl mx-auto grid md:grid-cols-2 gap-6">
                <a href="https://apps.apple.com/" target="_blank" rel="noopener noreferrer" className="bg-card rounded-2xl p-6 shadow-card border border-border hover:shadow-card-hover hover:-translate-y-2 transition-all duration-300 text-center group animate-fade-in-up animation-delay-200">
                  <div className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-110">📱</div>
                  <h3 className="font-bold text-lg mb-2 transition-colors duration-300 group-hover:text-primary">iOS App</h3>
                  <p className="text-sm text-muted-foreground">Download on the App Store</p>
                </a>
                <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer" className="bg-white rounded-2xl p-6 shadow-3d border border-[#00BAF2]/30 hover:shadow-3d-hover card-3d transition-all duration-300 text-center group animate-fade-in-up animation-delay-300">
                  <div className="text-3xl mb-4 transition-transform duration-300 group-hover:scale-110">🤖</div>
                  <h3 className="font-bold text-lg mb-2 transition-colors duration-300 group-hover:text-primary">Android App</h3>
                  <p className="text-sm text-muted-foreground">Get it on Google Play</p>
                </a>
              </div>
            </div>
          </section>
        )}
        {activeSection === "services" && (
          <>
            <Services />
            <RewardsLoyaltyOffers />
          </>
        )}
        {activeSection === "privacy" && (
          <section
            id="privacy"
            className="bg-section-gradient w-full py-12 sm:py-16 md:py-20 lg:py-24"
          >
            <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12">
              <ComplianceSecurity />
            </div>
          </section>
        )}
        {activeSection === "terms" && (
          <section id="terms" className="py-20 bg-section-gradient">
            <div className="container mx-auto px-4">
              <section id="terms" className="py-20 bg-section-gradient">
                <div className="container mx-auto px-4 max-w-5xl">

                  {/* Header */}
                  <div className="text-center mb-16">
                    <p className="text-primary font-medium mb-3 tracking-wide">Legal</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                      Terms & Conditions
                    </h2>
                    <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                      Welcome to QadamPe. Please read these Terms carefully before using our platform.
                    </p>
                    <p className="text-sm text-muted-foreground mt-4">
                      Last Updated: 21/02/2026
                    </p>
                  </div>

                  {/* Content Card */}
                  <div className="bg-white/70 backdrop-blur-md border border-border rounded-3xl shadow-card p-6 md:p-10 space-y-10">

                    {/* Intro */}
                    <div>
                      <h3 className="text-2xl font-semibold text-foreground mb-4">
                        Welcome to QadamPe
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        These Terms and Conditions ("Terms") govern your use of the QadamPe mobile application and related services. By using QadamPe, you agree to be bound by these Terms.
                      </p>
                    </div>

                    {/* Section Component Reusable Style */}
                    {[
                      {
                        title: "1. Who We Are & What This App Is",
                        content: `QadamPe is a technology platform that provides digital payment solutions, merchant services, and financial management tools. These Terms govern the use of QadamPe app and services.`
                      },
                      {
                        title: "2. Eligibility",
                        list: [
                          "Must be 18 years of age or older",
                          "Must provide accurate and truthful information",
                          "Must be legally allowed to use digital payment services in your jurisdiction",
                          "Must comply with all applicable laws and regulations"
                        ]
                      },
                      {
                        title: "3. Account Registration",
                        list: [
                          "One person = one account (one phone number per account)",
                          "You must provide true, accurate, and complete information",
                          "You are responsible for maintaining the security of your account",
                          "QadamPe reserves the right to suspend or terminate fake, duplicate, or fraudulent accounts",
                          "You must keep your login credentials confidential"
                        ]
                      },
                      {
                        title: "4. Nature of Service (Important)",
                        content: `IMPORTANT: QadamPe is a technology platform, not a bank, not a wallet provider. QadamPe does not hold user funds directly. Payments are processed through third-party banking partners and payment processors.`,
                        list: [
                          "Digital payment dashboards and analytics",
                          "QR code generation and management for merchants",
                          "Merchant discovery and directory services",
                          "Transaction analytics and reporting",
                          "Rewards and loyalty program management"
                        ]
                      },
                      {
                        title: "5. User Responsibilities",
                        list: [
                          "Not engage in fraudulent activities",
                          "Not use the service for illegal purposes",
                          "Not create misleading or fake QR codes",
                          "Not post fake promotions or offers",
                          "Not attempt to hack or compromise platform security",
                          "Not share account credentials",
                          "Report suspicious activity immediately"
                        ]
                      },
                      {
                        title: "6. Merchant Responsibilities",
                        list: [
                          "Provide accurate business information",
                          "Sell only legal products and services",
                          "Comply with tax laws and SBP compliance requirements",
                          "Maintain accurate business records",
                          "Respond to customer inquiries timely"
                        ]
                      },
                      {
                        title: "7. Payments Disclaimer",
                        content: `IMPORTANT: QadamPe does not hold user funds. Payments are processed via third-party banks and processors.`,
                        list: [
                          "Banking operations or fund transfers",
                          "Payment processing delays or failures",
                          "Disputes between users and merchants",
                          "Third-party processor issues"
                        ]
                      },
                      {
                        title: "8. Rewards, Offers & Promotions",
                        list: [
                          "Offers may be changed or withdrawn anytime",
                          "Subject to terms and conditions",
                          "Limited time unless stated",
                          "May require verification",
                          "No cash guarantee unless stated"
                        ]
                      },
                      {
                        title: "9. KYC & AML Compliance",
                        list: [
                          "Identity verification via CNIC and government IDs",
                          "Information may be shared with regulators if required",
                          "Risk-based assessments for users",
                          "Additional info may be required for high-risk transactions",
                          "Failure to comply may result in suspension"
                        ]
                      },
                      {
                        title: "10. Data Usage",
                        content: `QadamPe collects and uses data to provide services, prevent fraud, comply with legal requirements, and send important updates. Please refer to our Privacy Policy for full details.`
                      },
                      {
                        title: "11. Suspension & Termination",
                        list: [
                          "Fraudulent activities",
                          "Violation of Terms",
                          "Providing false information",
                          "Failure to comply with KYC/AML",
                          "Illegal usage"
                        ]
                      },
                      {
                        title: "12. Limitation of Liability",
                        content: `To the maximum extent permitted by law, QadamPe shall not be liable for indirect or consequential damages. Total liability shall not exceed fees paid in the preceding 12 months.`
                      },
                      {
                        title: "13. Changes to Terms",
                        content: `QadamPe may modify these Terms at any time. Continued use constitutes acceptance of updated Terms.`
                      },
                      {
                        title: "14. Governing Law",
                        content: `These Terms are governed by the laws of the Islamic Republic of Pakistan. Disputes fall under the exclusive jurisdiction of Pakistani courts.`
                      },
                      {
                        title: "15. Contact Information",
                        list: [
                          "Email: support@qadampe.com",
                          "Phone: +92-XXX-XXXXXXX",
                          "Address: [Your Company Address], Pakistan",
                          "In-App Support available 24/7"
                        ]
                      }
                    ].map((section, index) => (
                      <div key={index} className="space-y-4">
                        <h4 className="text-xl md:text-2xl font-semibold text-foreground">
                          {section.title}
                        </h4>

                        {section.content && (
                          <p className="text-muted-foreground leading-relaxed">
                            {section.content}
                          </p>
                        )}

                        {section.list && (
                          <ul className="space-y-3 pl-4">
                            {section.list.map((item, i) => (
                              <li
                                key={i}
                                className="flex items-start text-muted-foreground"
                              >
                                <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}

                    {/* Closing */}
                    <div className="pt-6 border-t border-border">
                      <p className="text-muted-foreground text-sm md:text-base leading-relaxed text-center">
                        By using QadamPe, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
                        If you do not agree, please do not use QadamPe.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default Content;

