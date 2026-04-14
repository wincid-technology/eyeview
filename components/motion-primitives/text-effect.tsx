'use client';

import React, { useRef, memo } from 'react';
import { AnimatePresence, motion, useInView } from 'motion/react';

/* =========================
   DEFAULT SETTINGS
========================= */

const defaultStaggerTimes = {
  char: 0.03,
  word: 0.05,
  line: 0.1,
};

const defaultContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
  exit: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const defaultItemVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const presetVariants = {
  fade: {
    container: defaultContainerVariants,
    item: defaultItemVariants,
  },
  slide: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 },
    },
  },
  scale: {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: { opacity: 1, scale: 1 },
      exit: { opacity: 0, scale: 0.8 },
    },
  },
  'fade-in-blur': {
    container: defaultContainerVariants,
    item: {
      hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
      visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
      exit: { opacity: 0, y: 20, filter: 'blur(10px)' },
    },
  },
};

/* =========================
   HELPERS
========================= */

const splitText = (text, per) => {
  if (!text) return [];
  if (per === 'line') return text.split('\n');
  return text.split(/(\s+)/);
};

const createVariantsWithTransition = (base, transition = {}) => ({
  ...base,
  visible: {
    ...base.visible,
    transition: {
      ...(base.visible?.transition || {}),
      ...transition,
    },
  },
  exit: {
    ...base.exit,
    transition: {
      ...(base.exit?.transition || {}),
      staggerDirection: -1,
    },
  },
});

/* =========================
   SEGMENT COMPONENT
========================= */

const AnimationComponent = memo(
  ({ segment, variants, per, segmentWrapperClassName }) => {
    if (per === 'line') {
      return (
        <motion.span variants={variants} className="block">
          {segment}
        </motion.span>
      );
    }

    if (per === 'word') {
      return (
        <motion.span
          variants={variants}
          className={`inline-block whitespace-pre ${segmentWrapperClassName || ''}`}
        >
          {segment}
        </motion.span>
      );
    }

    return (
      <span className="inline-block whitespace-pre">
        {segment.split('').map((char, i) => (
          <motion.span
            key={i}
            variants={variants}
            className="inline-block whitespace-pre"
          >
            {char}
          </motion.span>
        ))}
      </span>
    );
  }
);

/* =========================
   TEXT EFFECT
========================= */

export function TextEffect({
  children,
  per = 'word',
  as = 'p',
  variants,
  className,
  preset = 'fade',
  delay = 0,
  speedReveal = 1,
  speedSegment = 1,
  trigger = true,
  inViewOnce = true,
  onAnimationComplete,
  onAnimationStart,
  segmentWrapperClassName,
  containerTransition,
  segmentTransition,
  style,
}) {
  const ref = useRef(null);

  const isInView = useInView(ref, {
    once: inViewOnce,
    margin: '-10% 0px',
  });

  const segments = splitText(children, per);
  const MotionTag = motion[as] || motion.p;

  const base = presetVariants[preset] || presetVariants.fade;
  const stagger = defaultStaggerTimes[per] / speedReveal;
  const duration = 0.3 / speedSegment;

  const computedVariants = {
    container: createVariantsWithTransition(
      variants?.container || base.container,
      {
        staggerChildren: stagger,
        delayChildren: delay,
        ...containerTransition,
      }
    ),
    item: createVariantsWithTransition(
      variants?.item || base.item,
      {
        duration,
        ...segmentTransition,
      }
    ),
  };

  return (
    <AnimatePresence>
      {trigger && (
        <MotionTag
          ref={ref}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          exit="exit"
          variants={computedVariants.container}
          className={className}
          onAnimationComplete={onAnimationComplete}
          onAnimationStart={onAnimationStart}
          style={style}
        >
          {per !== 'line' && (
            <span className="sr-only">{children}</span>
          )}

          {segments.map((segment: any, index: any) => (
            <AnimationComponent
              key={`${per}-${index}`}
              segment={segment}
              variants={computedVariants.item}
              per={per}
              segmentWrapperClassName={segmentWrapperClassName}
            />
          ))}
        </MotionTag>
      )}
    </AnimatePresence>
  );
}
  