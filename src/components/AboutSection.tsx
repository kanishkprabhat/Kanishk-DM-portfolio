import React, { useRef } from 'react';
import { useScroll } from 'framer-motion';
import { WordsPullUpMultiStyle, TextSegment } from './WordsPullUpMultiStyle';
import { AnimatedLetter } from './AnimatedLetter';

const HEADING_SEGMENTS: TextSegment[] = [
  {
    text: 'I am Kanishk Prabhat,',
    className: 'font-normal',
  },
  {
    text: 'a digital marketing enthusiast',
    className: 'italic font-serif',
  },
  {
    text: 'focused on building brands through strategy, creativity, and data.',
    className: 'font-normal',
  },
];

const BODY_PARAGRAPH =
  'With a foundation in paid advertising, social media, SEO, and content marketing, I explore how digital strategies connect brands with the right audiences and create meaningful marketing experiences.';

export const AboutSection: React.FC = () => {
  const paragraphRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: paragraphRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  // Split into words while keeping global character index
  let charTracker = 0;
  const wordsWithChars = BODY_PARAGRAPH.split(' ').map((word, wIdx) => {
    const letters = word.split('').map((char) => {
      const charIndex = charTracker++;
      return { char, index: charIndex };
    });
    // Account for the trailing space in character indexing
    charTracker++;
    return { letters, wIdx };
  });

  const totalChars = BODY_PARAGRAPH.length;

  return (
    <section id="about" className="bg-black py-20 sm:py-28 md:py-36 px-4 md:px-6">
      <div className="bg-[#101010] max-w-6xl mx-auto rounded-2xl md:rounded-[2.5rem] px-6 py-14 sm:px-10 sm:py-20 md:px-16 md:py-24 text-center border border-white/5 relative overflow-hidden shadow-2xl">
        {/* Top small label */}
        <div className="mb-6 sm:mb-8 md:mb-10">
          <span className="text-primary text-[10px] sm:text-xs tracking-[0.25em] uppercase font-medium">
            Digital marketing
          </span>
        </div>

        {/* Main Heading */}
        <div className="max-w-3xl mx-auto">
          <WordsPullUpMultiStyle
            segments={HEADING_SEGMENTS}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[0.95] sm:leading-[0.9]"
            style={{ color: '#E1E0CC' }}
          />
        </div>

        {/* Body Paragraph with scroll-linked character opacity animation */}
        <p
          ref={paragraphRef}
          className="text-[#DEDBC8] text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-8 sm:mt-12 md:mt-14 leading-relaxed font-light"
        >
          {wordsWithChars.map(({ letters, wIdx }) => (
            <span key={wIdx} className="inline-block whitespace-nowrap">
              {letters.map(({ char, index }) => (
                <AnimatedLetter
                  key={index}
                  char={char}
                  index={index}
                  totalChars={totalChars}
                  progress={scrollYProgress}
                />
              ))}
              {wIdx < wordsWithChars.length - 1 && (
                <span className="inline opacity-40">&nbsp;</span>
              )}
            </span>
          ))}
        </p>
      </div>
    </section>
  );
};
