import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import StayConnected from "@/components/StayConnected";
import Newsletter from "@/components/Newsletter";
import Donate from "@/components/Donate";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Programs />
      <StayConnected />
      <Donate />
      <Newsletter />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
