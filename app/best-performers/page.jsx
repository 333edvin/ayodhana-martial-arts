import Image from "next/image";
import Link from "next/link";
import performerone from "../../public/assets/pngs/performerone.png";
import performertwo from "../../public/assets/pngs/performertwo.png";
import performerthree from "../../public/assets/pngs/performerthree.png";
import badge from "../../public/assets/pngs/best-performer.png";

const performers = [
  {
    name: "Abhishek CR",
    image: performerone,
    achievements: [
      { badge: badge, level: "First Level", year: "2023" },
      { badge: badge, level: "Second Level", year: "2024" },
      { badge: badge, level: "Third Level", year: "2024" },
    ],
  },
  {
    name: "Nishak TK",
    image: performertwo,
    achievements: [
      { badge: badge, level: "Fourth Level", year: "2025" },
    ],
  },
  {
    name: "Arun ps",
    image: performerthree,
    achievements: [
      { badge: badge, level: "Fifth Level", year: "2026" },
    ],
  },
];

export default function page() {
  return (
    <main className="relative min-h-screen py-16 px-4 bg-[#080808] text-white overflow-hidden">
      
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-red-900/15 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto mt-14 md:mt-10">
        
        {/* Back to Home Navigation */}
        <div className=" absolute -top-10 md:top-10 -left-5 md:left-0 w-full flex justify-start items-center px-4 sm:px-0">
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-gray-400 hover:text-red-500 transition-colors duration-200 uppercase"
          >
            <svg 
              className="w-4 h-4" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Home
          </Link>
        </div>

        {/* Header */}
        <div className="text-center mb-0 md:mb-16">
          <p className="text-xs font-semibold tracking-[0.3em] uppercase text-red-500 mb-3">
            Hall of Excellence
          </p>
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tight mb-4">Best Performers</h1>
          <div className="w-12 h-[2px] bg-red-600 mx-auto mb-4" />
          <p className="text-gray-400 text-sm sm:text-base max-w-md mx-auto leading-relaxed">
            Recognising outstanding achievement across all examination levels throughout our history
          </p>
        </div>

        {/* Responsive Grid - 3 Columns on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-3 max-w-6xl mx-auto divide-y sm:divide-y-0 sm:divide-x divide-[#1a1a1a]">
          {performers.map((performer, pi) => (
            <div key={pi} className="flex flex-col items-center px-4 sm:px-8 pt-8 pb-12 sm:pb-4">

              {/* Performer Image */}
              <div className="relative w-72 sm:w-72 h-auto">
                <Image
                  src={performer.image}
                  alt={performer.name}
                  className="w-full h-full object-contain object-bottom"
                />
                {/* Bottom fade */}
                <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-[#080808] to-transparent" />
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
    </main>
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

  const badgeHalf = 64; 
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