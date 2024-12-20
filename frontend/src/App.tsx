import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.tsx';
import Login from './components/auth/Login.tsx';
import AuthPage from './pages/AuthPage.tsx';
import Form from "./components/form/Form.tsx";
import LoginPage from './components/logInPage/LogPage.tsx';
import AdminPage from './components/adminpage/AdminPage.jsx';
import CartPage from './components/cardpage/CardPage.jsx';
import Category from './components/category/category.tsx';
// import Form from "./components/form/registration/RegistrationForm.tsx";
import ProductPage from './components/productpage/productpage.tsx';
import Comments from './components/comments/comment.tsx';
import RegistrationForm from './components/form/registration/RegistrationForm.tsx';
import React from 'react';
import Product from '../src/components/productlist/product.tsx'

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
          path: 'form',
          element: <RegistrationForm />
        },
        {
            path: 'loginpage',
            element:<LoginPage/>
        },
        {
            
            path: 'product',
            element:<ProductPage/>
           
        },
        {
            path: 'comment',
            element: <Comments />
        }, 
        {
          path: 'subcategories',
          element: <Category/>
        }
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
      },
      {
            
        path: '/product/:id',
        element:<ProductPage/>,
       
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
