import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TermsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-20">
        <div className="container max-w-4xl">
          <h1 className="text-4xl font-bold mb-12 text-center">Terms of Service</h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg mb-8">
              Last Updated: April 15, 2025
            </p>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
              <p>
                Welcome to Vertex AI. These Terms of Service ("Terms") govern your access to and use of our website, products, 
                and services ("Services"). Please read these Terms carefully. By accessing or using our Services, you agree to be 
                bound by these Terms and our Privacy Policy.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">2. Acceptance of Terms</h2>
              <p>
                By accessing or using our Services, you confirm that you are at least 18 years old and that you have the legal 
                capacity to enter into these Terms. If you are using our Services on behalf of a company, organization, or other 
                entity, you represent that you have the authority to bind that entity to these Terms.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">3. Account Registration</h2>
              <p className="mb-4">
                To access certain features of our Services, you may need to register for an account. When you register, you agree to:
              </p>
              <ul className="list-disc pl-8 mb-4">
                <li>Provide accurate, current, and complete information</li>
                <li>Maintain and promptly update your account information</li>
                <li>Keep your password secure and confidential</li>
                <li>Be responsible for all activities that occur under your account</li>
                <li>Notify us immediately of any unauthorized use of your account</li>
              </ul>
              <p>
                We reserve the right to disable any account, at any time, if we believe you have violated these Terms.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">4. Service Usage and Limitations</h2>
              <p className="mb-4">You agree not to:</p>
              <ul className="list-disc pl-8 mb-4">
                <li>Use our Services in any way that violates applicable laws or regulations</li>
                <li>Use our Services to infringe the intellectual property rights of others</li>
                <li>Attempt to gain unauthorized access to any part of our Services</li>
                <li>Interfere with or disrupt the integrity or performance of our Services</li>
                <li>Transmit any viruses, malware, or other harmful code</li>
                <li>Collect or harvest any information from our Services without authorization</li>
                <li>Use our Services to send unsolicited communications</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">5. Intellectual Property Rights</h2>
              <p className="mb-4">
                Our Services and their contents, including but not limited to text, graphics, logos, icons, images, audio and video clips, 
                digital downloads, data compilations, and software, are owned by Vertex AI or its licensors and are protected by copyright, 
                trademark, and other intellectual property laws.
              </p>
              <p>
                We grant you a limited, non-exclusive, non-transferable, and revocable license to use our Services for their intended purposes. 
                You may not copy, modify, distribute, sell, or lease any part of our Services without our prior written consent.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">6. User Content</h2>
              <p className="mb-4">
                Our Services may allow you to submit, upload, publish or otherwise make available content, including but not limited to text, 
                photographs, videos, or audio ("User Content"). You retain ownership of any intellectual property rights that you hold in your User Content.
              </p>
              <p className="mb-4">
                By submitting User Content to our Services, you grant us a worldwide, non-exclusive, royalty-free license (with the right to sublicense) 
                to use, copy, modify, distribute, publicly display, and create derivative works of your User Content in connection with operating and 
                improving our Services.
              </p>
              <p>
                You are solely responsible for your User Content and you represent and warrant that you have all rights necessary to grant us the 
                license described above.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">7. Subscription and Billing</h2>
              <p className="mb-4">
                Some of our Services require payment of fees. When you subscribe to a paid Service:
              </p>
              <ul className="list-disc pl-8 mb-4">
                <li>You agree to pay all fees associated with the Service</li>
                <li>You authorize us to charge your designated payment method</li>
                <li>Subscription fees are billed in advance and are non-refundable</li>
                <li>Subscriptions automatically renew unless cancelled before the renewal date</li>
                <li>We may change our fees with 30 days' notice</li>
              </ul>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">8. Disclaimer of Warranties</h2>
              <p className="mb-4">
                OUR SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, 
                INCLUDING BUT NOT LIMITED TO IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
              </p>
              <p>
                WE DO NOT WARRANT THAT OUR SERVICES WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE, THAT DEFECTS WILL BE CORRECTED, 
                OR THAT OUR SERVICES OR THE SERVERS THAT MAKE THEM AVAILABLE ARE FREE OF VIRUSES OR OTHER HARMFUL COMPONENTS.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">9. Limitation of Liability</h2>
              <p>
                TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL VERTEX AI, ITS AFFILIATES, OFFICERS, EMPLOYEES, AGENTS, 
                SUPPLIERS OR LICENSORS BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, PUNITIVE, EXEMPLARY OR CONSEQUENTIAL DAMAGES 
                ARISING OUT OF OR IN CONNECTION WITH THE USE OF OUR SERVICES, EVEN IF VERTEX AI HAS BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">10. Indemnification</h2>
              <p>
                You agree to indemnify, defend, and hold harmless Vertex AI and its officers, directors, employees, agents, and affiliates 
                from and against any and all claims, damages, obligations, losses, liabilities, costs or debt, and expenses (including 
                attorney's fees) arising from: (i) your use of and access to our Services; (ii) your violation of any term of these Terms; 
                (iii) your violation of any third-party right, including without limitation any copyright, property, or privacy right; or 
                (iv) any claim that your User Content caused damage to a third party.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">11. Termination</h2>
              <p className="mb-4">
                We may terminate or suspend your access to our Services, at our sole discretion, at any time and without notice for any reason, 
                including if you violate these Terms.
              </p>
              <p>
                Upon termination, your right to use our Services will immediately cease, and all provisions of these Terms that should 
                survive termination shall remain in effect.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">12. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms at any time. We will provide notice of significant changes by posting the updated 
                Terms on our website and updating the "Last Updated" date. Your continued use of our Services after such changes constitutes 
                your acceptance of the new Terms.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">13. Governing Law</h2>
              <p>
                These Terms shall be governed by and construed in accordance with the laws of the State of California, without regard to its 
                conflict of law provisions. Any dispute arising from these Terms shall be subject to the exclusive jurisdiction of the courts 
                located in San Francisco County, California.
              </p>
            </section>
            
            <section className="mb-10">
              <h2 className="text-2xl font-semibold mb-4">14. Contact Us</h2>
              <p className="mb-4">
                If you have any questions about these Terms, please contact us at:
              </p>
              <div className="mt-4 mb-4">
                <p className="mb-1">Vertex AI</p>
                <p className="mb-1">880 Harrison St, </p>
                <p className="mb-1">San Francisco, CA 94107</p>
                <p className="mb-1">Email: l@vertexai.com</p>
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