import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar.jsx';
import Hero from '../sections/Hero.jsx';
import About from '../sections/About.jsx';
import Skills from '../sections/Skills.jsx';
import Experience from '../sections/Experience.jsx';
import Projects from '../sections/Projects.jsx';
import Process from '../sections/Process.jsx';
import Contact from '../sections/Contact.jsx';
import Footer from '../sections/Footer.jsx';

export default function Home() {
  const [theme, setTheme] = useState(() => localStorage.getItem('portfolio-theme') || 'light');
  useEffect(() => { document.documentElement.dataset.theme = theme; localStorage.setItem('portfolio-theme', theme); }, [theme]);
  return <><Navbar theme={theme} onThemeToggle={() => setTheme(current => current === 'light' ? 'dark' : 'light')}/><main><Hero/><About/><Skills/><Experience/><Projects/><Process/><Contact/></main><Footer/></>;
}
