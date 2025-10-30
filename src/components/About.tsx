import { Shield, Award, Clock, ThumbsUp } from "lucide-react";
import teamImage from "@/assets/team-about.jpg";

const About = () => {
    const features = [
        {
            icon: Shield,
            title: "Licensed & Insured",
            description: "Fully certified with comprehensive insurance coverage",
        },
        {
            icon: Award,
            title: "Quality Guaranteed",
            description: "100% satisfaction or we'll make it right",
        },
        {
            icon: Clock,
            title: "Flexible Scheduling",
            description: "Available 24/7 for your convenience",
        },
        {
            icon: ThumbsUp,
            title: "Trained Professionals",
            description: "Expert staff with years of experience",
        },
    ];

    return (
        <section id="about" className="py-24 bg-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-32">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Image */}
                    <div className="relative animate-fade-in order-2 md:order-1">
                        <div className="relative rounded-2xl overflow-hidden shadow-xl">
                            <img
                                src={teamImage}
                                alt="Zambales Professional Cleaning Co. team"
                                className="w-full h-auto object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent" />
                        </div>
                        {/* Decorative Element */}
                        <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10" />
                        <div className="absolute -top-6 -left-6 w-40 h-40 bg-accent/30 rounded-full blur-3xl -z-10" />
                    </div>

                    {/* Content */}
                    <div className="space-y-8 animate-fade-in-up order-1 md:order-2">
                        <div>
                            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                                About Us
                            </h2>
                            <div className="w-20 h-1 bg-primary rounded-full mb-6" />
                            <p className="text-base text-muted-foreground leading-relaxed mb-6">
                                At <span className="font-semibold text-foreground">Zambales Professional Cleaning Co.</span>,
                                we deliver top-tier cleaning solutions with professionalism, care, and consistency — serving
                                every corner of Zambales, from homes to hygiene emergencies.
                            </p>
                            <p className="text-base text-muted-foreground leading-relaxed">
                                Our mission is simple: to provide exceptional cleaning services that exceed expectations
                                while building lasting relationships with our clients. With over a decade of experience
                                and a commitment to excellence, we've become Zambales' most trusted cleaning partner.
                            </p>
                        </div>

                        {/* Features Grid */}
                        <div className="grid sm:grid-cols-2 gap-6 pt-4">
                            {features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div
                                        key={index}
                                        className="flex gap-4 p-5 rounded-xl bg-accent/50 hover:bg-accent transition-all duration-300 hover:shadow-md group"
                                    >
                                        <div className="shrink-0">
                                            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                                                <Icon className="h-6 w-6 text-primary" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-base text-foreground mb-1">{feature.title}</h3>
                                            <p className="text-sm text-muted-foreground">{feature.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
