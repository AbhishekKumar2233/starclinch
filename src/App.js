import Card from "./Components/Card";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Selected from "./Components/Selected";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <div className="select-singers">
        <h1>SINGERS</h1>
        <p>Select an Artist that matches your vibe.</p>
      </div>
      <div className="container">
        <Card />
        <Card />
      </div>
      <Selected />
      <Footer />
    </div>
  );
}
