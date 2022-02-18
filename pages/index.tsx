import type { NextPage } from "next";
import Campuses from "../components/Campuses";
import ChooseUs from "../components/ChooseUs";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "./../components/Navbar";

const Home: NextPage = () => {
  return (
    <>
      <Navbar />
      <main className="main-container">
        <Hero />
        <Campuses />
        <Feature />
        <ChooseUs />
      </main>
      <Footer />
    </>
  );
};

export default Home;
