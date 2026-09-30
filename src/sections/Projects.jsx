import SectionHeading from '../components/SectionHeading.jsx';
import ProjectCard from '../components/ProjectCard.jsx';
import { projects } from '../data/projects.js';

export default function Projects() {
  return <section className="section section-tint" id="projects"><div className="page-shell"><SectionHeading eyebrow="04 — Selected work" title="Projects with purpose" note="Applications I’ve built and the problems they explore."/><div className="projects-grid">{projects.map(project => <ProjectCard key={project.number} project={project}/>)}</div></div></section>;
}
