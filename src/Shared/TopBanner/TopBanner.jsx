import "./TopBanner.css";
const TopBanner = () => {
  return (
    <>
      <div className="bg-neutral-focus h-80 flex items-center justify-center">
        <div className="w-full flex justify-around items-center">
          <div className="border-2 border-red-500 px-6 py-3">
            <p className="text-white text-xl">Call - +880 1700000000</p>
          </div>
          <div className="flex flex-col items-center site-logo">
            <h1 className="text-3xl font-extrabold tracking-wider text-primary uppercase">
              Mouchak
            </h1>
            <h3 className="text-primary text-xl font-semibold tracking-widest uppercase">
              Restaurant
            </h3>
          </div>
          <div>
            <button className="btn btn-lg btn-primary rounded-none normal-case text-xl font-medium px-8">
              Reservation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBanner;
