import Image from "next/image";

export default function Home() {
  return (
    <main className="grid min-h-screen pb-64 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center">
        <Image
          src="/bisale_logo.svg"
          alt="BISALE logo"
          width={180}
          height={38}
          priority
        />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="/sharing-knowledge.svg"
          alt="unDraw illustration"
          width={270}
          height={57}
          priority
        />
      </div>
      <div className="flex flex-col items-center"></div>
      <div className="flex flex-col gap-4 flex-wrap items-center">
        <div className="text-sm">
          Ta kontakt med oss
        </div>
        <a href="mailto:post@bisale.no">post@bisale.no</a>
      </div>
    </main>
  );
}