'use client'

import { Spotlight } from '@/components/core/spotlight'
import { motion } from 'framer-motion'
import { useState } from 'react'

export function SpotlightBasic() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const items = [
    { title: 'Discover', description: 'Uncover hidden gems in our vast collection' },
    { title: 'Create', description: 'Bring your ideas to life with powerful tools' },
    { title: 'Innovate', description: 'Push boundaries and redefine possibilities' },
  ]

  return (
    <div className="relative h-full overflow-hidden bg-gradient-to-br from-purple-950 to-indigo-950">
      <Spotlight
        spotlightSize={400}
        color="rgba(148, 0, 255, 0.15)"
      >
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full p-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 text-5xl font-bold text-white md:text-6xl"
          >
            Discover the Magic
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-purple-200 mb-12 max-w-2xl"
          >
            Move your cursor across the screen to unveil the hidden glow and explore our features
          </motion.p>
        </div>
      </Spotlight>
    </div>
  )
}