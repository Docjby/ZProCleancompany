import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
    const testimonials = [
        {
            name: "Maria Santos",
            role: "Homeowner",
            content:
                "Absolutely fantastic service! The team transformed my home after renovation. They were professional, thorough, and incredibly detail-oriented. I couldn't be happier!",
            rating: 5,
        },
        {
            name: "Roberto Cruz",
            role: "General Manager, Subic Bay Resort & Hotel",
            content:
                "We've been using Zambales Professional Cleaning for our hotel for 3 years now. Their reliability and consistency are unmatched. Our guests constantly compliment the cleanliness!",
            rating: 5,
        },
        {
            name: "Jennifer Lim",
            role: "Restaurant Owner, Coastal Eats Bistro",
            content:
                "The deep cleaning service for our restaurant kitchen exceeded expectations. They follow all health and safety protocols meticulously. Highly recommend for any food establishment!",
            rating: 5,
        },
        {
            name: "David Reyes",
            role: "Property Manager, Zambales Rentals Inc.",
            content:
                "Managing multiple Airbnb properties is stressful, but their quick turnover cleaning service is a lifesaver. Always on time, always spotless. My guests love it!",
            rating: 5,
        },
        {
            name: "Catherine Torres",
            role: "Office Administrator, TechHub Zambales",
            content:
                "Our office has never looked better! The weekly cleaning keeps our workspace fresh and professional. The team is friendly, efficient, and trustworthy. Excellent value!",
            rating: 5,
        },
        {
            name: "Miguel Fernandez",
            role: "Store Owner, CleanWave Hardware",
            content:
                "I was impressed by how spotless our shop looked after their deep cleaning service. They worked around our business hours and finished everything perfectly on schedule.",
            rating: 5,
        },
    ];

    return (
        <section id="testimonials" className="py-24 bg-secondary/30">
            <div className="container mx-auto px-4 sm:px-6 lg:px-32">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Don’t just take our word for it — hear from our satisfied customers
                    </p>
                </div>

                {/* Bento Grid */}
                <div
                    className="
            grid gap-6 
            sm:grid-cols-2 
            lg:grid-cols-4 
            auto-rows-[minmax(250px,auto)]
          "
                >
                    {testimonials.map((t, i) => (
                        <Card
                            key={i}
                            className={`
                relative overflow-hidden 
                hover:shadow-lg transition-all duration-300 
                ${i === 0 ? "lg:col-span-2" : ""}
                ${i === 4 ? "lg:col-span-2" : ""}
              `}
                        >
                            <CardContent className="pt-8 pb-6 px-6 flex flex-col justify-between h-full">
                                {/* Quote Icon */}
                                <div className="absolute top-4 right-4 opacity-10">
                                    <Quote className="h-16 w-16 text-primary" />
                                </div>

                                {/* Rating */}
                                <div className="flex gap-1 mb-4">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                    ))}
                                </div>

                                {/* Content */}
                                <p className="text-base text-foreground leading-relaxed mb-6 relative z-10">
                                    “{t.content}”
                                </p>

                                {/* Author */}
                                <div className="border-t pt-4">
                                    <p className="font-semibold text-base text-foreground">{t.name}</p>
                                    <p className="text-sm text-muted-foreground">{t.role}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
