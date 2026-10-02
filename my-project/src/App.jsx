import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Prcing from "./pages/Prcing";
import About from "./pages/About";
import FAQ from "./pages/FAQ";
import Features from "./pages/Features";
import LeadB from "./pages/LeadB";
import CreateA from "./pages/CreateA";
import Login from "./pages/Login";
import Header from "./components/header";
import Layout from "./components/Layout";
import Posts from "./components/Posts";


export default function App() {


  return <>
  
    {/* <Routes>
      <Route element={<Layout />}>
      <Route path="/" element={<Home />} />
      <Route path="/pricing" element={<Prcing />} />
      <Route path="/about" element={<About />} />
      <Route path="/faq" element={<FAQ />} />
      <Route path="/features" element={<Features />} />
      <Route path="/leaderboard" element={<LeadB />} />
      <Route path="/create-account" element={<CreateA />} />
      <Route path="/login" element={<Login />} />
      </Route>
    </Routes> */}
    {/* <Posts/> */}
  </>;
}
