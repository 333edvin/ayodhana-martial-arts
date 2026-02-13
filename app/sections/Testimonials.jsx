'use client'
import { useState, useEffect } from 'react';

const testimonialsData = [
  {
    id: 1,
    name: "Sensei Michael Chen",
    role: "3rd Dan Black Belt",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    content: "Training here has transformed not just my technique, but my entire mindset. The dojo's emphasis on discipline and respect reminds me of my own training in Japan. This is authentic martial arts at its finest.",
    rating: 5,
    martialArt: "Karate"
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Blue Belt, Brazilian Jiu-Jitsu",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    content: "I started as a complete beginner with no athletic background. The instructors broke down every technique with patience and precision. Two years later, I'm competing and loving every moment on the mats.",
    rating: 5,
    martialArt: "BJJ"
  },
  {
    id: 3,
    name: "James Rodriguez",
    role: "Muay Thai Kru",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    content: "The atmosphere here is unlike any gym I've trained at. It's tough but supportive - exactly how Muay Thai should be taught. The clinch work and pad holding are world-class.",
    rating: 5,
    martialArt: "Muay Thai"
  },
  {
    id: 4,
    name: "Emily & David Kim",
    role: "Parents of Junior Program Students",
    avatar: "https://randomuser.me/api/portraits/women/63.jpg",
    content: "Our children have gained so much confidence and respect through the junior martial arts program. They're more focused at school and have learned valuable anti-bullying techniques. Best decision we ever made.",
    rating: 5,
    martialArt: "Junior Program"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
        );
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonialsData.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonialsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Rating stars with martial arts flair
  const RatingStars = ({ rating }) => {
    return (
      <div className="flex items-center gap-1">
        {[...Array(5)].map((_, index) => (
          <svg 
            key={index}
            className={`w-5 h-5 ${
              index < rating ? 'text-red-600' : 'text-gray-300'
            }`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  // Belt color mapping
  const getBeltColor = (role) => {
    if (role.includes('Black')) return 'from-gray-900 to-gray-700';
    if (role.includes('Brown')) return 'from-amber-800 to-amber-700';
    if (role.includes('Blue')) return 'from-blue-800 to-blue-700';
    if (role.includes('Purple')) return 'from-purple-800 to-purple-700';
    if (role.includes('White')) return 'from-gray-400 to-gray-300';
    return 'from-red-800 to-red-700'; // Default
  };

  return (
    <section className="relative py-24 overflow-hidden bg-gray-900 " id="testimonials">
      {/* Japanese/Martial Arts Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M30 0L60 30L30 60L0 30L30 0z' fill='%23ffffff' fill-opacity='0.2'/%3E%3C/svg%3E")`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      {/* Red Accent Lines - Like Dojo Decor */}
      <div className="absolute top-0 left-0 w-32 h-1 bg-red-600"></div>
      <div className="absolute top-0 right-0 w-32 h-1 bg-red-600"></div>
      
      <div className="container relative px-4 mx-auto">
        {/* Section Title with Martial Arts Aesthetic */}
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-red-600 uppercase bg-red-100 rounded-full">
            Warrior's Word
          </span>
          <h2 className="mb-4 text-4xl font-bold text-white md:text-5xl">
            What Our <span className="text-red-500">Warriors</span> Say
          </h2>
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-1 bg-red-600 rounded-full"></div>
            <div className="w-4 h-1 bg-red-600 rounded-full"></div>
            <div className="w-12 h-1 bg-red-600 rounded-full"></div>
          </div>
          <p className="text-sm md:text-xl text-gray-400">
            Real stories from our martial arts family
          </p>
        </div>

        {/* Testimonials Container */}
        <div className="max-w-5xl mx-auto">
          {/* Main Testimonial Slider */}
          <div className="relative px-4">
            {/* Previous Button - Styled like a katana? No, let's do a martial arts inspired button */}
            <button
              onClick={goToPrevious}
              className="absolute left-0 z-20 p-3 -translate-y-1/2 bg-black border-2 border-red-800 rounded-full top-1/2 hover:bg-red-900 hover:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 group"
              aria-label="Previous testimonial"
            >
              <svg 
                className="w-6 h-6 text-red-500 group-hover:text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M15 19l-7-7 7-7" 
                />
              </svg>
            </button>

            {/* Next Button */}
            <button
              onClick={goToNext}
              className="absolute right-0 z-20 p-3 -translate-y-1/2 bg-black border-2 border-red-800 rounded-full top-1/2 hover:bg-red-900 hover:border-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 transition-all duration-300 group"
              aria-label="Next testimonial"
            >
              <svg 
                className="w-6 h-6 text-red-500 group-hover:text-white" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </button>

            {/* Testimonial Card */}
            <div className="overflow-hidden rounded-2xl ">
              <div 
                className="flex transition-transform duration-700 ease-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonialsData.map((testimonial, index) => (
                  <div
                    key={testimonial.id}
                    className="flex-shrink-0 w-full px-4"
                  >
                    <div className="relative p-8 bg-gray-800 border-2 border-red-900 rounded-2xl md:p-12">
                      {/* Decorative Japanese Pattern */}
                      <div className="absolute top-0 right-0 w-24 h-24 opacity-10">
                        <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-red-600"></div>
                      </div>
                      <div className="absolute bottom-0 left-0 w-24 h-24 opacity-10">
                        <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-red-600"></div>
                      </div>

                      {/* Belt Rank Indicator */}
                      <div className={`absolute left-8 top-8 w-16 h-1.5 rounded-full bg-gradient-to-r ${getBeltColor(testimonial.role)}`}></div>

                      {/* Content */}
                      <div className="relative">
                        {/* Quote Icon - Oriental Style */}
                        <div className="mb-6">
                          <svg 
                            className="w-12 h-12 text-red-700 opacity-40" 
                            fill="currentColor" 
                            viewBox="0 0 32 32"
                          >
                            <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                          </svg>
                        </div>

                        {/* Testimonial Content */}
                        <p className="mb-6 text-sm md:text-xl italic text-gray-300">
                          "{testimonial.content}"
                        </p>

                        {/* Rating & Martial Art Tag */}
                        <div className="flex flex-wrap items-center justify-between mb-6">
                          <RatingStars rating={testimonial.rating} />
                          <span className="px-3 py-1 text-sm font-medium text-red-500 bg-red-900 bg-opacity-30 rounded-full border border-red-800">
                            {testimonial.martialArt}
                          </span>
                        </div>

                        {/* Author Info - With Belt Style */}
                        <div className="flex items-center">
                          <div className="relative">
                            <img
                              src={testimonial.avatar}
                              alt={testimonial.name}
                              className="relative z-10 object-cover w-16 h-16 border-2 border-red-700 rounded-full"
                            />
                            <div className="absolute inset-0 w-16 h-16 border-2 border-red-500 rounded-full animate-ping opacity-20"></div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-bold text-white">
                              {testimonial.name}
                            </h4>
                            <p className="text-sm text-red-400">
                              {testimonial.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Slider Controls (Dots) - Martial Arts Inspired */}
          <div className="flex justify-center mt-10 space-x-4">
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative group focus:outline-none`}
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <div className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-10 bg-red-600' 
                    : 'w-3 bg-gray-600 group-hover:bg-red-400'
                }`}></div>
                {/* Inner glow for active */}
                {index === currentIndex && (
                  <div className="absolute inset-0 w-10 h-3 bg-red-500 rounded-full animate-ping opacity-30"></div>
                )}
              </button>
            ))}
          </div>

         

          {/* CTA Button */}
          <div className="mt-12 text-center">
            <button className="inline-flex items-center px-8 py-4 text-lg font-bold text-white transition-all duration-300 transform bg-red-700 border-2 border-red-600 rounded-lg hover:bg-red-800 hover:scale-105 hover:shadow-[0_0_20px_rgba(220,38,38,0.5)] focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 focus:ring-offset-gray-900">
              Begin Your Journey
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}