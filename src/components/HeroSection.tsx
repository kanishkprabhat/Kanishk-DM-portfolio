import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Navbar } from './Navbar';
import { WordsPullUp } from './WordsPullUp';

export const HeroSection: React.FC = () => {
  return (
    <section id="home" className="h-screen w-full p-4 md:p-6 bg-black relative flex flex-col box-border">
      <div className="relative w-full h-full rounded-2xl md:rounded-[2rem] overflow-hidden bg-black shadow-2xl">
        {/* Background Video */}
        <video
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        />

        {/* Noise overlay */}
        <div className="absolute inset-0 noise-overlay opacity-[0.7] mix-blend-overlay pointer-events-none" />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

        {/* Top Navbar */}
        <Navbar />

        {/* Hero Content (bottom-aligned) */}
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-10 z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-end gap-6 lg:gap-8">
            {/* Left 8 columns: Giant Heading */}
            <div className="col-span-1 lg:col-span-8 flex items-end">
              <WordsPullUp
                text="Kanishk"
                showAsterisk={true}
                className="text-[20vw] sm:text-[18vw] md:text-[16vw] lg:text-[14vw] xl:text-[13vw] 2xl:text-[13.5vw] font-medium leading-[0.85] tracking-[-0.07em] select-none"
                style={{ color: '#E1E0CC' }}
              />
            </div>

            {/* Right 4 columns: Description + CTA */}
            <div className="col-span-1 lg:col-span-4 flex flex-col justify-end gap-5 sm:gap-6 pb-2 lg:pb-3">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.5,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="flex flex-col gap-2 max-w-md"
              >
                <p className="text-primary text-xs sm:text-sm md:text-base font-medium leading-[1.3]">
                  Digital marketing, driven by creativity and strategy.
                </p>
                <p className="text-primary/70 text-xs sm:text-sm md:text-base leading-[1.3] font-light">
                  I explore how brands grow through paid advertising, content,
                  social media, SEO, and data-driven marketing strategies.
                </p>
              </motion.div>

              <motion.a
                href="#work"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="group inline-flex items-center gap-2 hover:gap-3 bg-primary rounded-full pl-5 pr-1.5 py-1.5 sm:pl-6 sm:pr-2 sm:py-2 text-black font-medium text-sm sm:text-base transition-all duration-300 w-fit cursor-pointer"
              >
                <span>Explore My Work</span>
                <span className="bg-black rounded-full w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shrink-0">
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-[#E1E0CC]" />
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
