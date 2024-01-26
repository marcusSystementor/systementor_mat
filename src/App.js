
import './App.css';
import "./styling/Home.css";
import {Home} from "./components/Home"

import { Testomonials } from './components/Testomonials';
import { About } from './components/About';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { RootLayOut } from './components/RootLayout';


const router = createBrowserRouter([
  {
    path:"/",
    element: <RootLayOut />,
    children: [
      {path: "/", element: <Home />},
      {path: "/about", element: <About />},
      {path: "/testomonials", element: <Testomonials />},
    ]
  }
])


function App() {
  return <RouterProvider router= {router} />




  }

  export default App;