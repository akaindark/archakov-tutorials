import React from "react";
import {Routes, Route, Navigate} from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import FullArticle from "./pages/FullArticle";
import NotFound from "./pages/NotFound";
import Layout from "./components/Layout";
import {Login} from "./pages/Login";
import Profile from "./pages/Profile";

export default function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path="about" element={<About/>}/>
          <Route path="post/:id" element={<FullArticle/>}/>
          <Route path="login" element={<Login />}/>
          <Route path="profile" element={<Profile />}/>
          <Route path="not-found" element={<NotFound/>}/>
          <Route path="*" element={<Navigate to="/not-found"/>}/>
        </Route>
      </Routes>
    </>
  )
}