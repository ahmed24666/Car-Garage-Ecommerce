import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { useState } from "react";
import './app.scss'
// pages
import Cart from './Pages/Cart/Cart'
import Home from './Pages/Home/Home'
import Single from './Pages/SingleProduct/Single'
import Shop from './Pages/Shop/Shop'
// componets 
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
// bootstrap 
import 'bootstrap/dist/css/bootstrap.min.css';
import Loader from "./Components/Loader/Loader";
import ScrollToTop from "./Components/ScrollToTop";



function App() {

  const Layout = () => {
    const [load, setLoad] = useState(true)
    const loading = () => {
      setLoad(false)
    }
    window.addEventListener('load', loading)
    return (
      <div className="app">
        {load ? (<Loader />) : (
          <>
            <ScrollToTop />
            <Navbar />
            <Outlet />
            <Footer />
          </>
        )}
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
        {
          path: "/shop",
          element: <Shop />,
        },
        {
          path: "/singleproduct/:Id",
          element: <Single />,
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;