"use client";

import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "motion/react";
import { Children, cloneElement, isValidElement, useId, useState } from "react";

interface ChildProps {
  className?: string;
  children?: React.ReactNode;
  onMouseEnter?: React.MouseEventHandler;
}

export function SharedLayoutBackground({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeId, setActiveId] = useState<number | string | null>(null);
  const uniqueId = useId();

  return (
    <div
      onMouseLeave={() => {
        setActiveId(null);
      }}
      className="flex w-full flex-col"
    >
      {Children.toArray(children)
        .filter(isValidElement)
        .map((child, index) => {
          const element = child as React.ReactElement<ChildProps>;

          return cloneElement(
            element,
            {
              key: index,
              className: cn("relative", element.props.className),
              onMouseEnter: () => setActiveId(index),
            },
            <>
              <AnimatePresence custom={activeId !== null}>
                {activeId !== null && (
                  <motion.div
                    variants={variants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="pointer-events-none absolute -inset-x-5 inset-y-0"
                  >
                    {activeId === index && (
                      <motion.div
                        layoutId={`background-${uniqueId}`}
                        transition={{
                          type: "spring",
                          stiffness: 205,
                          damping: 22,
                        }}
                        className="pointer-events-none size-full ml-2 mr-4 rounded-xs bg-muted"
                      ></motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="relative z-10 p-0 flex flex-row justify-center items-center w-full">
                {element.props.children}
              </div>
            </>,
          );
        })}
    </div>
  );
}

const variants = {
  initial: {
    opacity: 0,
    filter: "blur(6px)",
  },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
  },
  exit: {
    opacity: 0,
    filter: "blur(6px)",
  },
};
