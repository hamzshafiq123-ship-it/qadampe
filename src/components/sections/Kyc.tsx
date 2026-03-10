export default function () {
  return (
    <section id="kyc" className="py-20 bg-gray-50 overflow-hidden">
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
        <div className="overflow-x-auto">
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

      <div className="mt-12 p-8 border-2 border-dashed border-gray-300 rounded-xl bg-gray-50">
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
      </div>
    </div>
    
    <div className="mt-4 text-center text-xs text-gray-400">
      © 2026 Qadampe - Internal Compliance Document
    </div>
  </div>
</section>
  )
}
