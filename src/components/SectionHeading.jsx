export default function SectionHeading({ eyebrow, title, note }) {
  return <div className="section-heading"><div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>{note && <p className="section-note">{note}</p>}</div>;
}
