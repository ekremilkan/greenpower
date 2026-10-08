import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4 px-6">
      <Image
        className="h-auto w-56"
        src="/logo-dark.png"
        alt="GreenPower Jeneratör"
        width={900}
        height={207}
        priority
      />
      <p className="text-sm text-zinc-500">Site hazırlanıyor.</p>
    </main>
  );
}
