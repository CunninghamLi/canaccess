import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import Services from "./components/Services";
import Steps from "./components/Steps";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./app.css";

function App() {
  const [lang, setLang] = useState("fr");

  return (
    <>
      <Header lang={lang} onLangChange={setLang} />
      <Hero lang={lang} />
      <Stats lang={lang} />
      <Services lang={lang} />
      <Steps lang={lang} />
      <Testimonials lang={lang} />
      <Contact lang={lang} />
      <Footer lang={lang} />
    </>
  );
}

export default App;