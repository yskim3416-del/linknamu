export type LinkItem = {
  id: string;
  title: string;
  url: string;
};

export const profile = {
  name: "김행크",
  bio: "최고의 콘텐츠 크리에이터",
  image: "/profile.svg",
};

export const links: LinkItem[] = [
  { id: "instagram", title: "Instagram", url: "https://instagram.com" },
  { id: "youtube", title: "YouTube", url: "https://youtube.com" },
  { id: "blog", title: "블로그", url: "https://blog.naver.com" },
];
