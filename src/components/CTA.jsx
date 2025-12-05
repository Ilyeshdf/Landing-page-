import React from 'react';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
    return (
        <section className="py-20 bg-gradient-to-br from-light-green to-white">
            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">
                        Ready to Transform Your Plant Breeding?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Join hundreds of agricultural professionals using AI to make smarter decisions
                    </p>

                    <button className="bg-primary-green text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-dark-green transition-all transform hover:scale-105 shadow-lg hover:shadow-xl inline-flex items-center gap-2 cursor-pointer">
                        Get Started Free <ArrowRight size={20} />
                    </button>

                    <p className="text-sm text-gray-500 mt-6">
                        No credit card required • Free trial available
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CTA;
