import Image from "next/image";

export default function About() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-items-center pt-8 gap-24 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center row-start-1">
        <div className="text-center text-lg pb-4">
          BISALE tilbyr kurs og kompetanseheving innenfor helse.
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
      <div className="flex flex-col max-w-2xl w-full items-center row-start-3">
        <h1 className="text-xl font-bold pb-4">Personvern</h1>
        <iframe
          src="https://files.gdprcontrol.no/d86255bb-b2a7-461b-81e9-354d38b8e374.html"
          title="Personvernerklæring"
          className="max-w-2xl w-full h-64"
        />
      </div>
      <div className="flex flex-col items-center text-center text-sm row-start-4">
        Kursinnholdet er opphavsrettsbeskyttet – uautorisert filming, kopiering og distribusjon er ikke tillatt.
      </div>
    </main>
  );
}