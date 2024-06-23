import Navbar from './components/Navbar/Navbar.jsx'
import Footer from './components/Footer/Footer.jsx'
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar />
      <div className="main">
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export default App
