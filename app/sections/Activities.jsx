'use client';
import { useEffect, useRef, useState } from 'react';

const activities = [
    { title: "Boxing", desc: "Master the sweet science of punching.", img: "assets/images/activities/boxing.jpg" },
    { title: "Kickboxing", desc: "Dynamic strikes and explosive power.", img: "assets/images/activities/kick_boxing.png" },
    { title: "Muay Thai", desc: "The deadly art of eight limbs.", img: "assets/images/activities/muay_thai.jpg" },
    { title: "Karate", desc: "Traditional discipline and precision.", img: "assets/images/activities/karate.jpg" },
    { title: "Self Defence", desc: "Practical techniques for safety.", img: "assets/images/activities/self_defence.png" },
    { title: "Weight Loss", desc: "Transform your body with intensity.", img: "assets/images/activities/weight_loss.jpg" },
    { title: "Flips & Parkour", desc: "Agility beyond boundaries.", img: "assets/images/activities/parkour.jpg" },
];

export default function Activities() {
    const scrollRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoScrollPaused, setIsAutoScrollPaused] = useState(false);
    const [viewMode, setViewMode] = useState('scroller');
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
        setIsAutoScrollPaused(true);
        if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current);
        pauseTimeoutRef.current = setTimeout(() => {
            setIsAutoScrollPaused(false);
        }, 10000);
    };

    useEffect(() => {
        if (viewMode === 'grid') return;
        const observerOptions = { root: scrollRef.current, threshold: 0.8 };
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
    }, [viewMode]);

    useEffect(() => {
        if (isAutoScrollPaused || isHovered || viewMode === 'grid') return;
        const autoScroll = setInterval(() => {
            if (scrollRef.current) {
                const { scrollTop, scrollHeight, clientHeight } = scrollRef.current;
                if (scrollTop + clientHeight >= scrollHeight - 20) {
                    scrollRef.current.scrollTo({ top: 0, behavior: 'smooth' });
                } else {
                    scrollOneItem('down');
                }
            }
        }, 3000);
        return () => clearInterval(autoScroll);
    }, [isAutoScrollPaused, isHovered, viewMode]);

    useEffect(() => {
        return () => { if (pauseTimeoutRef.current) clearTimeout(pauseTimeoutRef.current); };
    }, []);

    return (
        <section className="bg-black py-20 px-5 min-h-screen flex items-start justify-center overflow-x-hidden transition-all duration-700" id='programs'>
            {/* Main Wrapper */}
            <div className={`container mx-auto transition-all duration-1000 flex  ${viewMode === 'grid' ? 'flex-col max-w-7xl' : 'flex-col md:flex-row'}`}>

                {/* 1. Header Section - Takes Full Width when Grid */}

                <div className={`transition-all duration-1000 flex flex-col  ${viewMode === 'grid' ? 'items-center text-center' : 'items-start text-left'}`}>
                    <h2 className="text-red-600 font-bold tracking-widest uppercase text-sm mb-3">Training Programs</h2>
                    <h3 className={`font-black text-white uppercase leading-none italic transition-all duration-1000 ${viewMode === 'grid' ? 'text-5xl md:text-8xl mb-8' : 'text-5xl md:text-8xl mb-6'}`}>
                        Master Every <br /> Discipline
                    </h3>

                    <button
                        onClick={() => setViewMode(viewMode === 'scroller' ? 'grid' : 'scroller')}
                        className="px-8 py-3 border border-white/20 text-white uppercase tracking-widest text-xs hover:bg-red-600 transition-all font-bold mb-6"
                    >
                        {viewMode === 'scroller' ? 'View All Activities' : 'Back'}
                    </button>

                    {/* WRAP THE ENTIRE NAV GROUP HERE */}
                    <div className={`flex items-center gap-4 transition-all duration-700 ${viewMode === 'grid' ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
                        <div className="flex gap-2">
                            <button onClick={() => manualScroll('up')} className="w-14 h-14 flex items-center justify-center border border-white/20 text-white hover:bg-red-600 transition-all">
                                <span className="rotate-180 block text-2xl">↓</span>
                            </button>
                            <button onClick={() => manualScroll('down')} className="w-14 h-14 flex items-center justify-center border border-white/20 text-white hover:bg-red-600 transition-all">
                                <span className="text-2xl">↓</span>
                            </button>
                        </div>

                        <div className="text-2xl font-mono text-white tracking-tighter italic ml-2">
                            <span className="text-red-600 font-bold">{String(activeIndex + 1).padStart(2, '0')}</span>
                            <span className="mx-2 opacity-20">/</span>
                            <span className="opacity-40">{String(activities.length).padStart(2, '0')}</span>
                        </div>
                    </div>
                </div>

                {/* 2. Content Layout */}
                <div className={`transition-all duration-1000 w-3xl ${viewMode === 'grid' ? 'w-full' : '  items-center'}`}>


                    {/* Right Side: The Cards */}
                    <div className={`relative transition-all  duration-1000 ${viewMode === 'grid' ? 'w-full' : 'h-[400px] md:h-[600px] mask-fade-edges'}`}>
                        <div
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => setIsHovered(false)}
                            ref={scrollRef}
                            className={`transition-all  duration-1000 ${viewMode === 'grid'
                                ? 'grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-8 py-0 md:py-10'
                                : 'flex flex-col gap-6 h-96 md:h-full w-full overflow-hidden py-[100px]'
                                }`}
                        >
                            {activities.map((item, index) => (
                                <div
                                    key={index}
                                    data-index={index}
                                    className={`activity-card  shrink-0 snap-center relative rounded-xl md:rounded-2xl overflow-hidden border border-white/5 transition-all duration-700 ease-in-out group
                                        ${viewMode === 'grid'
                                            ? ' h-[300px] sm:h-[350px] md:h-[380px] lg:h-[400px] w-full hover:border-red-600/30'
                                            : 'w-[350px] md:w-full h-[300px] sm:h-[320px] md:h-[350px] lg:h-[380px]'
                                        }
                                    `}
                                    style={viewMode === 'scroller' ? {
                                        transform: activeIndex === index ? 'scale(1)' : 'scale(0.98)',
                                        opacity: activeIndex === index ? 1 : 0.4
                                    } : {}}
                                >
                                    <img
                                        src={item.img}
                                        alt={item.title}
                                        className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 
                                            ${viewMode === 'grid' || activeIndex === index ? 'grayscale-0 scale-105' : 'grayscale'}
                                        `}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90" />

                                    <div className="absolute bottom-2 md:bottom-6 left-2 md:left-6 right-2 md:right-6">
                                        <h4 className={`text-2xl md:text-3xl font-black uppercase italic tracking-tighter transition-all duration-500 
                                            ${viewMode === 'grid' || activeIndex === index ? 'text-white' : 'text-gray-400'}
                                        `}>
                                            {item.title}
                                        </h4>
                                        <p className={`text-gray-300 text-xs md:text-sm mt-2 transition-all duration-700 line-clamp-2
                                            ${viewMode === 'grid' || activeIndex === index ? 'opacity-100' : 'opacity-0'}
                                        `}>
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx global>{`
                .mask-fade-edges {
                    mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
                    -webkit-mask-image: linear-gradient(to bottom, transparent, black 15%, black 85%, transparent);
                }
            `}</style>
        </section>
    );
}