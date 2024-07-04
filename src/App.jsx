import { useState} from 'react';
import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom';

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <Navbar cartItems={cart.length}/>
      <div className="main">
        <Outlet context={[cart, setCart]}/>
      </div>
      <Footer />
    </>
  )
}

export default App
