import { createBrowserRouter, Navigate } from "react-router-dom";
import App from './App';
import Home from './components/Home/Home';
import Shop from './components/Shop/Shop';
import Cart from './components/Cart/Cart';

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Navigate replace to='/home'><Home /></Navigate>
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    }
])

export default router;
