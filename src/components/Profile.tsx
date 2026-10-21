import Image from "next/image";

type ProfileProps = {
  name: string;
  bio: string;
  image: string;
};

export default function Profile({ name, bio, image }: ProfileProps) {
  return (
    <section className="flex flex-col items-center text-center">
      <Image
        src={image}
        alt={`${name} 프로필 사진`}
        width={112}
        height={112}
        priority
        className="h-28 w-28 rounded-full object-cover ring-2 ring-neutral-200 dark:ring-neutral-800"
      />
      <h1 className="mt-5 text-xl font-bold">{name}</h1>
      <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">{bio}</p>
    </section>
  );
}
