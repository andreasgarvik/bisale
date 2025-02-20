import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center pt-32">
        <Image
          src="/bisale_logo.svg"
          alt="BISALE logo"
          width={180}
          height={38}
          priority
        />
      </div>


      <div className="flex flex-col gap-4 flex-wrap items-center pt-64">
        <div className="text-sm">
          Ta kontakt med oss
        </div>
        <a href="mailto:post@bisale.no">post@bisale.no</a>
      </div>
    </main>
  );
}