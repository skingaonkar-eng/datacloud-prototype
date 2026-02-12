'use client'

import { motion } from 'framer-motion'
import { BarChart3, TrendingUp, Users, Lightbulb, Target } from 'lucide-react'

export default function InsightsPanel() {
  const performanceData = [
    { group: 'A', conversions: 18.5, color: 'from-violet-500 to-purple-500' },
    { group: 'B', conversions: 22.3, color: 'from-blue-500 to-cyan-500' },
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
          Analytics & Performance
        </h3>
        <p className="text-zinc-400">
          Real-time insights into your segmentation strategy
        </p>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="glassmorphism rounded-2xl p-6"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500 to-purple-500">
              <Users className="w-6 h-6 text-white" />
            </div>
            <div className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
          </div>
          <p className="text-sm text-zinc-400 mb-1">Total Reachable</p>
          <p className="text-3xl font-bold text-zinc-100">12,487</p>
          <p className="text-xs text-emerald-400 mt-2">+2.3% vs last campaign</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glassmorphism rounded-2xl p-6"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="p-3 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
          </div>
          <p className="text-sm text-zinc-400 mb-1">Expected Reach</p>
          <p className="text-3xl font-bold text-zinc-100">87.2%</p>
          <p className="text-xs text-zinc-500 mt-2">Based on channel affinity</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glassmorphism rounded-2xl p-6"
        >
          <div className="flex items-start justify-between mb-3">
            <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500 to-green-500">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div className="w-2 h-2 rounded-full bg-emerald-400 pulse-dot" />
          </div>
          <p className="text-sm text-zinc-400 mb-1">Projected ROI</p>
          <p className="text-3xl font-bold text-zinc-100">4.2x</p>
          <p className="text-xs text-emerald-400 mt-2">+35% confidence</p>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Overlap Analysis - Venn Diagram */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.4 }}
          className="glassmorphism rounded-3xl p-6"
        >
          <div className="flex items-center gap-2 mb-6">
            <BarChart3 className="w-5 h-5 text-violet-400" />
            <h4 className="text-lg font-semibold text-zinc-100">
              Segment Overlap
            </h4>
          </div>

          {/* Venn Diagram */}
          <div className="relative h-64 flex items-center justify-center">
            {/* Circle 1 - Trek Customers */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, type: 'spring' }}
              className="absolute left-16 w-40 h-40 rounded-full bg-violet-500/30 border-2 border-violet-500 flex items-center justify-center"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="text-center -ml-8">
                <p className="text-xs text-zinc-400 mb-1">Trek Gear</p>
                <p className="text-xl font-bold text-zinc-100">8.2K</p>
              </div>
            </motion.div>

            {/* Circle 2 - General Outdoor */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.6, type: 'spring' }}
              className="absolute right-16 w-40 h-40 rounded-full bg-blue-500/30 border-2 border-blue-500 flex items-center justify-center"
              style={{ backdropFilter: 'blur(10px)' }}
            >
              <div className="text-center -mr-8">
                <p className="text-xs text-zinc-400 mb-1">Outdoor</p>
                <p className="text-xl font-bold text-zinc-100">15.3K</p>
              </div>
            </motion.div>

            {/* Overlap Center */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.7, type: 'spring' }}
              className="absolute z-10"
            >
              <div className="text-center bg-zinc-900/80 rounded-xl p-3 border border-violet-500/50">
                <p className="text-xs text-zinc-400 mb-1">Overlap</p>
                <p className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
                  4.5K
                </p>
              </div>
            </motion.div>
          </div>

          <p className="text-xs text-zinc-400 text-center mt-4">
            36% of Trek segment also belongs to General Outdoor audience
          </p>
        </motion.div>

        {/* Segment Explainability */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="glassmorphism rounded-3xl p-6 space-y-4"
        >
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="w-5 h-5 text-yellow-400" />
            <h4 className="text-lg font-semibold text-zinc-100">
              Why This Works
            </h4>
          </div>

          <div className="space-y-3">
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="p-4 rounded-xl bg-violet-500/10 border border-violet-500/30"
            >
              <p className="text-sm text-zinc-300">
                <span className="font-semibold text-violet-400">4x</span> more likely 
                to convert on <span className="font-semibold">weekends</span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/30"
            >
              <p className="text-sm text-zinc-300">
                <span className="font-semibold text-blue-400">73%</span> prefer 
                visual content over text
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30"
            >
              <p className="text-sm text-zinc-300">
                Peak engagement: <span className="font-semibold text-emerald-400">
                6-9 PM PST
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
              className="p-4 rounded-xl bg-orange-500/10 border border-orange-500/30"
            >
              <p className="text-sm text-zinc-300">
                <span className="font-semibold text-orange-400">Responds well</span> to 
                urgency & scarcity messaging
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Performance Comparison */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="glassmorphism rounded-3xl p-6"
      >
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-emerald-400" />
            <h4 className="text-lg font-semibold text-zinc-100">
              Split Performance
            </h4>
          </div>
          <span className="text-xs text-zinc-400">Live Results</span>
        </div>

        <div className="space-y-6">
          {performanceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 + index * 0.1 }}
            >
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className={`
                    w-10 h-10 rounded-lg bg-gradient-to-br ${item.color}
                    flex items-center justify-center font-bold text-lg
                  `}>
                    {item.group}
                  </div>
                  <div>
                    <p className="text-sm text-zinc-400">Group {item.group}</p>
                    <p className="text-xs text-zinc-500">
                      {item.group === 'A' ? '15% Discount via Push' : 'Free Shipping via SMS'}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-zinc-100">
                    {item.conversions}%
                  </p>
                  <p className="text-xs text-emerald-400">
                    {item.group === 'B' ? '+20% vs A' : ''}
                  </p>
                </div>
              </div>

              {/* Bar */}
              <div className="h-3 bg-zinc-800 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${(item.conversions / 25) * 100}%` }}
                  transition={{ delay: 0.8 + index * 0.1, duration: 1, ease: 'easeOut' }}
                  className={`h-full bg-gradient-to-r ${item.color}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Winner Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1 }}
          className="mt-6 p-4 rounded-2xl bg-gradient-to-r from-emerald-500/20 to-green-500/20 border border-emerald-500/30 text-center"
        >
          <p className="text-sm text-zinc-300">
            <span className="font-semibold text-emerald-400">Winner:</span>{' '}
            Group B (Free Shipping) is performing 20% better with statistical significance
          </p>
        </motion.div>
      </motion.div>

      {/* Final CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
        className="glassmorphism rounded-2xl p-8 text-center"
      >
        <h4 className="text-xl font-bold text-zinc-100 mb-2">
          Ready to Launch?
        </h4>
        <p className="text-zinc-400 mb-6">
          Your segment is optimized and ready to deploy
        </p>
        <div className="flex gap-4 justify-center">
          <button className="px-6 py-3 rounded-full bg-zinc-800 hover:bg-zinc-700 font-semibold transition-colors">
            Save Segment
          </button>
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 hover:from-violet-600 hover:to-blue-600 font-semibold glow-border transition-all">
            Deploy Campaign
          </button>
        </div>
      </motion.div>
    </motion.div>
  )
}
