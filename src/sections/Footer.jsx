import { navigation } from '../data/navigation.js';
import { socialLinks } from '../data/socialLinks.js';

export default function Footer() {
  return <footer className="footer page-shell"><a className="footer-brand" href="#home"><span className="brand-mark">VC</span><span><b>Venkatesh Choudury</b><small>Frontend Developer</small></span></a><nav aria-label="Footer navigation">{navigation.map(item => <a key={item.href} href={item.href}>{item.label}</a>)}</nav><div className="footer-bottom"><span>© 2026 Venkatesh Choudury</span><div>{socialLinks.map(link => link.href ? <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a> : <span key={link.label}>{link.label} unavailable</span>)}</div><a href="#home">Back to top ↑</a></div></footer>;
}
