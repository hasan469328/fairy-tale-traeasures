import useTitle from "../../../hooks/useTitle";
import CarouselSection from "./CarouselSection";
import Gallery from "./Gallery";
import Offer from "./Offer";
import TabLi from "./TabLi";
import YouTubeGrid from "./YouTubeGrid";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
const Home = () => {
  useTitle('Home')
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      once: true, // Only animate once
      easing: 'ease-in-out', // Easing function for the animation
    });
  }, []);
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