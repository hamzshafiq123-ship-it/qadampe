import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Services } from "@/components/sections/Services";
import { QRPayments } from "@/components/sections/QRPayments";
import { ForUsers } from "@/components/sections/ForUsers";
import { ForMerchants } from "@/components/sections/ForMerchants";
import { AboutQadampe } from "@/components/sections/AboutQadampe";
import { Footer } from "@/components/sections/Footer";
import { Security } from "@/components/sections/Security";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Services />
        <QRPayments />
        <ForUsers />
        <ForMerchants />
        <AboutQadampe />
        <Security />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
