import MenuComponent from "../../../Shared/MenuComponent/MenuComponent";

const FeaturedDish = () => {
  return (
    <>
      <div className="w-full flex flex-wrap flex-col md:flex-row md:items-start gap-6 py-10">
        {/* Featured food details */}
        <div className="flex-grow">hello</div>
        {/* some menu items */}
        <div className="flex-grow">
          <h1 className="font-bold text-2xl mb-8">Our Popular</h1>
          <MenuComponent />
        </div>
      </div>
    </>
  );
};

export default FeaturedDish;
