import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@/assets/zpcclogo.png";

const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
            setIsOpen(false);
        }
    };

    const navLinks = [
        { id: "hero", label: "Home" },
        { id: "services", label: "Services" },
        { id: "about", label: "About" },
        { id: "testimonials", label: "Testimonials" },
    ];

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled
                ? "bg-background/95 backdrop-blur-md shadow-md"
                : "bg-transparent"
                }`}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div
                        className="flex items-center gap-2 cursor-pointer"
                        onClick={() => scrollToSection("hero")}
                    >
                        <img
                            src={logoImage}
                            alt="Zambales Professional Logo"
                            className="h-12 w-12 object-contain"
                        />
                        <div className="flex flex-col">
                            <span
                                className={`text-xl font-bold transition-colors duration-300 ${isScrolled ? "text-foreground" : "text-primary-foreground"
                                    }`}
                            >
                                Zambales Professional
                            </span>
                            <span
                                className={`font-semibold text-xs lg:text-md -mt-1 transition-colors duration-300 ${isScrolled ? "text-foreground/80" : "text-primary-foreground"
                                    }`}
                            >
                                Cleaning Co.
                            </span>
                        </div>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`transition-colors duration-300 font-medium hover:text-primary ${isScrolled ? "text-foreground" : "text-primary-foreground"
                                    }`}
                            >
                                {link.label}
                            </button>
                        ))}
                        <Button
                            onClick={() => scrollToSection("contact")}
                            size="lg"
                            className="transition-colors duration-300 text-white"
                        >
                            Inquire Now
                        </Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className={`md:hidden p-2 transition-colors duration-300 hover:text-primary ${isScrolled ? "text-foreground" : "text-primary-foreground"
                            }`}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-background/98 backdrop-blur-md border-t border-border">
                    <div className="container mx-auto px-4 py-6 space-y-4">
                        {navLinks.map((link) => (
                            <button
                                key={link.id}
                                onClick={() => scrollToSection(link.id)}
                                className={`block w-full text-left py-2 ${isScrolled ? "text-foreground" : "text-primary-foreground"} hover:text-primary transition-colors font-medium`}
                            >
                                {link.label}
                            </button>
                        ))}
                        <Button
                            onClick={() => scrollToSection("contact")}
                            size="lg"
                            className="w-full text-primary-foreground"
                        >
                            Inquire Now
                        </Button>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navigation;
