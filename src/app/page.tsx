import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen sm:p-40 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col items-center row-start-1">
        <Image
          src="/bisale_logo.svg"
          alt="BISALE logo"
          width={180}
          height={38}
          priority
        />
        <div className="text-lg">
          Kompetanse
        </div>
      </main>
      <div className="row-start-3 flex flex-col gap-4 flex-wrap items-center justify-center pb-16">
        <div className="text-sm">
          Ta kontakt med oss
        </div>
        <a href="mailto:post@bisale.no">post@bisale.no</a>
      </div>
    </div>
  );
}