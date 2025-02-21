import Image from "next/image";

export default function Courses() {
  return (
    <main className="flex flex-col items-center justify-center p-16 gap-32 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center row-start-1">
        <div className="text-center text-lg pb-4">
          Kommer snart!
        </div>
      </div >
      <div className="flex flex-col items-center row-start-2">
        <Image
          src="/books.svg"
          alt="BISALE logo"
          width={180}
          height={32}
          priority
        />
      </div>
    </main>
  );
}