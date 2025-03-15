'use client'

const LinkButton = ({ to }: { to: string }) => {
  return (
    <button
      onClick={() => window.open(to, "_blank")}
      className="bg-[#FFC0CB] text-black rounded-lg shadow hover:shadow-lg transition transform hover:scale-105 px-4 py-2"
    >
      Søk her
    </button>
  );
}

export default LinkButton;