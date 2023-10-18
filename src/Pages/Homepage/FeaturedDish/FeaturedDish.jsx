import { Link } from "react-router-dom";
import MenuComponent from "../../../Shared/MenuComponent/MenuComponent";
import SectionTitle from "../../../Shared/SectionTitle/SectionTitle";
import SpecialOffer from "./SpecialOffer/SpecialOffer";

const FeaturedDish = () => {
  return (
    <div className="py-10">
      {/* <div className="w-full flex flex-wrap flex-col md:flex-row md:items-start gap-6 py-10"> */}
      <SectionTitle
        title={"Featured"}
        size={"sm"}
        color={"text-black"}
        weight={"semibold"}
      />
      <div className="w-full grid md:grid-cols-2 gap-20 md:gap-10 mt-10">
        {/* Featured food details */}
        <div className="max-w-full space-y-5">
          <SpecialOffer />
        </div>
        {/* some menu items */}
        <div className="max-w-full">
          <h1 className="font-bold text-2xl mb-8">Our Popular</h1>
          <MenuComponent />
        </div>
        <div className="w-full flex justify-center md:col-span-2">
          <Link
            className="btn md:btn-md btn-sm btn-primary rounded-none btn-outline md:px-8 leading-none"
            to="/menu"
          >
            View Menu
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FeaturedDish;
