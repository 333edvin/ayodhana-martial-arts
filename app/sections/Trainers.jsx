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
      socials: { facebook: "#", instagram: "https://www.instagram.com/_.abhishek.cr_?igsh=bmFvdzU3cmNkMmg5", twitter: "#" },
      featured: false
    },
     {
      id: 2,
      name: "Binto xavier",
      role: "Senior Coach",
      description: "3 years experience and 1-time National Champion focusing on advanced combat techniques.",
      image: "assets/images/trainer5.jpeg",
      socials: { facebook: "#", instagram: "https://www.instagram.com/b_in_to_x?igsh=czc1NGUxMm95Y284", twitter: "#" },
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
      socials: { facebook: "#", instagram: "https://www.instagram.com/mr.emmanueljoshy?igsh=YzlrMGY3Y3Ztdm5i", twitter: "#" },
      featured: false
    },
    {
      id: 5,
      name: "Nishak Tk",
      role: "Senior Coach",
      description: "4 years experience. Primal Title Belt Champion and WAKO National Champion 2025.",
      image: "assets/images/trainer7.jpeg",
      socials: { facebook: "#", instagram: "https://www.instagram.com/nisakh_11?igsh=MThsaDVoaDVhMzVkcQ==", twitter: "#" },
      featured: false
    },
   
    
    {
      id: 6,
      name: "Adarsh Ns",
      role: "Assistant Coach",
      description: "3 years experience helping students master fundamental techniques and physical conditioning.",
      image: "assets/images/trainer8.jpeg",
      socials: { facebook: "#", instagram: "https://www.instagram.com/_adarshhhh_ns?igsh=Y2N3Zm84M251eG9u", twitter: "#" },
      featured: false
    },
    {
      id: 7,
      name: "Adhithyan pv",
      role: "Assistant Coach",
      description: "3 years experience focusing on student form, discipline, and foundational martial arts skills.",
      image: "assets/images/trainer4.jpeg",
      socials: { facebook: "#", instagram: "https://www.instagram.com/aadh7thyann?igsh=MWFzZTQ4ZjRwdG01Mw==", twitter: "#" },
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
  
        {/* Founder Section - Separate container without min-h-screen */}
        <div className="relative w-full mb-16 overflow-hidden">
          {/* 🔥 CARD WRAPPER */}
          <div className="relative flex items-center justify-center px-6" style={{ zIndex: 5 }}>
            <div className="relative w-full max-w-6xl rounded-3xl p-10 md:p-16 shadow-2xl bg-black/90 flex flex-col md:flex-row items-center gap-12 backdrop-blur-sm transform transition-all duration-700 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/20">
              
              {/* Border */}
              <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none"></div>
              
              {/* Founder Image with dragon and martial arts elements */}
              <div className="w-72 h-72 md:w-[420px] md:h-[420px] shrink-0 relative">
                {/* Dragon SVG behind the image */}
                <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: -5 }}>
                  <svg 
                    viewBox="0 0 200 200" 
                    className="w-full h-full text-red-600/20"
                    fill="currentColor"
                  >
                    {/* Dragon silhouette */}
                    <path d="M100 20 L120 50 L140 40 L150 60 L140 80 L160 90 L150 110 L170 120 L160 140 L140 130 L120 150 L100 140 L80 150 L60 140 L40 130 L30 120 L50 110 L40 90 L60 80 L50 60 L70 40 L90 50 L100 20" 
                          fill="currentColor"/>
                    {/* Dragon eye */}
                    <circle cx="100" cy="70" r="5" fill="yellow"/>
                    {/* Dragon claws */}
                    <path d="M70 100 L60 120 L70 110" fill="currentColor"/>
                    <path d="M130 100 L140 120 L130 110" fill="currentColor"/>
                    {/* Dragon flame */}
                    <path d="M100 140 L110 160 L100 170 L90 160 L100 140" fill="orange"/>
                  </svg>
                </div>

                {/* Martial arts circle (Yin Yang inspired) */}
                <div className="absolute inset-0 flex items-center justify-center opacity-20" style={{ zIndex: -4 }}>
                  <svg viewBox="0 0 200 200" className="w-4/5 h-4/5 text-red-500">
                    <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2"/>
                    <path d="M100 20 A60 60 0 0 1 100 140 A60 60 0 0 1 100 20" fill="currentColor" opacity="0.5"/>
                    <circle cx="100" cy="80" r="15" fill="white"/>
                    <circle cx="100" cy="120" r="15" fill="currentColor"/>
                  </svg>
                </div>

                {/* Japanese calligraphy style brush strokes */}
                <div className="absolute inset-0" style={{ zIndex: -3 }}>
                  <svg viewBox="0 0 200 200" className="w-full h-full opacity-10">
                    <path d="M30 50 Q80 30, 130 50 T170 30" stroke="red" strokeWidth="3" fill="none"/>
                    <path d="M40 120 Q90 100, 140 120 T180 100" stroke="red" strokeWidth="3" fill="none"/>
                    <path d="M20 170 Q70 150, 120 170 T160 150" stroke="red" strokeWidth="3" fill="none"/>
                  </svg>
                </div>  

                {/* Main founder image */}
                <img
                  src="/assets/images/founder.png"
                  alt="Shihan Sreejith"
                  className="w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-110 relative"
                  style={{ zIndex: 10 }}
                />
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-full bg-red-500/20 blur-3xl" style={{ zIndex: -1 }}></div>
              </div>
              
              {/* Founder Info */}
              <div className="text-center md:text-left">
                <h3 className="text-3xl md:text-5xl font-bold uppercase tracking-wide text-white transition-all duration-300 hover:text-red-500">
                  Shihan Sreejith
                </h3>
                <p className="text-red-500 font-semibold mt-4 text-base md:text-lg uppercase tracking-wider">
                  Founder – Ayodhana Martial Arts Association India
                </p>
              <p className="text-gray-300 mt-6 max-w-2xl text-base md:text-xl leading-relaxed text-justify break-words hyphens-auto transition-all duration-300 hover:text-white">
                7th Dan Black Belt and visionary leader dedicated to building disciplined fighters 
                and elevating martial arts excellence across India through discipline, honor, and mastery.
              </p>
                {/* Instagram Link */}
              <div className="mt-8">
                <a
                  href="https://www.instagram.com/shihan_sreejith?igsh=ZjFpMTRkYTA0czVz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-gradient-to-r from-pink-600 via-red-600 to-yellow-500 px-6 py-3 rounded-full text-white font-semibold tracking-wide shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-red-500/40"
                >
                  {/* Instagram SVG Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm8.5 2A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4h8.5zm-4.25 3a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6zm4.75-.88a1.12 1.12 0 1 0 0 2.24 1.12 1.12 0 0 0 0-2.24z"/>
                  </svg>

                  Follow on Instagram
                </a>
              </div>
              </div>
              
            </div>
          </div>
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
                        {/* <a 
                          href={trainer.socials.facebook} 
                          className="text-white hover:text-red-400 transition-colors p-2 bg-white/5 rounded-full hover:bg-white/20" 
                          aria-label="Facebook"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaFacebookF className="text-lg md:text-xl" />
                        </a> */}
                        <a 
                          href={trainer.socials.instagram} 
                          className="text-white hover:text-red-400 transition-colors p-2 bg-white/5 rounded-full hover:bg-white/20" 
                          aria-label="Instagram"
                          target="_blank"
                        >
                          <FaInstagram className="text-lg md:text-xl" />
                        </a>
                        {/* <a 
                          href={trainer.socials.twitter} 
                          className="text-white hover:text-red-400 transition-colors p-2 bg-white/5 rounded-full hover:bg-white/20" 
                          aria-label="WhatsApp"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <FaWhatsapp className="text-lg md:text-xl" />
                        </a> */}
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