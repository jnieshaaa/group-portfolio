import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

export const TechStack = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isPaused, setIsPaused] = useState(false);

  return (
    <div className="relative overflow-hidden w-full">
      <div
        className={`flex gap-4 sm:gap-6 w-fit ${
          isPaused ? "" : "animate-scrollX"
        }`}
      >
        {[...items, ...items].map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              onMouseEnter={() => {
                setHoveredIndex(idx);
                setIsPaused(true);
              }}
              onMouseLeave={() => {
                setHoveredIndex(null);
                setIsPaused(false);
              }}
              className="relative group p-3 sm:p-4 min-w-[180px] sm:min-w-[220px] md:min-w-[250px] flex-shrink-0 hover:bg-indigo-950 transition-colors duration-300 rounded-2xl"
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 bg-indigo-800/30 rounded-3xl z-0"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </AnimatePresence>

              <Card>
                <Icon className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 mx-auto mb-3 sm:mb-4 text-cyan-400" />
                <CardTitle className="text-sm sm:text-base md:text-lg">
                  {item.title}
                </CardTitle>
                <CardDescription>
                  <span className="w-full block max-w-[180px] sm:max-w-[200px] md:max-w-[220px] mx-auto text-left break-words text-xs sm:text-sm">
                    {item.description}
                  </span>
                </CardDescription>
              </Card>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Card = ({ className, children }) => {
  return (
    <div
      className={`rounded-2xl h-full w-full text-white p-4 overflow-hidden bg-[#111111] border border-transparent dark:border-white/[0.2] group-hover:border-black-200 relative z-10 ${className}`}
    >
      <div className="relative z-20">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={` text-zinc-100 font-bold text-2xl tracking-wide ${className}`}
    >
      {children}
    </h4>
  );
};

export const CardDescription = ({ className, children }) => {
  return (
    <p
      className={`mt-1 text-zinc-400 tracking-wide leading-relaxed text-sm ${className}`}
    >
      {children}
    </p>
  );
};
