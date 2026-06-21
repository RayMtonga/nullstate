'use client';
import React, { useState, useEffect } from 'react';

const TESTIMONIALS = [
  {
    quote: "Nullstate transformed our legacy business system into a sleek, high-performing web application. The turnaround was extremely fast, and their ongoing support is invaluable.",
    author: "Chipo Musonda",
    role: "CEO, FinTech Zambia",
  },
  {
    quote: "Working with Nullstate was a game-changer. They built our e-commerce platform from scratch. It is fast, works flawlessly on mobile, and has significantly increased our sales conversions.",
    author: "Mwansa Kapoya",
    role: "Founder, Lusaka Retail Group",
  },
  {
    quote: "The landing page created by Nullstate is exceptional. It captures leads efficiently and captures the exact clean tech-inspired design we were aiming for. Highly recommend them!",
    author: "Mulenga K.",
    role: "Marketing Director, AgriTech Hub",
  }
];

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-3xl mx-auto px-4 py-8 text-center">
      <div className="min-h-[180px] flex flex-col justify-center">
        <p className="text-xl md:text-2xl italic text-gray-800 dark:text-zinc-200 leading-relaxed font-light transition-opacity duration-500">
          "{TESTIMONIALS[activeIndex].quote}"
        </p>
        <div className="mt-6">
          <h4 className="font-semibold text-gray-900 dark:text-white text-base">
            {TESTIMONIALS[activeIndex].author}
          </h4>
          <p className="text-sm text-gray-500 dark:text-zinc-400 mt-0.5">
            {TESTIMONIALS[activeIndex].role}
          </p>
        </div>
      </div>

      {/* Dots navigation */}
      <div className="flex justify-center space-x-3 mt-8">
        {TESTIMONIALS.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              activeIndex === index ? 'bg-accent-blue w-6' : 'bg-gray-300 dark:bg-zinc-700 hover:bg-gray-400'
            }`}
            aria-label={`Go to testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
