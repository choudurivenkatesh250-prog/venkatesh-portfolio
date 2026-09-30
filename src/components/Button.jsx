export default function Button({ href, children, variant = 'primary', ...props }) {
  const className = `button ${variant}`;
  return href ? <a className={className} href={href} {...props}>{children}</a> : <button className={className} {...props}>{children}</button>;
}
