// app/page.js

"use client"; // Add this directive at the top

import Home from "@/pages/home";
import { useEffect } from 'react';
import Head from 'next/head';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Ensure you import the AOS CSS

function Index() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <Home />
    </div>
  );
}

export default Index;
