import Image from "next/image";
import CourseCard from "../components/CourseCard";

const courses = [
  { id: 1, title: "Assistentkurs", description: "Mer informasjon kommer." },
  { id: 2, title: "Helsefagarbeider teori", description: "Mer informasjon kommer." },
  { id: 3, title: "Eksamensforberende kurs", description: "Mer informasjon kommer." },
  { id: 4, title: "Kombokurs", description: "Mer informasjon kommer." },
];

export default function Courses() {
  return (
    <main className="flex flex-col min-h-screen items-center justify-center gap-16 font-[family-name:var(--font-geist-sans)] px-4 md:px-0"> {/* Legg til padding på siden */}
      <div className="flex flex-col w-full max-w-4xl mx-auto">
        <CourseCard title={courses[0].title} description={courses[0].description} alignRight={true} />
        <CourseCard title={courses[1].title} description={courses[1].description} alignRight={false} />
        <CourseCard title={courses[2].title} description={courses[2].description} alignRight={true} />
        <CourseCard title={courses[3].title} description={courses[3].description} alignRight={false} />
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