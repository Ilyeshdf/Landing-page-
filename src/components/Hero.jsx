import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
    return (
        <section id="home" className="pt-32 pb-20 bg-gradient-to-b from-light-gray to-white overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col lg:flex-row items-center">
                    {/* Left Column: Text */}
                    <div className="lg:w-3/5 lg:pr-12 mb-12 lg:mb-0 z-10">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-gray leading-tight mb-6">
                            Transform Agriculture with <span className="text-primary-green">AI-Powered</span> Plant Breeding
                        </h1>
                        <p className="text-lg md:text-xl text-gray-500 mb-8 max-w-2xl leading-relaxed">
                            Predict, Compare, and Optimize plant breeding outcomes with cutting-edge artificial intelligence. Built specifically for the Algerian agricultural market.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <button className="bg-primary-green text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-dark-green transition-all transform hover:scale-105 shadow-lg hover:shadow-primary-green/30 flex items-center justify-center gap-2 cursor-pointer">
                                Start Predicting Now <ArrowRight size={20} />
                            </button>
                        </div>

                        <div className="flex flex-wrap gap-6 text-sm font-medium text-dark-gray/80">
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                                <span className="text-xl">🌱</span> 500+ Plant Species Analyzed
                            </div>
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                                <span className="text-xl">📊</span> 95% Prediction Accuracy
                            </div>
                            <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-lg shadow-sm border border-gray-100">
                                <span className="text-xl">🇩🇿</span> Tailored for Algerian Climate
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Visual */}
                    <div className="lg:w-2/5 relative">
                        <div className="relative z-10 animate-fade-in-up">
                            <div className="w-full h-96 bg-gradient-to-br from-primary-green/20 to-info/20 rounded-2xl shadow-2xl flex items-center justify-center">
                                <div className="text-center p-8">
                                    <div className="text-6xl mb-4">🌱</div>
                                    <p className="text-dark-gray font-bold text-lg">AI-Powered Analysis</p>
                                </div>
                            </div>
                        </div>
                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-primary-green/10 rounded-full blur-3xl -z-10"></div>
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-info/10 rounded-full blur-3xl -z-10"></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
