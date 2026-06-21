'use client';
import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    email: '',
    phoneNumber: '',
    projectDescription: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({
          name: '',
          businessName: '',
          email: '',
          phoneNumber: '',
          projectDescription: '',
        });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Something went wrong. Please try again.');
      }
    } catch (err) {
      setStatus('error');
      setErrorMessage('Network error. Please verify your connection and try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
          placeholder="John Doe"
        />
      </div>

      <div>
        <label htmlFor="businessName" className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
          Business Name
        </label>
        <input
          type="text"
          id="businessName"
          name="businessName"
          value={formData.businessName}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
          placeholder="Acme Corp"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
            placeholder="john@example.com"
          />
        </div>

        <div>
          <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all"
            placeholder="+260 97 1234567"
          />
        </div>
      </div>

      <div>
        <label htmlFor="projectDescription" className="block text-sm font-medium text-gray-700 dark:text-zinc-300 mb-2">
          Project Details <span className="text-red-500">*</span>
        </label>
        <textarea
          id="projectDescription"
          name="projectDescription"
          required
          rows={4}
          value={formData.projectDescription}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-zinc-800 bg-white/50 dark:bg-zinc-900/50 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-accent-blue focus:border-transparent transition-all resize-y"
          placeholder="Tell us about your project goals, timeline, and requirements..."
        />
      </div>

      {status === 'success' && (
        <div className="p-4 rounded-lg bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900/50 text-green-800 dark:text-green-300 text-sm">
          Thank you! Your inquiry has been submitted successfully. We will get back to you shortly.
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 rounded-lg bg-red-50 dark:bg-red-950/30 border border-red-200 dark:border-red-900/50 text-red-800 dark:text-red-300 text-sm">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-4 px-6 rounded-lg bg-accent-blue hover:bg-accent-blue-hover text-white font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent-blue disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-md cursor-pointer"
      >
        {status === 'submitting' ? (
          <>
            <svg className="animate-spin h-5 h-5 text-white" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            <span>Submitting...</span>
          </>
        ) : (
          <span>Send Inquiry</span>
        )}
      </button>
    </form>
  );
}
