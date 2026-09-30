import SectionHeading from '../components/SectionHeading.jsx';
import { experience } from '../data/experience.js';

export default function Experience() {
  return <section className="section page-shell" id="experience"><SectionHeading eyebrow="03 — Experience" title="Learning by building" note="Hands-on frontend work and steady growth."/><div className="experience-list">{experience.map(item => <article className="experience-card" key={item.company}><div className="experience-marker"><span/></div><div className="experience-main"><div className="experience-top"><div><p className="eyebrow">{item.type}</p><h3>{item.role}</h3><p className="company">{item.company}</p></div><span className="date-label">Frontend</span></div><p className="experience-intro">{item.summary}</p><ul className="experience-points">{item.responsibilities.map(point => <li key={point}>{point}</li>)}</ul></div></article>)}</div></section>;
}
