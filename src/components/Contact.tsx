import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, Clock, Send } from "lucide-react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import map from "@/assets/map.png"

const Contact = () => {
    const [open, setOpen] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.currentTarget.reset();
        setOpen(true);
    };


    const contactInfo = [
        {
            icon: Phone,
            title: "Call Us",
            details: "+63 917 123 4567",
            link: "tel:+639171234567",
        },
        {
            icon: Mail,
            title: "Email Us",
            details: "info@zambalescleaning.ph",
            link: "mailto:info@zambalescleaning.ph",
        },
    ];

    return (
        <section id="contact" className="py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
                    <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                        Inquire About Our Services
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Ready to experience professional cleaning? Contact us or fill out the form below for a free quote.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Form */}
                    <Card className="animate-fade-in-up">
                        <CardContent className="pt-8 pb-6 px-6">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                        placeholder="Juan Dela Cruz"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                        placeholder="juan@example.com"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                        placeholder="+63 917 123 4567"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                                        Service Needed
                                    </label>
                                    <select
                                        id="service"
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all"
                                    >
                                        <option value="">Select a service</option>
                                        <option value="residential">Residential Cleaning</option>
                                        <option value="commercial">Commercial Cleaning</option>
                                        <option value="specialty">Specialty Cleaning</option>
                                        <option value="extreme">Extreme & Biohazard Cleaning</option>
                                    </select>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                                        Additional Details
                                    </label>
                                    <textarea
                                        id="message"
                                        rows={4}
                                        required
                                        className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition-all resize-none"
                                        placeholder="Tell us about your cleaning needs..."
                                    />
                                </div>

                                <Button type="submit" size="lg" className="w-full group">
                                    Request a Quote
                                    <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </form>
                        </CardContent>
                    </Card>

                    {/* Contact Info and Map (unchanged) */}
                    <div className="space-y-6 animate-slide-in-right">
                        <div className="grid sm:grid-cols-2 gap-4">
                            {contactInfo.map((info, index) => {
                                const Icon = info.icon;
                                return (
                                    <Card
                                        key={index}
                                        className="hover:shadow-lg transition-all duration-300 group"
                                    >
                                        <CardContent className="pt-6 pb-5 px-5">
                                            <div className="flex flex-row md:flex-col items-center text-center gap-3">
                                                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                    <Icon className="h-7 w-7 text-primary" />
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-foreground mb-1">{info.title}</h3>
                                                    {info.link ? (
                                                        <a
                                                            href={info.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="text-sm text-muted-foreground hover:text-primary transition-colors"
                                                        >
                                                            {info.details}
                                                        </a>
                                                    ) : (
                                                        <p className="text-sm text-muted-foreground">{info.details}</p>
                                                    )}
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                );
                            })}
                        </div>

                        {/* Map */}
                        <Card className="overflow-hidden">
                            <CardContent className="p-0">
                                <div className="relative h-80 bg-muted overflow-hidden rounded-lg">
                                    <img
                                        src={map}
                                        alt="Zambales Cleaning Co. location"
                                        className="w-full h-full object-fill lg:object-cover"
                                    />
                                </div>
                            </CardContent>

                        </Card>

                        {/* Emergency Notice */}
                        <Card className="bg-red-600/20 border-red-600/20">
                            <CardContent className="pt-6 pb-5 px-6">
                                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                                    <Clock className="h-5 w-5 text-red-600" />
                                    Emergency Cleaning Services
                                </h3>
                                <p className="text-sm text-muted-foreground">
                                    For urgent biohazard or extreme cleaning needs, call us immediately at{" "}
                                    <a
                                        href="tel:+639171234567"
                                        className="text-primary font-semibold hover:underline"
                                    >
                                        +63 917 123 4567
                                    </a>
                                    . We're available 24/7 for emergency situations.
                                </p>
                            </CardContent>
                        </Card>

                    </div>
                </div>
            </div>

            {/* Success Dialog */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                        <DialogTitle>Request Received 🎉</DialogTitle>
                        <DialogDescription>
                            Thank you for reaching out! Our team will contact you within 24 hours to confirm your cleaning request.
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter className="mt-4">
                        <Button onClick={() => setOpen(false)} className="w-full">
                            Close
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </section>
    );
};

export default Contact;
