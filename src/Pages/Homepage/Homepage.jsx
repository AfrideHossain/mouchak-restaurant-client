import AboutUsShort from "./AboutUsShort/AboutUsShort";
import Banner from "./Banner/Banner";
import FeaturedDish from "./FeaturedDish/FeaturedDish";

const Homepage = () => {
  return (
    <>
      <section className="bg-neutral-focus">
        <div className="md:max-w-7xl w-full mx-auto px-10">
          <Banner />
        </div>
      </section>
      <section className="bg-red-50">
        <div className="md:max-w-7xl w-full mx-auto px-10">
          <AboutUsShort />
        </div>
      </section>
      <section className="bg-white">
        <div className="md:max-w-7xl w-full mx-auto px-10">
          <FeaturedDish />
        </div>
      </section>
    </>
  );
};

export default Homepage;
