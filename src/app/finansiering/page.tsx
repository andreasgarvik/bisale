import Image from "next/image";
import LinkButton from "../components/LinkButton";

const Finansiering = () => {
  return (
    <main className="flex flex-col min-h-screen items-center justify-items-center pt-8 gap-16 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col items-center">
        <div className="text-center text-lg">
          LO-medlem?
        </div>
      </div >
      <div className="flex flex-col items-center">
        <Image
          src="/work-time.svg"
          alt="unDraw illustration"
          width={240}
          height={52}
          priority
        />
      </div>
      <div className="max-w-2xl w-full text-center text-sm pr-8 pl-8">
        Om du er medlem i et LO-forbund og har vært det i mer enn tre år, kan du søke LOs utdanningsfond om stipend til korte yrkesrettede kurs med inntil kr 4 000,-.
      </div>
      <div className="flex flex-col items-center text-center text-sm">
        <div className="flex flex-col items-center text-center text-sm gap-4">
          <a href="https://www.lo.no/hva-vi-gjor/los-utdanningsfond/" className="text-blue-600 hover:underline">
            Les mer om LOs utdanningsfond
          </a>
          <LinkButton to="https://utdanningsfond.lo.no/" />
        </div>
      </div>
      <div className="flex flex-col items-center text-center text-sm pr-8 pl-8">
        Ellers kan du høre med din arbeidsgiver om de kan dekke kursavgiften.
      </div>
    </main>
  );
}

export default Finansiering;