import Image from "next/image";

export default function Courses() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center gap-32 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center">
        <div className="text-center text-lg">
          Kommer snart!
        </div>
      </div >
      <div className="flex flex-col items-center">
        <Image
          src="/books.svg"
          alt="unDraw illustration"
          width={180}
          height={32}
          priority
        />
      </div>
    </main>
  );
}