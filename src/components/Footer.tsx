import { Sparkles, Facebook, Instagram, Mail, Phone, MapPin, SquareM } from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: "Home", id: "hero" },
        { name: "Services", id: "services" },
        { name: "About", id: "about" },
        { name: "Testimonials", id: "testimonials" },
        { name: "Contact", id: "contact" },
    ];

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <footer className="bg-foreground text-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-32 py-12">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center gap-2">
                            <Sparkles className="h-8 w-8 text-primary" />
                            <div className="flex flex-col">
                                <span className="text-lg font-bold">Zambales Professional</span>
                                <span className="text-xs text-background/70 -mt-1">Cleaning Co.</span>
                            </div>
                        </div>
                        <p className="text-sm text-background/80 leading-relaxed">
                            Top-tier cleaning solutions with professionalism, care, and consistency — serving every corner of Zambales.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <a
                                href="https://facebook.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors group"
                            >
                                <Facebook className="h-5 w-5 text-background group-hover:text-primary-foreground" />
                            </a>
                            <a
                                href="https://instagram.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors group"
                            >
                                <Instagram className="h-5 w-5 text-background group-hover:text-primary-foreground" />
                            </a>
                            <a
                                href="https://google.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-10 h-10 rounded-full bg-background/10 hover:bg-primary flex items-center justify-center transition-colors group"
                            >
                                <SquareM className="h-5 w-5 text-background group-hover:text-primary-foreground" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4 ">Quick Links</h3>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.id}>
                                    <button
                                        onClick={() => scrollToSection(link.id)}
                                        className="text-sm text-background/80 hover:text-background hover:translate-x-1 transition-all inline-block"
                                    >
                                        {link.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Our Services</h3>
                        <ul className="space-y-2 text-sm text-background/80">
                            <li>Residential Cleaning</li>
                            <li>Commercial Cleaning</li>
                            <li>Specialty Cleaning</li>
                            <li>Extreme & Biohazard Cleaning</li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-semibold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start gap-2">
                                <Phone className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <a
                                    href="tel:+639171234567"
                                    className="text-sm text-background/80 hover:text-background transition-colors"
                                >
                                    +63 917 123 4567
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <Mail className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <a
                                    href="mailto:info@zambalescleaning.ph"
                                    className="text-sm text-background/80 hover:text-background transition-colors"
                                >
                                    info@zambalescleaning.ph
                                </a>
                            </li>
                            <li className="flex items-start gap-2">
                                <MapPin className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                                <span className="text-sm text-background/80">Iba, Zambales, Philippines</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-background/20 pt-8 mt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-sm text-background/70 text-center md:text-left">
                            © {currentYear} Zambales Professional Cleaning Co. {" "}
                            <br className="md:hidden" />
                            <span className="block md:inline text-background/70">
                                This website is a personal portfolio project and does not represent a real company.
                            </span>
                        </p>
                        <div className="flex gap-6 text-sm text-background/70">
                            <button className="hover:text-background transition-colors">Privacy Policy</button>
                            <button className="hover:text-background transition-colors">Terms of Service</button>
                        </div>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
