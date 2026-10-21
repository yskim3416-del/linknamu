import type { Metadata } from "next";
import "./globals.css";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: `${profile.name} | 링크나무`,
  description: profile.bio,
};

// 첫 렌더 전에 테마를 적용해 화면 깜빡임을 막는다
const themeScript = `
(function () {
  try {
    var saved = localStorage.getItem("theme");
    var dark = saved ? saved === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (dark) document.documentElement.classList.add("dark");
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        {/* Pretendard: 화면에 쓰인 글자만 내려받는 dynamic subset */}
        <link
          rel="stylesheet"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body className="font-sans text-stone-800 antialiased dark:text-stone-100">
        {children}
      </body>
    </html>
  );
}
