import React, { useState, useEffect, useRef } from 'react';

const Statistics = () => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);
    
    const stats = [
        { number: 2500, suffix: '+', label: 'Active Users' },
        { number: 95, suffix: '%', label: 'Prediction Accuracy' },
        { number: 500, suffix: '+', label: 'Plant Species' },
        { number: 50, suffix: '+', label: 'Algerian Regions Covered' }
    ];

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-20 bg-gradient-to-r from-primary-green to-dark-green">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                                <CountUp end={stat.number} isVisible={isVisible} suffix={stat.suffix} />
                            </div>
                            <div className="text-white/90 text-sm md:text-base font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const CountUp = ({ end, isVisible, suffix }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!isVisible) return;

        let startTime;
        const duration = 2000; // 2 seconds
        
        const animate = (currentTime) => {
            if (!startTime) startTime = currentTime;
            const progress = (currentTime - startTime) / duration;

            if (progress < 1) {
                setCount(Math.floor(end * progress));
                requestAnimationFrame(animate);
            } else {
                setCount(end);
            }
        };

        requestAnimationFrame(animate);
    }, [isVisible, end]);

    return (
        <>
            {count.toLocaleString()}{suffix}
        </>
    );
};

export default Statistics;
