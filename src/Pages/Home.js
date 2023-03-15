import React from "react";
import Card from "../Components/Card";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Main from "../Components/Main";
import Mainfooter from "../Components/Mainfooter";
import Selected from "../Components/Selected";
import "../styles.css";
import singers from "../Components/Singerdata";

export default function Home() {
  return (
    <div className="App">
      <Header />
      <Main />
      {singers.map((singer) => (
        <Card key={singer.id} singer={singer} />
      ))}
      <Selected />
      <Footer />
      <Mainfooter />
    </div>
  );
}
