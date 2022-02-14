//Components
import Header from '../components/header/Header';
import Offers from '../components/offers/Offers';

const Home = () => {
  return (
    <>
      <Header 
        title="Visit Canada with prices from $800" 
        bodyOne="Prepare your bags and forget your worries"
        bodyTwo="to start enjoying your holidays in this fantastic country"
        button="BUY NOW"
      />
      <Offers />
    </>
  );
};

export default Home;
