import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-20">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-12 text-center">Privacy Policy</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg mb-8">
              Last Updated: April 15, 2025
            </p>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>
                At Vertex AI, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
                and safeguard your information when you use our platform and services. Please read this policy carefully.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-medium mb-3">2.1 Personal Information</h3>
              <p className="mb-4">
                We may collect personal information that you voluntarily provide to us when you:
              </p>
              <ul className="list-disc pl-8 mb-4">
                <li>Register for an account</li>
                <li>Subscribe to our newsletter</li>
                <li>Request customer support</li>
                <li>Complete forms or surveys</li>
                <li>Participate in promotions or contests</li>
              </ul>
              <p>
                This information may include your name, email address, phone number, company name, job title, and billing information.
              </p>
              
              <h3 className="text-xl font-medium mb-3 mt-6">2.2 Usage Data</h3>
              <p>
                We automatically collect certain information when you visit, use, or navigate our platform. This information includes:
              </p>
              <ul className="list-disc pl-8 mb-4">
                <li>Device and connection information (IP address, browser type, operating system)</li>
                <li>Usage patterns and preferences</li>
                <li>Clickstream data and pages visited</li>
                <li>Time spent on pages and features used</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the information we collect for various purposes, including:</p>
              <ul className="list-disc pl-8 mb-4">
                <li>Providing, operating, and maintaining our services</li>
                <li>Improving and personalizing user experience</li>
                <li>Understanding how users utilize our platform</li>
                <li>Developing new products, features, and services</li>
                <li>Communicating with you about updates, security alerts, and support</li>
                <li>Marketing and promotional purposes (with your consent)</li>
                <li>Preventing fraudulent activity and ensuring platform security</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">4. Data Sharing and Disclosure</h2>
              <p className="mb-4">We may share your information in the following situations:</p>
              <ul className="list-disc pl-8 mb-4">
                <li><strong>Service Providers:</strong> We may share your information with third-party vendors, service providers, and partners who assist us in providing our services.</li>
                <li><strong>Business Transfers:</strong> If we are involved in a merger, acquisition, or sale of assets, your information may be transferred as part of that transaction.</li>
                <li><strong>Legal Requirements:</strong> We may disclose your information if required to do so by law or in response to valid requests by public authorities.</li>
                <li><strong>Protection of Rights:</strong> We may disclose your information to protect our rights, privacy, safety, or property, and that of our users or others.</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, 
                alteration, disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is 100% secure, 
                and we cannot guarantee absolute security.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">6. Your Privacy Rights</h2>
              <p className="mb-4">
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-8 mb-4">
                <li>Right to access and receive a copy of your personal information</li>
                <li>Right to rectify or update your personal information</li>
                <li>Right to request deletion of your personal information</li>
                <li>Right to restrict or object to our processing of your personal information</li>
                <li>Right to data portability</li>
                <li>Right to withdraw consent</li>
              </ul>
              <p>
                To exercise these rights, please contact us using the information provided in the "Contact Us" section.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">7. Cookies and Tracking Technologies</h2>
              <p>
                We use cookies and similar tracking technologies to collect and use information about you and your interaction with our platform. 
                You can set your browser to refuse all or some browser cookies, or to alert you when cookies are being sent. 
                However, some parts of the platform may not function properly without cookies.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">8. Children's Privacy</h2>
              <p>
                Our services are not intended for individuals under the age of 18. We do not knowingly collect personal information from children. 
                If we learn that we have collected personal information from a child without parental consent, we will take steps to delete that information.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">9. Changes to This Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page 
                and updating the "Last Updated" date. You are advised to review this Privacy Policy periodically for any changes.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">10. Contact Us</h2>
              <p>
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 mb-4">
                <p className="mb-1">Vertex AI</p>
                <p className="mb-1">880 Harrison St</p>
                <p className="mb-1">San Francisco, CA 94107</p>
                <p className="mb-1">Email: privacy@vertexai.com</p>
                <p className="mb-1">Phone: +1 (603) 765-1104</p>
              </div>
            </section>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 