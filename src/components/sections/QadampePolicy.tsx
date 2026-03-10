import React from 'react'

export default function QadampePolicy() {
    return (
       <section id="qadampepolicy" className="py-20 bg-slate-50 overflow-hidden">
  <div className="container mx-auto px-4 max-w-5xl">
    
    <div className="bg-indigo-900 text-white p-8 rounded-t-2xl shadow-lg">
      <h2 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
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

    <div className="bg-white p-6 md:p-12 shadow-xl rounded-b-2xl border-x border-b border-gray-200">
      
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
    )
}
