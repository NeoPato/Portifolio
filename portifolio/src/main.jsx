import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Contatc } from './components/Contatc.jsx'
import { Footer } from './components/Footer.jsx'
import { Header } from './components/Header.jsx'
import { Hero } from './components/Hero.jsx'
import { Projects } from './components/Projects.jsx'
import { Skills } from './components/Skills.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} 
from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: < App/>,
  },
  {
    path: "/contatc",
    element: < Contatc/>,
  },
  {
    path: "/footer",
    element: < Footer/>,
  },
  {
    path: "/header",
    element: < Header/>,
  },
  {
    path: "/hero",
    element: < Hero/>,
  },
  {
    path: "/projects",
    element: < Projects/>,
  },
  {
    path: "/skills",
    element: < Skills/>,
  }

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);