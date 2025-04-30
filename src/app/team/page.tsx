import React from 'react'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import Image from 'next/image'

// Sample team data
const teamMembers = [
]

export default function TeamPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
      
        
        {/* Join the Team Section */}
        <section className="py-16 bg-black/40">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Team</h2>
              <p className="text-lg text-slate-300 mb-8">
                We're looking for passionate individuals to help us revolutionize compliance management through AI. Join us in our mission to make compliance simple and accessible for businesses of all sizes.
              </p>
              <a 
                href="/careers" 
                className="btn btn-primary py-3 px-8 rounded-lg inline-block"
              >
                View Open Positions
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
} 