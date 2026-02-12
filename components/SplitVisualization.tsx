'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { GitBranch, Percent, Gift, Truck, ArrowRight } from 'lucide-react'

interface SplitVisualizationProps {
  onContinue: () => void
}

export default function SplitVisualization({ onContinue }: SplitVisualizationProps) {
  const [splitCreated, setSplitCreated] = useState(false)

  const handleOptimize = () => {
    setSplitCreated(true)
    setTimeout(onContinue, 2000)
  }

  const splits = [
    {
      group: 'A',
      color: 'from-violet-500 to-purple-500',
      icon: Gift,
      offer: '15% Discount',
      channel: 'Mobile Push',
      size: '50%',
      count: '6,244',
    },
    {
      group: 'B',
      color: 'from-blue-500 to-cyan-500',
      icon: Truck,
      offer: 'Free Shipping',
      channel: 'SMS',
      size: '50%',
      count: '6,243',
    },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-6"
    >
      {/* Section Header */}
      <div>
        <h3 className="text-2xl font-bold text-zinc-100 mb-2">
          Agentic Split Testing
        </h3>
        <p className="text-zinc-400">
          Let me create an optimized A/B test for you
        </p>
      </div>

      {!splitCreated ? (
        /* Before Split - Optimization Prompt */
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glassmorphism rounded-3xl p-12 text-center"
        >
          <motion.div
            animate={{ 
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1.1, 1]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="inline-block mb-6"
          >
            <GitBranch className="w-16 h-16 text-violet-400" />
          </motion.div>

          <h4 className="text-2xl font-bold text-zinc-100 mb-3">
            Ready to Optimize?
          </h4>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            I can split your audience into two groups and test different offers 
            to see what drives the best results.
          </p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleOptimize}
            className="bg-gradient-to-r from-violet-500 to-blue-500 hover:from-violet-600 hover:to-blue-600 rounded-full px-8 py-4 font-semibold text-lg transition-all glow-border"
          >
            Create Smart Split
          </motion.button>
        </motion.div>
      ) : (
        /* After Split - Visual Fork */
        <div className="space-y-8">
          {/* Main Segment */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex justify-center"
          >
            <div className="glassmorphism rounded-2xl px-6 py-3 flex items-center gap-3">
              <Percent className="w-5 h-5 text-violet-400" />
              <span className="font-semibold text-zinc-100">12,487 People</span>
            </div>
          </motion.div>

          {/* Split Connector */}
          <div className="relative flex justify-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="w-px h-12 bg-gradient-to-b from-violet-500 to-transparent"
            />
          </div>

          {/* Split Groups */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {splits.map((split, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index === 0 ? -50 : 50, y: 20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2 }}
                className="relative"
              >
                {/* Connector Line */}
                <div className={`
                  absolute -top-12 ${index === 0 ? 'right-1/2' : 'left-1/2'} 
                  w-1/2 h-12 border-t-2 border-${index === 0 ? 'l' : 'r'}-2 
                  border-violet-500/50 rounded-t-3xl
                `} />

                <div className="glassmorphism rounded-3xl p-6 space-y-4">
                  {/* Group Badge */}
                  <div className="flex items-center justify-between">
                    <div className={`
                      w-12 h-12 rounded-xl bg-gradient-to-br ${split.color} 
                      flex items-center justify-center text-xl font-bold
                    `}>
                      {split.group}
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-zinc-400">Group Size</p>
                      <p className="text-lg font-bold text-zinc-100">{split.size}</p>
                    </div>
                  </div>

                  {/* Offer Card */}
                  <div className={`
                    p-4 rounded-2xl bg-gradient-to-br ${split.color} bg-opacity-10
                    border border-opacity-30
                  `}>
                    <split.icon className="w-8 h-8 text-white mb-3" />
                    <h5 className="text-xl font-bold text-zinc-100 mb-1">
                      {split.offer}
                    </h5>
                    <p className="text-sm text-zinc-400">via {split.channel}</p>
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between pt-2">
                    <div>
                      <p className="text-sm text-zinc-400">Audience</p>
                      <p className="text-2xl font-bold text-zinc-100">{split.count}</p>
                    </div>
                    <div className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Info Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="glassmorphism rounded-2xl p-6"
          >
            <p className="text-sm text-zinc-300 text-center">
              <span className="font-semibold text-violet-400">Test Strategy:</span>{' '}
              Split is balanced 50/50. Group A tests discount sensitivity via high-engagement channel, 
              while Group B tests value-add incentives via alternative channel.
            </p>
          </motion.div>
        </div>
      )}
    </motion.div>
  )
}
