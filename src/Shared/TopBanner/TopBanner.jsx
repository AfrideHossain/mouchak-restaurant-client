import "./TopBanner.css";
const TopBanner = () => {
  return (
    <>
      <div className="h-80 flex items-center justify-center">
        <div className="w-full flex flex-col md:flex-row gap-10 md:justify-between items-center">
          <div className="border-2 border-red-500 md:px-6 md:py-3 p-3">
            <p className="text-white md:text-xl text-base">
              Call - 880 1700000000
            </p>
          </div>
          <div className="flex flex-col items-center site-logo">
            <h1 className="md:text-3xl text-2xl font-extrabold tracking-widest text-primary uppercase">
              Mouchak
            </h1>
            <h3 className="text-primary md:text-xl text-lg font-semibold tracking-widest uppercase">
              Restaurant
            </h3>
          </div>
          <div>
            <button className="btn md:btn-lg btn-md btn-primary rounded-none normal-case text-xl font-medium px-8">
              Reservation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBanner;
