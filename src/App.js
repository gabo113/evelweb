import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Service from "./components/Service";
import Project from "./components/Project";
import About from "./components/About";
import Cta from "./components/Cta";
import Blog from "./components/Blog";
import Contact from "./components/Contact";


const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <> 
        <Navbar />
        <Hero />
        <Service />
        <Project />
        <About />
        <Cta />
        <Blog />
        <Contact />
        <Footer />
      </>
    ),
  },
])
function App() {
  return <RouterProvider router={router} />;
}

export default App;

