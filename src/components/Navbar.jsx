import { useState } from 'react';
import { navigation } from '../data/navigation.js';
import useScrollSpy from '../hooks/useScrollSpy.js';
import ThemeToggle from './ThemeToggle.jsx';

export default function Navbar({ theme, onThemeToggle }) {
  const [open, setOpen] = useState(false);
  const activeId = useScrollSpy(['home', 'about', 'skills', 'experience', 'projects', 'contact']);
  return <header className="site-header"><nav className="nav-wrap" aria-label="Main navigation"><a className="wordmark" href="#home" onClick={() => setOpen(false)}><span className="brand-mark">VC</span><span>Venkatesh Choudury<small>Frontend Developer</small></span></a><button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}><span/><span/></button><div className={`nav-links ${open ? 'open' : ''}`}>{navigation.map(item => <a className={activeId === item.href.slice(1) ? 'active' : ''} href={item.href} key={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}<ThemeToggle theme={theme} onToggle={onThemeToggle}/><span className="resume-unavailable" title="A resume file has not been provided">Resume unavailable</span></div></nav></header>;
}
