import { Outlet } from 'react-router-dom';

//components
import Nav from './components/nav/Nav';
import Header from './components/header/Header';
import Offers from './components/offers/Offers';
import Footer from './components/footer/Footer';

//styles
import './App.scss';

function App() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
