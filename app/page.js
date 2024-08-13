'use client'
import { useContext, useEffect } from "react";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Information from "./components/Information";
import Subscriptions from "./components/Subscriptions";
import { ThemeContext } from "@/Context";
import { useUser } from "@clerk/nextjs";

export default function Home() {
  const {authenticated, setAuthenticated}=useContext(ThemeContext);
  const {isLoaded,user}=useUser()
  const email = user?.primaryEmailAddress.emailAddress
  useEffect(()=>{
    if(isLoaded){
      setAuthenticated(true)
    }
  },[email,user,isLoaded])
  return (
    <main className="text-white max-w-full overflow-x-hidden">
        <Hero/>
          <svg className="wave-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path  fill="#fff" fillOpacity="1" d="M0,160 C360,320 1080,0 1440,160 L1440,320 L0,320 Z"></path>
          </svg>
        <Subscriptions/>
        <Information/>
        <Footer/>
    </main>
  );
}
