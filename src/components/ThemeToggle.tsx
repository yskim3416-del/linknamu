"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={dark ? "밝은 화면으로 전환" : "어두운 화면으로 전환"}
      className="rounded-full border border-white/70 bg-white/45 p-2.5 text-base leading-none shadow-[0_4px_14px_-8px_rgba(140,82,45,0.3)] backdrop-blur-md transition duration-300 hover:bg-white/65 dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/10"
    >
      {dark ? "☀️" : "🌙"}
    </button>
  );
}
