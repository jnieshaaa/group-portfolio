import React, { useState } from "react";
import { motion } from "framer-motion";

function ProjectCard({ title, description, image, label }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className={`relative flex-shrink-0 w-[300px] h-[400px] sm:w-[250px] sm:h-[350px] xs:w-[90vw] xs:h-[300px] rounded-2xl overflow-hidden bg-[#0f172a] text-white transition-shadow duration-300 ${
        hovered
          ? "shadow-[0_0_20px_4px_#070F2B] border-midnight"
          : "shadow-lg border-white/10"
      } border`}
    >
      {/* Top 70% - Image */}
      <div className="h-[70%] w-full bg-white/10 flex items-center justify-center">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>

      {/* Bottom 30% - Text content */}
      <div className="h-[30%] p-8 bg-[#1e293b] flex flex-col justify-center">
        <div className="text-xs bg-blue-800/30 text-blue-300 px-3 py-1 rounded-full w-fit mb-1">
          {label}
        </div>
        <h3 className="text-sm font-semibold text-white">{title}</h3>
        <p className="text-xs text-slate-300 truncate">{description}</p>
      </div>
    </motion.div>
  );
}

export default ProjectCard;
