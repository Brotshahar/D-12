import { createBrowserRouter, createRoutesFromElements, Route } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./component/pages/home/Home";
import Layout from "./component/router/Layout";
import Quotes from "./component/pages/quotes/Quotes";
import About from "./component/pages/about/About";
import Contactus from "./component/pages/contactus/Contactus";



function App() {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />} >
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/contact" element={<Contactus />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}
export default App
