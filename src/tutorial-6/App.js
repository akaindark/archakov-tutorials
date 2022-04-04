import React from "react";
import {Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import Footer from "./components/Footer";
import FullArticle from "./pages/FullArticle";
import NotFound from "./pages/NotFound";

export default function App() {

  return (
    <>
      <Header/>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/post/:id" element={<FullArticle/>}/>
        <Route path="*" element={<NotFound />}/>
      </Routes>

      <Footer/>
    </>
  )
}