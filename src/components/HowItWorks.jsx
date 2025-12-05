import React from 'react';
import { FileText, Bot, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
    const steps = [
        {
            icon: <FileText className="w-12 h-12" />,
            title: 'Enter Plant Information',
            description: 'Select parent plants and input specific characteristics you want to analyze.'
        },
        {
            icon: <Bot className="w-12 h-12" />,
            title: 'AI Processes Data',
            description: 'Our advanced algorithms analyze thousands of data points to predict outcomes.'
        },
        {
            icon: <CheckCircle className="w-12 h-12" />,
            title: 'Receive Insights',
            description: 'Get detailed predictions, recommendations, and actionable breeding strategies.'
        }
    ];

    return (
        <section id="how-it-works" className="py-20 bg-gradient-to-b from-white to-light-gray">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">
                        Start Breeding Smarter in 3 Simple Steps
                    </h2>
                </div>

                <div className="relative">
                    {/* Connecting Line */}
                    <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-green via-primary-green to-primary-green transform -translate-y-1/2 -z-10"
                        style={{ width: '80%', margin: '0 10%' }}
                    ></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-col items-center text-center">
                                {/* Icon Circle */}
                                <div className="w-24 h-24 bg-gradient-to-br from-primary-green to-dark-green rounded-full flex items-center justify-center text-white mb-6 shadow-lg transform hover:scale-110 transition-transform relative z-10">
                                    {step.icon}
                                </div>

                                {/* Step Number */}
                                <div className="absolute text-6xl font-bold text-primary-green/10 -top-4">
                                    {index + 1}
                                </div>

                                <h3 className="text-xl font-bold text-dark-gray mb-3">
                                    {step.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed max-w-xs">
                                    {step.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
