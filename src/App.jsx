import { useState} from 'react';
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);
  const cartItems = cart.map(item => item.quantity).reduce((sum, cur) => sum + cur, 0);

  return (
    <>
      <Navbar cartItems={cartItems}/>
      <div className="main">
        <Outlet context={[cart, setCart]}/>
      </div>
      <Footer />
    </>
  )
}

export default App
