import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero.jpg";

const Hero = () => {
    const scrollToContact = () => {
        const element = document.getElementById("contact");
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroImage}
                    alt="Photo by Tima Miroshnichenko: https://www.pexels.com/photo/cleaners-in-ppe-vacuuming-a-tiled-floor-6195288/"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-b from-gray-950/95 via-gray-800/80 to-gray-700/55" />
            </div>

            {/* Content */}
            <div className="relative z-10 container mt-24 lg:mt-16 mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
                    <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight">
                        Professional Cleaning
                        <br />
                        You Can Trust
                    </h1>

                    <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
                        Proudly serving homes and businesses across Zambales
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                        <Button
                            onClick={scrollToContact}
                            size="lg"
                            variant="default"
                            className="text-lg px-8 py-6 group"
                        >
                            Inquire Now
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                            size="lg"
                            variant="secondary"
                            className="text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20"
                        >
                            View Services
                        </Button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="grid grid-cols-3 sm:grid-cols-3 gap-8 pt-12 max-w-3xl mx-auto">
                        <div className="text-center">
                            <div className="text-2xl lg:text-4xl font-bold text-primary-foreground">500+</div>
                            <div className="text-base text-primary-foreground/80 mt-2">Happy Clients</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl lg:text-4xl font-bold text-primary-foreground">10+</div>
                            <div className="text-base text-primary-foreground/80 mt-2">Years Experience</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl lg:text-4xl font-bold text-primary-foreground">24/7</div>
                            <div className="text-base text-primary-foreground/80 mt-2">Available</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Wave */}
            <div className="absolute bottom-0 left-0 right-0 -mb-0.5 z-10">
                <svg
                    viewBox="0 0 1440 140"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-auto"
                >
                    <path
                        fill="hsl(var(--muted))"
                        fillOpacity="0.3"
                        d="M0,100 C300,130 600,70 900,90 C1150,105 1320,120 1440,100 L1440,140 L0,140 Z"
                    />
                    <path
                        fill="hsl(var(--background))"
                        d="M0,110 C300,140 600,80 900,95 C1150,110 1320,120 1440,110 L1440,140 L0,140 Z"
                    />
                </svg>
            </div>
        </section>
    );
};

export default Hero;
