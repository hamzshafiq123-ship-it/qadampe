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

export const ComplianceSecurity = () => {
  return (
    // <section id="compliance-security" className="py-20 bg-section-gradient-alt overflow-hidden">
    <section id="compliance-security" className="py-12 sm:py-16 md:py-20 bg-section-gradient-alt overflow-hidden">
      {/* <div className="container mx-auto px-4"> */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">



        {/* Trust Section */}
        <div className="bg-gradient-to-r from-qadampe-success/10 via-qadampe-success/5 to-qadampe-success/10 rounded-3xl  p-6 sm:p-8 md:p-12 border border-qadampe-success/20">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-qadampe-success/10 flex items-center justify-center">
                <Shield className="w-6 h-6 text-qadampe-success" />
              </div>
              {/* <h3 className="text-2xl md:text-3xl font-bold text-foreground"> */}
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-foreground">
                Your Security is Our Priority
              </h3>
            </div>

            {/* <p className="text-muted-foreground mb-8"> */}
            <p className="text-sm sm:text-base text-muted-foreground mb-6 sm:mb-8">
              We understand that trust is built on security and compliance. That's why we've
              built Qadampe with security and SBP compliance in mind. You can focus on your business
              while we handle the security and compliance requirements.
            </p>

            {/* <div className="grid md:grid-cols-3 gap-6 mb-10"> */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
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


            {/* <section id="qadampepolicy" className="py-20 bg-slate-50 overflow-hidden"> */}
            <section id="qadampepolicy" className="py-12 sm:py-16 md:py-20 bg-slate-50 overflow-hidden">
              <div className="container mx-auto px-4 max-w-5xl">

                {/* <div className="bg-indigo-900 text-white p-8 rounded-t-2xl shadow-lg"> */}
                <div className="bg-indigo-900 text-white p-5 sm:p-6 md:p-8 rounded-t-2xl shadow-lg">
                  {/* <h2 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight"> */}
                  <h2 className="text-xl sm:text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
                    Anti-Money Laundering (AML) & Combating the Financing of Terrorism (CFT) Policy
                  </h2>
                  <div className="grid md:grid-cols-2 gap-4 text-indigo-100 text-sm border-t border-indigo-800 pt-6">
                    <div>
                      <p><span className="opacity-70 uppercase tracking-wider text-xs block">Company</span> <strong>Qadampe</strong></p>
                      <p className="mt-2"><span className="opacity-70 uppercase tracking-wider text-xs block">Prepared By</span> <strong>Hamza Shafiq, CEO</strong> (with Compliance Team)</p>
                    </div>
                    <div className="md:text-right">
                      <p><span className="opacity-70 uppercase tracking-wider text-xs block">Effective Date</span> <strong>16 January 2026</strong></p>
                      <p className="mt-2"><span className="opacity-70 uppercase tracking-wider text-xs block">Status</span> <span className="bg-green-500 text-white px-2 py-0.5 rounded text-xs font-bold">ACTIVE / COMPLIANT</span></p>
                    </div>
                  </div>
                </div>

                <div className="bg-white  p-4 sm:p-6 md:p-12  shadow-xl rounded-b-2xl border-x border-b border-gray-200">

                  <div className="mb-12">
                    <h3 className="text-lg font-bold text-indigo-900 uppercase tracking-widest mb-4">I. Purpose & Objective</h3>
                    <p className="text-gray-700 leading-relaxed mb-4">
                      This AML/CFT Policy ensures that <span className="font-semibold text-indigo-700">Qadampe</span> complies with Pakistan’s <strong>AML/CFT Regulations 2020</strong>. Its aim is to prevent money laundering and financial crimes by providing clear procedures for merchant verification, transaction monitoring, and reporting suspicious activities.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      The objective is to create a secure, transparent environment, protecting both merchants and customers while enabling seamless cooperation with regulatory authorities like the SBP and SECP.
                    </p>
                  </div>



                  <div className="mb-12 bg-gray-50 p-6 rounded-xl border-l-4 border-indigo-600">
                    <h3 className="text-lg font-bold text-indigo-900 mb-4 italic">II. Merchant Verification (AML Act 2010)</h3>
                    <p className="text-gray-600 text-sm mb-4">In accordance with Pakistan’s Anti-Money Laundering Act 2010, merchants must provide:</p>
                    <div className="grid md:grid-cols-3 gap-4">
                      <div className="bg-white p-4 rounded shadow-sm border border-gray-100">
                        <span className="text-indigo-600 font-bold block mb-1">Business Identity</span>
                        <p className="text-xs text-gray-500">Full name, registration, and legal documentation.</p>
                      </div>
                      <div className="bg-white p-4 rounded shadow-sm border border-gray-100">
                        <span className="text-indigo-600 font-bold block mb-1">Financial Link</span>
                        <p className="text-xs text-gray-500">Raast-enabled or partner bank account verification.</p>
                      </div>
                      <div className="bg-white p-4 rounded shadow-sm border border-gray-100">
                        <span className="text-indigo-600 font-bold block mb-1">Periodic Review</span>
                        <p className="text-xs text-gray-500">Checks for consistency in location and activity.</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-12">
                    <h3 className="text-lg font-bold text-indigo-900 uppercase tracking-widest mb-6">III. Regulatory Compliance Framework</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="bg-indigo-100 text-indigo-700 p-2 rounded mr-4 font-bold text-xs uppercase">Act</div>
                          <p className="text-sm text-gray-700">Anti-Money Laundering Act 2010 (Sec 3, 4, 7, 7A, 7B)</p>
                        </div>
                        <div className="flex items-start">
                          <div className="bg-indigo-100 text-indigo-700 p-2 rounded mr-4 font-bold text-xs uppercase">SECP</div>
                          <p className="text-sm text-gray-700">SECP AML/CFT Regulations 2020</p>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="flex items-start">
                          <div className="bg-indigo-100 text-indigo-700 p-2 rounded mr-4 font-bold text-xs uppercase">SBP</div>
                          <p className="text-sm text-gray-700">SBP Regulations for Electronic Money</p>
                        </div>
                        <div className="flex items-start">
                          <div className="bg-indigo-100 text-indigo-700 p-2 rounded mr-4 font-bold text-xs uppercase">FMU</div>
                          <p className="text-sm text-gray-700">Financial Monitoring Unit STR Guidelines</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mb-12 border-t border-gray-100 pt-8">
                    <h3 className="text-lg font-bold text-indigo-900 mb-6">IV. Operational Controls & Reporting</h3>
                    <ul className="grid md:grid-cols-2 gap-4">
                      <li className="flex items-center p-3 border rounded-lg hover:bg-indigo-50 transition-colors">
                        <span className="h-2 w-2 bg-indigo-500 rounded-full mr-3"></span>
                        <span className="text-sm text-gray-700">Identity verification via NADRA records</span>
                      </li>
                      <li className="flex items-center p-3 border rounded-lg hover:bg-indigo-50 transition-colors">
                        <span className="h-2 w-2 bg-indigo-500 rounded-full mr-3"></span>
                        <span className="text-sm text-gray-700">Screening against UN Security Council Lists</span>
                      </li>
                      <li className="flex items-center p-3 border rounded-lg hover:bg-indigo-50 transition-colors">
                        <span className="h-2 w-2 bg-indigo-500 rounded-full mr-3"></span>
                        <span className="text-sm text-gray-700">Real-time QR transaction monitoring</span>
                      </li>
                      <li className="flex items-center p-3 border rounded-lg hover:bg-indigo-50 transition-colors">
                        <span className="h-2 w-2 bg-indigo-500 rounded-full mr-3"></span>
                        <span className="text-sm text-gray-700">Submission of STRs & CTRs to FMU</span>
                      </li>
                    </ul>
                  </div>

                  <div className="mb-12 bg-amber-50 p-6 rounded-xl border border-amber-100">
                    <h4 className="font-bold text-amber-900 mb-2 underline decoration-amber-300">Note for Partner Banks:</h4>
                    <p className="text-sm text-amber-800 leading-relaxed">
                      Qadampe maintains a clear escalation path. Banks can request periodic reports of verified merchants and high-risk profiles. Any suspicious activities identified through KYC checks are escalated immediately according to AML procedures.
                    </p>
                  </div>

                  <div className="mt-16 pt-8 border-t-2 border-gray-100 flex flex-col md:flex-row justify-between items-end">
                    <div className="w-full md:w-1/2 space-y-4">
                      <p className="text-sm font-bold text-gray-900">Declaration & Authorization</p>
                      <div className="h-16 border-b border-gray-400 w-full mb-2"></div>
                      <div>
                        <p className="font-bold text-indigo-900">Hamza Shafiq</p>
                        <p className="text-xs text-gray-500 uppercase tracking-tighter italic">Chief Executive Officer – Qadampe</p>
                      </div>
                    </div>
                    <div className="w-full md:w-1/3 mt-8 md:mt-0">
                      <p className="text-xs text-gray-400 mb-1">Date of Approval</p>
                      <div className="h-8 border-b border-gray-200 w-full flex items-center px-2 italic text-sm text-gray-600">
                        16 January 2026
                      </div>
                    </div>
                  </div>

                </div>

                <div className="mt-6 flex justify-between text-[10px] text-gray-400 uppercase tracking-widest px-4">
                  <span>Qadampe Confidential</span>
                  <span>Document Ref: AML-CFT-2026-001</span>
                </div>

              </div>
            </section>


            <section id="kyc" className="py-12 sm:py-16 md:py-20  bg-gray-50 overflow-hidden">
              <div className="container mx-auto px-4 max-w-4xl">
                <div className="bg-white p-8 rounded-t-xl border-b border-gray-200 shadow-sm">
                  <h2 className="text-3xl font-bold text-gray-900 mb-2">Know Your Customer (KYC) Policy</h2>
                  <div className="flex flex-col md:flex-row md:justify-between text-sm text-gray-600 italic">
                    <p>Company Name: <span className="font-semibold text-gray-800">Qadampe</span></p>
                    <p>Date: 16 January 2026</p>
                  </div>
                  <p className="mt-4 text-sm text-gray-700">
                    <span className="font-semibold">Prepared By:</span> Hamza Shafiq, CEO – Qadampe (In accordance with the Compliance Team)
                  </p>
                </div>

                <div className="bg-white p-8 md:p-12 shadow-md space-y-8 text-gray-800 leading-relaxed">

                  <section>
                    <h3 className="text-xl font-bold text-blue-900 mb-3 border-l-4 border-blue-600 pl-4">1. Purpose & Applicability</h3>
                    <p className="mb-4">
                      This Know Your Customer (KYC) Policy defines how <span className="font-medium">Qadampe</span> verifies, authenticates, and monitors merchants and business users on its platform in compliance with Pakistan’s regulatory framework. The policy ensures that all merchants are legitimate, traceable, and operating within lawful boundaries.
                    </p>
                    <p>
                      It applies to all merchants, business users, and entities seeking to use Qadampe’s QR-based payments, transaction facilitation, or merchant tools.
                    </p>
                  </section>

                  <section className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">2. Regulatory Framework & Obligations</h3>
                    <p className="mb-4 text-sm italic text-blue-800">Qadampe aligns its procedures with the following laws:</p>
                    <ul className="list-disc ml-6 space-y-2 text-gray-700">
                      <li><strong>Anti-Money Laundering Act, 2010</strong> (Sections 7, 7A, and 7B)</li>
                      <li><strong>SECP AML/CFT Regulations, 2020</strong></li>
                      <li><strong>State Bank of Pakistan (SBP)</strong> guidelines for digital payment facilitators</li>
                      <li><strong>Financial Monitoring Unit (FMU)</strong> reporting requirements</li>
                      <li><strong>UNSC</strong> sanctions screening obligations</li>
                    </ul>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">3. Objective of KYC at Qadampe</h3>
                    <p>
                      The primary objective is to ensure every merchant is real and identifiable. This protects partner banks, Qadampe, and consumers from fraud and financial crime, establishing clear accountability for all commercial activity.
                    </p>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-blue-900 mb-3 font-serif">4. Identification & Verification Process</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="border p-4 rounded-md">
                        <h4 className="font-bold mb-2 text-gray-900">Individual Merchants</h4>
                        <ul className="list-none space-y-1 text-sm">
                          <li className="flex items-center">⭐ Valid CNIC</li>
                          <li className="flex items-center">⭐ Mobile Number Verification</li>
                          <li className="flex items-center">⭐ Biometric/Facial Authentication</li>
                        </ul>
                      </div>
                      <div className="border p-4 rounded-md">
                        <h4 className="font-bold mb-2 text-gray-900">Registered Businesses</h4>
                        <ul className="list-none space-y-1 text-sm">
                          <li className="flex items-center">⭐ SECP Registration / NTN</li>
                          <li className="flex items-center">⭐ Business Address & Nature</li>
                          <li className="flex items-center">⭐ Beneficial Owner's CNIC</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h3 className="text-xl font-bold text-blue-900 mb-3 text-center">5. Risk-Based KYC Approach</h3>
                    {/* <div className="overflow-x-auto"> */}
                    <div className="overflow-x-auto w-full">
                      <table className="min-w-full text-sm text-left border">
                        <thead className="bg-gray-100">
                          <tr>
                            <th className="p-3 border">Risk Level</th>
                            <th className="p-3 border">Merchant Type</th>
                            <th className="p-3 border">Action</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="p-3 border font-semibold text-green-700">Low</td>
                            <td className="p-3 border">Small retail, local restaurants</td>
                            <td className="p-3 border text-xs text-gray-500 italic">Standard Verification</td>
                          </tr>
                          <tr>
                            <td className="p-3 border font-semibold text-yellow-600">Medium</td>
                            <td className="p-3 border">Service providers, online sellers</td>
                            <td className="p-3 border text-xs text-gray-500 italic">Enhanced Monitoring</td>
                          </tr>
                          <tr>
                            <td className="p-3 border font-semibold text-red-700">High</td>
                            <td className="p-3 border">PEPs, Cross-border, Unusual behavior</td>
                            <td className="p-3 border text-xs text-gray-500 italic">Strict Periodic Review</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>

                  <section className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Ongoing Monitoring</h3>
                      <p className="text-sm text-gray-600">
                        We continuously review transaction volumes, abnormal patterns, and location changes. Red flags trigger immediate account restriction and manual review.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Data Retention</h3>
                      <p className="text-sm text-gray-600">
                        In compliance with AML laws, all records (identity docs, logs, and comms) are maintained for a <strong>minimum of five years</strong> after the business relationship ends.
                      </p>
                    </div>
                  </section>

                  <section className="border-t pt-6">
                    <h3 className="text-xl font-bold text-blue-900 mb-3">6. Confidentiality & Cooperation</h3>
                    <p className="mb-4">
                      All data is encrypted and securely stored. Qadampe maintains full transparency with banking partners and regulatory bodies, escalating suspicious behavior under AML procedures as required.
                    </p>
                  </section>

                  {/* <div className="mt-12 p-8 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50">

                    <h3 className="text-lg font-bold mb-4 uppercase tracking-wider text-center">Declaration</h3>
                    <p className="text-sm italic mb-8 text-center">
                      Qadampe declares that this KYC Policy reflects its commitment to lawful, transparent, and compliant operations.
                      All merchants are subject to these procedures without exception.
                    </p>

                    <div className="flex flex-col items-center justify-center space-y-4">
                      <div className="w-64 border-b border-black"></div>
                      <div className="text-center">
                        <p className="font-bold">Hamza Shafiq</p>
                        <p className="text-xs uppercase text-gray-500">Chief Executive Officer – Qadampe</p>
                        <p className="text-xs text-gray-400 mt-2">Date: ___________________________</p>
                      </div>
                    </div>
                  </div> */}

                  <div className="mt-8 sm:mt-10 md:mt-12 
                p-5 sm:p-6 md:p-8 
                border-2 border-dashed border-gray-300 
                rounded-lg sm:rounded-xl 
                bg-gray-50">

                    <h3 className="text-base sm:text-lg md:text-xl 
                 font-bold 
                 mb-3 sm:mb-4 
                 uppercase tracking-wider 
                 text-center">
                      Declaration
                    </h3>

                    <p className="text-xs sm:text-sm md:text-base 
                italic 
                mb-6 sm:mb-8 
                text-center 
                px-2 sm:px-4 md:px-0">
                      Qadampe declares that this KYC Policy reflects its commitment to lawful, transparent, and compliant operations.
                      All merchants are subject to these procedures without exception.
                    </p>

                    <div className="flex flex-col items-center justify-center 
                  space-y-3 sm:space-y-4">

                      <div className="w-40 sm:w-56 md:w-64 
                    border-b border-black">
                      </div>

                      <div className="text-center">
                        <p className="font-bold text-sm sm:text-base">
                          Hamza Shafiq
                        </p>

                        <p className="text-[10px] sm:text-xs 
                    uppercase text-gray-500">
                          Chief Executive Officer – Qadampe
                        </p>

                        <p className="text-[10px] sm:text-xs 
                    text-gray-400 mt-2">
                          Date: ___________________________
                        </p>
                      </div>

                    </div>
                  </div>
                </div>

                <div className="mt-4 text-center text-xs text-gray-400">
                  © 2026 Qadampe - Internal Compliance Document
                </div>
              </div>
            </section>

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