"use client";
import { useEffect, useState } from 'react';

export default function ChannelsPage() {
    const [channels, setChannels] = useState([]); // Store fetched channels data
    const [loading, setLoading] = useState(true); // Loading state to show a loader until data is fetched

    // Hardcoded dummy data instead of fetching from server
    useEffect(() => {
        const fetchChannels = async () => {
            setTimeout(() => {
                const dummyChannelsData = [
                    {
                        main_descr: "Comprehensive Digital Solutions for Modern Businesses",
                        channel_descr: "We offer a wide range of cutting-edge digital services designed to help your business thrive in the digital landscape. Our expert team delivers solutions that drive growth and innovation across multiple domains.",
                        worldwide: "Our Core Services",
                        slogan: "Transforming Ideas Into Digital Reality",
                        description: "We provide ",
                        amount: "4 Core Services",
                        internationals: "Business Linkages",
                        contents: "AI & Digitization Expertise, Business Admin Support, ICT & Cybersecurity Consulting"
                    }
                ];
                setChannels(dummyChannelsData);
                setLoading(false);
            }, 100);
        };

        fetchChannels();
    }, []);

    // Service cards data
    const serviceCards = [
        {
            icon: "🤝",
            title: "Business Linkages",
            description: "We connect businesses with strategic partners, suppliers, and opportunities across global markets. Our extensive network helps you expand your reach and create valuable partnerships that drive mutual growth and success.",
            features: ["Global Partner Network", "Strategic Alliances", "Market Expansion", "Supply Chain Optimization"]
        },
        {
            icon: "🤖",
            title: "AI & Digitization Expertise",
            description: "Transform your business with cutting-edge artificial intelligence and digital transformation solutions. We help you leverage AI technologies to automate processes, gain insights, and create competitive advantages in the digital age.",
            features: ["Machine Learning Solutions", "Process Automation", "Data Analytics", "Digital Transformation"]
        },
        {
            icon: "📊",
            title: "Business Admin Support",
            description: "Comprehensive administrative support services to streamline your business operations. From project management to documentation, we provide the administrative backbone your business needs to focus on core activities.",
            features: ["Project Management", "Documentation", "Process Optimization", "Administrative Systems"]
        },
        {
            icon: "🔒",
            title: "ICT & Cybersecurity Consulting",
            description: "Protect your digital assets with our comprehensive ICT and cybersecurity consulting services. We assess, design, and implement robust security frameworks to safeguard your business against evolving cyber threats.",
            features: ["Security Audits", "Risk Assessment", "Compliance Management", "Incident Response"]
        }
    ];

    return (
        <>
            {/* OUR CHANNELS Section */}
            <section className="py-12 bg-black">
                <div className="max-w-4xl mx-auto text-center px-6">
                    <div className="bg-black rounded-lg p-6">
                        {/* Dynamically display the main description */}
                        <p className="text-white text-xl font-semibold">
                            {channels.length > 0 ? channels[0].main_descr : ''}
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-16 bg-black">
                <div className="container mx-auto px-6 flex flex-col md:flex-row items-center space-x-8">
                    <p className="text-lg mb-6 text-white text-center md:text-left">
                        <small className="text-lg text-blue-800">OUR SERVICES</small><br />
                        {/* Dynamically display the channel description */}
                        {channels.length > 0 ? channels[0].channel_descr : ''}{channels.length > 0 ? channels[0].worldwide : ''}
                        {channels.length > 0 ? channels[0].slogan : ''}{channels.length > 0 ? channels[0].description : ''}
                        {channels.length > 0 ? channels[0].amount : ''}{channels.length > 0 ? channels[0].internationals : ''}
                        {channels.length > 0 ? channels[0].contents : ''}
                    </p>

                </div>
            </section>

            {/* Service Cards Section */}
            <section className="py-16 bg-black">
                <div className="container mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {serviceCards.map((service, index) => (
                            <div
                                key={index}
                                className="bg-gray-900 rounded-lg p-6 text-center shadow-[0px_4px_10px_2px_rgba(0,0,255,0.3)] hover:shadow-[0px_6px_15px_3px_rgba(0,0,255,0.5)] transition-all duration-300 hover:transform hover:scale-105"
                            >
                                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                                <p className="text-gray-300 mb-4 text-sm leading-relaxed">{service.description}</p>
                                <div className="space-y-2">
                                    {service.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="text-blue-400 text-xs font-medium">
                                            • {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
