import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import AOS from 'aos';

import "./css/index.css";
import 'tippy.js/dist/tippy.css';
import 'aos/dist/aos.css';
import "./css/normalize.css";

import Home from "./views/Home";

import { DarkModeProvider } from "./context/DarkModeContext";

document.querySelector('body').classList.add('bg-lightMode-bg', 'dark:bg-darkMode-bg');

AOS.init({
  startEvent: 'DOMContentLoaded',
  delay: 50,
  duration: 800,
});

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(

  <BrowserRouter>
    <DarkModeProvider>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </DarkModeProvider>
  </BrowserRouter>

);
