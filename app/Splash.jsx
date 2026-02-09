import Image from "next/image";

export default function Splash() {
    return (
        <div className="fixed inset-0 z-[9999] flex flex-col items-center justify-center gap-10 bg-black text-white px-4">
            {/* Visual Element Container */}
            <div className="relative flex items-center justify-center">

                {/* Outer Glowing Ring - Responsive size using square brackets or standard rem */}

                <div className="absolute h-48 w-48 sm:h-64 sm:w-64 animate-spin rounded-full border-b-2 border-t-2 border-red-600 "></div>

                {/* Inner Icon Wrapper */}
                <div className="relative flex items-center justify-center rounded-full border-4 border-white/10 bg-zinc-900 p-2 overflow-hidden w-40 h-40 sm:w-56 sm:h-56">
                    <Image
                        src='/assets/webp/AYODHANA.webp'
                        alt="Ayodhana Logo"
                        width={224}
                        height={224}
                        priority
                        className="rounded-full object-cover"
                    />
                </div>
            </div>

            {/* Text Content */}
            <div className="text-center mt-8 sm:mt-12">
                <h1 className="text-3xl font-extrabold tracking-tighter text-white sm:text-6xl uppercase italic leading-none">
                    Ayodhana <span className="text-red-600">Fighters</span>
                </h1>

                {/* Discipline Bars */}
                <div className="mt-4 flex justify-center gap-1">
                    {[...Array(6)].map((_, i) => (
                        <div
                            key={i}
                            className="h-1 w-6 sm:w-10 animate-pulse bg-red-600"
                            style={{ animationDelay: `${i * 0.15}s` }}
                        />
                    ))}
                </div>

                <p className="mt-6 text-[10px] sm:text-xs font-medium uppercase tracking-[0.2em] sm:tracking-[0.4em] text-zinc-500">
                    Prepare for Combat
                </p>
            </div>

            {/* Background Decorative Text - Hidden on small screens to avoid clutter */}
            <div className="pointer-events-none absolute inset-0 hidden sm:flex items-center justify-center opacity-[0.03] select-none">
                <span className="text-[18vw] font-black uppercase italic">Bushido</span>
            </div>
        </div>
    );
}