import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Link from 'next/link'

// Sample job listings
const jobListings = [
  {
    id: 'fe-engineer',
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA (Remote Available)',
    type: 'Full-time',
    description: 'We\'re looking for a skilled frontend engineer to build intuitive and responsive user interfaces for our compliance management platform.',
  },
  {
    id: 'be-engineer',
    title: 'Backend Engineer',
    department: 'Engineering',
    location: 'San Francisco, CA (Remote Available)',
    type: 'Full-time',
    description: 'Join our backend team to build scalable APIs and services that power our AI-driven compliance features and data processing capabilities.',
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    department: 'Product',
    location: 'San Francisco, CA (Remote Available)',
    type: 'Full-time',
    description: 'Work directly with engineering, design, and customers to shape the future of our compliance management platform and AI features.',
  },
  {
    id: 'compliance-specialist',
    title: 'Compliance Specialist',
    department: 'Customer Success',
    location: 'San Francisco, CA (Remote Available)',
    type: 'Full-time',
    description: 'Help our customers navigate complex compliance requirements and implement effective compliance programs using our platform.',
  },
  {
    id: 'sales-exec',
    title: 'Sales Executive',
    department: 'Sales',
    location: 'San Francisco, CA (Remote Available)',
    type: 'Full-time',
    description: 'Drive our growth by connecting with organizations that need streamlined compliance solutions and demonstrating the value of our platform.',
  },
]

export default function CareersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 sm:py-28">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-6">Join Our Team</h1>
              <p className="text-lg text-slate-300 mb-8">
                Help us transform compliance management through artificial intelligence. We're looking for passionate, innovative individuals to join our mission.
              </p>
            </div>
          </div>
        </section>
        
        {/* Why Work Here Section */}
        <section className="py-16 bg-black/40">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Why Work at Vertex AI</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Meaningful Impact</h3>
                <p className="text-slate-300">
                  Build technology that helps businesses navigate complex regulatory environments and protect sensitive data.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Cutting-Edge Technology</h3>
                <p className="text-slate-300">
                  Work with the latest in AI, machine learning, and cloud technologies to solve real-world compliance challenges.
                </p>
              </div>
              
              <div className="text-center">
                <div className="bg-primary/10 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Great Benefits</h3>
                <p className="text-slate-300">
                  Enjoy competitive salary, equity, health benefits, flexible work arrangements, and professional development opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Open Positions */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Open Positions</h2>
            <div className="space-y-6">
              {jobListings.map((job) => (
                <div key={job.id} className="card bg-black/40 p-6">
                  <div className="flex flex-col md:flex-row justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{job.title}</h3>
                      <p className="text-primary">{job.department}</p>
                    </div>
                    <div className="mt-2 md:mt-0 md:text-right">
                      <p className="text-slate-300">{job.location}</p>
                      <p className="text-slate-300">{job.type}</p>
                    </div>
                  </div>
                  <p className="text-slate-300 mb-6">{job.description}</p>
                  <div className="flex justify-end">
                    <Link href={`/careers/${job.id}`} className="text-primary hover:text-primary-dark font-medium">
                      View Details & Apply →
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
} 