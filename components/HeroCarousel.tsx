'use client';
import React, { useState, useEffect } from 'react';

const HERO_SLIDES = [
  {
    badge: "Modern Digital Agency",
    headline: "Turn Your Ideas Into Professional Websites & Digital Solutions",
    subheadline: "We help businesses, startups, and entrepreneurs establish a powerful online presence with modern websites, web applications, and digital solutions.",
    primaryCta: "Chat on WhatsApp",
    secondaryCta: "Get Free Consultation"
  },
  {
    badge: "E-Commerce Experts",
    headline: "Launch High-Converting Secure Online Stores",
    subheadline: "Build a seamless shopping experience for your customers. Complete with custom checkouts, inventory synchronization, and fast performance.",
    primaryCta: "Start Selling Online",
    secondaryCta: "View E-Commerce Services"
  },
  {
    badge: "Custom Web Applications",
    headline: "Streamline Operations with Bespoke Software Systems",
    subheadline: "Replace manual sheets with secure, cloud-hosted SaaS tools and databases designed specifically to automate your business workflows.",
    primaryCta: "Discuss Your Project",
    secondaryCta: "Schedule System Audit"
  }
];

export default function HeroCarousel({ onScrollToContact }: { onScrollToContact: (e: React.MouseEvent<HTMLAnchorElement>) => void }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 7000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const handleNext = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
      setIsTransitioning(false);
    }, 300);
  };

  const setSlideWithTransition = (index: number) => {
    if (index === currentSlide) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentSlide(index);
      setIsTransitioning(false);
    }, 300);
  };

  const slide = HERO_SLIDES[currentSlide];

  return (
    <div className="relative max-w-4xl mx-auto min-h-[360px] flex flex-col justify-between">
      {/* Content wrapper with fade transition */}
      <div className={`transition-all duration-500 ease-in-out transform ${isTransitioning ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
        <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-50 dark:bg-zinc-800 text-accent-blue mb-6 border border-blue-100 dark:border-zinc-700/50">
          {slide.badge}
        </span>
        <h1 className="text-4xl sm:text-6xl font-black text-gray-900 dark:text-white tracking-tight mb-8 leading-tight">
          {currentSlide === 0 ? (
            <>
              Turn Your Ideas Into <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-blue-500">
                Professional Websites
              </span>{' '}
              & Digital Solutions
            </>
          ) : currentSlide === 1 ? (
            <>
              Launch High-Converting <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-accent-blue">
                Secure Online Stores
              </span>
            </>
          ) : (
            <>
              Streamline Operations <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-blue to-indigo-500">
                Bespoke Software Systems
              </span>
            </>
          )}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed mb-10">
          {slide.subheadline}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a
            href="https://wa.me/YOUR_NUMBER"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 rounded-lg bg-accent-blue hover:bg-accent-blue-hover text-white font-semibold transition-all duration-200 shadow-lg shadow-blue-500/10 hover:shadow-blue-500/25 flex items-center justify-center space-x-2 text-base"
          >
            <span>{slide.primaryCta}</span>
            <svg className="w-5 h-5 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L32 503l138.2-36.2c32.2 17.5 68.2 26.8 104.9 26.8 122.4 0 222-99.6 222-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-82.1 21.5 21.9-80-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
            </svg>
          </a>
          <a
            href="#contact"
            onClick={onScrollToContact}
            className="w-full sm:w-auto px-8 py-4 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-800 dark:text-zinc-200 font-semibold transition-all duration-200 text-base text-center"
          >
            {slide.secondaryCta}
          </a>
        </div>
      </div>

      {/* Selector Indicators */}
      <div className="flex justify-center space-x-3 mt-12">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setSlideWithTransition(index)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              currentSlide === index ? 'bg-accent-blue w-6' : 'bg-gray-300 dark:bg-zinc-800 hover:bg-gray-400'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
