import SectionHeading from '../components/SectionHeading.jsx';
import SocialLinks from '../components/SocialLinks.jsx';

export default function Contact() {
  return <section className="section contact-section" id="contact"><div className="page-shell contact-inner"><div><SectionHeading eyebrow="06 — Get in touch" title="Let’s build something together." note="Open to frontend opportunities and projects."/><p className="contact-copy">If you’d like to discuss a role or a project, connect through GitHub. Direct email contact will be available once an address is added.</p><span className="button unavailable" aria-disabled="true" title="An email address has not been provided">Email unavailable</span><p className="contact-note">The portfolio owner’s email address has not been configured yet.</p></div><aside className="contact-aside"><span className="contact-orbit" aria-hidden="true">VC</span><p className="eyebrow">Elsewhere</p><SocialLinks/><p className="availability-label"><i/> Open to frontend opportunities</p></aside></div></section>;
}
