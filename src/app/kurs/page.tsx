import Image from "next/image";
import CourseCard from "../components/CourseCard";

const courses = [
  { id: 1, title: "Assistentkurs", hours: 30, description: "Vi tilbyr et intensivt 30-timers kurs på nett for deg som ønsker å bli helseassistent. Kurset gir deg en grundig innføring i de grunnleggende ferdighetene du trenger for å arbeide på sykehjem eller i andre institusjoner. Opplæringen går over én uke og avsluttes med en to timers prøve, som sikrer at du har tilegnet deg nødvendig kunnskap og kompetanse.", price: "kr 5 000,-", alignRight: false },
  { id: 2, title: "Helsefagarbeider teori", hours: 50, description: "Vi tilbyr et omfattende 50-timers teorikurs på nett for assistenter som ønsker å bli helsefagarbeidere. Kurset dekker sentrale temaer som grunnleggende sykdomslære, kommunikasjon, yrkesforståelse og anatomi. Undervisningen er basert på fagbøkene fra helsearbeiderutdanningen, slik at du får et solid teoretisk grunnlag for videre utvikling i yrket.", price: "kr 10 000,-", alignRight: true },
  { id: 3, title: "Eksamensforberedende kurs", hours: 10, description: "Vi tilbyr et intensivt 10-timers kurs på nett for å forberede deg best mulig. Kurset består av 6 timer gruppeundervisning og 4 timer individuell veiledning, skreddersydd etter dine spesifikke behov for å sikre at du er godt forberedt. Vi er så trygge på at kurset vårt vil hjelpe deg å lykkes, at vi tilbyr en gratis gjennomgang av eksamensoppgaven din i etterkant dersom du ikke skulle bestå.", price: "kr 10 000,-", alignRight: false },
  { id: 4, title: "Kombokurs: Teori + eksamen", hours: 60, description: "Ønsker du både teorikurset og eksamenskurset? Vi tilbyr begge til en redusert pris, slik at du får en grundig forberedelse til både læring og eksamen – til en ekstra gunstig pris!", price: "kr 16 500,-", alignRight: true },
];

const Kurs = () => {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center gap-16 font-[family-name:var(--font-geist-sans)] px-4 md:px-0"> {/* Legg til padding på siden */}
      <div className="flex flex-col w-full max-w-4xl mx-auto">
        {courses.map((course) => (
          <CourseCard key={course.id} title={course.title} description={course.description} price={course.price} alignRight={course.alignRight} />
        ))}
      </div>
      <div className="flex flex-col items-center mb-64">
        <Image
          src="/books.svg"
          alt="unDraw illustration"
          width={180}
          height={32}
          priority
        />
      </div>
    </main>
  );
}

export default Kurs;