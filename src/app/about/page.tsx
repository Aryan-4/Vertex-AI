import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 sm:py-28">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-6">About Vertex AI</h1>
              <p className="text-lg text-slate-300 mb-8">
                We're on a mission to simplify compliance for businesses through AI-powered intelligence.
              </p>
            </div>
          </div>
        </section>
        
        {/* Company Story */}
        <section className="py-16 bg-black/40">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-slate-300 mb-4">
                  Vertex AI was founded in 202 by a team of compliance and cybersecurity experts who recognized that compliance was becoming increasingly complex and burdensome for businesses of all sizes.
                </p>
                <p className="text-slate-300 mb-4">
                  We saw firsthand how companies struggled with the growing number of regulatory frameworks, the overwhelming amount of evidence needed for audits, and the lack of real-time visibility into compliance status.
                </p>
                <p className="text-slate-300">
                  We built Vertex AI to leverage the power of artificial intelligence to automate the most time-consuming aspects of compliance, providing businesses with a platform that simplifies evidence collection, facilitates collaboration, and delivers real-time compliance insights.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden">
                <div className="aspect-[4/3] relative bg-gray-800 rounded-lg">
                  <div className="absolute inset-0 flex items-center justify-center text-3xl text-gray-600 font-bold">Our Story</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Values Section */}
        <section className="py-16">
          <div className="container">
            <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card bg-black/40 p-8 text-center">
                <div className="bg-primary/10 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Trust & Integrity</h3>
                <p className="text-slate-300">
                  We build solutions with the highest standards of security and data protection, earning our clients' trust through transparent operations and ethical practices.
                </p>
              </div>
              
              <div className="card bg-black/40 p-8 text-center">
                <div className="bg-primary/10 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-slate-300">
                  We continuously push the boundaries of what's possible in compliance management by leveraging cutting-edge AI technology to solve complex problems.
                </p>
              </div>
              
              <div className="card bg-black/40 p-8 text-center">
                <div className="bg-primary/10 p-4 rounded-full mx-auto w-16 h-16 flex items-center justify-center mb-6">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3">Customer Success</h3>
                <p className="text-slate-300">
                  We measure our success by our customers' success. We're committed to simplifying compliance management and helping organizations achieve their compliance goals.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
} 