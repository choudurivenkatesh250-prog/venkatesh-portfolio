export default function ThemeToggle({ theme, onToggle }) {
  return <button className="theme-toggle" type="button" onClick={onToggle} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}>{theme === 'light' ? '◐ Dark' : '☼ Light'}</button>;
}
