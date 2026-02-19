'use client'
import { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function Trainers() {
  const [flippedCards, setFlippedCards] = useState({});
  const [isMobile, setIsMobile] = useState(false);
  
  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const trainers = [
    {
      id: 1,
      name: "Abhishek cr",
      role: "Senior Coach",
      description: "5 years experience in Kickboxing & Muay Thai. 2-time Title Belt and 2-time National Champion.",
      image: "assets/images/trainer3.jpeg",
      socials: { facebook: "#", instagram: "#", twitter: "#" },
      featured: false
    },
     {
      id: 2,
      name: "Binto xavier",
      role: "Senior Coach",
      description: "3 years experience and 1-time National Champion focusing on advanced combat techniques.",
      image: "assets/images/trainer5.jpeg",
      socials: { facebook: "#", instagram: "#", twitter: "#" },
      featured: false
    },
    {
      id: 3,
      name: "Anil babu",
      role: "Fitness Trainer & National Champ",
      description: "5 years experience including international exposure in Dubai. 1-time National Champion dedicated to elite fitness.",
      image: 'assets/images/trainer1.jpeg',
      socials: { facebook: "#", instagram: "#", twitter: "#" },
      featured: true
    },
    
    
    {
      id: 4,
      name: "Emmanuval joshy",
      role: "Kickboxing Specialist",
      description: "3 years experience. Proud All Kerala Kickboxing National Champion 2024.",
      image: "assets/images/trainer2.jpeg",
      socials: { facebook: "#", instagram: "#", twitter: "#" },
      featured: false
    },
    {
      id: 5,
      name: "Nishak Tk",
      role: "Senior Coach",
      description: "4 years experience. Primal Title Belt Champion and WAKO National Champion 2025.",
      image: "assets/images/trainer7.jpeg",
      socials: { facebook: "#", instagram: "#", twitter: "#" },
      featured: false
    },
   
    
    {
      id: 6,
      name: "Adarsh Ns",
      role: "Assistant Coach",
      description: "3 years experience helping students master fundamental techniques and physical conditioning.",
      image: "assets/images/trainer8.jpeg",
      socials: { facebook: "#", instagram: "#", twitter: "#" },
      featured: false
    },
    {
      id: 7,
      name: "Adhithyan pv",
      role: "Assistant Coach",
      description: "3 years experience focusing on student form, discipline, and foundational martial arts skills.",
      image: "assets/images/trainer4.jpeg",
      socials: { facebook: "#", instagram: "#", twitter: "#" },
      featured: true
    },
  ];
  
  const handleCardClick = (id) => {
    if (isMobile) {
      setFlippedCards(prev => ({
        ...prev,
        [id]: !prev[id]
      }));
    }
  };

  const handleMouseEnter = (id) => {
    if (!isMobile) {
      setFlippedCards(prev => ({
        ...prev,
        [id]: true
      }));
    }
  };

  const handleMouseLeave = (id) => {
    if (!isMobile) {
      setFlippedCards(prev => ({
        ...prev,
        [id]: false
      }));
    }
  };

  return (
    <section className="trainers px-4 sm:px-6 lg:px-8 xl:px-10 py-16" id="trainers">
      <div className="mx-auto">
   <div className="relative w-full min-h-screen overflow-hidden">
  {/* 🔥 CARD WRAPPER */}
  <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
    <div className="relative w-full max-w-6xl rounded-3xl p-10 md:p-16 shadow-2xl bg-black/90 flex flex-col md:flex-row items-center gap-12 backdrop-blur-sm transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20 animate-[fadeIn_1s_ease-in-out]">
      
      {/* Border with animation */}
      <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none animate-pulse"></div>
      
      {/* Founder Image with dragon and martial arts elements */}
      <div className="w-72 h-72 md:w-[420px] md:h-[420px] shrink-0 relative animate-[slideInLeft_0.8s_ease-out]">
        {/* Dragon SVG behind the image */}
        <div className="absolute inset-0 -z-5 flex items-center justify-center">
          <svg 
            viewBox="0 0 200 200" 
            className="w-full h-full text-red-600/20 animate-[dragonBreath_4s_ease-in-out_infinite]"
            fill="currentColor"
          >
            {/* Dragon silhouette */}
            <path d="M100 20 L120 50 L140 40 L150 60 L140 80 L160 90 L150 110 L170 120 L160 140 L140 130 L120 150 L100 140 L80 150 L60 140 L40 130 L30 120 L50 110 L40 90 L60 80 L50 60 L70 40 L90 50 L100 20" 
                  fill="currentColor"/>
            {/* Dragon eye */}
            <circle cx="100" cy="70" r="5" fill="yellow" className="animate-pulse"/>
            {/* Dragon claws */}
            <path d="M70 100 L60 120 L70 110" fill="currentColor"/>
            <path d="M130 100 L140 120 L130 110" fill="currentColor"/>
            {/* Dragon flame */}
            <path d="M100 140 L110 160 L100 170 L90 160 L100 140" fill="orange" className="animate-[flame_1s_ease-in-out_infinite]"/>
          </svg>
        </div>

        {/* Martial arts circle (Yin Yang inspired) */}
        <div className="absolute inset-0 -z-4 flex items-center justify-center opacity-20">
          <svg viewBox="0 0 200 200" className="w-4/5 h-4/5 text-red-500 animate-[spin_20s_linear_infinite]">
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2"/>
            <path d="M100 20 A60 60 0 0 1 100 140 A60 60 0 0 1 100 20" fill="currentColor" opacity="0.5"/>
            <circle cx="100" cy="80" r="15" fill="white"/>
            <circle cx="100" cy="120" r="15" fill="currentColor"/>
          </svg>
        </div>

        {/* Japanese calligraphy style brush strokes */}
        <div className="absolute inset-0 -z-3">
          <svg viewBox="0 0 200 200" className="w-full h-full opacity-10">
            <path d="M30 50 Q80 30, 130 50 T170 30" stroke="red" strokeWidth="3" fill="none" className="animate-[drawLine_3s_ease-in-out_infinite]"/>
            <path d="M40 120 Q90 100, 140 120 T180 100" stroke="red" strokeWidth="3" fill="none" className="animate-[drawLine_3s_ease-in-out_infinite_0.5s]"/>
            <path d="M20 170 Q70 150, 120 170 T160 150" stroke="red" strokeWidth="3" fill="none" className="animate-[drawLine_3s_ease-in-out_infinite_1s]"/>
          </svg>
        </div>

        {/* Floating martial arts symbols */}
        <div className="absolute -z-2 w-full h-full">
          <div className="absolute top-0 left-0 text-4xl opacity-10 animate-float">⚡</div>
          <div className="absolute bottom-0 right-0 text-4xl opacity-10 animate-float-delay">🥋</div>
          <div className="absolute top-1/2 left-0 text-4xl opacity-10 animate-float-slow">⚔️</div>
          <div className="absolute bottom-1/2 right-0 text-4xl opacity-10 animate-float-slower">🐉</div>
        </div>

        {/* Main founder image */}
        <img
          src="/assets/images/founder.png"
          alt="Shihan Sreejith"
          className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-110 relative z-10"
        />
        
        {/* Glow effect */}
        <div className="absolute inset-0 rounded-full bg-red-500/20 blur-3xl -z-10 animate-[glow_3s_ease-in-out_infinite]"></div>
      </div>
      
      {/* Founder Info with animation */}
      <div className="text-center md:text-left animate-[slideInRight_0.8s_ease-out]">
        <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-wide text-white transition-all duration-300 hover:text-red-500 hover:tracking-wider">
          Shihan Sreejith
        </h3>
        
        <p className="text-red-500 font-semibold mt-4 text-base md:text-lg uppercase tracking-wider animate-[bounce-slow_2s_ease-in-out_infinite]">
          Founder – Ayodhana Martial Arts Association India
        </p>
        
        <p className="text-gray-300 mt-6 max-w-2xl text-base md:text-xl leading-relaxed text-justify transition-all duration-300 hover:text-white">
          7th Dan Black Belt and visionary leader dedicated to building disciplined fighters 
          and elevating martial arts excellence across India through discipline, honor, and mastery.
        </p>
      </div>
      
    </div>
  </div>

  <style jsx>{`
    @keyframes fadeIn {
      from { opacity: 0; }
      to { opacity: 1; }
    }
    
    @keyframes slideInLeft {
      from {
        opacity: 0;
        transform: translateX(-100px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes slideInRight {
      from {
        opacity: 0;
        transform: translateX(100px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }
    
    @keyframes glow {
      0%, 100% {
        opacity: 0.5;
        transform: scale(1);
      }
      50% {
        opacity: 0.8;
        transform: scale(1.2);
      }
    }
    
    @keyframes bounce-slow {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }

    @keyframes dragonBreath {
      0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.2; }
      50% { transform: scale(1.05) rotate(2deg); opacity: 0.3; }
    }

    @keyframes flame {
      0%, 100% { transform: scale(1); opacity: 0.3; }
      50% { transform: scale(1.2); opacity: 0.6; }
    }

    @keyframes drawLine {
      0% { stroke-dasharray: 200; stroke-dashoffset: 200; }
      50% { stroke-dasharray: 200; stroke-dashoffset: 0; }
      100% { stroke-dasharray: 200; stroke-dashoffset: -200; }
    }

    @keyframes float {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-10px) rotate(5deg); }
    }

    @keyframes float-delay {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-15px) rotate(-5deg); }
    }

    @keyframes float-slow {
      0%, 100% { transform: translateY(0) scale(1); }
      50% { transform: translateY(-20px) scale(1.1); }
    }

    @keyframes float-slower {
      0%, 100% { transform: translateY(0) rotate(0deg); }
      50% { transform: translateY(-25px) rotate(10deg); }
    }

    .animate-float {
      animation: float 6s ease-in-out infinite;
    }

    .animate-float-delay {
      animation: float-delay 7s ease-in-out infinite;
    }

    .animate-float-slow {
      animation: float-slow 8s ease-in-out infinite;
    }

    .animate-float-slower {
      animation: float-slower 9s ease-in-out infinite;
    }
  `}</style>
</div>

  {/* Section Title BELOW Founder */}

        <div className="section-title text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-secondary">Our Expert Trainers</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">Learn from certified martial arts instructors</p>
        </div>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-[360px] md:w-6xl">
            {trainers.map((trainer) => (
              <div 
                key={trainer.id} 
                className="group [perspective:1000px] flex justify-center"
                onClick={() => handleCardClick(trainer.id)}
                onMouseEnter={() => handleMouseEnter(trainer.id)}
                onMouseLeave={() => handleMouseLeave(trainer.id)}
              >
                <div 
                  className={`relative w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[500px] transition-all duration-500 [transform-style:preserve-3d] ${
                    flippedCards[trainer.id] ? '[transform:rotateY(180deg)]' : ''
                  }`}
                >
                  {/* Front of card */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] trainer-card">
                    <img
                      src={trainer.image}
                      alt={trainer.name}
                      className="h-full w-full object-cover rounded-xl trainer-img"
                    />
                    <div className="absolute inset-0 text-center text-white bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-xl flex flex-col justify-end p-2 md:p-6 pb-5 md:pb-10 black-hover">
                      <h3 className="text-center text-lg md:text-2xl font-bold">{trainer.name}</h3>
                      <p className='text-xs md:text-[15px] text-red-400 md:text-red-500 font-bold'>{trainer.role}</p>
                    </div>
                  </div>

                  {/* Back of card with shine effect */}
                  <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 shadow-2xl trainer-card overflow-hidden">
                    {/* Shine overlay - fixed animation */}
                    <div className="absolute inset-0 w-full h-full shine-overlay group-hover:opacity-40"></div>
                    
                    <div className="flex flex-col h-full justify-center items-center text-center p-4 sm:p-6 md:p-8 relative z-10">
                      <h3 className="text-xl sm:text-2xl lg:text-3xl text-white uppercase font-bold mb-2">
                        {trainer.name}
                      </h3>
                      <span className="text-red-400 text-sm sm:text-base hidden md:block font-semibold block mb-3 uppercase tracking-wider">
                        {trainer.role}
                      </span>
                      <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 line-clamp-4 md:line-clamp-6">
                        {trainer.description}
                      </p>

                      <div className="flex gap-1 md:gap-4">
                        <a 
                          href={trainer.socials.facebook} 
                          className="text-white hover:text-red-400 transition-colors p-2 bg-white/5 rounded-full hover:bg-white/20" 
                          aria-label="Facebook"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaFacebookF className="text-lg md:text-xl" />
                        </a>
                        <a 
                          href={trainer.socials.instagram} 
                          className="text-white hover:text-red-400 transition-colors p-2 bg-white/5 rounded-full hover:bg-white/20" 
                          aria-label="Instagram"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaInstagram className="text-lg md:text-xl" />
                        </a>
                        <a 
                          href={trainer.socials.twitter} 
                          className="text-white hover:text-red-400 transition-colors p-2 bg-white/5 rounded-full hover:bg-white/20" 
                          aria-label="WhatsApp"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaWhatsapp className="text-lg md:text-xl" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        .shine-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            115deg,
            transparent 0%,
            transparent 25%,
            rgba(255, 255, 255, 0.3) 35%,
            rgba(255, 255, 255, 0.5) 45%,
            rgba(255, 255, 255, 0.3) 55%,
            transparent 65%,
            transparent 100%
          );
          opacity: 0;
          transition: opacity 0.5s ease;
          pointer-events: none;
          animation: shine 2.5s infinite;
          transform: translateX(-100%) translateY(-100%);
        }
        
        .group:hover .shine-overlay {
          opacity: 0.5;
        }
        
        @keyframes shine {
          0% {
            transform: translateX(-100%) translateY(-100%);
          }
          20% {
            transform: translateX(-100%) translateY(-100%);
          }
          100% {
            transform: translateX(200%) translateY(200%);
          }
        }
      `}</style>
    </section>
  );
}