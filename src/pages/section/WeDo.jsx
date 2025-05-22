import { focusItems } from "../../data/WeDoContent";

export default function FocusSection() {
  return (
    <section
      id="home"
      className="w-full min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative text-white"
      style={{
        backgroundImage: "url('./images/wedo.jpg')",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60" />

      {/* Heading in top-left */}
      <div className="absolute top-8 left-8 sm:left-12 z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white/80 drop-shadow-sm relative inline-block">
          What We Do!
          <span className="absolute -bottom-1 left-0 w-1/2 h-1 bg-gradient-to-r from-lavender to-indigoDeep rounded-full"></span>
        </h2>
      </div>

      {/* Centered Cards */}
      <div className="relative z-10 w-full px-4">
        <div className="mx-auto grid grid-cols-1 sm:grid-cols-2 gap-1 max-w-4xl">
          {focusItems.map((item, idx) => {
            const Icon = item.icon;

            return (
              <div
                key={idx}
                className="bg-indigoDeep bg-opacity-70 p-6 rounded-lg shadow-lg backdrop-blur-sm flex flex-col gap-4 justify-center items-start hover:scale-[1.02] transition-transform duration-300"
              >
                <div className="flex items-center gap-3 text-base sm:text-lg font-bold">
                  <Icon className="text-lavender text-xl sm:text-2xl" />
                  {item.title}
                </div>
                <p className="text-sm sm:text-base text-gray-200">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
