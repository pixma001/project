import React from 'react';

const Terms = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Terms of Service</h1>
        
        <div className="prose max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Acceptance of Terms</h2>
            <p className="text-gray-600">
              By accessing and using Forsa.tn, you accept and agree to be bound by the terms and 
              provisions of this agreement. If you do not agree to abide by these terms, please 
              do not use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. User Responsibilities</h2>
            <div className="space-y-3 text-gray-600">
              <p>As a user of Forsa.tn, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and truthful information</li>
                <li>Maintain the security of your account</li>
                <li>Not engage in fraudulent activities</li>
                <li>Respect other users' rights and privacy</li>
                <li>Not post illegal or prohibited content</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Listing Rules</h2>
            <div className="space-y-3 text-gray-600">
              <p>When listing items for sale, you must:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Only list items you own or have the right to sell</li>
                <li>Provide accurate descriptions and images</li>
                <li>Set fair and transparent prices</li>
                <li>Respond to buyer inquiries promptly</li>
                <li>Honor your commitments to buyers</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Prohibited Items</h2>
            <div className="space-y-3 text-gray-600">
              <p>The following items are prohibited from being listed:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Illegal items or substances</li>
                <li>Counterfeit or replica items</li>
                <li>Dangerous or hazardous materials</li>
                <li>Items that infringe on intellectual property rights</li>
                <li>Adult content or services</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Transaction Safety</h2>
            <p className="text-gray-600">
              While Forsa.tn facilitates connections between buyers and sellers, we are not 
              responsible for the actual transactions. Users are advised to:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3 text-gray-600">
              <li>Meet in safe, public locations</li>
              <li>Verify items before purchase</li>
              <li>Use secure payment methods</li>
              <li>Report suspicious activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Account Termination</h2>
            <p className="text-gray-600">
              Forsa.tn reserves the right to terminate or suspend accounts that violate these 
              terms, engage in fraudulent activities, or harm our community.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Changes to Terms</h2>
            <p className="text-gray-600">
              We may modify these terms at any time. Continued use of our services after changes 
              constitutes acceptance of the new terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Contact</h2>
            <p className="text-gray-600">
              If you have questions about these terms, please contact us at contact@forsa.tn
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;