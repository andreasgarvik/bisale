import Image from "next/image";

const OmOss = () => {
  return (
    <main className="flex flex-col min-h-screen items-center justify-items-center pt-8 gap-24 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center">
        <div className="text-center text-lg pb-4">
          BISALE tilbyr kurs og kompetanseheving innenfor helse.
        </div>
      </div >
      <div className="flex flex-col items-center">
        <Image
          src="/notebook.svg"
          alt="unDraw illustration"
          width={180}
          height={32}
          priority
        />
      </div>
      <div className="flex flex-col items-center text-center text-sm">
        Kursinnholdet er opphavsrettsbeskyttet – uautorisert filming, kopiering og distribusjon er ikke tillatt.
      </div>
    </main>
  );
}

export default OmOss;