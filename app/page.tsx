'use client';
import React from 'react';
import NavBar from '@/components/NavBar';
import ContactForm from '@/components/ContactForm';
import FAQItem from '@/components/FAQItem';
import TestimonialCarousel from '@/components/TestimonialCarousel';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import HeroCarousel from '@/components/HeroCarousel';

// Services list
const SERVICES = [
  {
    title: 'Business Websites',
    desc: 'Professional websites designed to attract customers and grow your business.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-.778.099-1.533.284-2.253" />
      </svg>
    ),
  },
  {
    title: 'E-Commerce Websites',
    desc: 'Sell products online with a modern and secure online store.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
      </svg>
    ),
  },
  {
    title: 'Web Applications',
    desc: 'Custom web-based systems tailored to your business needs.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>
    ),
  },
  {
    title: 'Landing Pages',
    desc: 'High-converting landing pages designed for marketing campaigns.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 14.25v2.25m3-4.5v6.75m3-9v9m3-2.25v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
      </svg>
    ),
  },
  {
    title: 'Website Maintenance',
    desc: 'Keep your website secure, updated, and running smoothly.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
  },
  {
    title: 'Technical Support',
    desc: 'Website troubleshooting, hosting support, email setup, and technical assistance.',
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17 17.25 21A2.652 2.652 0 0 0 21 17.25l-5.877-5.877M11.42 15.17l2.49-2.49c.962-.962 1.353-2.367 1.03-3.708L14.05 4.05a2.652 2.652 0 0 0-3.71-3.71l-4.93 4.93c-1.341 1.323-2.746 1.714-4.708 1.03L.75 6.3a2.652 2.652 0 0 0 3.71 3.71l5.877 5.877M11.42 15.17c-2.49 2.49-5.877 5.877-5.877 5.877" />
      </svg>
    ),
  },
];

// Why Choose Us
const ADVANTAGES = [
  { title: 'Affordable Solutions', desc: 'Enterprise-grade layouts and architectures tailormade to fit within startup budgets.' },
  { title: 'Modern Design Standards', desc: 'Minimalist tech aesthetics with glassmorphism, responsive grid structures, and dark modes.' },
  { title: 'Mobile Optimization', desc: 'Engineered mobile-first for fluid touch responsiveness and maximum speed.' },
  { title: 'Fast Turnaround', desc: 'Agile sprints that launch high-converting websites in weeks, not months.' },
  { title: 'Reliable Support', desc: 'Continuous optimization, vulnerability patches, and uptime assistance post-launch.' },
  { title: 'Client-Focused Approach', desc: 'We align design steps closely with your business metrics and conversion goals.' },
];

// Process Stepper
const PROCESS_STEPS = [
  { num: '01', title: 'Consultation', desc: 'Understanding your business goal, defining site structures, and aligning metrics.' },
  { num: '02', title: 'Planning & Design', desc: 'Wireframing layouts, designing responsive templates, and structuring contents.' },
  { num: '03', title: 'Development', desc: 'Coding clean TypeScript, styling with Tailwind, and optimizing layouts.' },
  { num: '04', title: 'Launch & Support', desc: 'Rigorous testing, SEO configuration, domain deployment, and ongoing audits.' },
];

// FAQs
const FAQS = [
  { question: 'How long does a website take?', answer: 'Typically, landing pages and business sites are launched within 1-2 weeks. Complex custom web systems and e-commerce stores take 3-6 weeks depending on requirements.' },
  { question: 'How much does a website cost?', answer: 'We offer competitive and flexible pricing. Each project starts with a detailed consultation followed by an upfront, fixed-price proposal that outlines all deliverables with zero hidden costs.' },
  { question: 'Do you provide hosting?', answer: 'We assist in setting up reliable, high-speed hosting (Vercel, Netlify, or Hostinger). We configure custom domains, SSL certificates, and custom emails to get your agency online seamlessly.' },
  { question: 'Can you redesign existing websites?', answer: 'Yes! We redesign outdated sites to elevate design aesthetics, optimize loading speeds, ensure mobile responsiveness, and increase user conversions.' },
  { question: 'Do you offer support after launch?', answer: 'Yes, we provide ongoing maintenance, regular feature additions, security patching, and technical troubleshooting to keep your site running at peak efficiency.' },
];

export default function Home() {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <NavBar />
      <WhatsAppFloat />

      {/* Hero Section */}
      <section id="home" className="relative pt-32 pb-24 md:pt-40 md:pb-36 bg-gradient-to-b from-white to-gray-50 dark:from-zinc-950 dark:to-zinc-900 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <HeroCarousel onScrollToContact={handleScrollToContact} />

          {/* Trust Indicators */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-20 border-t border-gray-100 dark:border-zinc-900 pt-12 text-left">
            {[
              { label: 'Fast Delivery', desc: 'Rapid sprint methodology' },
              { label: 'Mobile Responsive', desc: 'Tailored for all devices' },
              { label: 'SEO Friendly', desc: 'Engineered to rank highly' },
              { label: 'Ongoing Support', desc: 'Reliable system audits' },
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col space-y-2 border-l border-zinc-200 dark:border-zinc-800 pl-4">
                <div className="flex items-center space-x-2">
                  <svg className="w-5 h-5 text-accent-blue" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                  </svg>
                  <span className="font-bold text-gray-900 dark:text-white text-base">{item.label}</span>
                </div>
                <span className="text-xs text-gray-500 dark:text-zinc-400">{item.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 dark:text-zinc-400 text-lg">
              Tailored digital solutions built to drive business growth, conversion, and performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((srv, idx) => (
              <div
                key={idx}
                className="group relative p-8 rounded-2xl border border-gray-150 dark:border-zinc-900 bg-white dark:bg-zinc-900/50 hover:bg-gray-50 dark:hover:bg-zinc-900 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-zinc-200/20 dark:hover:shadow-none flex flex-col justify-between"
              >
                <div>
                  <div className="p-3 w-fit rounded-lg bg-blue-50 dark:bg-zinc-800 text-accent-blue mb-6 group-hover:scale-110 transition-transform duration-300">
                    {srv.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                    {srv.title}
                  </h3>
                  <p className="text-gray-600 dark:text-zinc-400 leading-relaxed text-sm">
                    {srv.desc}
                  </p>
                </div>
                <div className="mt-8 pt-4 border-t border-gray-100 dark:border-zinc-800/80">
                  <a
                    href="https://wa.me/YOUR_NUMBER"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-semibold text-accent-blue hover:underline"
                  >
                    <span>Inquire Now</span>
                    <svg className="w-4 h-4 ml-1.5 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="why-choose-us" className="py-24 bg-gray-50 dark:bg-zinc-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-4">
              Why Choose Nullstate
            </h2>
            <p className="text-gray-600 dark:text-zinc-400 text-lg">
              We merge modern aesthetics with clean developer practices to build assets that produce results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ADVANTAGES.map((adv, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-gray-200 dark:border-zinc-800/50 bg-white/60 dark:bg-zinc-900/30 glass-panel"
              >
                <h3 className="text-lg font-bold text-gray-900 dark:text-white flex items-center mb-3">
                  <svg className="w-5 h-5 text-accent-blue mr-2.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {adv.title}
                </h3>
                <p className="text-gray-600 dark:text-zinc-400 text-sm leading-relaxed">
                  {adv.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section id="process" className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-4">
              Our Process
            </h2>
            <p className="text-gray-600 dark:text-zinc-400 text-lg">
              A structured step-by-step workflow designed to deliver quality results from concept to deploy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="relative group">
                {/* Visual Connector Line */}
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-[1px] bg-gray-200 dark:bg-zinc-800 z-0 transform -translate-x-4" />
                )}
                <div className="relative z-10 flex flex-col items-start p-6 rounded-xl hover:bg-gray-50 dark:hover:bg-zinc-900/40 transition-colors duration-200">
                  <span className="text-4xl sm:text-5xl font-black text-gray-200 dark:text-zinc-800 mb-4 block group-hover:text-accent-blue transition-colors">
                    {step.num}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-500 dark:text-zinc-400 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 bg-gray-50 dark:bg-zinc-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-4">
              Featured Work
            </h2>
            <p className="text-gray-600 dark:text-zinc-400 text-lg">
              Explore some of our digital solutions engineered for growth and usability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Business Website', cat: 'Corporate / Startup', bg: 'bg-zinc-800' },
              { title: 'E-Commerce Store', cat: 'Retail / Checkout', bg: 'bg-zinc-900' },
              { title: 'Company Landing Page', cat: 'Marketing / Conversion', bg: 'bg-slate-900' },
              { title: 'Management System', cat: 'Dashboard / SaaS App', bg: 'bg-zinc-950' },
            ].map((proj, idx) => (
              <div key={idx} className="group overflow-hidden rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-md">
                <div className={`h-64 sm:h-80 w-full ${proj.bg} relative flex items-center justify-center p-6 border-b border-gray-100 dark:border-zinc-800/80`}>
                  {/* Mockup Card Display */}
                  <div className="w-11/12 h-5/6 bg-white dark:bg-zinc-950 rounded-lg shadow-2xl border border-gray-200/50 dark:border-zinc-800 p-4 overflow-hidden relative transform group-hover:scale-[1.03] transition-transform duration-500">
                    {/* Header Controls */}
                    <div className="flex items-center space-x-1.5 mb-4">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    {/* Mock Content */}
                    <div className="space-y-3">
                      <div className="h-4 w-2/5 bg-gray-250 dark:bg-zinc-800 rounded" />
                      <div className="h-10 w-full bg-gray-100 dark:bg-zinc-900 rounded" />
                      <div className="grid grid-cols-3 gap-2">
                        <div className="h-16 bg-gray-50 dark:bg-zinc-900/60 rounded" />
                        <div className="h-16 bg-gray-50 dark:bg-zinc-900/60 rounded" />
                        <div className="h-16 bg-gray-50 dark:bg-zinc-900/60 rounded" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 flex justify-between items-center bg-white dark:bg-zinc-900">
                  <div>
                    <span className="text-xs font-semibold text-accent-blue uppercase tracking-wider">{proj.cat}</span>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mt-1">{proj.title}</h3>
                  </div>
                  <a
                    href="https://wa.me/YOUR_NUMBER"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full border border-gray-200 dark:border-zinc-800 hover:bg-gray-100 dark:hover:bg-zinc-800 text-gray-700 dark:text-white transition-all cursor-pointer"
                    aria-label={`Inquire about ${proj.title}`}
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-white dark:bg-zinc-950 border-y border-gray-100 dark:border-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white">
              What Our Clients Say
            </h2>
          </div>
          <TestimonialCarousel />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white dark:bg-zinc-950">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-gray-600 dark:text-zinc-400 text-lg">
              Have questions? Find quick answers about our processes and delivery below.
            </p>
          </div>

          <div className="space-y-2">
            {FAQS.map((faq, idx) => (
              <FAQItem key={idx} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-50 dark:bg-zinc-900/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Info Info */}
            <div className="flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-accent-blue uppercase tracking-widest block mb-4">
                  Get In Touch
                </span>
                <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-gray-900 dark:text-white mb-6">
                  Ready to Start Your Project?
                </h2>
                <p className="text-gray-600 dark:text-zinc-400 text-base sm:text-lg leading-relaxed mb-8">
                  Get a free consultation and project roadmap. Fill out the inquiry form or chat with us on WhatsApp to discuss your goals instantly.
                </p>

                {/* Direct Contact Cards */}
                <div className="space-y-6">
                  <a
                    href="https://wa.me/YOUR_NUMBER"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center p-4 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 hover:bg-gray-100 dark:hover:bg-zinc-800/80 transition-all group"
                  >
                    <div className="p-3 rounded-lg bg-[#25D366]/10 text-[#25D366] mr-4 group-hover:scale-110 transition-transform">
                      <svg className="w-6 h-6 fill-current" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L32 503l138.2-36.2c32.2 17.5 68.2 26.8 104.9 26.8 122.4 0 222-99.6 222-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-82.1 21.5 21.9-80-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Chat on WhatsApp</h3>
                      <p className="text-sm text-gray-500 dark:text-zinc-400 mt-0.5">Quick response in minutes</p>
                    </div>
                  </a>

                  <div className="flex items-start p-4 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/35 backdrop-blur-sm">
                    <div className="p-3 rounded-lg bg-blue-50 dark:bg-zinc-800 text-accent-blue mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Email Address</h3>
                      <p className="text-sm text-gray-500 dark:text-zinc-400 mt-0.5">hello@nullstate.co</p>
                    </div>
                  </div>

                  <div className="flex items-start p-4 rounded-xl border border-gray-200 dark:border-zinc-800 bg-white/40 dark:bg-zinc-900/35 backdrop-blur-sm">
                    <div className="p-3 rounded-lg bg-blue-50 dark:bg-zinc-800 text-accent-blue mr-4">
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 dark:text-white">Location</h3>
                      <p className="text-sm text-gray-500 dark:text-zinc-400 mt-0.5">Zambia</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Hours / Meta */}
              <div className="mt-12 lg:mt-0 pt-8 border-t border-gray-200 dark:border-zinc-800/80 text-gray-500 dark:text-zinc-400 text-sm">
                <span className="font-bold text-gray-700 dark:text-zinc-300 block mb-1">Business Hours:</span>
                Monday – Friday: 08:00 – 17:00 (CAT) <br />
                Saturday: 09:00 – 13:00 (CAT)
              </div>
            </div>

            {/* Contact Form Card */}
            <div className="p-8 rounded-2xl border border-gray-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white dark:bg-zinc-950 border-t border-gray-200 dark:border-zinc-900 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <h3 className="text-xl font-black text-gray-950 dark:text-white mb-4">Nullstate</h3>
              <p className="text-gray-500 dark:text-zinc-400 max-w-sm text-sm leading-relaxed">
                Building premium, high-converting digital solutions and modern websites for startups and entrepreneurs.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-4 uppercase tracking-wider">Quick Links</h4>
              <ul className="space-y-2.5 text-sm">
                <li><a href="#services" className="text-gray-500 dark:text-zinc-400 hover:text-accent-blue dark:hover:text-white">Services</a></li>
                <li><a href="#why-choose-us" className="text-gray-500 dark:text-zinc-400 hover:text-accent-blue dark:hover:text-white">Why Choose Us</a></li>
                <li><a href="#process" className="text-gray-500 dark:text-zinc-400 hover:text-accent-blue dark:hover:text-white">Process</a></li>
                <li><a href="#contact" className="text-gray-500 dark:text-zinc-400 hover:text-accent-blue dark:hover:text-white">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 dark:text-white text-sm mb-4 uppercase tracking-wider">Social Links</h4>
              <div className="flex space-x-4">
                {['linkedin', 'twitter', 'instagram'].map((soc) => (
                  <a
                    key={soc}
                    href={soc === 'linkedin' ? 'https://linkedin.com/company/nullstate' : soc === 'twitter' ? 'https://twitter.com/nullstate' : 'https://instagram.com/nullstate'}
                    className="p-2.5 rounded-full border border-gray-200 dark:border-zinc-800 hover:border-accent-blue dark:hover:border-zinc-700 text-gray-600 dark:text-zinc-400 hover:text-accent-blue dark:hover:text-white transition-all cursor-pointer"
                    aria-label={`Connect with us on ${soc}`}
                  >
                    <span className="sr-only">{soc}</span>
                    {/* Tiny social square icon fallback */}
                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm1 14h-2v-4h2v4zm0-6h-2V8h2v2z" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-gray-200 dark:border-zinc-900 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 dark:text-zinc-400">
            <span>© {new Date().getFullYear()} Nullstate. All rights reserved.</span>
            <span className="mt-4 md:mt-0">Zambia's Premier Digital Web Agency</span>
          </div>
        </div>
      </footer>
    </>
  );
}
