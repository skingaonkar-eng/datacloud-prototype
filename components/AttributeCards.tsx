'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, Clock, Package, Search, Plus, ArrowRight } from 'lucide-react'

interface AttributeCardsProps {
  onContinue: () => void
}

export default function AttributeCards({ onContinue }: AttributeCardsProps) {
  const [filters, setFilters] = useState<string[]>([])
  const [searchValue, setSearchValue] = useState('')

  const attributes = [
    {
      icon: TrendingUp,
      label: 'Lifetime Value',
      value: 'Top 10%',
      detail: 'LTV > $500',
      color: 'from-emerald-500 to-green-500',
    },
    {
      icon: Clock,
      label: 'Last Activity',
      value: '180+ Days',
      detail: 'No purchase in 6 months',
      color: 'from-orange-500 to-amber-500',
    },
    {
      icon: Package,
      label: 'Product Interest',
      value: 'Trekking Boots',
      detail: 'Previously purchased',
      color: 'from-blue-500 to-cyan-500',
    },
  ]

  const handleAddFilter = () => {
    if (searchValue.trim()) {
      setFilters([...filters, searchValue.trim()])
      setSearchValue('')
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.9 },
    show: { opacity: 1, y: 0, scale: 1 },
  }

  return (
    <motion.div
      initial="hidden"
      animate="show"
      variants={containerVariants}
      className="space-y-6"
    >
      {/* Section Header */}
      <motion.div variants={itemVariants}>
        <h3 className="text-2xl font-bold text-zinc-100 mb-2">
          Key Attributes Identified
        </h3>
        <p className="text-zinc-400">
          Based on your goal, I've identified these audience characteristics
        </p>
      </motion.div>

      {/* Attribute Cards Grid */}
      <motion.div 
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-3 gap-4"
      >
        {attributes.map((attr, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02, y: -4 }}
            className="glassmorphism rounded-2xl p-6 cursor-pointer group"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`p-3 rounded-xl bg-gradient-to-br ${attr.color} bg-opacity-10`}>
                <attr.icon className="w-6 h-6 text-white" />
              </div>
              <div className="w-2 h-2 rounded-full bg-violet-400 pulse-dot" />
            </div>
            
            <h4 className="text-sm text-zinc-400 mb-1">{attr.label}</h4>
            <p className="text-2xl font-bold text-zinc-100 mb-2">{attr.value}</p>
            <p className="text-sm text-zinc-500">{attr.detail}</p>
            
            {/* Hover effect indicator */}
            <div className="mt-4 h-1 w-0 group-hover:w-full bg-gradient-to-r from-violet-500 to-blue-500 rounded-full transition-all duration-300" />
          </motion.div>
        ))}
      </motion.div>

      {/* Quick Filter Search */}
      <motion.div variants={itemVariants} className="space-y-4">
        <h4 className="text-lg font-semibold text-zinc-100">Add More Filters</h4>
        
        <div className="glassmorphism rounded-2xl p-4">
          <div className="flex items-center gap-3">
            <Search className="w-5 h-5 text-zinc-400" />
            <input
              type="text"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAddFilter()}
              placeholder="Search for attributes like 'Region: Pacific Northwest'..."
              className="flex-1 bg-transparent border-none outline-none text-zinc-100 placeholder-zinc-500"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleAddFilter}
              className="bg-violet-500 hover:bg-violet-600 rounded-lg p-2 transition-colors"
            >
              <Plus className="w-5 h-5" />
            </motion.button>
          </div>
        </div>

        {/* Filter Pills */}
        {filters.length > 0 && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="flex flex-wrap gap-2"
          >
            {filters.map((filter, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glassmorphism rounded-full px-4 py-2 text-sm text-zinc-100"
              >
                {filter}
              </motion.div>
            ))}
          </motion.div>
        )}
      </motion.div>

      {/* Segment Count & Continue */}
      <motion.div 
        variants={itemVariants}
        className="glassmorphism rounded-2xl p-6 flex items-center justify-between"
      >
        <div>
          <p className="text-sm text-zinc-400 mb-1">Estimated Audience Size</p>
          <p className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            12,487 people
          </p>
        </div>
        
        <motion.button
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContinue}
          className="bg-violet-500 hover:bg-violet-600 rounded-full px-6 py-3 font-semibold flex items-center gap-2 transition-colors"
        >
          Analyze Channels
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
