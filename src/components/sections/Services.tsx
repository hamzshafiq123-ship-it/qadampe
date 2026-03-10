// import { QrCode, CreditCard, Receipt, Wallet, BarChart3, Gift, ArrowRight } from "lucide-react";

// // const services = [
// //   { icon: QrCode, label: "QR Payments", color: "primary" },
// //   { icon: CreditCard, label: "Card Payments", color: "purple" },
// //   { icon: Receipt, label: "Invoicing", color: "orange" },
// //   { icon: Wallet, label: "Digital Wallet", color: "success" },
// //   { icon: BarChart3, label: "Analytics", color: "primary" },
// //   { icon: Gift, label: "Loyalty", color: "orange" },
// // ];

// const services = [
//   { icon: QrCode, label: "Pay with QR", color: "primary" },
//   { icon: CreditCard, label: "Nearby Merchants", color: "purple" },
//   { icon: Receipt, label: "Featured Merchants", color: "orange" },
//   { icon: Gift , label: "Deals & Offers", color: "success" },
//   { icon: BarChart3, label: "Rewards", color: "primary" },
//   { icon: Wallet, label: "Recent Payments", color: "purple" },
//   { icon: Gift, label: "Services (Coming Soon)", color: "orange" },
// ];


// const colorClasses = {
//   primary: "bg-primary/10 text-primary",
//   purple: "bg-qadampe-purple/10 text-qadampe-purple",
//   orange: "bg-qadampe-orange/10 text-qadampe-orange",
//   success: "bg-qadampe-success/10 text-qadampe-success",
// };

// export const Services = () => {
//   return (
//     <section className="py-12 bg-section-gradient w-full animate-fade-in">
//       <div className="w-full px-4 md:px-8 lg:px-12 xl:px-16 2xl:px-20">
//         <h2 className="text-sm font-medium text-[#012a72] mb-6 animate-fade-in-up">Payments & Business Tools</h2>

//         {/* Service Icons */}
//         <div className="flex flex-wrap gap-6 md:gap-8 lg:gap-10 mb-8 justify-start">
//           {services.map((service, index) => (
//             <div
//               key={service.label}
//               className="flex flex-col items-center gap-2 group cursor-pointer animate-fade-in-up"
//               style={{ animationDelay: `${index * 100}ms` }}
//             >
//               <div className={`w-14 h-14 md:w-16 md:h-16 rounded-2xl ${colorClasses[service.color as keyof typeof colorClasses]} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-3d group-hover:shadow-3d-hover`}>
//                 <service.icon className="w-6 h-6 md:w-7 md:h-7 transition-transform duration-300 group-hover:scale-110" />
//               </div>
//               <span className="text-xs md:text-sm font-medium text-[#012a72] transition-colors duration-300 group-hover:text-[#012a72]/80">{service.label}</span>
//             </div>
//           ))}
//         </div>

//         {/* Promotional Banners */}
//         <div className="grid md:grid-cols-2 gap-4 md:gap-6 w-full">
//           {/* QR Payment Promo */}
//           <div className="gradient-primary rounded-2xl p-6 md:p-8 lg:p-10 text-primary-foreground overflow-hidden relative group card-3d shadow-3d min-h-[180px] md:min-h-[200px] animate-fade-in-up animation-delay-300">
//             <div className="relative z-10">
//               <p className="text-sm md:text-base opacity-90 mb-1 font-medium">Accept QR Payments & Win Rewards</p>
//               <p className="text-xs md:text-sm opacity-75 mb-4">Zero setup cost. Promo: STARTFREE</p>
//               {/* <button className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm md:text-base font-medium hover:scale-105 hover:shadow-lg transition-all duration-300">
//                 Start Now
//                 <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//               </button> */}
//             </div>
//             <div className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 opacity-20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
//               <QrCode className="w-24 h-24 md:w-32 md:h-32" />
//             </div>
//           </div>

//           {/* Business Dashboard */}
//           <div className="bg-[#012a72] rounded-2xl p-6 md:p-8 lg:p-10 text-primary-foreground overflow-hidden relative group card-3d shadow-3d min-h-[180px] md:min-h-[200px] animate-fade-in-up animation-delay-400">
//             <div className="relative z-10">
//               <p className="text-sm md:text-base opacity-90 mb-1 font-medium">Business Dashboard</p>
//               <p className="text-xs md:text-sm opacity-75 mb-4">Track sales & analytics in real-time</p>
//               {/* <button className="inline-flex items-center gap-2 bg-[#00BAF2] text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full text-sm md:text-base font-medium hover:scale-105 hover:shadow-lg transition-all duration-300">
//                 Open Dashboard
//                 <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//               </button> */}
//             </div>
//             <div className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 opacity-20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12">
//               <BarChart3 className="w-24 h-24 md:w-32 md:h-32" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };


import { useState } from "react";
import {
  QrCode,
  CreditCard,
  Receipt,
  Wallet,
  BarChart3,
  Gift,
  X,
} from "lucide-react";
import { HashLink } from 'react-router-hash-link';



/* ===============================
   SERVICES DATA WITH POPUP CONTENT
================================ */

const services = [
  {
    icon: QrCode,
    label: "Pay with QR",
    color: "primary",
    popup: {
      title: "Pay with QR",
      content: [

        "Qadampe allows customers to scan and pay instantly using QR codes. Merchants get a smooth digital payment experience without needing a wallet system. Every scan is tracked to help businesses understand customer activity, sales trends, and performance in real time.",
      ],
    },
  },

  {
    icon: CreditCard,
    label: (
      <>
        Nearby Merchants
        <br />
        & Restaurants
      </>
    ),
    color: "purple",
    popup: {
      title: "Nearby Merchants & Resturants",
      content: [
        "Discover nearby verified merchants and simply scan the Qadampe QR to pay instantly through Raast—direct bank-to-bank, no wallet, no delays. Every successful scan unlocks rewards, cashback, and exclusive offers, making payments fast, secure, and rewarding.",
      ],
    },
  },

  {
    icon: Receipt,
    label: "Featured Merchants",
    color: "orange",
    popup: {
      title: "Merchant Dashboard",
      content: [
        "Qadampe provides merchants with a professional dashboard to monitor QR activity, customer engagement, scans, performance insights, and business growth. The dashboard becomes the daily control system for merchants, helping them manage visibility, rewards, and promotions in one place",
        <span>
          For Informations About Merchant Visit <br />
          <HashLink
            smooth
            to="/content#merchants"
          >
            <span
              className="text-primary font-semibold underline hover:opacity-80"
            >
              Merchant Dashboard
            </span>
          </HashLink>
        </span>

      ]
    },
  },

  {
    icon: Gift,
    label: "Deals & Offers",
    color: "success",
    popup: {
      title: "Deals & Offers",
      content: [
        "Qadampe provides merchants the ability to create discounts, limited-time offers, and QR-based deals to attract more customers.",

        <span><strong>Deals & Offers</strong> Limited-time restaurant deals and seasonal discounts</span>,


        <span><strong>QR scan discounts (Scan → Unlock Offer)</strong>

          "Category-based offers (Food, Retail, Services, etc.)"</span>,

        <span><strong>Referral-based deals (Invite friend → both unlock discount)</strong> Merchant-created promotions to boost footfall</span>,
      ],
    },
  },

  {
    icon: BarChart3,
    label: "Rewards",
    color: "primary",
    popup: {
      title: "Rewards",
      content: [

        "Qadampe’s rewards system is not just cashback — it is a full engagement ecosystem where merchants and brands pay to drive customer behavior. Users earn points, unlock vouchers, and participate in reward campaigns, while Qadampe earns through premium merchant tools, visibility, promotions, and loyalty systems.",

        <span><strong>Rewards & Revenue Models</strong> Merchant Subscription Plan (Premium dashboard + advanced tools)</span>,

        <span><strong>Verified & Featured Merchant Badge</strong> (paid visibility + trust listing)</span>,

        <span><strong>Merchant Promotions & Campaigns</strong> (boost deals, featured offers, priority listing)</span>,

        <span><strong>Loyalty & Voucher Programs</strong> (scan-based points, redeemable rewards)</span>,

        <span><strong>Referral Reward Programs</strong> (invite system with merchant-sponsored rewards)</span>,

        <span><strong>Premium Business Analytics Add-ons</strong> (exports, trends, advanced reporting)</span>,

        <span><strong>Staff / Rider Tracking Module</strong> (paid operational control for restaurants/couriers)</span>,

        <span><strong>Multi-Branch Control Plans</strong> (tiered pricing for chains & franchises)</span>,

        <span><strong>Brand Sponsored Rewards</strong> (brands pay to sponsor vouchers and rewards)</span>,

        <span><strong>Per-Merchant Rewards Dashboard</strong> (merchant-level reward tracking as premium feature)</span>,

        <span><strong>Future Physical QR Boards & Branding Kits (paid deployment for shops)</strong>

          Future Soundbox Revenue Model (branded soundbox deployment for scale growth),
          This creates a high-margin software-led revenue model that can scale to 500,000+ merchants, making Qadampe a potential unicorn-level platform.</span>,

      ],
    },
  },

  {
    icon: Wallet,
    label: " Compliance & Security",
    color: "purple",
    popup: {
      title: " Compliance & Security",
      content: [

        <span> <span>
          For More Informations Visit{" "}</span> <br />
          <HashLink
            smooth
            to="/content#security"
            className="text-primary font-semibold underline hover:opacity-80"
          >
            Compliance & Security
          </HashLink></span>

      ],
    },
  },

  {
    icon: Gift,
    label: "Services (Coming Soon)",
    color: "orange",
    popup: {
      title: "Services",
      content: [

        "Qadampe is continuously expanding to build a stronger and more scalable digital ecosystem for merchants and users across Pakistan.",


        <span><strong>Wallets</strong> – Store and manage digital balance</span>,

        <span><strong>Tickets</strong> – Events, transport, and digital passes</span>,

        <span><strong>Brand Integrations</strong> – Partner brand ecosystem</span>,

        <span><strong>Bill Payments</strong> – Utility and service payments</span>,

        <span><strong>User Rewards</strong> – Extra benefits for payments</span>,

        <span><strong>Sound Boxes</strong> – Smart payment confirmations</span>,

        <span><strong>Merchant API</strong> – Full business integrations</span>,

      ],
    },
  },
];

const serviceHighlights = [
  {
    title: "Nearby Merchant Discovery",
    description:
      "Users can discover verified shops, restaurants, and services near them using location-based search. Qadampe integrates smart merchant discovery with Google Maps support, helping customers find trusted businesses quickly and increasing daily footfall for merchants.",
  },
  {
    title: "Merchant Dashboard Insights",
    description:
      "Qadampe provides merchants with a professional dashboard to monitor QR activity, customer engagement, scans, performance insights, and business growth. The dashboard becomes the daily control system for merchants, helping them manage visibility, rewards, and promotions in one place.",
  },
];



/* ===============================
   COLORS
================================ */

const colorClasses = {
  primary: "bg-primary/10 text-primary",
  purple: "bg-qadampe-purple/10 text-qadampe-purple",
  orange: "bg-qadampe-orange/10 text-qadampe-orange",
  success: "bg-qadampe-success/10 text-qadampe-success",
};



/* ===============================
   POPUP MODAL COMPONENT
================================ */

const PopupModal = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center">

      <div className="bg-white w-full max-w-md rounded-3xl animate-slideUp flex flex-col max-h-[85vh]">

        {/* Header */}
        <div className="flex justify-between items-center p-6 pb-3 border-b">

          <h2 className="text-lg font-semibold text-[#012a72]">
            {service.popup.title}
          </h2>

          <button onClick={onClose}>
            <X className="w-5 h-5" />
          </button>

        </div>


        {/* Scrollable Content */}
        <div className="px-6 py-4 overflow-y-auto custom-scroll">

          <ul className="space-y-3">

            {service.popup.content.map((item, index) => (

              <li
                key={index}
                className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed"
              >

                <span className="w-2 h-2 mt-2 bg-primary rounded-full flex-shrink-0"></span>

                {item}

              </li>

            ))}

          </ul>

        </div>


        {/* Footer */}
        <div className="p-6 pt-3 border-t">

          <button
            onClick={onClose}
            className="w-full bg-primary text-white py-3 rounded-xl hover:opacity-90 transition"
          >
            Close
          </button>

        </div>

      </div>

    </div>
  );
};




/* ===============================
   MAIN COMPONENT
================================ */

export const Services = () => {

  const [selectedService, setSelectedService] = useState(null);


  return (

    <>

      <section
        id="services"
        className="bg-section-gradient w-full animate-fade-in pt-24 sm:pt-28 md:pt-32 pb-12 sm:pb-14 md:pb-16"
      >

        <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20">

          <div className="mb-8 sm:mb-10 md:mb-12 animate-fade-in-up">
            <p className="text-xs sm:text-sm font-medium text-[#012a72] uppercase tracking-wide mb-3">
              Payments & Business Tools
            </p>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#012a72] leading-tight">
              Services
            </h1>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl">
              Explore Qadampe services including QR payments, deals and offers, merchant growth tools, and rewards.
            </p>
          </div>



          {/* ICONS */}


          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10">


            {services.map((service, index) => (


              <div
                key={`${service.popup.title}-${index}`}
                onClick={() => setSelectedService(service)}
                className="flex flex-col items-center text-center gap-2 sm:gap-3 group cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >


                <div
                  className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl ${colorClasses[service.color]} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-3d group-hover:shadow-3d-hover`}
                >

                  <service.icon className="w-6 h-6 sm:w-7 sm:h-7" />

                </div>



                <span className="text-xs sm:text-sm font-medium text-[#012a72] leading-snug">

                  {service.label}

                </span>


              </div>

            ))}


          </div>




          {/* PROMO SECTION (UNCHANGED) */}



          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">


            <HashLink
              smooth
              to="/content#qr-payments"
              className="gradient-primary rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 text-primary-foreground overflow-hidden relative group block min-h-[140px] sm:min-h-[160px]"
            >

              <p className="text-sm sm:text-base opacity-90">

                Accept QR Payments & Win Rewards

              </p>

              <QrCode className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 opacity-20 w-24 h-24 sm:w-32 sm:h-32" />

            </HashLink>



            <HashLink
              smooth
              to="/content#merchants"
              className="bg-[#012a72] rounded-2xl p-5 sm:p-6 md:p-8 lg:p-10 text-primary-foreground overflow-hidden relative group block min-h-[140px] sm:min-h-[160px]"
            >

              <p className="text-sm sm:text-base opacity-90">

                Business Dashboard

              </p>

              <BarChart3 className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 opacity-20 w-24 h-24 sm:w-32 sm:h-32" />

            </HashLink>



          </div>

          {/* SERVICE DETAILS - placed before downstream For Merchants section */}
          <div className="mt-8 sm:mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
            {serviceHighlights.map((item, index) => (
              <article
                key={item.title}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-5 sm:p-6 md:p-7 border border-[#00BAF2]/20 shadow-3d hover:shadow-3d-hover transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-lg sm:text-xl font-semibold text-[#012a72] mb-3">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-7">
                  {item.description}
                </p>
              </article>
            ))}
          </div>



        </div>

      </section>



      {/* POPUP */}

      <PopupModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
      />



    </>

  );

};



/* ===============================
   ANIMATION CSS (ADD IN GLOBAL CSS)
================================ */

/*

@keyframes slideUp {

  from {

    transform: translateY(100%);

  }

  to {

    transform: translateY(0);

  }

}

.animate-slideUp {

  animation: slideUp 0.3s ease;

}

*/
