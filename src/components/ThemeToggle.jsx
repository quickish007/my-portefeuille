import React, { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [dark]);

  return (
    <button onClick={() => setDark(!dark)} className="p-2 rounded focus:outline-none">
      {dark ? '☀️' : '🌙'}
    </button>
  );
}