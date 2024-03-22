import Hero from '../components/Hero.jsx';
import InfoBoxes from '../components/InfoBoxes.jsx';
import HomeProperties from '../components/HomeProperties.jsx';
import FeaturedProperties from '../components/FeaturedProperties.jsx';

const HomePage = () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <FeaturedProperties />
      <HomeProperties />
    </>
  );
};

export default HomePage;
