// eslint-disable-next-line react/prop-types
const SectionTitle = ({ title, size, color, weight }) => {
  return (
    <div className={`border-y-2 border-red-500 w-fit py-1 flex items-center`}>
      <p
        className={`tracking-widest leading-none h-full uppercase font-${
          weight || "light"
        } ${color || "text-white"} text-${size || "base"}`}
      >
        {title}
      </p>
    </div>
  );
};

export default SectionTitle;
