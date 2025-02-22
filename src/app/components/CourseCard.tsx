const CourseCard = ({ title, description, alignRight }: { title: string; description: string; alignRight: boolean }) => (
  <div className={`flex ${alignRight ? "justify-end" : "justify-start"} mb-8`}>
    <div
      className="bg-[#FFC0CB] text-white w-full max-w-lg h-28 p-4 rounded-lg shadow transition-all duration-300 ease-in-out flex flex-col justify-between hover:h-40" // Vekst ved hover
    >
      <span className="text-xl font-bold">{title}</span>
      <p className="text-sm transition-opacity duration-300 ease-in-out opacity-0 hover:opacity-100">Under planlegging...</p>
      <p className="text-sm transition-opacity duration-300 ease-in-out">{description}</p>
    </div>
  </div>
);

export default CourseCard;