import React from "react";
import Home from "./pages/Home";
import Header from "./components/Header";
import About from "./pages/About";
import Footer from "./components/Footer";
import FullArticle from "./pages/FullArticle";

export default function App() {
  const {pathname} = window.location;
  const postId = pathname.split("/post/")[1];

  return (
    <>

      <Header/>

      {pathname === '/' && <Home/>}
      {pathname === '/about' && <About/>}
      {pathname === '/login' && <h2>Login</h2>}
      {postId && <FullArticle id={postId}/>}

      <Footer/>
    </>
  )
}