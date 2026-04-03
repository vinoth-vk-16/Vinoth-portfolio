import { useState, useMemo } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import { RotateCcw, Shuffle, ChevronLeft, ChevronRight, Github as GithubIcon } from 'lucide-react';

export interface CardStackItem {
  id: number;
  src: string;
  alt: string;
  title: string;
  description: string;
  github?: string;
}

export interface CardStackProps {
  cards: CardStackItem[];
  className?: string;
}

/** Compact stack: small corner image, text-first layout, rounded cards. */
export function CardStack({ cards: initialData, className = '' }: CardStackProps) {
  const total = initialData.length;

  const [stack, setStack] = useState<CardStackItem[]>(() => [...initialData]);

  /** Which project is on top — always derived from stack[0], never a separate counter (fixes shuffle / long sessions). */
  const activeIndex = useMemo(() => {
    const fid = stack[0]?.id;
    const idx = initialData.findIndex((c) => c.id === fid);
    return idx >= 0 ? idx : 0;
  }, [stack, initialData]);

  const dragY = useMotionValue(0);
  const rotateX = useTransform(dragY, [-200, 0, 200], [15, 0, -15]);

  /** Pixel offset per layer (was % `top`, which pushed deep cards ~50% up → clipped). */
  const stackGapPx = 8;
  const scaleStep = 0.05;
  const dimStep = 0.14;
  const borderRadius = 16;
  const swipeThreshold = 50;

  const spring = {
    type: 'spring' as const,
    stiffness: 170,
    damping: 26,
  };

  const moveToEnd = () => {
    setStack((prev) => (prev.length ? [...prev.slice(1), prev[0]] : prev));
  };

  const moveToStart = () => {
    setStack((prev) =>
      prev.length ? [prev[prev.length - 1], ...prev.slice(0, -1)] : prev
    );
  };

  const shuffleCards = () => {
    setStack((prev) => [...prev].sort(() => Math.random() - 0.5));
  };

  const resetCards = () => {
    setStack([...initialData]);
  };

  const handleDragEnd = (_: unknown, info: { velocity: { y: number }; offset: { y: number } }) => {
    const velocity = info.velocity.y;
    const off = info.offset.y;
    dragY.set(0);

    if (Math.abs(off) > swipeThreshold || Math.abs(velocity) > 500) {
      if (off < 0 || velocity < 0) {
        moveToEnd();
      } else {
        moveToStart();
      }
    }
  };

  const theme = {
    text: 'text-neutral-900',
    textSecondary: 'text-neutral-600',
    shadowCard: '0 16px 36px rgba(0, 0, 0, 0.1)',
    shadowCardBack: '0 8px 20px rgba(0, 0, 0, 0.06)',
    controlBg: 'bg-neutral-100/90 hover:bg-neutral-200/80 text-neutral-900',
    dotActive: 'bg-neutral-900',
    dotIdle: 'bg-neutral-300',
  };

  return (
    <div className={`relative flex w-full flex-col items-center ${className}`}>
      <div className="relative z-30 flex w-full max-w-5xl items-center justify-end gap-2 px-2 pb-2 pt-0 sm:px-0">
        <motion.button
          type="button"
          onClick={resetCards}
          className={`rounded-md p-2.5 transition-colors ${theme.controlBg}`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          title="Reset order"
        >
          <RotateCcw className={`h-5 w-5 ${theme.text}`} />
        </motion.button>
        <motion.button
          type="button"
          onClick={shuffleCards}
          className={`rounded-md p-2.5 transition-colors ${theme.controlBg}`}
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          title="Shuffle"
        >
          <Shuffle className={`h-5 w-5 ${theme.text}`} />
        </motion.button>
      </div>

      <div className="relative z-10 flex w-full max-w-5xl flex-1 items-center justify-center px-2 pb-2 pt-0 sm:px-4">
        <motion.button
          type="button"
          onClick={moveToStart}
          className={`absolute left-0 z-20 hidden rounded-md p-3 sm:left-2 md:flex ${theme.controlBg}`}
          whileHover={{ scale: 1.08, x: -3 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Previous project"
        >
          <ChevronLeft className={`h-5 w-5 ${theme.text}`} />
        </motion.button>

        {/* pt reserves space so stacked cards (translateY up) are not clipped by section overflow */}
        <div className="relative z-10 w-full max-w-[20rem] pt-16 sm:max-w-[22rem]">
          <ul className="relative m-0 h-[min(420px,70vh)] w-full list-none overflow-visible p-0">
            {stack.map(({ id, src, alt, title, description, github }, i) => {
              const isFront = i === 0;
              const brightness = Math.max(0.4, 1 - i * dimStep);
              const baseZ = stack.length - i;
              const isSvg = src.endsWith('.svg');

              return (
                <motion.li
                  key={id}
                  className="absolute left-0 top-0 flex h-full w-full list-none flex-col overflow-hidden border border-neutral-100/90 bg-white"
                  style={{
                    borderRadius: `${borderRadius}px`,
                    cursor: isFront ? 'grab' : 'auto',
                    touchAction: 'none',
                    boxShadow: isFront ? theme.shadowCard : theme.shadowCardBack,
                    rotateX: isFront ? rotateX : 0,
                    transformPerspective: 1000,
                    transformOrigin: 'center top',
                  }}
                  animate={{
                    y: -i * stackGapPx,
                    scale: 1 - i * scaleStep,
                    filter: `brightness(${brightness})`,
                    zIndex: baseZ,
                    opacity: 1,
                  }}
                  transition={spring}
                  drag={isFront ? 'y' : false}
                  dragConstraints={{ top: 0, bottom: 0 }}
                  dragElastic={0.7}
                  onDrag={(_, info) => {
                    if (isFront) dragY.set(info.offset.y);
                  }}
                  onDragEnd={handleDragEnd}
                  whileDrag={
                    isFront
                      ? {
                          zIndex: stack.length + 10,
                          cursor: 'grabbing',
                          scale: 1.03,
                        }
                      : {}
                  }
                >
                  <div className="flex min-h-0 flex-1 flex-col gap-0 p-4">
                    <div className="flex min-h-0 flex-1 gap-3">
                      <div className="shrink-0">
                        <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-xl border border-neutral-100 bg-neutral-50 sm:h-14 sm:w-14">
                          <img
                            src={src}
                            alt={alt}
                            className={
                              isSvg
                                ? 'h-9 w-9 object-contain p-0.5 select-none sm:h-10 sm:w-10'
                                : 'h-full w-full object-cover select-none'
                            }
                            draggable={false}
                          />
                        </div>
                      </div>
                      <div className="flex min-h-0 min-w-0 flex-1 flex-col gap-2">
                        <h3
                          className={`text-sm font-semibold leading-snug text-neutral-900 sm:text-[0.95rem] ${theme.text}`}
                        >
                          {title}
                        </h3>
                        <div
                          className={`min-h-0 flex-1 overflow-y-auto overscroll-contain pr-1 text-left text-[13px] leading-relaxed sm:text-sm ${theme.textSecondary}`}
                        >
                          <p className="whitespace-pre-wrap">{description}</p>
                        </div>
                        {github ? (
                          <a
                            href={github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-1 inline-flex shrink-0 items-center gap-1.5 text-xs font-medium text-neutral-900 underline-offset-4 hover:underline"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <GithubIcon className="h-3.5 w-3.5" />
                            GitHub
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </motion.li>
              );
            })}
          </ul>
        </div>

        <motion.button
          type="button"
          onClick={moveToEnd}
          className={`absolute right-0 z-20 hidden rounded-md p-3 sm:right-2 md:flex ${theme.controlBg}`}
          whileHover={{ scale: 1.08, x: 3 }}
          whileTap={{ scale: 0.95 }}
          aria-label="Next project"
        >
          <ChevronRight className={`h-5 w-5 ${theme.text}`} />
        </motion.button>
      </div>

      <div className="relative z-20 flex flex-col items-center gap-2 pb-2 pt-2">
        <div className="flex justify-center gap-2">
          {initialData.map((card, i) => (
            <motion.div
              key={card.id}
              className={`h-1 rounded-sm transition-all duration-300 ${
                i === activeIndex ? `${theme.dotActive} w-8` : `${theme.dotIdle} w-1.5`
              }`}
              whileHover={{ scale: 1.15 }}
            />
          ))}
        </div>
        <p className={`text-center text-xs ${theme.textSecondary}`}>
          Project {activeIndex + 1} of {total} · Drag the front card up or down
        </p>
      </div>
    </div>
  );
}
