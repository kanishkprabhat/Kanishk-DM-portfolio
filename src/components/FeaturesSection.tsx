import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';
import { WordsPullUpMultiStyle } from './WordsPullUpMultiStyle';

interface FeatureCardData {
  type: 'video' | 'standard';
  videoUrl?: string;
  iconUrl?: string;
  title?: string;
  number?: string;
  items?: string[];
  bottomText?: string;
  linkHref?: string;
}

const FEATURE_CARDS: FeatureCardData[] = [
  {
    type: 'video',
    videoUrl:
      'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_133058_0504132a-0cf3-4450-a370-8ea3b05c95d4.mp4',
    bottomText: 'Peace. Purpose. Presence.',
  },
  {
    type: 'standard',
    number: '01',
    title: 'Dwell Construction.',
    linkHref: '#project-dwell',
    iconUrl:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171918_4a5edc79-d78f-4637-ac8b-53c43c220606.png&w=1280&q=85',
    items: [
      'Meta Ads across Delhi NCR & Meerut',
      'Dual-path: OTP forms & WhatsApp chats',
      '31 leads (₹66/lead) & 38 chats (₹35/conv)',
      '₹3,389 spend driving 8–10 quotations',
    ],
  },
  {
    type: 'standard',
    number: '02',
    title: 'ThePetNest.',
    linkHref: '#project-petnest',
    iconUrl:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171741_ed9845ab-f5b2-4018-8ce7-07cc01823522.png&w=1280&q=85',
    items: [
      'Google Ads Top-of-Funnel strategy',
      '8 urban markets & custom intent signals',
      '3 problem-driven creative frameworks',
      '5-layer measurement & optimization model',
    ],
  },
  {
    type: 'standard',
    number: '03',
    title: 'YouTube Lead Gen.',
    linkHref: '#project-youtube',
    iconUrl:
      'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260405_171809_f56666dc-c099-4778-ad82-9ad4f209567b.png&w=1280&q=85',
    items: [
      'Google Ads video campaign for Delhi NCR',
      '3-tier audience: Custom, In-market & Affinity',
      '5-scene scripted 30s video ad storyboard',
      'Pre-launch audit & conversion tracking setup',
    ],
  },
];

export const FeaturesSection: React.FC = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  const isGridInView = useInView(gridRef, { once: true, margin: '-100px' });

  return (
    <section
      id="work"
      className="min-h-screen bg-black relative py-24 sm:py-32 md:py-40 px-4 md:px-6 overflow-hidden flex flex-col justify-center"
    >
      {/* Subtle .bg-noise overlay */}
      <div className="absolute inset-0 bg-noise opacity-[0.15] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header Text */}
        <div className="flex flex-col items-center gap-2 mb-12 sm:mb-16 md:mb-20 text-center">
          <WordsPullUpMultiStyle
            segments={[
              {
                text: 'Digital marketing projects & capabilities.',
                className: 'font-normal',
                style: { color: '#E1E0CC' },
              },
            ]}
            className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center max-w-3xl"
          />
          <WordsPullUpMultiStyle
            segments={[
              {
                text: 'From strategy to execution. Exploring the tools, channels, and creative thinking that help brands grow online.',
                className: 'text-gray-500 font-normal',
              },
            ]}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-center max-w-3xl font-light"
            delayOffset={0.35}
          />
        </div>

        {/* 4-column Card Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-2 md:gap-1 lg:h-[480px]"
        >
          {FEATURE_CARDS.map((card, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={
                isGridInView
                  ? { scale: 1, opacity: 1 }
                  : { scale: 0.95, opacity: 0 }
              }
              transition={{
                duration: 0.7,
                delay: index * 0.15,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="h-full"
            >
              {card.type === 'video' ? (
                <div className="h-full min-h-[380px] lg:h-[480px] rounded-2xl md:rounded-[1.75rem] overflow-hidden relative flex flex-col justify-end p-6 sm:p-7 border border-white/5 shadow-xl group">
                  {/* Full video background */}
                  <video
                    src={card.videoUrl}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover pointer-events-none transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Dark gradient for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent pointer-events-none" />
                  <p
                    className="relative z-10 text-lg sm:text-xl font-normal tracking-tight"
                    style={{ color: '#E1E0CC' }}
                  >
                    {card.bottomText}
                  </p>
                </div>
              ) : (
                <div className="h-full min-h-[380px] lg:h-[480px] bg-[#212121] rounded-2xl md:rounded-[1.75rem] p-6 sm:p-7 flex flex-col justify-between border border-white/5 shadow-xl transition-all duration-300 hover:border-white/10 group">
                  {/* Top: Icon + Title/Number + Checklist */}
                  <div>
                    {/* Small image icon */}
                    <img
                      src={card.iconUrl}
                      alt={card.title}
                      className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl object-cover border border-white/10"
                    />

                    {/* Title with number */}
                    <div className="flex items-baseline justify-between mt-5 mb-5">
                      <h3
                        className="text-base sm:text-lg font-medium"
                        style={{ color: '#E1E0CC' }}
                      >
                        {card.title}
                      </h3>
                      <span className="text-xs text-gray-500 font-mono tracking-wider">
                        ({card.number})
                      </span>
                    </div>

                    {/* Checklist */}
                    <ul className="space-y-3">
                      {card.items?.map((item, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                          <span className="text-gray-400 text-xs sm:text-sm font-light leading-snug">
                            {item}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Bottom: Learn more link */}
                  <div className="pt-6 border-t border-white/5">
                    {card.linkHref ? (
                      <a
                        href={card.linkHref}
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium transition-colors hover:text-white cursor-pointer"
                        style={{ color: '#E1E0CC' }}
                      >
                        <span>Learn more</span>
                        <ArrowRight className="w-3.5 h-3.5 -rotate-45 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium transition-colors hover:text-white cursor-pointer"
                        style={{ color: '#E1E0CC' }}
                      >
                        <span>Learn more</span>
                        <ArrowRight className="w-3.5 h-3.5 -rotate-45 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </button>
                    )}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
