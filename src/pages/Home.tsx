import Main from "../components/Main";
import Section from "../components/Section";
import Slider from "../components/Slider";
import Testimonial from "../components/Testimontial";
import What from "../components/What";

const Home = () => {
  return (
    <div className="flex flex-wrap flex-col">
      <Main />
      <Section />
      <What />
      <Testimonial />
      <Slider />
    </div>
  );
};

export default Home;
