import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Compliance framework data
const frameworks = [
  {
    id: 'soc2',
    name: 'SOC 2',
    description: 'System and Organization Controls for service organizations, with a focus on security, availability, processing integrity, confidentiality, and privacy.',
    icon: '/icons/soc2.svg',
  },
  {
    id: 'hipaa',
    name: 'HIPAA',
    description: 'Health Insurance Portability and Accountability Act standards for sensitive patient health information protection.',
    icon: '/icons/hipaa.svg',
  },
  {
    id: 'iso27001',
    name: 'ISO 27001',
    description: 'Information security management system (ISMS) standard focused on protecting the confidentiality, integrity, and availability of information.',
    icon: '/icons/iso27001.svg',
  },
  {
    id: 'gdpr',
    name: 'GDPR',
    description: 'General Data Protection Regulation that standardizes data protection laws across the EU and protects EU citizens\' privacy rights.',
    icon: '/icons/gdpr.svg',
  },
  {
    id: 'pcidss',
    name: 'PCI DSS',
    description: 'Payment Card Industry Data Security Standard ensures that companies securely process, store, and transmit credit card information.',
    icon: '/icons/pcidss.svg',
  },
  {
    id: 'nist',
    name: 'NIST CSF',
    description: 'National Institute of Standards and Technology Cybersecurity Framework provides guidelines for organizations to improve cybersecurity posture.',
    icon: '/icons/nist.svg',
  },
]

export default function FeaturesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="py-16 bg-slate-50 dark:bg-black/40">
          <div className="container">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl font-bold mb-6">Comprehensive Compliance Coverage</h1>
              <p className="text-lg text-slate-700 dark:text-slate-300 mb-8">
                Vertex AI supports all major compliance frameworks, helping you achieve and maintain certification with less effort.
              </p>
            </div>
          </div>
        </section>
        
        {/* Frameworks Grid */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {frameworks.map((framework) => (
                <div key={framework.id} className="card flex flex-col h-full">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 relative mr-4">
                      <Image 
                        src={framework.icon} 
                        alt={`${framework.name} icon`}
                        width={48}
                        height={48}
                      />
                    </div>
                    <h3 className="text-xl font-semibold">{framework.name}</h3>
                  </div>
                  <p className="text-slate-700 dark:text-slate-300 flex-grow">
                    {framework.description}
                  </p>
                  <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800">
                    <button className="text-primary font-medium flex items-center">
                      Learn more about {framework.name}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* AI Features Section */}
        <section className="py-16 bg-slate-50 dark:bg-black/40">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl font-bold mb-6">AI-Powered Compliance Management</h2>
              <p className="text-lg text-slate-700 dark:text-slate-300">
                Our platform leverages artificial intelligence to automate compliance tasks and provide meaningful insights.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="space-y-8">
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-md bg-primary text-white">1</div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Automated Evidence Collection</h3>
                      <p className="mt-2 text-slate-700 dark:text-slate-300">
                        AI agents automatically collect evidence from your cloud environments, development workflows, and IT systems.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-md bg-primary text-white">2</div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Intelligent Gap Analysis</h3>
                      <p className="mt-2 text-slate-700 dark:text-slate-300">
                        Our AI identifies compliance gaps and recommends specific actions to address them.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex">
                    <div className="flex-shrink-0 flex items-center justify-center w-12 h-12 rounded-md bg-primary text-white">3</div>
                    <div className="ml-4">
                      <h3 className="text-lg font-medium">Continuous Compliance Monitoring</h3>
                      <p className="mt-2 text-slate-700 dark:text-slate-300">
                        Stay compliant with real-time monitoring and alerts for policy violations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/ai-features.png"
                  alt="Vertex AI Features"
                  fill
                  className="object-cover object-center"
                />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
} 