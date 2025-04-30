import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'
import { FaCheck } from 'react-icons/fa'

// Sample pricing data
const pricingTiers = [
  {
    name: 'Starter',
    price: '$199',
    period: 'per month',
    description: 'For startups and small businesses getting started with compliance.',
    features: [
      'Single compliance framework',
      'Up to 3 active users',
      'Basic evidence collection',
      'Manual evidence uploads',
      'Standard support',
      'Basic reporting',
    ],
    cta: 'Start Free Trial',
    highlighted: false,
  },
  {
    name: 'Professional',
    price: '$499',
    period: 'per month',
    description: 'For growing businesses managing multiple compliance frameworks.',
    features: [
      'Up to 3 compliance frameworks',
      'Up to 10 active users',
      'Automated evidence collection',
      'Basic AI analysis',
      'Priority support',
      'Advanced reporting',
      'Compliance calendar',
      'Audit preparation tools',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'contact us',
    description: 'For organizations with complex compliance requirements.',
    features: [
      'Unlimited compliance frameworks',
      'Unlimited users',
      'Advanced AI evidence collection',
      'Custom integrations',
      'Dedicated account manager',
      'Custom reporting',
      'SSO & advanced security',
      'On-premise deployment available',
      'Customizable workflows',
    ],
    cta: 'Contact Sales',
    highlighted: false,
  },
]

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 sm:py-28">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-6">Pricing Plans</h1>
              <p className="text-lg text-slate-300 mb-8">
                Simple, transparent pricing for businesses of all sizes. Choose the plan that fits your compliance needs.
              </p>
            </div>
          </div>
        </section>
        
        {/* Pricing Cards */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingTiers.map((tier, index) => (
                <div 
                  key={index} 
                  className={`card bg-black/40 ${tier.highlighted ? 'border-primary border-2' : 'border-gray-800'}`}
                >
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{tier.price}</span>
                      <span className="text-slate-400 ml-2">{tier.period}</span>
                    </div>
                    <p className="text-slate-300 mb-6">{tier.description}</p>
                    
                    <button className={`w-full py-3 rounded-lg font-medium mb-8 ${tier.highlighted ? 'bg-primary text-white' : 'bg-gray-800 text-white'}`}>
                      {tier.cta}
                    </button>
                    
                    <div className="space-y-4">
                      {tier.features.map((feature, i) => (
                        <div key={i} className="flex items-start">
                          <FaCheck className="text-primary mt-1 mr-3 flex-shrink-0" />
                          <span className="text-slate-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="py-16 bg-black/40">
          <div className="container">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold mb-2">How does the free trial work?</h3>
                  <p className="text-slate-300">
                    All paid plans start with a 14-day free trial with no credit card required. You'll get full access to all features included in your selected plan.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Can I change plans later?</h3>
                  <p className="text-slate-300">
                    Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll be billed the prorated amount for the remainder of your billing cycle.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">What payment methods do you accept?</h3>
                  <p className="text-slate-300">
                    We accept all major credit cards, including Visa, Mastercard, American Express, and Discover. Enterprise customers can also pay by invoice.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">Do you offer any discounts?</h3>
                  <p className="text-slate-300">
                    Yes, we offer a 10% discount for annual subscriptions. Nonprofits and educational institutions are eligible for special pricing – please contact our sales team.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold mb-2">What kind of support is included?</h3>
                  <p className="text-slate-300">
                    All plans include email support. Professional and Enterprise plans include priority support with faster response times. Enterprise plans also come with a dedicated account manager.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16">
          <div className="container">
            <div className="card bg-gradient-to-r from-primary/20 to-secondary/20 border-none p-12 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6">Ready to simplify compliance?</h2>
              <p className="text-lg mb-8 text-slate-300">
                Start your free 14-day trial today. No credit card required.
              </p>
              <Link 
                href="/signup" 
                className="btn btn-primary py-3 px-8 rounded-lg inline-block"
              >
                Get Started
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
} 