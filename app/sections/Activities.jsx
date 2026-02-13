'use client';
import { useEffect, useRef, useState } from 'react';

const activities = [
    { title: "Boxing", desc: "Master the sweet science of punching.", img: "https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?w=800" },
    { title: "Kickboxing", desc: "Dynamic strikes and explosive power.", img: "https://cdn.onefc.com/wp-content/uploads/2023/10/image-2-1200x800.png" },
    { title: "Muay Thai", desc: "The deadly art of eight limbs.", img: "https://tigrethai.com/cdn/shop/articles/muaythai-picture.jpg?v=1612703279&width=1100" },
    { title: "Karate", desc: "Traditional discipline and precision.", img: "https://images.unsplash.com/photo-1555597673-b21d5c935865?w=800" },
    { title: "Self Defence", desc: "Practical techniques for safety.", img: "https://www.topsante.co.uk/wp-content/uploads/sites/8/2022/06/shutterstock_1342796243.png" },
    { title: "Weight Loss", desc: "Transform your body with intensity.", img: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800" },
    { title: "Flips & Parkour", desc: "Agility beyond boundaries.", img: "https://static.wixstatic.com/media/34d992_594374d128664bda8929bde334290b72~mv2.jpg/v1/fill/w_980,h_428,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/34d992_594374d128664bda8929bde334290b72~mv2.jpg" },
];

export default function Activities() {
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
    const pauseTimeoutRef = useRef(null);

    const scrollOneItem = (direction) => {
        if (scrollRef.current) {
            const container = scrollRef.current;
            const itemHeight = container.firstChild.offsetHeight + 24;
            const scrollAmount = direction === 'down' ? itemHeight : -itemHeight;
            container.scrollBy({ top: scrollAmount, behavior: 'smooth' });
        }
    };

    const manualScroll = (direction) => {
        scrollOneItem(direction);
        
        // Pause auto-scroll
        setIsAutoScrollPaused(true);
        
        // Clear any existing timeout
        if (pauseTimeoutRef.current) {
            clearTimeout(pauseTimeoutRef.current);
        }
        
        // Resume auto-scroll after 10 seconds
        pauseTimeoutRef.current = setTimeout(() => {
            setIsAutoScrollPaused(false);
        }, 10000);
    };

    useEffect(() => {
        const observerOptions = {
            root: scrollRef.current,
            threshold: 0.8,
        };

        const observerCallback = (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveIndex(parseInt(entry.target.getAttribute('data-index')));
                }
            });
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);
        document.querySelectorAll('.activity-card').forEach((card) => observer.observe(card));
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        // Don't set up auto-scroll if paused or hovered
        if (isAutoScrollPaused || isHovered) return;

        const autoScroll = setInterval(() => {
            if (scrollRef.current) {
                const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
                if (scrollTop + clientHeight >= scrollHeight - 20) {
                    scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    scrollOneItem('down');
                }
            }
        }, 3000); // 3 seconds auto-scroll

        return () => clearInterval(autoScroll);
    }, [isAutoScrollPaused, isHovered]);

    // Cleanup timeout on unmount
    useEffect(() => {
        return () => {
            if (pauseTimeoutRef.current) {
                clearTimeout(pauseTimeoutRef.current);
            }
        };
    }, []);

    return (
        <section className="bg-black py-10 md:py-10 px-5 min-h-screen flex items-center overflow-hidden">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">

                {/* Content side */}
                <div className="z-10">
                    <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-3">Training Programs</h2>
                    <h3 className="text-5xl md:text-8xl font-black text-white uppercase leading-none mb-6 italic">Master Every <br /> Discipline</h3>

                    <div className="flex items-center gap-6 mt-10">
                        <div className="flex gap-2">
                            <button 
                                onClick={() => manualScroll('up')} 
                                className="w-14 h-14 flex items-center justify-center border border-white/20 text-white hover:bg-red-600 transition-all"
                            >
                                <span className="rotate-180 block text-2xl">↓</span>
                            </button>
                            <button 
                                onClick={() => manualScroll('down')} 
                                className="w-14 h-14 flex items-center justify-center border border-white/20 text-white hover:bg-red-600 transition-all"
                            >
                                <span className="text-2xl">↓</span>
                            </button>
                        </div>
                        <div className="text-2xl font-mono text-white tracking-tighter italic">
                            <span className="text-red-600 font-bold">{String(activeIndex + 1).padStart(2, '0')}</span>
                            <span className="mx-2 opacity-20">/</span>
                            <span className="opacity-40">{String(activities.length).padStart(2, '0')}</span>
                        </div>
                    </div>
                </div>

                {/* The Scroller */}
                <div
                    className="relative h-[450px] md:h-[650px] w-full mask-fade-edges flex items-center"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    <div
                        ref={scrollRef}
                        className="flex flex-col gap-6 h-full w-full overflow-hidden py-[60px] md:py-[130px]"
                    >
                        {activities.map((item, index) => (
                            <div
                                key={index}
                                data-index={index}
                                className="activity-card shrink-0 relative w-full h-[380px] rounded-2xl overflow-hidden border border-white/5 transition-all duration-700"
                                style={{
                                    transform: activeIndex === index ? 'scale(1)' : 'scale(0.9)',
                                    opacity: activeIndex === index ? 1 : 0.4
                                }}
                            >
                                <img
                                    src={item.img}
                                    alt={item.title}
                                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 
                                        ${activeIndex === index ? 'grayscale-0' : 'grayscale'}
                                    `}
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent opacity-90" />

                                <div className="absolute bottom-8 left-8 p-4">
                                    <h4 className={`text-4xl font-black uppercase italic tracking-tighter transition-all duration-500 
                                        ${activeIndex === index ? 'text-white' : 'text-gray-500'}
                                    `}>
                                        {item.title}
                                    </h4>
                                    <p className={`text-gray-300 text-sm max-w-[280px] mt-2 transition-all duration-700
                                        ${activeIndex === index ? 'opacity-100' : 'opacity-0'}
                                    `}>
                                        {item.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .mask-fade-edges {
                    mask-image: linear-gradient(to bottom, transparent, black 25%, black 75%, transparent);
                    -webkit-mask-image: linear-gradient(to bottom, transparent, black 25%, black 75%, transparent);
                }
            `}</style>
        </section>
    );
}