'use client';

import React, { useState } from 'react';
import { Spotlight } from '@/components/core/spotlight';
import { Zap, Shield, Sparkles, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description:
      'Experience unparalleled speed and performance with our optimized systems.',
  },
  {
    icon: Shield,
    title: 'Ironclad Security',
    description:
      'Rest easy knowing your data is protected by state-of-the-art security measures.',
  },
  {
    icon: Sparkles,
    title: 'Stunning Design',
    description:
      'Immerse yourself in a beautifully crafted interface that delights at every interaction.',
  },
  {
    icon: Star,
    title: 'Unmatched Quality',
    description:
      'Benefit from our commitment to excellence and attention to every detail.',
  },
];

export function SpotlightCards() {
  return (
    <div className='grid gap-8 p-8 md:grid-cols-2'>
      {features.map((feature, i) => (
        <motion.div
          key={i}
          className='group relative overflow-hidden rounded-lg bg-gradient-to-br from-zinc-800/50 to-zinc-900/50 p-8 backdrop-blur-sm'
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 400, damping: 30 }}
        >
          <Spotlight
            spotlightSize={200}
            color={
              i % 2 === 0
                ? 'rgba(161, 161, 170, 0.25)'
                : 'rgba(113, 113, 122, 0.15)'
            }
            blur={25}
            opacity={0.8}
            springOptions={{ stiffness: 300, damping: 20 }}
          />
          <div className='relative z-10 flex flex-col space-y-4'>
            <feature.icon className='h-8 w-8 text-zinc-400' />
            <h3 className='text-xl font-bold text-zinc-100'>{feature.title}</h3>
            <p className='text-zinc-300'>{feature.description}</p>
          </div>
          <div className='absolute inset-0 bg-gradient-to-br from-zinc-500/10 to-zinc-400/10 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
        </motion.div>
      ))}
    </div>
  );
}
