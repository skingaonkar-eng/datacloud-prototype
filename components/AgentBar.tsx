'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, Sparkles } from 'lucide-react'

interface AgentBarProps {
  onSubmit: (goal: string) => void
  isProcessing: boolean
  disabled?: boolean
}

export default function AgentBar({ onSubmit, isProcessing, disabled }: AgentBarProps) {
  const [input, setInput] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() && !disabled) {
      onSubmit(input.trim())
      setInput('')
    }
  }

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, type: 'spring', stiffness: 100 }}
      className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50 w-full max-w-3xl px-4"
    >
      <form onSubmit={handleSubmit}>
        <div className={`
          glassmorphism rounded-full p-2 
          ${!disabled && 'glow-border hover:shadow-violet-500/40'}
          transition-all duration-300
        `}>
          <div className="flex items-center gap-3 px-4">
            {isProcessing ? (
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
              >
                <Sparkles className="w-5 h-5 text-violet-400" />
              </motion.div>
            ) : (
              <Sparkles className="w-5 h-5 text-violet-400" />
            )}
            
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              disabled={disabled || isProcessing}
              placeholder={
                disabled 
                  ? "Goal set - Agent is working..." 
                  : "Describe your marketing goal..."
              }
              className="flex-1 bg-transparent border-none outline-none text-zinc-100 placeholder-zinc-500 text-lg py-3 disabled:opacity-50"
            />
            
            <motion.button
              type="submit"
              disabled={!input.trim() || disabled || isProcessing}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-violet-500 hover:bg-violet-600 disabled:bg-zinc-700 disabled:cursor-not-allowed rounded-full p-3 transition-colors duration-200"
            >
              <Send className="w-5 h-5" />
            </motion.button>
          </div>
        </div>
      </form>
      
      {isProcessing && (
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mt-3 text-sm text-zinc-400"
        >
          Analyzing your goal and identifying key attributes...
        </motion.p>
      )}
    </motion.div>
  )
}
