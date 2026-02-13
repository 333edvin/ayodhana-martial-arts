'use client'
import { useEffect, useRef, useState } from 'react';

export default function Stats() {
    const sectionRef = useRef(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const animateValue = (id, start, end, duration) => {
            if (start === end) return;
            const element = document.getElementById(id);
            if (!element) return;

            const range = end - start;
            const startTime = performance.now();

            const updateValue = (currentTime) => {
                const elapsed = currentTime - startTime;
                if (elapsed > duration) {
                    element.textContent = end + (id === 'stat2' ? '+' : '');
                    return;
                }

                const progress = elapsed / duration;
                const easeOutQuart = 1 - Math.pow(1 - progress, 4);
                const currentValue = Math.floor(start + (range * easeOutQuart));

                element.textContent = currentValue + (id === 'stat2' ? '+' : '');

                if (elapsed < duration) {
                    requestAnimationFrame(updateValue);
                }
            };
            requestAnimationFrame(updateValue);
        };

        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                // Only trigger if visible and hasn't animated yet
                if (entry.isIntersecting && !hasAnimated) {
                    setHasAnimated(true);
                    animateValue('stat1', 0, 250, 2500);
                    animateValue('stat2', 0, 7, 2000);
                    animateValue('stat3', 0, 9, 2000);
                    animateValue('stat4', 0, 4, 1500);
                }
            },
            { threshold: 0.3 } // Trigger when 30% of the section is visible
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, [hasAnimated]);

    const statsData = [
        { id: 'stat1', label: 'Students Trained', initial: '0+' },
        { id: 'stat2', label: 'Years Experience', initial: '0' },
        { id: 'stat3', label: 'Coaches', initial: '0' },
        { id: 'stat4', label: 'Classes Weekly', initial: '0' },
    ];

    return (
        <section ref={sectionRef} className=" ">
            <div className="bg-red-700 p-10 md:p-24">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
                    {statsData.map((stat) => (
                        <div 
                            key={stat.id} 
                            className="stat-item"
                           
                        >
                            <div className="flex flex-col items-center gap-2">
                                <div 
                                    className="text-4xl md:text-6xl font-bold text-white" 
                                    id={stat.id}
                                >
                                    {stat.initial}
                                </div>
                                <div className="text-xs md:text-sm font-semibold uppercase tracking-widest text-white/90">
                                    {stat.label}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}