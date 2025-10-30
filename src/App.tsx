import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { toast, Toaster } from "sonner";

function App() {
  useEffect(() => {
    toast.info(
      <div className="flex flex-col items-center gap-1 text-center">
        <p>
          This website is a personal portfolio project and does not represent a real company.
        </p>
        <p className="text-muted-foreground flex items-center gap-1">
          Made with <span className="text-red-500 animate-pulse">♥</span> by <span className="font-semibold">DocJB</span>
        </p>
      </div>,
      {
        duration: 9000,
        position: "bottom-center",
      }
    );
  }, []);

  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <Footer />
      <Toaster className="bg-background text-foreground border-border shadow-lg" position="bottom-center" />
    </div>
  )
}

export default App
