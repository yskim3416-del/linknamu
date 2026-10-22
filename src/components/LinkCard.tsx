"use client";

import type { LinkItem } from "@/data/profile";

type LinkCardProps = LinkItem & {
  count: number;
  onClick?: (id: string) => void;
};

export default function LinkCard({ id, title, url, emoji, count, onClick }: LinkCardProps) {
  const handleClick = () => {
    onClick?.(id);

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

  // mailto: 링크는 새 탭 없이 메일 앱으로 바로 연결
  const isExternal = !url.startsWith("mailto:");

  return (
    <a
      href={url}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={handleClick}
      className="grid w-full grid-cols-[3.5rem_1fr_3.5rem] items-center rounded-2xl border border-white/70 bg-white/45 px-5 py-[1.125rem] font-medium text-stone-800 shadow-[0_8px_24px_-12px_rgba(140,82,45,0.25)] backdrop-blur-md transition duration-300 ease-out hover:-translate-y-px hover:bg-white/65 hover:shadow-[0_12px_28px_-12px_rgba(140,82,45,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-300/70 dark:border-white/10 dark:bg-white/[0.06] dark:text-stone-100 dark:shadow-[0_8px_24px_-12px_rgba(0,0,0,0.6)] dark:hover:bg-white/10"
    >
      {/* 이모지는 왼쪽에 고정하고 제목은 가운데 정렬 */}
      <span aria-hidden="true" className="text-lg leading-none">
        {emoji}
      </span>
      <span className="text-center">{title}</span>
      {/* 클릭 수는 오른쪽에 작은 글자로 표시 */}
      <span className="text-right text-xs font-normal tabular-nums text-stone-500 dark:text-stone-400">
        {count.toLocaleString()}회
      </span>
    </a>
  );
}
