import { useEffect, useState } from 'react';

export default function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState(ids[0]);
  const idsKey = ids.join('|');
  useEffect(() => {
    const update = () => {
      let active = ids[0];
      for (const section of document.querySelectorAll('main section[id]')) if (window.scrollY + 150 >= section.offsetTop) active = section.id;
      setActiveId(active);
    };
    window.addEventListener('scroll', update, { passive: true }); update();
    return () => window.removeEventListener('scroll', update);
  }, [idsKey]);
  return activeId;
}
