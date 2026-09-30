export default function SkillCard({ skill }) {
  return <article className="skill-card"><span className="skill-mark" aria-hidden="true">{skill.name.slice(0, 1)}</span><h3>{skill.name}</h3><p>{skill.description}</p></article>;
}
