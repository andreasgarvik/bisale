import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-items-center p-16 gap-32 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center row-start-1">
        <div className="text-center text-lg pb-4">
          BISALE tilbyr kurs og kompetanseheving innenfor helse.
        </div>
        <div className="mb-4">
        </div>
      </div >
      <div className="flex flex-col items-center row-start-2">
        <Image
          src="/notebook.svg"
          alt="unDraw illustration"
          width={180}
          height={32}
          priority
        />
      </div>
      <div className="text-center text-sm pb-4">
        Kursinnholdet er opphavsrettsbeskyttet – uautorisert filming, kopiering og distribusjon er ikke tillatt.
      </div>
    </main>
  );
}