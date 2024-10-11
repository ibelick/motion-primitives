'use client';
import React from 'react';
import { Spotlight } from '@/components/core/spotlight';
import { Zap, Shield, Sparkles, Star } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Lightning Fast',
    description: 'Experience unparalleled speed and performance with our optimized systems.',
  },
  {
    icon: Shield,
    title: 'Ironclad Security',
    description: 'Rest easy knowing your data is protected by state-of-the-art security measures.',
  },
  {
    icon: Sparkles,
    title: 'Stunning Design',
    description: 'Immerse yourself in a beautifully crafted interface that delights at every interaction.',
  },
  {
    icon: Star,
    title: 'Unmatched Quality',
    description: 'Benefit from our commitment to excellence and attention to every detail.',
  },
];
export function SpotlightCards() {
    return (
      <Spotlight className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl">
        {features.map((feature, index) => (
          <Card key={index} feature={feature} />
        ))}
      </Spotlight>
    );
  }
  
  function Card({ feature }: { feature: typeof features[number] }) {
    return (
      <div
        className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-slate-800 to-slate-900 p-8 transition-all hover:shadow-xl"
      >
        <div className="relative z-10">
          <feature.icon className="mb-4 h-10 w-10 text-indigo-500" />
          <h3 className="mb-2 text-2xl font-bold text-white">{feature.title}</h3>
          <p className="text-slate-400 break-words">{feature.description}</p>
        </div>
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(255,255,255,.06), transparent 40%)',
          }}
        />
      </div>
    );
  }
  