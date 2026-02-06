'use client'
import { FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';
export default function Trainers() {
   const trainers = [
    {
      id: 1,
      name: "Anil babu",
      role: "Fitness Trainer & National Champ",
      description: "5 years experience including international exposure in Dubai. 1-time National Champion dedicated to elite fitness.",
      image: 'assets/images/trainer1.jpeg',
      socials: { facebook: "#", instagram: "#", twitter: "#" },
      featured: true
    },
    {
      id: 2,
      name: "Emmanuval joshy",
      role: "Kickboxing Specialist",
      description: "3 years experience. Proud All Kerala Kickboxing National Champion 2024.",
      image: "assets/images/trainer2.jpeg",
      socials: { facebook: "#", instagram: "#", twitter: "#" },
      featured: false
    },
    {
      id: 3,
      name: "Abhishek cr",
      role: "Senior Coach",
      description: "5 years experience in Kickboxing & Muay Thai. 2-time Title Belt and 2-time National Champion.",
      image: "assets/images/trainer3.jpeg",
      socials: { facebook: "#", instagram: "#", twitter: "#" },
      featured: false
    },
    {
      id: 4,
      name: "Akhil kj",
      role: "Head Coach, Ayodhana Fighters",
      description: "Certified Kickboxing & Muay Thai trainer and the strategic lead for Ayodhana Fighters.",
      image: "assets/images/trainer4.jpeg",
      socials: { facebook: "#", instagram: "#", twitter: "#" },
      featured: true
    },
    {
      id: 5,
      name: "Binto xavier",
      role: "Senior Coach",
      description: "3 years experience and 1-time National Champion focusing on advanced combat techniques.",
      image: "assets/images/trainer5.jpeg",
      socials: { facebook: "#", instagram: "#", twitter: "#" },
      featured: false
    },
    {
      id: 6,
      name: "Nishak Tk",
      role: "Senior Coach",
      description: "4 years experience. Primal Title Belt Champion and WAKO National Champion 2025.",
      image: "assets/images/trainer6.jpeg",
      socials: { facebook: "#", instagram: "#", twitter: "#" },
      featured: false
    },
    {
      id: 7,
      name: "Adhithyan pv",
      role: "Assistant Coach",
      description: "3 years experience focusing on student form, discipline, and foundational martial arts skills.",
      image: "assets/images/trainer7.jpeg",
      socials: { facebook: "#", instagram: "#", twitter: "#" },
      featured: true
    },
    {
      id: 8,
      name: "Adarsh Ns",
      role: "Assistant Coach",
      description: "3 years experience helping students master fundamental techniques and physical conditioning.",
      image: "assets/images/trainer8.jpeg",
      socials: { facebook: "#", instagram: "#", twitter: "#" },
      featured: false
    }
  ];
    return (
       <section className="trainers px-4 sm:px-6 lg:px-8 xl:px-10 py-16" id="trainers">
          <div className=" mx-auto">
            <div className="section-title text-center mb-10 md:mb-16">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 text-secondary">Our Expert Trainers</h2>
              <p className="text-base sm:text-lg md:text-xl text-gray-600">Learn from certified martial arts instructors</p>
            </div>

            <div className="flex justify-center">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 w-[360px] md:w-6xl">
                {trainers.map((trainer) => (
                  <div key={trainer.id} className="group [perspective:1000px] flex justify-center">
                    <div className="relative w-full h-64 sm:h-72 md:h-80 lg:h-96 xl:h-[500px] transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">

                      <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] trainer-card">
                        <img
                          src={trainer.image}
                          alt={trainer.name}
                          className="h-full w-full object-cover rounded-xl trainer-img"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent rounded-xl flex flex-col justify-end p-6 black-hover">
                          <h3 className="text-center text-white text-2xl font-bold">{trainer.name}</h3>
                        </div>
                      </div>

                      <div className="absolute inset-0 w-full h-full [backface-visibility:hidden] [transform:rotateY(180deg)] bg-gradient-to-br from-gray-900 to-black rounded-xl border border-gray-800 shadow-2xl trainer-card">
                        <div className="flex flex-col h-full justify-center items-center text-center p-4 sm:p-6 md:p-8">
                          <h3 className="text-xl sm:text-2xl lg:text-3xl text-white uppercase font-bold mb-2">
                            {trainer.name}
                          </h3>
                          <span className="text-red-400 text-sm sm:text-base font-semibold block mb-3 uppercase tracking-wider">
                            {trainer.role}
                          </span>
                          <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6 line-clamp-4 md:line-clamp-6">
                            {trainer.description}
                          </p>

                          <div className="flex gap-4">
                            <a href={trainer.socials.facebook} className="text-white hover:text-red-400 transition-colors p-2 bg-white/5 rounded-full" aria-label="Facebook">
                              <FaFacebookF className="text-lg md:text-xl" />
                            </a>
                            <a href={trainer.socials.instagram} className="text-white hover:text-red-400 transition-colors p-2 bg-white/5 rounded-full" aria-label="Instagram">
                              <FaInstagram className="text-lg md:text-xl" />
                            </a>
                            <a href={trainer.socials.twitter} className="text-white hover:text-red-400 transition-colors p-2 bg-white/5 rounded-full" aria-label="Twitter">
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
        </section>
    );
}