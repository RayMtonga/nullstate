'use client';
import React, { createContext, useContext, useEffect, useState } from 'react';


interface ThemeContextProps {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps>({
  theme: 'light',
  toggleTheme: () => {},
});

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  // Determine initial theme:
  // 1. Check localStorage for saved preference
  // 2. Fallback to system preference via matchMedia
  // 3. Default to 'light' if neither is available
  const getInitialTheme = (): 'light' | 'dark' => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme') as 'light' | 'dark' | null;
      if (saved) return saved;
      // Default to dark when no preference saved
      return 'dark';
    }
    return 'dark';
  };
  const [theme, setTheme] = useState<'light' | 'dark'>(getInitialTheme);
  const [mounted, setMounted] = useState(false);

  // Apply theme class on mount and when theme changes
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
    setMounted(true);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  // Prevent content flash on first render
  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
export default ThemeProvider;
export function useTheme() {
  return useContext(ThemeContext);
}
