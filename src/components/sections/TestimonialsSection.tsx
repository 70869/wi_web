'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Testimonial {
  name: string;
  role: string;
  avatar: string;
  content: string;
  rating: number;
}

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: 'Craigorytv',
      role: 'Streamer',
      avatar: 'https://cdn.discordapp.com/avatars/316356036002971658/afd944b683cba834c47716edf00f6ea1.webp?size=1024',
      content: 'fried.',
      rating: 5
    },
    {
      name: 'syns',
      role: 'lovetaps Founder',
      avatar: 'https://cdn.discordapp.com/avatars/298731742104387595/c4b53cdb0e7379fe6a4f21bf633dce00.webp?size=1024',
      content: "we're wired in now",
      rating: 5
    },
    {
      name: 'inm8ates',
      role: 'Probably loading in chunks',
      avatar: 'https://cdn.discordapp.com/avatars/340573382091210752/b1389e95871ff7182d8fdedfa935838c.webp?size=1024',
      content: 'Watch this.',
      rating: 4
    },
    {
      name: 'GENUZX',
      role: 'Artist & Vision Holder',
      avatar: 'https://cdn.discordapp.com/avatars/472250684826320897/106a42dbcbd579a21364a1345e08c16a.webp?size=1024',
      content: 'yessirr',
      rating: 5
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-brand-primary rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-brand-accent rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-text-primary">What Our</span>
            <span className="gradient-text"> Community</span>
            <span className="text-text-primary"> Says</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Hear from our amazing community members about their experience with (wired-in).
          </p>
        </div>

        {/* Testimonials Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Testimonial Card */}
            <div className="relative rounded-3xl p-8 md:p-12 animate-fade-in overflow-hidden">
              {/* Enhanced glassmorphic background */}
              <div className="absolute inset-0 bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl"></div>
              <div className="relative z-10">
                <div className="text-center">
                  {/* Rating */}
                  <div className="flex justify-center space-x-1 mb-6">
                    {testimonials[currentTestimonial].rating > 0 &&
                      [...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <svg
                          key={i}
                          className="w-6 h-6 text-brand-primary"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-text-primary mb-8 leading-relaxed italic">
                    &quot;{testimonials[currentTestimonial].content}&quot;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center space-x-4">
                    <Image
                      src={testimonials[currentTestimonial].avatar}
                      alt={testimonials[currentTestimonial].name}
                      width={64}
                      height={64}
                      className="w-16 h-16 rounded-full border-2 border-brand-primary"
                    />
                    <div className="text-left">
                      <div className="text-lg font-bold text-text-primary">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-text-secondary">
                        {testimonials[currentTestimonial].role}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-surface-secondary hover:bg-brand-primary hover:text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Previous testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-surface-secondary hover:bg-brand-primary hover:text-black rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
              aria-label="Next testimonial"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-brand-primary scale-125'
                    : 'bg-surface-tertiary hover:bg-text-secondary'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">99%</div>
              <div className="text-text-secondary">Satisfaction Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">4.9/5</div>
              <div className="text-text-secondary">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">10,000+</div>
              <div className="text-text-secondary">Players Visited</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold gradient-text mb-2">24/7</div>
              <div className="text-text-secondary">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection; 