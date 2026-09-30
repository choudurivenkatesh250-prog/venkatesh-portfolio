import SectionHeading from '../components/SectionHeading.jsx';
import SkillCard from '../components/SkillCard.jsx';
import { skills } from '../data/skills.js';

const groups = ['Frontend', 'Backend & Data', 'Tools'];
export default function Skills() {
  return <section className="section section-tint" id="skills"><div className="page-shell"><SectionHeading eyebrow="02 — Toolkit" title="Skills I put to work" note="A practical toolkit for building modern web experiences."/><div className="skill-groups">{groups.map(group => <div className="skill-group" key={group}><h3>{group}</h3><div>{skills.filter(skill => skill.category === group).map(skill => <SkillCard key={skill.name} skill={skill}/>)}</div></div>)}</div></div></section>;
}
