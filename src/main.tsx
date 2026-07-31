import "@/styles/global.css"

import {createRoot} from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router";
import HomePage from "@/pages/home.tsx";
import About from "@/pages/About.tsx";
import Contact from "@/pages/Contact.tsx";
import MotorcycleDetails from "@/pages/MotorcycleDetails.tsx";


createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
   <Routes>
  <Route path="/" element={<HomePage />} />
  <Route path="/about" element={<About />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/motorcycle/:id" element={<MotorcycleDetails />} />
</Routes>
</BrowserRouter>
);
