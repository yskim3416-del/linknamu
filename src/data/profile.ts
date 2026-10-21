export type LinkItem = {
  id: string;
  title: string;
  url: string;
  emoji?: string;
};

export const profile = {
  name: "김용수",
  bio: "독서와 글쓰기로 함께 성장을 꿈꾸는 Growing Together Navigator, 요즘에는 AI활용에 관심이 많아요",
  image: "/profile.png",
};

export const links: LinkItem[] = [
  { id: "blog", title: "블로그", url: "https://blog.naver.com/readtogrow", emoji: "📚" },
  { id: "instagram", title: "인스타그램", url: "https://www.instagram.com/happy.moment110/", emoji: "📸" },
  { id: "email", title: "이메일", url: "mailto:yskim3416@gmail.com", emoji: "✉️" },
];
