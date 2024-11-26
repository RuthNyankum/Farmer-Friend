import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Product from './pages/product';
import Contact from './pages/contact';

function App() {
  const router = createBrowserRouter([
    {
      index: true,
      element: <Home />,
    },
    {
      path: 'about-us',
      element: <About />,
    },
    {
      path: 'products',
      element: <Product />,
    },
    {
      path: 'contact-us',
      element: <Contact />,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
