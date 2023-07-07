import heroBanner from "../../img/hero-banner.jpg";
import NavBar from "../NavBar";
import StarWars from "./StarWars";

const HeroSection = () => {
  return (
    <section
      style={{ backgroundImage: `url(${heroBanner})` }}
      className="min-h-[50vh] text-white py-2 px-3 lg:py-4 lg:px-4"
    >
      <NavBar />
      <StarWars />
    </section>
  );
};

export default HeroSection;
