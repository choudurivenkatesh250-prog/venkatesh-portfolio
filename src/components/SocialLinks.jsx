import { socialLinks } from '../data/socialLinks.js';

export default function SocialLinks({ className = '' }) {
  return <div className={`social-links ${className}`}>{socialLinks.map(link => link.href ? <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}<span aria-hidden="true"> ↗</span></a> : <span className="unavailable" key={link.label} title="Profile link has not been provided">{link.label} <small>link unavailable</small></span>)}</div>;
}
