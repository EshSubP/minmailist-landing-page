import "./index.css";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Features } from "./components/Features";
import { Philosophy } from "./components/Philosophy";
import { Waitlist } from "./components/Waitlist";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Features />
        <Philosophy />
        <Waitlist />
      </main>
      <Footer />
    </div>
  );
}

export default App;
