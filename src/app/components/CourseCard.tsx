const CourseCard = ({ title, description, price, alignRight }: { title: string; description: string; price: string; alignRight: boolean }) => {
  return (
    <div className={`flex ${alignRight ? "justify-end" : "justify-start"} mb-6`}>
      <div
        className="bg-[#FFC0CB] text-black w-full max-w-lg p-6 rounded-lg shadow flex flex-col justify-between"
      >
        <span className="text-xl font-bold">{title}</span>
        <p className="text-sm">{description}</p>
        <p className="text-lg pt-4">{price}</p>
      </div>
    </div>
  );
};

export default CourseCard;