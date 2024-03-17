import Hero from '../components/Hero.jsx';
import InfoBoxes from '../components/InfoBoxes.jsx';
import HomeProperties from '../components/HomeProperties.jsx';

const HomePage = async () => {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
};

export default HomePage;
