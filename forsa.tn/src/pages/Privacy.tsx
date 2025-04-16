import React from 'react';

const Privacy = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
        
        <div className="prose max-w-none space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
            <div className="space-y-3 text-gray-600">
              <p>We collect the following types of information:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Account information (name, email, phone number)</li>
                <li>Profile information you choose to share</li>
                <li>Transaction and listing details</li>
                <li>Communication records between users</li>
                <li>Device and usage information</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
            <div className="space-y-3 text-gray-600">
              <p>Your information is used to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide and improve our services</li>
                <li>Process transactions and communications</li>
                <li>Ensure platform safety and security</li>
                <li>Send service updates and notifications</li>
                <li>Prevent fraud and abuse</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
            <p className="text-gray-600">
              We share your information only in the following circumstances:
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-3 text-gray-600">
              <li>With other users as needed for transactions</li>
              <li>With service providers who assist our operations</li>
              <li>When required by law or to protect rights</li>
              <li>With your explicit consent</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p className="text-gray-600">
              We implement appropriate technical and organizational measures to protect your 
              personal information against unauthorized access, alteration, disclosure, or 
              destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">5. Your Rights</h2>
            <div className="space-y-3 text-gray-600">
              <p>You have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to certain data processing</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Cookies and Tracking</h2>
            <p className="text-gray-600">
              We use cookies and similar technologies to improve user experience, analyze site 
              usage, and assist in our marketing efforts. You can control cookie settings 
              through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">7. Children's Privacy</h2>
            <p className="text-gray-600">
              Our services are not intended for users under 18 years of age. We do not knowingly 
              collect or maintain information from children.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">8. Changes to Privacy Policy</h2>
            <p className="text-gray-600">
              We may update this privacy policy from time to time. We will notify you of any 
              changes by posting the new policy on this page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">9. Contact Us</h2>
            <p className="text-gray-600">
              If you have questions about this privacy policy, please contact us at privacy@forsa.tn
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Privacy;