import AboutUsShort from "./AboutUsShort/AboutUsShort";
import Banner from "./Banner/Banner";

const Homepage = () => {
  return (
    <>
      <section className="bg-neutral-focus">
        <div className="max-w-7xl mx-auto px-10">
          <Banner />
        </div>
      </section>
      <section className="bg-red-50">
        <div className="max-w-7xl mx-auto px-10">
          <AboutUsShort />
        </div>
      </section>
    </>
  );
};

export default Homepage;
