import SectionHeading from '../components/SectionHeading.jsx';

const steps = [
  ['01', 'Understand', 'Clarify the need and who the experience is for.'],
  ['02', 'Plan', 'Break the work into clear interface and data needs.'],
  ['03', 'Build', 'Develop the experience with reusable components.'],
  ['04', 'Test', 'Check behavior, layout and responsive states.'],
  ['05', 'Deploy', 'Publish the finished work and review it live.'],
];
export default function Process() {
  return <section className="section page-shell" id="process"><SectionHeading eyebrow="05 — Process" title="A clear way of working" note="Small, considered steps from the first question to a live result."/><div className="process-grid">{steps.map(([number, title, description]) => <article key={number}><span>{number}</span><i/><h3>{title}</h3><p>{description}</p></article>)}</div><div className="bring-row"><div><p className="eyebrow">What I bring</p><h3>Useful frontend work,<br/>built with intention.</h3></div><div className="bring-tags"><span>Responsive interfaces</span><span>Reusable React components</span><span>API integration</span><span>Modern UI development</span><span>Performance mindset</span><span>Git/GitHub workflow</span></div></div></section>;
}
