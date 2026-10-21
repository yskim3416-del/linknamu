"use client";

import type { LinkItem } from "@/data/profile";

export default function LinkCard({ id, title, url }: LinkItem) {
  const handleClick = () => {
    // 페이지를 떠나도 요청이 유실되지 않도록 sendBeacon 우선 사용
    const body = JSON.stringify({ id });
    const sent = navigator.sendBeacon?.(
      "/api/clicks",
      new Blob([body], { type: "application/json" }),
    );
    if (!sent) {
      fetch("/api/clicks", { method: "POST", body, keepalive: true }).catch(() => {});
    }
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className="block w-full rounded-xl border border-neutral-300 bg-white px-5 py-4 text-center font-medium shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-neutral-700 dark:bg-neutral-900"
    >
      {title}
    </a>
  );
}
