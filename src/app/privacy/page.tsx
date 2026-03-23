import Link from "next/link";

export const metadata = {
  title: "Privacy Policy | Empire State Tags",
  description: "Privacy Policy for Empire State Tags. Learn how we collect, use, and protect your personal and vehicle information.",
};

export default function PrivacyPolicy() {
  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 bg-white p-8 md:p-16 rounded-2xl shadow-sm border border-gray-100">
        
        <div className="mb-12 border-b border-gray-200 pb-8">
          <h1 className="text-3xl md:text-5xl font-extrabold text-empire-blue mb-4">Privacy Policy</h1>
          <p className="text-gray-500">Effective Date: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
        </div>

        <div className="space-y-8 text-gray-700 leading-relaxed">
          
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Introduction</h2>
            <p>
              Welcome to Empire State Tags ("we," "our," or "us"). We are committed to protecting your personal privacy and ensuring that your personal and vehicular information is handled safely and responsibly. This Privacy Policy outlines how we collect, use, disclose, and safeguard your information when you visit our website (empirestatetags.com) and utilize our out-of-state vehicle registration, title processing, and insurance referral services.
            </p>
            <p className="mt-4">
              By accessing our website or using our services, you consent to the data practices described in this Privacy Policy. If you do not agree with the terms of this privacy policy, please do not access the site or use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Information We Collect</h2>
            <p>To provide our specialized registration and insurance services, we must collect various types of information, including:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Personal Identification Information:</strong> Name, email address, phone number, physical address, date of birth, and driver's license numbers.</li>
              <li><strong>Vehicle Information:</strong> Vehicle Identification Numbers (VIN), make, model, year, current mileage, existing title status (including rebuilt or salvage status), and current registration documents.</li>
              <li><strong>Financial Data:</strong> Information related to your payment methods required to process your 75% down payment and final balances. <em>Note: We use secure third-party payment processors and do not store complete credit card numbers on our servers.</em></li>
              <li><strong>Technical & Usage Data:</strong> IP addresses, browser types, operating systems, referring URLs, and information about your interaction with our website collected via cookies and similar tracking technologies.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">3. How We Use Your Information</h2>
            <p>We use the information we collect for the following business and operational purposes:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Service Delivery:</strong> To process out-of-state vehicle registrations, handle title transfers (including salvage and rebuilt titles), and secure replacement plates.</li>
              <li><strong>Communication:</strong> To provide customer support, inform you of missing documentation, and send updates regarding the status of your plates and 5 to 7 business day turnaround timeline.</li>
              <li><strong>Insurance Coordination:</strong> To facilitate auto insurance quotes and policies required for your out-of-state registration.</li>
              <li><strong>Billing and Processing:</strong> To manage invoicing, process your initial deposits, and collect final payments upon completion of services.</li>
              <li><strong>Legal Compliance:</strong> To comply with state Department of Motor Vehicles (DMV) requirements and other applicable local, state, and federal laws.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Information Sharing and Disclosure</h2>
            <p>Due to the nature of vehicle registration, we must share specific information with third parties. We do not sell your personal data to data brokers. We may share your information with:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li><strong>Government Agencies:</strong> State DMVs and regional tax authorities required to legally process your out-of-state tags and titles.</li>
              <li><strong>Insurance Partners:</strong> Licensed insurance brokers and carriers to secure the mandatory coverage for your registered vehicle.</li>
              <li><strong>Service Providers:</strong> Third-party vendors who perform services on our behalf, such as payment processing, secure document storage, and email communications.</li>
              <li><strong>Legal Obligations:</strong> When required by law, subpoena, or other legal process, or to protect the rights, property, and safety of Empire State Tags, our clients, or others.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Data Security</h2>
            <p>
              We implement industry-standard administrative, technical, and physical security measures to protect your personal and vehicular information from unauthorized access, alteration, disclosure, or destruction. However, please be aware that no data transmission over the internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
            <p>
              We will retain your personal information only for as long as is necessary for the purposes set out in this Privacy Policy. We will retain and use your information to the extent necessary to comply with our legal obligations (for example, state DMV record-keeping requirements), resolve disputes, and enforce our legal agreements and policies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Your Privacy Rights</h2>
            <p>Depending on your state of residence, you may have specific rights regarding your personal data, including the right to:</p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Request access to the personal information we hold about you.</li>
              <li>Request correction of inaccurate or incomplete information.</li>
              <li>Request deletion of your personal data, subject to certain legal exceptions (such as DMV record retention laws).</li>
              <li>Opt-out of marketing communications.</li>
            </ul>
            <p className="mt-4">To exercise these rights, please contact us using the information provided at the bottom of this policy.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Changes to This Privacy Policy</h2>
            <p>
              We may update our Privacy Policy from time to time to reflect changes in our practices, technologies, or legal requirements. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Effective Date" at the top. You are advised to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          <section className="bg-empire-light p-6 rounded-lg mt-12 border border-blue-100">
            <h2 className="text-xl font-bold text-empire-blue mb-2">9. Contact Us</h2>
            <p className="mb-4">If you have any questions, concerns, or requests regarding this Privacy Policy or our data practices, please contact us at:</p>
            <ul className="font-semibold text-gray-900">
              <li>Empire State Tags</li>
              <li>Email: <a href="mailto:support@empirestatetags.com" className="text-empire-blue hover:underline">support@empirestatetags.com</a></li>
              <li>Phone:  (347) 424-4569</li>
            </ul>
          </section>

        </div>
        
        <div className="mt-12 text-center">
          <Link href="/" className="text-empire-blue font-semibold hover:underline flex items-center justify-center gap-2">
            <span>&larr;</span> Return to Home
          </Link>
        </div>

      </div>
    </div>
  );
}