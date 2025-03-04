import Image from "next/image";

export default function Courses() {
  return (
    <main className="flex flex-col min-h-screen items-center md:gap-64 gap-16 font-[family-name:var(--font-geist-sans)]">
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
        {[
          { href: "https://forms.gle/8oNQvKfqAbYicbiN9", label: "Assistentkurs" },
          { href: "https://forms.gle/qAXoNgNLnvz8kKdM6", label: "Helsefagarbeider teori" },
          { href: "https://forms.gle/TsTP2Pc2uZAA5q3u6", label: "Eksamensforberende kurs" },
          { href: "https://forms.gle/ME6vDKD7QGgJ6AVJ8", label: "Kombokurs" },
        ].map(({ href, label }) => (
          <a key={href} href={href} className="bg-[#FFC0CB] text-black p-8 rounded-lg shadow hover:shadow-lg transition transform hover:scale-105">
            {label}
          </a>
        ))}
      </div>
      <div className="flex flex-col items-center">
        <Image
          src="/exams.svg"
          alt="unDraw illustration"
          width={180}
          height={32}
          priority
        />
      </div>
    </main>
  );
}