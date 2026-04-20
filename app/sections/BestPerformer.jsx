import Image from "next/image";
import performerone from "../../public/assets/pngs/performerone.png";
import performertwo from "../../public/assets/pngs/performertwo.png";
import badge from "../../public/assets/pngs/best-performer.png";


const performers = [
  {
    name: "Abhishek CR",
    image: performerone,
    achievements: [
      { badge: badge,   level: "First Level",  year: "2023" },
      { badge: badge,   level: "Second Level", year: "2024" },
      { badge: badge, level: "Third Level",  year: "2024" },
    ],
  },
  {
    name: "Nishak TK",
    image: performertwo,
    achievements: [
      { badge: badge, level: "Fourth Level", year: "2025" },
    ],
  },
];

export default function BestPerformers() {
  return (
    <section className="relative py-16 px-4 bg-[#080808] text-white overflow-hidden">

      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-red-900/20 blur-3xl rounded-full pointer-events-none" />

      <div className="relative max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center ">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-red-500 mb-3">
            Hall of Excellence
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Best Performers</h2>
          <div className="w-10 h-[2px] bg-red-600 mx-auto mb-4" />
          <p className="text-gray-400 text-sm max-w-xs mx-auto leading-relaxed">
            Recognising outstanding achievement across all examination levels
          </p>
        </div>

        {/* Two-column grid — stacks on mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#1a1a1a]">
          {performers.map((performer, pi) => (
            <div key={pi} className="flex flex-col items-center px-4 sm:px-8 pt-8  ">

              {/* Performer Image */}
              <div className="relative w-72 sm:w-72 h-auto ">
                <Image
                  src={performer.image}
                  alt={performer.name}
                  className="w-full h-full object-contain object-bottom"
                />
                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
              </div>

              {/* Name */}
              <p className="text-base sm:text-lg font-bold tracking-widest uppercase mt-4 text-center">
                {performer.name}
              </p>
              <div className="w-8 h-[2px] bg-red-600 my-3" />

              {/* Badges Arc */}
              <BadgesArc achievements={performer.achievements} />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

function BadgesArc({ achievements }) {
  const n = achievements.length;

  const arcX = (i) => {
    if (n === 1) return 0;
    const t = (i / (n - 1)) * 2 - 1;
    return t * (n === 2 ? 100 : 130);
  };

  const arcY = (i) => {
    if (n === 1) return 0;
    const t = (i / (n - 1)) * 2 - 1;
    return t * t * -36;
  };

  // badge is w-20 = 80px on mobile, w-32 = 128px on sm+
  // center offset should be half the badge width
  const badgeHalf = 64; // use sm size (128/2) as reference

  const containerHeight = n > 1 ? 220 : 180;

  return (
    <div
      className="relative w-full flex justify-center"
      style={{ height: containerHeight }}
    >
      {achievements.map((a, i) => {
        const x = arcX(i);
        const y = arcY(i);
        return (
          <div
            key={i}
            className="absolute flex flex-col items-center"
            style={{
              left: `calc(50% + ${x}px - ${badgeHalf}px)`,
              top: `${y}px`,
              width: `${badgeHalf * 2}px`,
            }}
          >
            <Image
              src={a.badge}
              alt={a.level}
              className="w-28 h-28 sm:w-32 sm:h-32 object-contain"
            />
            <p className="text-white text-[1.3rem] font-bold mt-1 leading-tight text-center">
              {a.year}
            </p>
            <p className="text-red-500 text-[.8rem] font-semibold uppercase tracking-wide whitespace-nowrap leading-tight text-center">
              {a.level} <br /> Examination
            </p>
          </div>
        );
      })}
    </div>
  );
}