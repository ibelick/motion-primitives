'use client';

import React, { useState } from 'react';
import { Spotlight } from '@/components/core/spotlight';
import { motion } from 'framer-motion';

const cities = [
  { name: 'New York', x: 25, y: 50 },
  { name: 'London', x: 45, y: 45 },
  { name: 'Tokyo', x: 85, y: 52 },
  { name: 'Sydney', x: 88, y: 69 },
  { name: 'Delhi', x: 68, y: 53 },
  { name: 'Rio de Janeiro', x: 33, y: 68 },
];

export function SpotlightInteractiveMap() {
  const [activeCity, setActiveCity] = useState<string | null>(null);

  return (
    <div className='relative h-screen w-full overflow-hidden bg-slate-950'>
      <Spotlight
        className='h-full w-full'
        spotlightSize={200}
        color='rgba(148, 163, 184, 0.2)'
      >
        <div className='relative flex h-full w-full items-center justify-center'>
          <div className="absolute inset-0 bg-[url('/world-map.svg')] bg-contain bg-center bg-white bg-no-repeat opacity-20" />
          {cities.map((city) => (
            <motion.div
              key={city.name}
              className='absolute h-4 w-4'
              style={{ left: `${city.x}%`, top: `${city.y}%` }}
              whileHover={{ scale: 1.5 }}
              onMouseEnter={() => setActiveCity(city.name)}
              onMouseLeave={() => setActiveCity(null)}
            >
              <motion.div
                className='h-full w-full rounded-full bg-indigo-500'
                animate={{
                  scale: activeCity === city.name ? [1, 1.2, 1] : 1,
                }}
                transition={{ duration: 1, repeat: Infinity }}
              />
              <motion.div
                className='absolute left-1/2 top-6 -translate-x-1/2 transform whitespace-nowrap rounded bg-slate-800 px-2 py-1 text-sm text-white backdrop-blur-md'
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: activeCity === city.name ? 1 : 0,
                  y: activeCity === city.name ? 0 : -10,
                }}
                style={{
                  filter: activeCity === city.name ? 'blur(0px)' : 'blur(2px)',
                }}
              >
                {city.name}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </Spotlight>
      <div className='absolute bottom-4 left-4 right-4 mx-auto max-w-2xl rounded-lg bg-slate-800/80 p-4 backdrop-blur-sm'>
        <h2 className='mb-2 text-2xl font-bold text-white'>
          Interactive World Map
        </h2>
        <p className='text-slate-300'>
          Explore our global network by hovering over the cities. The Spotlight
          follows your cursor, illuminating different regions and revealing city
          names.
        </p>
      </div>
    </div>
  );
}
