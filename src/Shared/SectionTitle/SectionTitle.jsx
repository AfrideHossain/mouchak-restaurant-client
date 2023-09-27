// eslint-disable-next-line react/prop-types
const SectionTitle = ({ title, size }) => {
  return (
    <div
      className={`border-y-2 border-red-500 w-fit text-white text-${
        size || "base"
      }`}
    >
      {title}
    </div>
  );
};

export default SectionTitle;
