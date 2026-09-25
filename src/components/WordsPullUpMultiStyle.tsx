import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export interface TextSegment {
  text: string;
  className?: string;
  style?: React.CSSProperties;
}

interface WordsPullUpMultiStyleProps {
  segments: TextSegment[];
  className?: string;
  delayOffset?: number;
  style?: React.CSSProperties;
}

export const WordsPullUpMultiStyle: React.FC<WordsPullUpMultiStyleProps> = ({
  segments,
  className = '',
  delayOffset = 0,
  style,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true });

  const allWords = segments.flatMap((segment, segIndex) => {
    const words = segment.text.split(' ').filter(Boolean);
    return words.map((word, wordIndex) => ({
      word,
      className: segment.className || '',
      style: segment.style,
      key: `${segIndex}-${wordIndex}-${word}`,
    }));
  });

  return (
    <div
      ref={containerRef}
      className={`inline-flex flex-wrap justify-center ${className}`}
      style={style}
    >
      {allWords.map((item, index) => (
        <span
          key={item.key}
          className="inline-block overflow-visible mr-[0.28em] last:mr-0"
        >
          <motion.span
            initial={{ y: 20, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : { y: 20, opacity: 0 }}
            transition={{
              duration: 0.65,
              delay: delayOffset + index * 0.08,
              ease: [0.16, 1, 0.3, 1],
            }}
            className={`inline-block ${item.className}`}
            style={item.style}
          >
            {item.word}
          </motion.span>
        </span>
      ))}
    </div>
  );
};
