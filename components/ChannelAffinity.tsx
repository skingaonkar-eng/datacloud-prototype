'use client'

import { motion } from 'framer-motion'
import { Smartphone, Mail, MessageSquare, Bell, ArrowRight } from 'lucide-react'

interface ChannelAffinityProps {
  onContinue: () => void
}

export default function ChannelAffinity({ onContinue }: ChannelAffinityProps) {
  const channels = [
    {
      icon: Smartphone,
      name: 'Mobile Push',
      affinity: 70,
      engagement: 'High',
      color: 'from-violet-500 to-purple-500',
      isTop: true,
    },
    {
      icon: MessageSquare,
      name: 'SMS',
      affinity: 55,
      engagement: 'Medium',
      color: 'from-blue-500 to-cyan-500',
      isTop: false,
    },
    {
      icon: Mail,
      name: 'Email',
      affinity: 35,
      engagement: 'Low',
      color: 'from-slate-500 to-zinc-500',
      isTop: false,
    },
    {
      icon: Bell,
      name: 'In-App',
      affinity: 45,
      engagement: 'Medium',
      color: 'from-emerald-500 to-green-500',
      isTop: false,
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
          Channel Affinity Analysis
        </h3>
        <p className="text-zinc-400">
          These channels perform best with your target audience
        </p>
      </div>

      {/* Channel Cards */}
      <div className="glassmorphism rounded-3xl p-8">
        <div className="space-y-4">
          {channels.map((channel, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <div className={`
                flex items-center gap-4 p-4 rounded-2xl
                ${channel.isTop ? 'bg-violet-500/10 border border-violet-500/30' : 'bg-zinc-800/30'}
                transition-all duration-300 hover:scale-[1.02]
              `}>
                {/* Icon */}
                <div className={`p-3 rounded-xl bg-gradient-to-br ${channel.color}`}>
                  <channel.icon className="w-6 h-6 text-white" />
                </div>

                {/* Channel Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-lg font-semibold text-zinc-100">
                      {channel.name}
                    </h4>
                    {channel.isTop && (
                      <span className="text-xs bg-violet-500 text-white px-2 py-1 rounded-full">
                        Top Pick
                      </span>
                    )}
                  </div>

                  {/* Affinity Bar */}
                  <div className="flex items-center gap-3">
                    <div className="flex-1 h-2 bg-zinc-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${channel.affinity}%` }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.8, ease: 'easeOut' }}
                        className={`h-full bg-gradient-to-r ${channel.color}`}
                      />
                    </div>
                    <span className="text-sm font-bold text-zinc-100 min-w-[60px]">
                      {channel.affinity}%
                    </span>
                  </div>
                </div>

                {/* Engagement Badge */}
                <div className={`
                  px-3 py-1 rounded-lg text-sm font-medium
                  ${channel.engagement === 'High' ? 'bg-emerald-500/20 text-emerald-400' : 
                    channel.engagement === 'Medium' ? 'bg-blue-500/20 text-blue-400' : 
                    'bg-zinc-600/20 text-zinc-400'}
                `}>
                  {channel.engagement}
                </div>

                {/* Pulse indicator for top channel */}
                {channel.isTop && (
                  <div className="absolute -right-2 -top-2">
                    <div className="w-3 h-3 rounded-full bg-violet-400 pulse-dot" />
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Insight Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mt-6 p-4 rounded-2xl bg-violet-500/10 border border-violet-500/30"
        >
          <p className="text-sm text-zinc-300">
            <span className="font-semibold text-violet-400">Insight:</span>{' '}
            70% of this segment responds better to Mobile Push notifications. 
            Consider prioritizing this channel for maximum engagement.
          </p>
        </motion.div>
      </div>

      {/* Continue Button */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="flex justify-end"
      >
        <motion.button
          whileHover={{ scale: 1.05, x: 5 }}
          whileTap={{ scale: 0.95 }}
          onClick={onContinue}
          className="bg-violet-500 hover:bg-violet-600 rounded-full px-6 py-3 font-semibold flex items-center gap-2 transition-colors"
        >
          Optimize with A/B Split
          <ArrowRight className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
