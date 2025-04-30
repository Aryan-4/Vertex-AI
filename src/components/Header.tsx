'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { useSession, signOut } from 'next-auth/react'
import { FaBars, FaTimes, FaUserCircle } from 'react-icons/fa'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Features', href: '/features' },
  { name: 'Dashboard', href: '/dashboard' },
]

export default function Header() {
  const pathname = usePathname()
  const { data: session } = useSession()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [profileMenuOpen, setProfileMenuOpen] = useState(false)
  
  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside() {
      setProfileMenuOpen(false)
    }
    
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])
  
  // Handle profile menu click
  const handleProfileClick = (e: React.MouseEvent) => {
    e.stopPropagation() // Prevent the document click event
    setProfileMenuOpen(!profileMenuOpen)
  }
  
  return (
    <header className="bg-black shadow-sm sticky top-0 z-50">
      <div className="container py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10">
              <Image 
                src="/logo.png" 
                alt="Vertex AI Logo" 
                width={40}
                height={40}
                className="object-contain"
              />
            </div>
            <span className="text-xl font-bold text-white">Vertex AI</span>
          </Link>
          
          {/* Desktop Navigation - fixed width to prevent movement */}
          <nav className="hidden md:flex items-center">
            <div className="flex w-80 justify-between">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium ${
                    pathname === item.href
                      ? 'text-primary'
                      : 'text-slate-300 hover:text-white'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
          
          {/* Right side actions */}
          <div className="flex items-center space-x-4">
            {/* User menu or Sign in link */}
            {session ? (
              <div className="relative">
                <button
                  onClick={handleProfileClick}
                  className="flex items-center space-x-1 text-slate-300 hover:text-white"
                >
                  {session.user?.image ? (
                    <div className="h-8 w-8 rounded-full overflow-hidden relative">
                      <Image 
                        src={session.user.image} 
                        alt={session.user.name || 'User'} 
                        fill
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <FaUserCircle className="h-8 w-8" />
                  )}
                  <span className="text-sm font-medium hidden sm:block">
                    {session.user?.name || 'Account'}
                  </span>
                </button>
                
                {/* Profile dropdown */}
                {profileMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-black ring-1 ring-gray-800 ring-opacity-5">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="user-menu">
                      <Link
                        href="/profile"
                        className="block px-4 py-2 text-sm text-slate-300 hover:bg-gray-900"
                        role="menuitem"
                      >
                        Your Profile
                      </Link>
                      <Link
                        href="/dashboard"
                        className="block px-4 py-2 text-sm text-slate-300 hover:bg-gray-900"
                        role="menuitem"
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={() => signOut()}
                        className="block w-full text-left px-4 py-2 text-sm text-slate-300 hover:bg-gray-900"
                        role="menuitem"
                      >
                        Sign out
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link 
                href="/signin"
                className="text-sm font-medium text-primary hover:text-primary-dark"
              >
                Sign in
              </Link>
            )}
            
            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-md text-slate-300 hover:bg-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {mobileMenuOpen && (
          <nav className="md:hidden mt-4 py-4 border-t border-gray-800">
            <div className="space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`block text-base font-medium ${
                    pathname === item.href
                      ? 'text-primary'
                      : 'text-slate-300 hover:text-white'
                  }`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              {!session && (
                <Link
                  href="/signin"
                  className="block text-base font-medium text-primary hover:text-primary-dark"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Sign in
                </Link>
              )}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
} 