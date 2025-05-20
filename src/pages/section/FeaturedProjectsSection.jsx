import { useEffect, useRef, useState } from "react";

export default function FeaturedProjectsSection({ featuredProjects }) {
  const sectionRef = useRef(null);
  const [bgColor, setBgColor] = useState("rgb(7, 15, 43)");
  const [activeIndex, setActiveIndex] = useState(0);
  const projectRefs = useRef([]);
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const containerHeight = scrollContainer.offsetHeight;

      // Detect active project
      let closestIndex = -1;
      let minDistance = Infinity;

      for (let i = 0; i < projectRefs.current.length; i++) {
        const ref = projectRefs.current[i];
        if (!ref) continue;

        const box = ref.getBoundingClientRect();
        const containerBox = scrollContainer.getBoundingClientRect();
        const relativeTop = box.top - containerBox.top;

        const distance = Math.abs(relativeTop - containerHeight * 0.3);
        if (distance < minDistance && relativeTop >= 0) {
          minDistance = distance;
          closestIndex = i;
        }
      }

      if (closestIndex !== -1 && closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
        setBgColor(calculateBgColorByIndex(closestIndex));
      }
    };

    scrollContainer.addEventListener("scroll", handleScroll);
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  const calculateBgColorByIndex = (index) => {
    const total = featuredProjects.length;
    const percent = index / (total - 1);
    const startColor = [7, 15, 43];
    const endColor = [27, 26, 85];

    const r = startColor[0] + (endColor[0] - startColor[0]) * percent;
    const g = startColor[1] + (endColor[1] - startColor[1]) * percent;
    const b = startColor[2] + (endColor[2] - startColor[2]) * percent;

    return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
  };

  return (
    <section
      id="featured"
      ref={sectionRef}
      style={{ backgroundColor: bgColor }}
      className="w-full min-h-screen px-4 md:px-24 py-5 transition-colors duration-300 overflow-hidden"
    >
      <div className="max-w-screen-xl mx-auto h-full flex flex-col lg:flex-row">
        {/* Left: Scrollable project content (75%) */}
        <div className="w-full h-[80vh] flex flex-col">
          <div className="sticky top-0 z-10 py-4">
            <h2 className="text-3xl md:text-4xl font-bold text-start text-lavender drop-shadow-sm relative inline-block px-4">
              Featured Projects
              <span className="absolute -bottom-1 left-0 w-[50%] h-1 bg-gradient-to-r from-lavender to-indigoDeep rounded-full"></span>
            </h2>
          </div>

          <div
            ref={scrollContainerRef}
            className="flex-1 overflow-y-scroll no-scrollbar space-y-12 px-4"
          >
            {featuredProjects.map((project, idx) => (
              <div
                key={idx}
                ref={(el) => (projectRefs.current[idx] = el)}
                className="grid gap-8 text-white relative overflow-x-hidden scroll-mt-20"
              >
                <div className="space-y-6">
                  <div className="relative mt-16 w-full overflow-x-auto no-scrollbar">
                    <div className="flex justify-start items-end">
                      <img
                        src={project.imageSet.desktop}
                        alt="Desktop view"
                        className="w-[70%] sm:w-[55%] md:w-[50%] shadow-xl rounded-lg z-10 min-w-[350px]"
                      />
                      <img
                        src={project.imageSet.tablet}
                        alt="Tablet view"
                        className="-ml-24 w-[25%] sm:w-[20%] md:w-[18%] shadow-2xl rounded-lg z-20 min-w-[180px]"
                      />
                      <img
                        src={project.imageSet.mobile}
                        alt="Mobile view"
                        className="-ml-16 w-[18%] sm:w-[14%] md:w-[12%] shadow-lg rounded-lg z-30 min-w-[120px]"
                      />
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center max-w-[800px] gap-4">
                    <h3 className="text-2xl font-semibold">{project.title}</h3>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-lavender text-midnight px-4 py-2 rounded-md hover:bg-indigoDeep transition"
                    >
                      Visit Website
                    </a>
                  </div>

                  <p className="text-slate-200 text-lg leading-relaxed max-w-[800px]">
                    {project.description}
                  </p>

                  <div className="p-4 flex flex-wrap gap-1 max-w-[800px]">
                    {project.stack.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 bg-lavender text-midnight text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {idx !== featuredProjects.length - 1 && (
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-lavender to-transparent opacity-30" />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Right: Sidebar */}
        <aside className="hidden lg:flex flex-col w-1/4 pl-6 pt-4 space-y-4 h-full">
          {featuredProjects.map((project, idx) => (
            <button
              key={idx}
              onClick={() => {
                const target = projectRefs.current[idx];
                if (target) {
                  target.scrollIntoView({ behavior: "smooth", block: "start" });
                  setActiveIndex(idx);
                  setBgColor(calculateBgColorByIndex(idx));
                }
              }}
              className={`block text-sm text-left px-3 py-2 rounded transition-all duration-300 ${
                activeIndex === idx
                  ? "bg-lavender text-midnight font-semibold shadow-md"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {project.title}
            </button>
          ))}
        </aside>
      </div>
    </section>
  );
}
