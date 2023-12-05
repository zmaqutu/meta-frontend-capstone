const pageConfigs = new Map();
pageConfigs.set('home', { name: 'Home', path: '/', anchorable: true });
pageConfigs.set('about', { name: 'About', path: '/about', anchorable: true });
pageConfigs.set('menu', { name: 'Menu', path: '/menu', anchorable: true });
pageConfigs.set('reservations', { 
  name: 'Reservations', 
  path: '/reservations', 
  anchorable: true 
});
pageConfigs.set('confirmedBooking', { 
  name: 'Confirmed Booking', 
  path: '/confirmed-reservation', 
  anchorable: false 
});
pageConfigs.set('contact', { name: 'Contact', path: '/contact', anchorable: true });


export default pageConfigs;