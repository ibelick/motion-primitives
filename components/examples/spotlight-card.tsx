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
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className='relative h-screen w-full overflow-hidden bg-gradient-to-br from-slate-900 to-slate-800'>
      <div className='relative z-10 flex h-full w-full flex-col items-center justify-center p-8'>
        <h2 className='mb-8 text-4xl font-bold text-white'>Our Features</h2>
        <Spotlight
          className='h-full w-full'
          spotlightSize={400}
          color='rgba(148, 163, 184, 0.1)'
          attachToParent={true}
        >
          <div className='grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2'>
            {features.map((feature, index) => (
              <Card
                key={index}
                feature={feature}
                isHovered={hoveredIndex === index}
                onHover={() => setHoveredIndex(index)}
                onLeave={() => setHoveredIndex(null)}
              />
            ))}
          </div>
        </Spotlight>
      </div>
    </div>
  );
}

function Card({
  feature,
  isHovered,
  onHover,
  onLeave,
}: {
  feature: (typeof features)[number];
  isHovered: boolean;
  onHover: () => void;
  onLeave: () => void;
}) {
  return (
    <motion.div
      className='relative overflow-hidden rounded-2xl bg-slate-800/50 p-8 backdrop-blur-md transition-all hover:shadow-xl'
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      style={{
        filter: isHovered ? 'blur(0px)' : 'blur(2px)',
      }}
    >
      <div className='relative z-10'>
        <feature.icon className='mb-4 h-12 w-12 text-indigo-400 transition-colors' />
        <h3 className='mb-4 text-2xl font-bold text-white transition-colors'>
          {feature.title}
        </h3>
        <p className='text-slate-300 transition-colors'>
          {feature.description}
        </p>
      </div>
      <div
        className={`absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
      />
    </motion.div>
  );
}
