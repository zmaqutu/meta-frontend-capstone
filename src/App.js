import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import pageConfigs from './utils/pageConfigs';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Menu from './pages/Menu/Menu';
import Reservations from './pages/Reservations/Reservations';
import ConfirmedReservation from './pages/ConfirmedReservation/ConfirmedReservation';
import Contact from './pages/Contact/Contact';

function App() {
  return (
    <>
    <Header />
    <main>
      <Routes>
        <Route path={pageConfigs.get('home').path} element={<Home/>} />
        <Route path={pageConfigs.get('about').path} element={<About/>} />
        <Route path={pageConfigs.get('menu').path} element={<Menu/>} />
        <Route path={pageConfigs.get('reservations').path} element={<Reservations/>} />
        <Route path={pageConfigs.get('confirmedReservation').path} element={<ConfirmedReservation/>} />
        <Route path={pageConfigs.get('contact').path} element={<Contact/>} />
      </Routes>
    </main>
    </>
  );
}

export default App;
