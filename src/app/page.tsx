import LinkCard from "@/components/LinkCard";
import Profile from "@/components/Profile";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <div className="relative min-h-dvh overflow-hidden">
      {/* 글래스 카드 뒤로 은은하게 비치는 장식용 빛 번짐 */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-24 h-72 w-72 rounded-full bg-amber-200/40 blur-3xl dark:bg-amber-700/10"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-[28rem] h-80 w-80 rounded-full bg-orange-200/50 blur-3xl dark:bg-orange-800/10"
      />

      <main className="relative mx-auto flex min-h-dvh w-full max-w-md flex-col px-7 pb-10 pt-6 sm:px-8 sm:pt-10">
        <div className="flex justify-end">
          <ThemeToggle />
        </div>
        <div className="mt-8">
          <Profile {...profile} />
        </div>
        <ul className="mt-12 flex flex-col gap-4 sm:gap-5">
          {links.map((link) => (
            <li key={link.id}>
              <LinkCard {...link} />
            </li>
          ))}
        </ul>
        <footer className="mt-auto pt-16 text-center text-xs tracking-[0.2em] text-stone-400 dark:text-stone-500">
          링크나무
        </footer>
      </main>
    </div>
  );
}
