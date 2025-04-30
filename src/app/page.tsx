import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaShieldAlt, FaRobot, FaChartLine } from "react-icons/fa";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-20 sm:py-32">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
                  Compliance Management with{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    AI-Powered Insights
                  </span>
                </h1>
                <p className="text-lg sm:text-xl mb-8 text-slate-700 dark:text-slate-300">
                  Vertex AI simplifies compliance for businesses of all sizes. Our platform automates evidence collection and helps you achieve certifications faster and with less effort.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link 
                    href="/dashboard" 
                    className="btn btn-primary py-3 px-6 rounded-lg text-center"
                  >
                    Get Started
                    <FaArrowRight className="ml-2" />
                  </Link>
                  <Link 
                    href="/features" 
                    className="btn btn-outline py-3 px-6 rounded-lg text-center"
                  >
                    Explore Features
                  </Link>
                </div>
              </div>
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/dashboard-preview.png"
                  alt="Vertex AI Dashboard Preview"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Feature Highlights */}
        <section className="py-16 bg-slate-50 dark:bg-black/40">
          <div className="container">
            <h2 className="text-3xl font-bold text-center mb-12">How Vertex AI Transforms Compliance</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="card flex flex-col items-center text-center p-8">
                <div className="bg-primary/10 p-4 rounded-full mb-6">
                  <FaShieldAlt className="text-primary text-3xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Simplified Compliance</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Navigate complex compliance frameworks with ease. From SOC 2 to HIPAA, we've got you covered.
                </p>
              </div>
              
              <div className="card flex flex-col items-center text-center p-8">
                <div className="bg-secondary/10 p-4 rounded-full mb-6">
                  <FaRobot className="text-secondary text-3xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3">AI Evidence Collection</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Our AI agents automatically gather and organize compliance evidence from your systems.
                </p>
              </div>
              
              <div className="card flex flex-col items-center text-center p-8">
                <div className="bg-primary/10 p-4 rounded-full mb-6">
                  <FaChartLine className="text-primary text-3xl" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Real-time Compliance</h3>
                <p className="text-slate-700 dark:text-slate-300">
                  Monitor your compliance posture in real-time with intuitive dashboards and alerts.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-20">
          <div className="container">
            <div className="card bg-gradient-to-r from-primary/10 to-secondary/10 border-none p-12 text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to simplify your compliance journey?</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Join the companies that are transforming their compliance processes with Vertex AI.
              </p>
              <Link 
                href="/dashboard" 
                className="btn btn-primary py-3 px-8 rounded-lg inline-block"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
