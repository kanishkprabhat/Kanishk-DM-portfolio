import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface WordsPullUpProps {
  text: string;
  className?: string;
  showAsterisk?: boolean;
  delayOffset?: number;
  style?: React.CSSProperties;
}

export const WordsPullUp: React.FC<WordsPullUpProps> = ({
  text,
  className = '',
  showAsterisk = false,
  delayOffset = 0,
  style,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });
  const words = text.split(' ').filter(Boolean);

  return (
    <div
      ref={containerRef}
      className={`inline-flex flex-wrap ${className}`}
      style={style}
    >
      {words.map((word, wordIndex) => {
        const isLastWord = wordIndex === words.length - 1;

        return (
          <span
            key={wordIndex}
            className="inline-block overflow-visible mr-[0.2em] last:mr-0"
          >
            <motion.span
              initial={{ y: 20, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
              transition={{
                duration: 0.7,
                delay: delayOffset + wordIndex * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="inline-block"
            >
              {isLastWord && showAsterisk ? (
                <span className="relative inline-block">
                  {word.slice(0, -1)}
                  <span className="relative inline-block">
                    {word.slice(-1)}
                    <span className="absolute top-[0.65em] -right-[0.3em] text-[0.31em] select-none pointer-events-none leading-none">
                      *
                    </span>
                  </span>
                </span>
              ) : (
                word
              )}
            </motion.span>
          </span>
        );
      })}
    </div>
  );
};
