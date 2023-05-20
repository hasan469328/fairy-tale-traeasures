import useTitle from "../../../hooks/useTitle";
import CarouselSection from "./CarouselSection";
import Gallery from "./Gallery";
import Offer from "./Offer";
import TabLi from "./TabLi";
import YouTubeGrid from "./YouTubeGrid";

const Home = () => {
  useTitle('Home')
  return (
    <div>
      <CarouselSection></CarouselSection>
      <Gallery></Gallery>
      <TabLi></TabLi>
      <YouTubeGrid></YouTubeGrid>
      <Offer></Offer>
    </div>
  );
};

export default Home;