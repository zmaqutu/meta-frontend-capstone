import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import pageConfigs from './utils/pageConfigs';

function App() {
  return (
    <>
    <Header />
    <main>
      <Routes>
        <Route path={pageConfigs.get('home').path} element={<Home/>} />
        <Route path={pageConfigs.get('about').path} element={<About/>} />
        <Route path={pageConfigs.get('menu').path} element={<Menu/>} />
        <Route path={pageConfigs.get('reservations').path} element={<Bookings/>} />
        <Route path={pageConfigs.get('confirmedReservation').path} element={<ConfirmedBooking/>} />
        <Route path={pageConfigs.get('contact').path} element={<Contact/>} />
      </Routes>
    </main>
    </>
  );
}

export default App;
