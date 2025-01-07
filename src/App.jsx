import Blog from "./components/Blog";
import Community from "./components/Community";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import OurWebsite from "./components/OurWebsite";
import Plans from "./components/Plans";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";
import Tools from "./components/Tools";
import Trainers from "./components/Trainers";

function App() {
  return (
    <div className="font-vazirmatn text-white">
      <Header />
      <Hero />
      <OurWebsite />
      <Services />
      <Plans />
      <Tools />
      <Testimonials />
      <Trainers />
      <Blog />
      <Community />
      <Faq />
      <Footer />
    </div>
  );
}

export default App;
