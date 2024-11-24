import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Aftermenu from "./components/aftermenu/Aftermenu.js";
import Header from "./components/header/Header.tsx";
import Dropdown from "./components/dropmenu/Dropdown.js";
import LanguageDropdown from './components/languagedrop/LanguageDropdown.js'
import CurrencyDropdown from './components/currencydropdown/CurrencyDropdown.js'
import PosterSlider from "./components/posterslider/PosterSlider.js";
import Carousel from "./components/сarousel/Carousel.js";
import CustomPoster from "./components/customposter/CustomPoster.js";
import ProductList from "./components/productlist/ProductList.js";
import Banner from "./components/banner/Banner.js";
import SingleRowProductList from './components/singlerowproductlist/SingleRowProductList.js'
import Subscriptions from './components/subscriptions/Subscriptions.js'
import Footer from './components/footer/Footer.tsx'
import HomePage from './pages/HomePage.tsx';
import Login from './components/auth/Login.tsx';
import AuthPage from './pages/AuthPage.tsx';
import Form from "./components/form/Form.tsx";
import LoginPage from './components/logInPage/LogPage.tsx';
import AdminPage from './components/adminpage/AdminPage.tsx';
import CartPage from './components/cardpage/CardPage.jsx';


import Form from "./components/form/registration/RegistrationForm.tsx";

const router = createBrowserRouter([

    {
        path: '/',
        element: <HomePage />
    },

    {
      path: '/auth',
      element: <AuthPage />,
      children: [
        {
            path: 'login',
            element: <Login />
          },

        {
          path: 'registration',
          element: <Form />
        },
        {
            path: 'loginpage',
            element:<LoginPage/>
        },
      ]
    },
    {
        path: '/form/:id',  // Динамічний маршрут для сторінки продукту
        element: <Form />
      },
      {
        path: '/admin/:id',  // Динамічний маршрут для сторінки продукту
        element: <AdminPage />
      },
      {
        path: '/cardpage/:id',  // Динамічний маршрут для сторінки продукту
        element: <CartPage />
      }


  ]);

  function App() {
    const project = '';
  
    return (
      <div className="App">
        <h1>{project}</h1>
        <RouterProvider router={router} />
      </div>
    );
  }

  export default App;
