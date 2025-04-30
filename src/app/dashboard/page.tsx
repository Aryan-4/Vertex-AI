'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaPlus, FaSearch, FaFilter, FaCheck, FaHourglass, FaTimes } from 'react-icons/fa'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

// Sample data for boards and evidence
const boards = [
  {
    id: 'board-1',
    name: 'SOC 2 Compliance',
    description: 'Evidence collection for our SOC 2 Type II audit',
    progress: 65,
    evidenceCount: 42,
    pendingCount: 12,
    lastUpdated: '2023-12-15',
    frameworks: ['SOC 2']
  },
  {
    id: 'board-2',
    name: 'HIPAA Compliance',
    description: 'Evidence for HIPAA compliance requirements',
    progress: 30,
    evidenceCount: 18,
    pendingCount: 24,
    lastUpdated: '2023-12-10',
    frameworks: ['HIPAA']
  },
  {
    id: 'board-3',
    name: 'ISO 27001 Certification',
    description: 'Documentation for our ISO 27001 certification process',
    progress: 80,
    evidenceCount: 56,
    pendingCount: 8,
    lastUpdated: '2023-12-18',
    frameworks: ['ISO 27001']
  },
]

// Evidence status cards for the main dashboard
const evidenceStatusCards = [
  {
    id: 'total',
    title: 'Total Evidence Items',
    count: 116,
    icon: <FaSearch className="text-primary text-xl" />,
    bgColor: 'bg-primary/10'
  },
  {
    id: 'pending',
    title: 'Pending Review',
    count: 44,
    icon: <FaHourglass className="text-amber-500 text-xl" />,
    bgColor: 'bg-amber-100 dark:bg-amber-950/30'
  },
  {
    id: 'approved',
    title: 'Approved',
    count: 64,
    icon: <FaCheck className="text-green-500 text-xl" />,
    bgColor: 'bg-green-100 dark:bg-green-950/30'
  },
  {
    id: 'rejected',
    title: 'Requires Update',
    count: 8,
    icon: <FaTimes className="text-red-500 text-xl" />,
    bgColor: 'bg-red-100 dark:bg-red-950/30'
  },
]

export default function DashboardPage() {
  const [searchTerm, setSearchTerm] = useState('')
  
  // Filter boards based on search term
  const filteredBoards = boards.filter(board => 
    board.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    board.description.toLowerCase().includes(searchTerm.toLowerCase())
  )
  
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="container">
          {/* Dashboard Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Dashboard</h1>
              <p className="text-slate-600 dark:text-slate-400">
                Manage your compliance evidence and track progress
              </p>
            </div>
            <Link 
              href="/dashboard/create-board" 
              className="btn btn-primary mt-4 md:mt-0 py-2 px-4 rounded-lg flex items-center"
            >
              <FaPlus className="mr-2" />
              Create New Board
            </Link>
          </div>
          
          {/* Evidence Status Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {evidenceStatusCards.map((card) => (
              <div key={card.id} className={`card ${card.bgColor}`}>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-slate-700 dark:text-slate-300">
                      {card.title}
                    </p>
                    <p className="text-3xl font-bold mt-2">{card.count}</p>
                  </div>
                  <div className="p-3 rounded-full bg-white dark:bg-slate-800 shadow-sm">
                    {card.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Search and Filters */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
            <div className="relative w-full sm:w-80 mb-4 sm:mb-0">
              <input
                type="text"
                placeholder="Search boards..."
                className="w-full py-2 pl-10 pr-4 rounded-lg border border-slate-300 dark:border-slate-700 bg-transparent focus:ring-2 focus:ring-primary focus:border-primary"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute left-3 top-3 text-slate-400" />
            </div>
            <button className="btn btn-outline py-2 px-4 rounded-lg flex items-center">
              <FaFilter className="mr-2" />
              Filters
            </button>
          </div>
          
          {/* Boards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredBoards.map((board) => (
              <Link href={`/dashboard/board/${board.id}`} key={board.id}>
                <div className="card h-full hover:shadow-lg transition-shadow cursor-pointer dark:bg-black/40">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold">{board.name}</h3>
                    <div className="flex space-x-1">
                      {board.frameworks.map((framework) => (
                        <span 
                          key={framework} 
                          className="inline-flex text-xs font-medium bg-primary/10 text-primary rounded-full px-2 py-1"
                        >
                          {framework}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-400 mb-6">
                    {board.description}
                  </p>
                  
                  <div className="mt-auto">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Progress</span>
                      <span>{board.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full" 
                        style={{ width: `${board.progress}%` }}
                      ></div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-between text-sm text-slate-600 dark:text-slate-400">
                      <span>{board.evidenceCount} evidence items</span>
                      <span>Updated {board.lastUpdated}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
            
            {/* Create New Board Card */}
            <Link href="/dashboard/create-board">
              <div className="card h-full border-dashed border-2 hover:border-primary transition-colors flex flex-col items-center justify-center py-12 cursor-pointer dark:bg-black/40">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <FaPlus className="text-primary text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Create New Board</h3>
                <p className="text-slate-600 dark:text-slate-400 text-center">
                  Start collecting evidence for a new compliance framework
                </p>
              </div>
            </Link>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
} 