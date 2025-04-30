import Link from 'next/link'
import { FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-slate-50 dark:bg-black border-t border-slate-200 dark:border-slate-800">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Vertex AI</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-4">
              AI-powered compliance management platform for modern businesses.
            </p>
            {/* <div className="flex space-x-4">
              <a
                href="https://twitter.com/vertexai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary"
              >
                <FaTwitter className="w-5 h-5" />
                <span className="sr-only">Twitter</span>
              </a>
              <a
                href="https://linkedin.com/company/vertexai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary"
              >
                <FaLinkedin className="w-5 h-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a
                href="https://github.com/vertexai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary"
              >
                <FaGithub className="w-5 h-5" />
                <span className="sr-only">GitHub</span>
              </a>
            </div> */}
          </div>
          
          {/* Product */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/features" className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary">
                  Features
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/roadmap" className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary">
                  Roadmap
                </Link>
              </li>
              <li>
                <Link href="/changelog" className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary">
                  Changelog
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/blog" className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/docs" className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="/compliance-guides" className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary">
                  Compliance Guides
                </Link>
              </li>
              <li>
                <Link href="/support" className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary">
                  Support
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary">
                  About
                </Link>
              </li>
              <li>
                <Link href="/team" className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary">
                  Team
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Vertex AI. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary text-sm">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary text-sm">
              Terms of Service
            </Link>
            <Link href="/cookies" className="text-slate-600 hover:text-primary dark:text-slate-400 dark:hover:text-primary text-sm">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
} 