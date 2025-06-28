"use client";
import { useEffect, useState } from "react";

const ChooseFox = () => {
    const [features, setFeatures] = useState([]); // State to store features
    const [choosedata, setChoosedata] = useState(null); // State to store choosedata

    // Hardcoded dummy data instead of fetching from server
    const getChooseFox = async () => {
        setTimeout(() => {
            const dummyFeatures = [
                {
                    icon: "🎯",
                    color: "blue",
                    title: "Our Mission",
                    description: "To provide cutting-edge digital solutions and innovative technology services that empower businesses and individuals to thrive in the digital age."
                },
                {
                    icon: "👁️",
                    color: "green",
                    title: "Our Vision",
                    description: "To be the leading technology partner that transforms ideas into digital reality, creating a connected and innovative future for all."
                },
                {
                    icon: "💎",
                    color: "purple",
                    title: "Our Values",
                    description: "Innovation, integrity, excellence, and customer satisfaction are the core values that drive everything we do at The Cyber Wave."
                },
                {
                    icon: "🚀",
                    color: "orange",
                    title: "Innovation",
                    description: "We constantly push the boundaries of technology to deliver solutions that are ahead of the curve and exceed expectations."
                },
                {
                    icon: "🤝",
                    color: "red",
                    title: "Partnership",
                    description: "Building strong, lasting relationships with our clients through trust, transparency, and collaborative problem-solving."
                },
                {
                    icon: "⭐",
                    color: "yellow",
                    title: "Excellence",
                    description: "Delivering exceptional quality in every project, maintaining the highest standards of professionalism and technical expertise."
                },
                {
                    icon: "🌍",
                    color: "teal",
                    title: "Global Reach",
                    description: "Serving clients worldwide with our comprehensive digital solutions and 24/7 support across different time zones."
                },
                {
                    icon: "🔒",
                    color: "indigo",
                    title: "Security First",
                    description: "Implementing the highest security standards to protect our clients' data and ensure complete privacy and confidentiality."
                }
            ];
            setFeatures(dummyFeatures);
        }, 100);
    };

    // Hardcoded dummy data for choose section
    const getChoose = async () => {
        setTimeout(() => {
            const dummyChooseData = {
                main_name: "ABOUT US",
                why_choose: "Why Choose The Cyber Wave"
            };
            setChoosedata(dummyChooseData);
        }, 100);
    };

    // Load hardcoded data on component mount
    useEffect(() => {
        getChooseFox();
        getChoose();
    }, []);

    return (
        <section className="py-12 bg-black">
            {/* Render the fetched choosedata, checking if it's available */}
            <h2 className="text-2xl text-center text-blue-600">
                {choosedata ? choosedata.main_name : ''}
            </h2>
            <h2 className="text-4xl font-bold text-center mb-10 text-white">
                {choosedata ? choosedata.why_choose : ''}
            </h2>
            <div className="flex flex-wrap justify-center gap-6 px-6">
                {features.map((feature, index) => (
                    <div
                        key={index}
                        className="bg-black rounded-lg p-6 w-full sm:w-80 md:w-80 lg:w-72 xl:w-80 text-center shadow-[0px_4px_10px_2px_rgba(0,0,255,0.5)] hover:shadow-[0px_6px_15px_3px_rgba(0,0,255,0.7)]"
                    >
                        {/* Check if feature.icon exists before rendering */}
                        <div className={`text-${feature.color}-500 text-4xl mb-4`}>
                        </div>
                        <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                        <p className="text-white">{feature.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ChooseFox;
