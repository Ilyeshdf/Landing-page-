import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const testimonials = [
        {
            quote: "Zer3aX has revolutionized how we approach plant breeding. The AI predictions are incredibly accurate and have saved us months of trial and error.",
            name: "Ahmed Benali",
            role: "Agricultural Engineer, Algiers",
            rating: 5
        },
        {
            quote: "The comparison tool is invaluable. We can now make informed decisions about which varieties to cultivate based on our specific regional conditions.",
            name: "Fatima Zerrouky",
            role: "Farm Manager, Constantine",
            rating: 5
        },
        {
            quote: "As a research institution, we rely on Zer3aX for data-driven insights. The platform's focus on Algerian agriculture makes it uniquely valuable.",
            name: "Dr. Karim Messaoudi",
            role: "Agricultural Researcher, Oran",
            rating: 5
        }
    ];

    return (
        <section className="py-20 bg-light-gray">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-dark-gray mb-4">
                        Trusted by Algerian Agricultural Professionals
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-xl p-8 shadow-md hover:shadow-lg transition-all border-l-4 border-primary-green"
                        >
                            {/* Stars */}
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-warning text-warning" />
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="text-gray-700 mb-6 leading-relaxed italic">
                                "{testimonial.quote}"
                            </p>

                            {/* Author */}
                            <div>
                                <p className="font-bold text-dark-gray">{testimonial.name}</p>
                                <p className="text-sm text-gray-500">{testimonial.role}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
