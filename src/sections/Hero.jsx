import Button from '../components/Button.jsx';
import SocialLinks from '../components/SocialLinks.jsx';

function DeveloperVisual() {
  return <div className="hero-visual" aria-label="Frontend technology overview"><div className="visual-grid"/><div className="visual-card"><div className="visual-head"><span><i/> <i/> <i/></span><b>frontend toolkit</b><span>•••</span></div><div className="visual-code"><p><em>const</em> <b>developer</b> = {'{'}</p><p className="indent"><i>focus:</i> <strong>"React applications"</strong>,</p><p className="indent"><i>craft:</i> <strong>"Responsive interfaces"</strong>,</p><p className="indent"><i>workflow:</i> [</p><p className="indent2"><strong>"Build"</strong>, <strong>"Refine"</strong>, <strong>"Ship"</strong></p><p className="indent">]</p><p>{'}'};</p></div><div className="visual-bottom"><span className="status-dot"/> Building with care <span>JavaScript · UTF-8</span></div></div><div className="tech-chip chip-one">React.js</div><div className="tech-chip chip-two">REST APIs</div><div className="tech-chip chip-three">Responsive UI</div><div className="visual-caption">A thoughtful approach to every interface</div></div>;
}

export default function Hero() {
  return <section className="hero page-shell" id="home"><div className="hero-copy"><p className="hero-kicker"><span/> Frontend Developer <b>·</b> India</p><h1>Hi, I’m Venkatesh.<br/><span>Building modern web<br className="desktop-break"/> experiences with React.</span></h1><p className="hero-intro">I build responsive, user-focused web applications using React, JavaScript and modern frontend technologies.</p><div className="hero-actions"><Button href="#projects">View my work <span aria-hidden="true">→</span></Button><span className="button unavailable" title="A resume file has not been provided">Resume unavailable</span></div><SocialLinks className="hero-social"/></div><DeveloperVisual/></section>;
}
