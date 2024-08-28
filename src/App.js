import { useState } from 'react';
import './App.css';
import { createBrowserRouter, Router, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Page404 from './pages/Page404';
import routes from './routes';
import Biba from './pages/Biba';
import MyCart from './components/Mycart';
import Mycart from './components/Mycart';
function App() {
 

  const router=createBrowserRouter([
    {element:<Layout/>,errorElement:<Page404/>,children:routes}
  ])
  return <div>
    <RouterProvider router={router}>
   
    </RouterProvider>
    
  
  </div>
  
}

export default App;
