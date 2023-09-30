import { PiCopyright } from "react-icons/pi";

const CopyrightAndCredit = () => {
  return (
    <div className="flex md:items-center items-start gap-1">
      <PiCopyright size={14} className="text-white leading-normal" />
      <p className="text-white text-center md:text-left leading-normal text-sm">
        Copyright - Mouchak Restaurant | Design inherited from{" "}
        <span className="text-red-400">Vectorflow</span> | Crafted with care by{" "}
        <span className="text-red-400">Afrede Hossain</span>
      </p>
    </div>
  );
};

export default CopyrightAndCredit;
