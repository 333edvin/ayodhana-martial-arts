"use client";
import { useState, useEffect } from "react";
import Splash from "./Splash";

export default function SplashWrapper({ children }) {
  const [isLoading, setIsLoading] = useState(true);

useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && <Splash />}
        <div className={isLoading ? "hidden" : "block"}>
        {children}
      </div>
    </>
  );
}