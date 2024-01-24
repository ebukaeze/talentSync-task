import "./App.css";
import Header from "./components/Header";
import Solutions from "./components/Solutions";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";
import Trial from "./components/Trial";
import Footer from "./components/Footer";

function App() {
  return (
    <section className="w-full max-w-[1728px] mx-auto">
      <Header />
      <Solutions />
      <Testimonial />
      <Faq />
      <Trial />
      <Footer />
    </section>
  );
}

export default App;
