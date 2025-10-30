import { useState } from "react";
import {
    Home,
    Building2,
    Sparkles,
    AlertTriangle,
    Droplets,
    Wind,
    Trash2,
    ShoppingBag,
    UtensilsCrossed,
    Bed,
    PackagePlus,
    Leaf,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Import service images
import regularHomeCleaning from "@/assets/services/regular-home-cleaning.jpg";
import deepCleaning from "@/assets/services/deep-cleaning.jpg";
import moveInOutCleaning from "@/assets/services/move-in-out-cleaning.jpg";
import postRenovationCleaning from "@/assets/services/post-renovation-cleaning.jpg";
import officeCleaning from "@/assets/services/office-cleaning.jpg";
import storefrontCleaning from "@/assets/services/storefront-cleaning.jpg";
import restaurantCleaning from "@/assets/services/restaurant-cleaning.jpg";
import airbnbCleaning from "@/assets/services/airbnb-cleaning.jpg";
import windowCleaning from "@/assets/services/window-cleaning.jpg";
import carpetUpholsteryCleaning from "@/assets/services/carpet-upholstery-cleaning.jpg";
import floorWaxingPolishing from "@/assets/services/floor-waxing-polishing.jpg";
import ecoGreenCleaning from "@/assets/services/eco-green-cleaning.jpg";
import disinfectionSanitation from "@/assets/services/disinfection-sanitation.jpg";
import sceneCleaning from "@/assets/services/scene-cleaning.jpg";
import odorRemoval from "@/assets/services/odor-removal.jpg";
import moldRemediation from "@/assets/services/mold-remediation.jpg";
import wasteGarbageCleanup from "@/assets/services/waste-garbage-cleanup.jpg";

const Services = () => {
    const [activeTab, setActiveTab] = useState("residential");

    const serviceCategories = [
        {
            id: "residential",
            icon: Home,
            title: "Residential",
            description: "Perfect for homeowners or renters who want spotless living spaces.",
            iconColor: "text-primary",
            badgeColor: "bg-primary/10 text-primary border-primary/20",
            services: [
                {
                    title: "Regular Home Cleaning",
                    description: "Keep your home spotless with regular sweeping, mopping, dusting, and organizing services.",
                    image: regularHomeCleaning,
                    icon: Home,
                },
                {
                    title: "Deep Cleaning",
                    description: "Thorough cleaning of kitchens, bathrooms, and bedrooms for a fresh, sanitized home.",
                    image: deepCleaning,
                    icon: Sparkles,
                },
                {
                    title: "Move-in / Move-out Cleaning",
                    description: "Prepare spaces for new residents with comprehensive cleaning from top to bottom.",
                    image: moveInOutCleaning,
                    icon: PackagePlus,
                },
                {
                    title: "Post-renovation Cleaning",
                    description: "Remove construction dust, debris, and paint residue after your renovation project.",
                    image: postRenovationCleaning,
                    icon: Wind,
                },
            ],
        },
        {
            id: "commercial",
            icon: Building2,
            title: "Commercial",
            description: "Tailored for offices, shops, and small businesses across Zambales.",
            iconColor: "text-blue-600",
            badgeColor: "bg-blue-50 text-blue-700 border-blue-200",
            services: [
                {
                    title: "Office Cleaning",
                    description: "Daily or weekly maintenance to keep your professional workspace clean and organized.",
                    image: officeCleaning,
                    icon: Building2,
                },
                {
                    title: "Storefront Cleaning",
                    description: "Create an inviting first impression with spotless and professional shopfronts.",
                    image: storefrontCleaning,
                    icon: ShoppingBag,
                },
                {
                    title: "Restaurant Cleaning",
                    description: "Sanitize kitchens, dining areas, and restrooms to maintain health and safety standards.",
                    image: restaurantCleaning,
                    icon: UtensilsCrossed,
                },
                {
                    title: "Airbnb & Rental Property Cleaning",
                    description: "Fast turnover service to prepare your rental property for the next guest.",
                    image: airbnbCleaning,
                    icon: Bed,
                },
            ],
        },
        {
            id: "specialty",
            icon: Leaf,
            title: "Specialty",
            description: "For more demanding or delicate cleaning needs.",
            iconColor: "text-green-600",
            badgeColor: "bg-green-50 text-green-700 border-green-200",
            services: [
                {
                    title: "Window Cleaning",
                    description: "Achieve streak-free, crystal-clear windows both inside and out for maximum natural light.",
                    image: windowCleaning,
                    icon: Sparkles,
                },
                {
                    title: "Carpet & Upholstery Cleaning",
                    description: "Deep clean carpets and furniture to remove stains, odors, and allergens effectively.",
                    image: carpetUpholsteryCleaning,
                    icon: Wind,
                },
                {
                    title: "Floor Waxing & Polishing",
                    description: "Restore the shine and protect wood or tile floors with professional waxing services.",
                    image: floorWaxingPolishing,
                    icon: Sparkles,
                },
                {
                    title: "Eco-friendly 'Green' Cleaning",
                    description: "Environmentally safe cleaning using non-toxic, biodegradable products for your health.",
                    image: ecoGreenCleaning,
                    icon: Leaf,
                },
                {
                    title: "Disinfection & Sanitation",
                    description: "Eliminate bacteria, viruses, and allergens with medical-grade disinfection services.",
                    image: disinfectionSanitation,
                    icon: Droplets,
                },
            ],
        },
        {
            id: "extreme",
            icon: AlertTriangle,
            title: "Extreme & Biohazard",
            description: "Handled with care, safety, and professionalism.",
            iconColor: "text-orange-600",
            badgeColor: "bg-orange-50 text-orange-700 border border-orange-300",
            services: [
                {
                    title: "Scene Cleaning",
                    description: "Discreet and professional cleanup for sensitive and traumatic environments.",
                    image: sceneCleaning,
                    icon: AlertTriangle,
                },
                {
                    title: "Odor Removal",
                    description: "Neutralize persistent smoke, mold, and other strong odors with advanced techniques.",
                    image: odorRemoval,
                    icon: Wind,
                },
                {
                    title: "Bacterial & Mold Remediation",
                    description: "Safely sanitize and remediate areas affected by dangerous bacteria and mold.",
                    image: moldRemediation,
                    icon: Droplets,
                },
                {
                    title: "Waste & Garbage Cleanup",
                    description: "Clean and disinfect neglected properties with compassionate, thorough service.",
                    image: wasteGarbageCleanup,
                    icon: Trash2,
                },
            ],
        },
    ];

    return (
        <section id="services" className="py-20 bg-linear-to-b from-background via-secondary/20 to-background">
            <div className="container mx-auto px-4 sm:px-6 lg:px-32">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 animate-fade-in">
                    <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                        Our Services
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Comprehensive cleaning solutions for every need
                    </p>
                </div>

                {/* Tabs Navigation */}
                <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full ">
                    <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-2 md:grid-cols-4 mb-10 h-auto p-1 bg-muted/50">
                        {serviceCategories.map((category) => {
                            const CategoryIcon = category.icon;
                            return (
                                <TabsTrigger
                                    key={category.id}
                                    value={category.id}
                                    className="flex items-center gap-2 py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-sm"
                                >
                                    <CategoryIcon className="h-4 w-4" />
                                    <span className="hidden sm:inline">{category.title}</span>
                                    <span className="sm:hidden">{category.title.split(" ")[0]}</span>
                                </TabsTrigger>
                            );
                        })}
                    </TabsList>

                    {serviceCategories.map((category) => {
                        // const CategoryIcon = category.icon;
                        return (
                            <TabsContent key={category.id} value={category.id} className="mt-0 animate-fade-in">
                                {/* Category Description */}
                                <div className="text-center mb-8">
                                    <p className="text-muted-foreground max-w-2xl mx-auto">
                                        {category.description}
                                    </p>
                                </div>

                                {/* Service Cards Grid */}
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mb-8">
                                    {category.services.map((service, index) => {
                                        const ServiceIcon = service.icon;
                                        return (
                                            <Card
                                                key={index}
                                                className="group overflow-hidden rounded-xl border bg-card hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                            >
                                                {/* Service Image  Overlay */}
                                                <div className="relative h-40 overflow-hidden">
                                                    <img
                                                        src={service.image}
                                                        alt={service.title}
                                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                                    />
                                                    <div className="absolute inset-0 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
                                                    <div className={`absolute top-3 right-3 ${category.badgeColor} rounded-lg p-1.5 border shadow-sm`}>
                                                        <ServiceIcon className="h-4 w-4" />
                                                    </div>
                                                </div>

                                                {/* Card Content */}
                                                <CardContent className="p-4">
                                                    <h4 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                                                        {service.title}
                                                    </h4>
                                                    <p className="text-md text-muted-foreground leading-relaxed">
                                                        {service.description}
                                                    </p>
                                                </CardContent>
                                            </Card>
                                        );
                                    })}
                                </div>

                                {/* Safety Note  */}
                                {category.id === "extreme" && (
                                    <div className="p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border-l-4 border-orange-600 max-w-4xl mx-auto">
                                        <div className="flex items-start gap-2">
                                            <AlertTriangle className="h-5 w-5 text-orange-600 shrink-0 mt-0.5" />
                                            <div>
                                                <p className="font-semibold text-orange-900 dark:text-orange-200 text-sm mb-1">
                                                    Safety & Compliance
                                                </p>
                                                <p className="text-xs text-orange-800 dark:text-orange-300">
                                                    All extreme cleaning services follow strict safety standards and waste disposal protocols. Our certified technicians use professional-grade equipment and adhere to local regulations.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </TabsContent>
                        );
                    })}
                </Tabs>
            </div>
        </section>
    );
};

export default Services;
