import Navbar from "@/components/Navbar";
import StayConnected from "@/components/StayConnected";
import Footer from "@/components/Footer";

const Connect = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="pt-16">
        <StayConnected />
      </div>
      <Footer />
    </div>
  );
};

export default Connect;
