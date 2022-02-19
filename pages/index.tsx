import type { NextPage } from "next";
import Campuses from "../components/Campuses";
import ChooseUs from "../components/ChooseUs";
import Feature from "../components/Feature";
import Hero from "../components/Hero";
import Impact from "../components/Impact";
import Download from "./../components/Download";
import Masterclass from "./../components/MasterClass";
import GurucoolCTA from "../components/GurucoolCTA";

const Home: NextPage = () => {
  return (
    <>
      <Hero />
      <Campuses />
      <Masterclass />
      <GurucoolCTA />
      <Feature />
      <ChooseUs />
      <Impact />
      <Download />
    </>
  );
};

export default Home;
