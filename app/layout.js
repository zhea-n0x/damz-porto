'use client';
import './globals.css';
import { useEffect, useState } from 'react';

export default function RootLayout({ children }) {
  const [theme, setTheme] = useState('light');
  const [scrolled, setScrolled] = useState(false);

  const [activeSection, setActiveSection] = useState('home');

useEffect(() => {
  const sections = document.querySelectorAll('section[id]');
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    },
    { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
  );

  sections.forEach(section => observer.observe(section));

  return () => observer.disconnect();
}, []);


  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

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
    <html lang="en" className='scroll-smooth'>
      <body className="bg-white dark:bg-zinc-900 text-black dark:text-white transition-colors">
        <div
          className={fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            scrolled
              ? 'bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm shadow'
              : 'bg-white dark:bg-zinc-900'
          }}
        >
          <div className="max-w-4xl mx-auto py-4 px-6 flex justify-between items-center">
            <div className='flex flex-row items-center gap-8'>
              <div>
                <p className='font-bold'>🚀Adam Firdaus</p>
              </div>
              <nav className="flex gap-6 text-gray-600 dark:text-gray-300 text-sm">
                <a href="#home" className={activeSection === 'home' ? 'font-bold text-pink-500' : ''}>Home</a>
                <a href="#works" className={activeSection === 'works' ? 'font-bold text-pink-500' : ''}>Works</a>
                <a href="#otw" className={activeSection === 'otw' ? 'font-bold text-pink-500' : ''}>On The Web</a>
              </nav>

            </div>
            <button
              onClick={toggleTheme}
              className="text-md border-none px-3 py-3 rounded-lg bg-pink-500 dark:bg-violet-300 hover:bg-gray-200 dark:hover:bg-zinc-800 transition"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
          <hr />
        </div>

        <div className="pt-[80px] max-w-4xl mx-auto px-6">
          <div className='my-5'>
            {children}
          </div>
        </div>

        <footer className='text-sm text-center my-5 text-slate-400'>© 2025 Adam Firdaus. All Rights Reserved.</footer>
      </body>
    </html>
  );
}

 setTheme] = useState('light');
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px', threshold: 0 }
    );

    sections.forEach(section => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const storedTheme = localStorage.getItem('theme') || 'light';
      setTheme(storedTheme);
      document.documentElement.classList.toggle('dark', storedTheme === 'dark');
    }

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

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
    <html lang="en" className='scroll-smooth'>
      <body className="bg-white dark:bg-zinc-900 text-black dark:text-white transition-colors">
        <div
          className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
            scrolled
              ? 'bg-white/50 dark:bg-zinc-900/50 backdrop-blur-sm shadow'
              : 'bg-white dark:bg-zinc-900'
          }`}
        >
          <div className="max-w-4xl mx-auto py-4 px-6 flex justify-between items-center">
            <div className='flex flex-col md:flex-row md:items-center gap-2 md:gap-8 w-full'>
              <div>
                <p className='font-bold'>🚀Adam Firdaus</p>
              </div>

              {/* Desktop Navigation */}
              <nav className="gap-6 text-gray-600 dark:text-gray-300 text-sm hidden md:flex">
                <a href="#home" className={activeSection === 'home' ? 'font-bold text-pink-500' : ''}>Home</a>
                <a href="#works" className={activeSection === 'works' ? 'font-bold text-pink-500' : ''}>Works</a>
                <a href="#otw" className={activeSection === 'otw' ? 'font-bold text-pink-500' : ''}>On The Web</a>
              </nav>

              {/* Mobile Breadcrumb Navigation */}
              <nav className="text-gray-600 dark:text-gray-300 text-xs flex md:hidden">
                <a href="#home" className={activeSection === 'home' ? 'font-bold text-pink-500' : ''}>Home</a>
                {activeSection !== 'home' && (
                  <>
                    <span className="mx-1">/</span>
                    {activeSection === 'works' && (
                      <a href="#works" className="font-bold text-pink-500">Works</a>
                    )}
                    {activeSection === 'otw' && (
                      <a href="#otw" className="font-bold text-pink-500">On The Web</a>
                    )}
                  </>
                )}
              </nav>
            </div>

            <button
              onClick={toggleTheme}
              className="text-md border-none px-3 py-3 rounded-lg bg-pink-500 dark:bg-violet-300 hover:bg-gray-200 dark:hover:bg-zinc-800 transition"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>
          </div>
          <hr />
        </div>

        <div className="pt-[80px] max-w-4xl mx-auto px-6">
          <div className='my-5'>
            {children}
          </div>
        </div>

        <footer className='text-sm text-center my-5 text-slate-400'>© 2025 Adam Firdaus. All Rights Reserved.</footer>
      </body>
    </html>
  );
}
