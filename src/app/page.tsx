"use client";
import React from "react";
import Header from "./__components/Header";
import Hero from "./__components/hero";
import Projects from "./__components/projects";
import Experience from "./__components/experience";
import Footer from "./__components/footer";
import Contacts from "./__components/Contacts";

import SlideInAnimation from "./__components/SlideInAnimation";

import SplashScreen from "./__components/SplashScreen";

export default function Home() {
  const [showSplash, setShowSplash] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SplashScreen visible={showSplash} />
      {!showSplash && (
      <>
        <Header />
        <main className="pt-16">
          <SlideInAnimation duration={0.5} from="top" delay={1.3}>
            <Hero />
          </SlideInAnimation>
          <SlideInAnimation duration={0.5} from="left">
            <Projects />
          </SlideInAnimation>
          <SlideInAnimation duration={0.5} from="right">
            <Experience />
          </SlideInAnimation>
          {/* <SlideInAnimation duration={0.5} from="left">
            <Testimonials />
          </SlideInAnimation>
          <SlideInAnimation duration={0.5} from="right">
            <FAQ />
          </SlideInAnimation> */}
        </main>
        <Footer />
        <Contacts />
      </>
      )}
    </>
  );
}
