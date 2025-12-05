import React from 'react';
import { Clock, TrendingUp, Flag, Target, DollarSign, Users } from 'lucide-react';

const Benefits = () => {
    const benefits = [
        {
            icon: <Clock className="w-10 h-10" />,
            title: 'Save Time & Resources',
            description: 'Reduce failed breeding attempts by up to 70%'
        },
        {
            icon: <TrendingUp className="w-10 h-10" />,
            title: 'Increase Yield',
            description: 'Optimize plant selection for maximum productivity'
        },
        {
            icon: <Flag className="w-10 h-10" />,
            title: 'Local Expertise',
            description: 'Algorithms trained on Algerian agricultural data'
        },
        {
            icon: <Target className="w-10 h-10" />,
            title: 'Data-Driven Decisions',
            description: 'Make confident choices backed by AI analysis'
        },
        {
            icon: <DollarSign className="w-10 h-10" />,
            title: 'Cost Effective',
            description: 'Reduce costs associated with trial and error'
        },
        {
            icon: <Users className="w-10 h-10" />,
            title: 'Expert Support',
            description: 'Access to agricultural specialists and resources'
        }
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">
                        Why Agricultural Professionals Choose Zer3aX
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <div
                            key={index}
                            className="flex gap-4 p-6 rounded-xl hover:bg-light-green/20 transition-all group cursor-pointer"
                        >
                            <div className="flex-shrink-0 text-primary-green group-hover:scale-110 transition-transform">
                                {benefit.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-dark-gray mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
