import Image from "next/image";

export default function Home() {
  return (
    <div>
      <main>
        <Image
          className="dark:invert"
          src="/vercel.svg"
          alt="Vercel logomark"
          width={16}
          height={16}
        />
      </main>
    </div>
  );
}
