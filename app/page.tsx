'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import AgentBar from '@/components/AgentBar'
import AttributeCards from '@/components/AttributeCards'
import ChannelAffinity from '@/components/ChannelAffinity'
import SplitVisualization from '@/components/SplitVisualization'
import InsightsPanel from '@/components/InsightsPanel'
import { Sparkles } from 'lucide-react'

export default function Home() {
  const [step, setStep] = useState(0)
  const [userGoal, setUserGoal] = useState('')
  const [isProcessing, setIsProcessing] = useState(false)

  const handleGoalSubmit = (goal: string) => {
    setUserGoal(goal)
    setIsProcessing(true)
    
    // Simulate AI processing
    setTimeout(() => {
      setIsProcessing(false)
      setStep(1)
    }, 1500)
  }

  const handleContinue = () => {
    setStep(prev => Math.min(prev + 1, 4))
  }

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="fixed inset-0 bg-gradient-to-br from-violet-950/20 via-zinc-950 to-zinc-950 pointer-events-none" />
      <div className="fixed top-0 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="fixed bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 pt-8 px-8"
      >
        <div className="flex items-center gap-3">
          <Sparkles className="w-8 h-8 text-violet-400" />
          <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent">
            Project Untethered
          </h1>
        </div>
        <p className="mt-2 text-zinc-400 text-sm">
          Your Agentic Segmentation Workspace
        </p>
      </motion.header>

      {/* Main Canvas Area */}
      <div className="relative z-10 container mx-auto px-8 py-12 pb-32">
        <AnimatePresence mode="wait">
          {step === 0 && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="flex items-center justify-center min-h-[60vh]"
            >
              <div className="text-center max-w-2xl">
                <motion.div
                  animate={{ 
                    scale: [1, 1.05, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="inline-block mb-6"
                >
                  <Sparkles className="w-20 h-20 text-violet-400" />
                </motion.div>
                <h2 className="text-4xl font-bold mb-4 text-zinc-100">
                  What would you like to achieve?
                </h2>
                <p className="text-zinc-400 text-lg">
                  Tell me your goal in plain language, and I'll handle the rest.
                </p>
              </div>
            </motion.div>
          )}

          {step >= 1 && (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-8"
            >
              {/* User Goal Display */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glassmorphism rounded-3xl p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-2 h-2 rounded-full bg-violet-400 mt-2 pulse-dot" />
                  <div>
                    <p className="text-sm text-zinc-400 mb-1">Your Goal</p>
                    <p className="text-xl text-zinc-100">{userGoal}</p>
                  </div>
                </div>
              </motion.div>

              {/* Step 2: Attribute Cards */}
              {step >= 1 && <AttributeCards onContinue={handleContinue} />}

              {/* Step 3: Channel Affinity */}
              {step >= 2 && <ChannelAffinity onContinue={handleContinue} />}

              {/* Step 4: Agentic Splits */}
              {step >= 3 && <SplitVisualization onContinue={handleContinue} />}

              {/* Step 5: Insights & Analytics */}
              {step >= 4 && <InsightsPanel />}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Agent Bar - Fixed at Bottom */}
      <AgentBar 
        onSubmit={handleGoalSubmit} 
        isProcessing={isProcessing}
        disabled={step > 0}
      />
    </main>
  )
}
