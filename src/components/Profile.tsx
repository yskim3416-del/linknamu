import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  image: string;
};

export default function Profile({ name, bio, image }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      {/* 흰 테두리와 겹친 그림자로 살짝 떠 있는 입체감 */}
      <div className="rounded-full bg-white/70 p-1.5 shadow-[0_18px_40px_-16px_rgba(140,82,45,0.45),0_2px_6px_rgba(140,82,45,0.08)] ring-1 ring-white/80 dark:bg-white/10 dark:shadow-[0_18px_40px_-16px_rgba(0,0,0,0.7)] dark:ring-white/10">
        <Image
          src={image}
          alt={`${name} 프로필 사진`}
          width={150}
          height={150}
          priority
          className="h-32 w-32 rounded-full object-cover sm:h-[150px] sm:w-[150px]"
        />
      </div>
      <h1 className="mt-7 text-2xl font-bold tracking-tight text-stone-900 dark:text-stone-50">
        {name}
      </h1>
      <p className="mt-3 max-w-[19rem] break-keep text-[15px] leading-relaxed text-stone-600 dark:text-stone-400">
        {bio}
      </p>
    </section>
  );
}
