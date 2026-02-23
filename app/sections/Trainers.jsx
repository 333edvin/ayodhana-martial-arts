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
      name: "Akhil kj",
      role: "Head Coach, Ayodhana Fighters",
      description: "Certified Kickboxing & Muay Thai trainer and the strategic lead for Ayodhana Fighters.",
      image: "assets/images/trainer6.jpeg",
      socials: { facebook: "#", instagram: "https://www.instagram.com/akhil_janardhanan_/", twitter: "#" },
      featured: true
    },
    {
      id: 2,
      name: "Abhishek cr",
      role: "Senior Coach",
      description: "5 years experience in Kickboxing & Muay Thai. 2-time Title Belt and 2-time National Champion.",
      image: "assets/images/trainer3.jpeg",
      socials: { facebook: "#", instagram: "https://www.instagram.com/_.abhishek.cr_/", twitter: "#" },
      featured: false
    },
     {
      id: 3,
      name: "Binto xavier",
      role: "Senior Coach",
      description: "3 years experience and 1-time National Champion focusing on advanced combat techniques.",
      image: "assets/images/trainer5.jpeg",
      socials: { facebook: "#", instagram: "https://www.instagram.com/b_in_to_x/", twitter: "#" },
      featured: false
    },
    {
      id: 4,
      name: "Anil babu",
      role: "Fitness Trainer & National Champ",
      description: "5 years experience including international exposure in Dubai. 1-time National Champion dedicated to elite fitness.",
      image: 'assets/images/trainer1.jpeg',
      socials: { facebook: "#", instagram: "https://www.instagram.com/_anil_babu._/", twitter: "#" },
      featured: true
    },
    
    
    {
      id: 5,
      name: "Emmanuel joshy",
      role: "Kickboxing Specialist",
      description: "3 years experience. Proud All Kerala Kickboxing National Champion 2024.",
      image: "assets/images/trainer2.jpeg",
      socials: { facebook: "#", instagram: "https://www.instagram.com/mr.emmanueljoshy/", twitter: "#" },
      featured: false
    },
    {
      id: 6,
      name: "Nishakh Tk",
      role: "Senior Coach",
      description: "4 years experience. Primal Title Belt Champion and WAKO National Champion 2025.",
      image: "assets/images/trainer7.jpeg",
      socials: { facebook: "#", instagram: "https://www.instagram.com/nisakh_11/", twitter: "#" },
      featured: false
    },
   
    
    {
      id: 7,
      name: "Adarsh Ns",
      role: "Assistant Coach",
      description: "3 years experience helping students master fundamental techniques and physical conditioning.",
      image: "assets/images/trainer8.jpeg",
      socials: { facebook: "#", instagram: "https://www.instagram.com/_adarshhhh_ns/", twitter: "#" },
      featured: false
    },
    {
      id: 8,
      name: "Adithyan pv",
      role: "Assistant Coach",
      description: "3 years experience focusing on student form, discipline, and foundational martial arts skills.",
      image: "assets/images/trainer4.jpeg",
      socials: { facebook: "#", instagram: "https://www.instagram.com/aadh7thyann/", twitter: "#" },
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
  
       {/* Founder Section */}
<div className="relative w-full mb-20 overflow-hidden px-4 sm:px-6">

  <div className="relative flex items-center justify-center">

    <div className="relative 
      w-full max-w-6xl 
      rounded-3xl 
      p-6 sm:p-8 md:p-12 lg:p-16 
      shadow-2xl 
      bg-black/90 
      flex flex-col lg:flex-row 
      items-center 
      gap-10 lg:gap-16 
      backdrop-blur-sm 
      transition-all duration-500 
      hover:shadow-red-500/20">

      {/* Border */}
      <div className="absolute inset-0 rounded-3xl border border-white/10 pointer-events-none"></div>

      {/* IMAGE SECTION */}
      <div className="relative 
        w-52 h-52 
        sm:w-64 sm:h-64 
        md:w-80 md:h-80 
        lg:w-[400px] lg:h-[400px] 
        shrink-0 flex items-center justify-center">

        {/* Dragon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-70 -z-10">
          <svg viewBox="0 0 200 200" className="w-full h-full text-red-600/20" fill="currentColor">
            <path d="M100 20 L120 50 L140 40 L150 60 L140 80 L160 90 L150 110 L170 120 L160 140 L140 130 L120 150 L100 140 L80 150 L60 140 L40 130 L30 120 L50 110 L40 90 L60 80 L50 60 L70 40 L90 50 L100 20"/>
          </svg>
        </div>

        {/* Martial Circle */}
        <div className="absolute inset-0 flex items-center justify-center opacity-20 -z-10">
          <svg viewBox="0 0 200 200" className="w-4/5 h-4/5 text-red-500">
            <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2"/>
          </svg>
        </div>

        {/* Glow */}
        <div className="absolute inset-0 rounded-full bg-red-500/20 blur-3xl -z-20"></div>

        {/* Founder Image */}
        <img
          src="/assets/images/founder.png"
          alt="Shihan Sreejith"
          className="relative w-full h-full object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
        />
      </div>

      {/* CONTENT SECTION */}
      <div className="text-center lg:text-left max-w-2xl">

        <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold uppercase tracking-wide text-white">
          Shihan Sreejith
        </h3>

        <p className="text-red-500 font-semibold mt-4 text-sm sm:text-base md:text-lg uppercase tracking-wider">
          Founder – Ayodhana Martial Arts Association India
        </p>

        <p className="text-gray-300 mt-6 text-sm sm:text-base md:text-lg leading-relaxed">
          7th Dan Black Belt and visionary leader dedicated to building disciplined fighters 
          and elevating martial arts excellence across India through discipline, honor, and mastery.
        </p>

        {/* Instagram (UNCHANGED) */}
        <div className="mt-8">
          <a
            href="https://www.instagram.com/shihan_sreejith/"
            target="_blank"
            rel="noopener noreferrer"
            className={`w-full sm:w-auto inline-flex justify-center items-center gap-3 
            bg-gradient-to-r from-red-950 via-red-600 to-red-900 
            px-6 py-3 rounded-full text-white font-semibold tracking-wide 
            shadow-lg transition-all duration-300 
            hover:scale-105 hover:shadow-red-500/40`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
            >
              <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm8.5 2A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4h8.5z"/>
            </svg>
            Instagram
          </a>
        </div>

      </div>
    </div>
  </div>
</div>

        {/* Section Title BELOW Founder */}
        {/* <div className="section-title text-center mb-10 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-secondary">Our Expert Trainers</h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600">Learn from certified martial arts instructors</p>
        </div> */}
        <div className="text-center mb-12">
          <p className="text-sm uppercase tracking-[0.3em] text-gray-500">
              Learn from certified martial arts instructors
          </p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mt-4">
              Our Expert Trainers
          </h2>
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