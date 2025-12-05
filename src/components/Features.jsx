import React from 'react';
import { Beaker, Scale, Trophy, MapPin, ArrowRight } from 'lucide-react';

const Features = () => {
    const features = [
        {
            icon: <Beaker className="w-8 h-8" />,
            title: 'Breeding Predictions',
            description: 'Leverage AI to predict cross-breeding outcomes with high accuracy. See potential traits, success rates, and growth patterns before planting.',
            cta: 'Try Predictor →'
        },
        {
            icon: <Scale className="w-8 h-8" />,
            title: 'Plant Comparison',
            description: 'Side-by-side analysis of plant varieties. Compare traits, resistance, yield potential, and compatibility for your specific conditions.',
            cta: 'Compare Now →'
        },
        {
            icon: <Trophy className="w-8 h-8" />,
            title: 'Performance Ranking',
            description: 'Data-driven rankings of plant varieties based on success rates, adaptability, and market demand in Algeria.',
            cta: 'View Rankings →'
        },
        {
            icon: <MapPin className="w-8 h-8" />,
            title: 'Geographic Analysis',
            description: 'Visualize plant performance across different regions. Identify optimal zones for specific varieties based on climate data.',
            cta: 'Explore Map →'
        }
    ];

    return (
        <section id="features" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">
                        Powerful Tools for Smart Breeding Decisions
                    </h2>
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto">
                        Everything you need to make data-driven agricultural choices
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-t-4 border-primary-green group cursor-pointer"
                        >
                            <div className="text-primary-green mb-4 group-hover:scale-110 transition-transform">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-dark-gray mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 mb-4 leading-relaxed">
                                {feature.description}
                            </p>
                            <a
                                href="#"
                                className="text-primary-green font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all"
                            >
                                {feature.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
