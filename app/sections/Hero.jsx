import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="hero relative min-h-screen w-full flex items-center justify-center bg-cover bg-center bg-no-repeat"
      id="home"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.34), rgba(0, 0, 0, 0.7)), url('/assets/images/opening-bg.jpg')`,
      }}
    >
      {/* Container for content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-12 z-10 flex flex-col items-center justify-center text-center gap-2">
        
        <h1 className="font-black text-[3.3rem] sm:text-5xl md:text-6xl lg:text-8xl text-white leading-[1.1] tracking-tighter">
          AYODHANA <br className="hidden sm:block" />
          <span className="text-red-600">MARTIAL ARTS</span> ACADEMY
        </h1>

        <p className="mt-6 text-xs sm:text-base md:text-lg lg:text-xl text-gray-200 max-w-sm sm:max-w-xl md:max-w-2xl leading-relaxed " >
          Where passion meets discipline and skill. We offer comprehensive
          martial arts training including <span className="text-white font-semibold">KARATE</span>, 
          <span className="text-white font-semibold"> KICK BOXING</span>, and 
          <span className="text-white font-semibold"> SELF DEFENSE</span> for all ages and skill levels.
        </p>

        <div className="mt-10 ">
          <Link href="#programs">
            <button className="btn w-full sm:w-auto px-8 py-5 bg-red-700 text-white rounded-md hover:bg-red-800 transition-all duration-300 font-bold uppercase tracking-widest text-sm shadow-lg active:scale-95">
              Explore Programs
            </button>
          </Link>
          
         
        </div>

      </div>
    </section>
  );
}