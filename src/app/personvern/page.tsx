import Image from "next/image";

const Personvern = () => {
  return (
    <main className="flex flex-col min-h-screen items-center justify-items-center pt-8 gap-24 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col max-w-2xl w-full items-center">
        <h1 className="text-xl font-bold pb-4">Personvern</h1>
        <iframe
          src="https://files.gdprcontrol.no/9307b3d6-e14f-4a74-901b-5c69320ed9e7.html"
          title="Personvernerklæring"
          className="max-w-2xl w-full h-96 bg-gray-100 rounded-lg"

        />
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="/studying.svg"
          alt="unDraw illustration"
          width={180}
          height={32}
          priority
        />
      </div>
    </main>
  );
}

export default Personvern;

