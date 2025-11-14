'use client';
import './globals.css';
import { useEffect, useState } from 'react';

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('light');
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [menuOpen, setMenuOpen] = useState(false);

  // Dynamic page title updater
  useEffect(() => {
    const titles = {
      home: 'Home — Adam Firdaus',
      works: 'Works — Adam Firdaus',
      otw: 'On The Web — Adam Firdaus'
    };
    document.title = titles[activeSection] || 'Adam Firdaus';
  }, [activeSection]);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') || 'light';
    setTheme(storedTheme);
    document.documentElement.classList.toggle('dark', storedTheme === 'dark');

    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-white dark:bg-zinc-900 text-black dark:text-white transition-colors">
        <div
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled
              ? 'bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm shadow'
              : 'bg-white dark:bg-zinc-900'
            }`}
        >
          <div className="max-w-4xl mx-auto py-4 px-6 flex justify-between items-center">
            <div className="flex items-center gap-4">
              <p className="font-bold">🚀Adam Firdaus</p>

              <nav className="hidden md:flex gap-6 text-gray-600 dark:text-gray-300 text-sm">
                <a href="#home" className={activeSection === 'home' ? 'font-bold text-pink-500' : ''}>Home</a>
                <a href="#works" className={activeSection === 'works' ? 'font-bold text-pink-500' : ''}>Works</a>
                <a href="#otw" className={activeSection === 'otw' ? 'font-bold text-pink-500' : ''}>On The Web</a>
              </nav>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={toggleTheme}
                className="text-md border-none px-3 py-3 rounded-lg bg-pink-500 dark:bg-violet-300 hover:bg-gray-200 dark:hover:bg-zinc-800 transition"
              >
                {theme === 'light' ? '🌙' : '☀️'}
              </button>

              <button
                className="md:hidden p-3 rounded-lg hover:bg-gray-100 dark:hover:bg-zinc-800 transition"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? '✖' : '☰'}
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden px-6 pb-4 flex flex-col gap-3 text-gray-700 dark:text-gray-300 text-sm">
              <a onClick={() => setMenuOpen(false)} href="#home" className={activeSection === 'home' ? 'font-bold text-pink-500' : ''}>Home</a>
              <a onClick={() => setMenuOpen(false)} href="#works" className={activeSection === 'works' ? 'font-bold text-pink-500' : ''}>Works</a>
              <a onClick={() => setMenuOpen(false)} href="#otw" className={activeSection === 'otw' ? 'font-bold text-pink-500' : ''}>On The Web</a>
            </div>
          )}

          <hr />
        </div>

        <div className="pt-[80px] max-w-4xl mx-auto px-6">
          <div className="my-5">{children}</div>
        </div>

        <footer className="text-sm text-center my-5 text-slate-400">© 2025 Adam Firdaus. All Rights Reserved.</footer>
      </body>
    </html>
  );
}
