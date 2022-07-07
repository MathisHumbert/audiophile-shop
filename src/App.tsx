import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Earphones from './pages/Earphones';
import Headphones from './pages/Headphones';
import Home from './pages/Home';
import Product from './pages/Product';
import Speakers from './pages/Speakers';

import MenuAside from './components/layout/MenuAside';
import Navbar from './components/layout/Navbar';

export default function App() {
  return (
    <Router>
      {/* <CartAside /> */}
      {/* <CheckoutAside /> */}
      <MenuAside />
      <Navbar />
      {/* <ScrollToTop /> */}

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/headphones' element={<Headphones />} />
        <Route path='/speakers' element={<Speakers />} />
        <Route path='/earphones' element={<Earphones />} />
        {/* <Route path='/checkout' element={<PrivateRoute />}>
          <Route index element={<Checkout />} />
        </Route> */}
        <Route path='/products/:productName' element={<Product />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
}
