"use client"
import { useEffect, useState } from 'react';

const Subscription = () => {
    const [subscription, setSubscription] = useState(null); // State to store the subscription data
    const [currentImageIndex, setCurrentImageIndex] = useState(0); // State to track current image

    useEffect(() => {
        const getSub = async () => {
            // Hardcoded dummy data instead of fetching from server
            setTimeout(() => {
                const dummySubscriptionData = {
                    image_links: [
                        "https://www.pixartprinting.co.uk/blog/wp-content/uploads/2022/02/Digitalizzazione_SEO.jpg",
                        "https://imgcdn.agendadigitale.eu/wp-content/uploads/2021/10/18113243/cyber-sicurezza.jpg",
                        "https://www.gbis.ps/wp-content/uploads/2019/02/linkaes.jpg",
                        "https://scitexas.edu/wp-content/uploads/2020/03/Administrative-assistant-vs.-office-manager-scitexas.edu-2-e1585262443910.jpg",
                        "https://media.istockphoto.com/id/1412282189/photo/lock-network-technology-concept.jpg?s=612x612&w=0&k=20&c=hripuxLs9pS_7Ln6YWQR-Ow2_-BU5RdQ4vOY8s1q1iQ=",
                        "https://www.insic.it/wp-content/uploads/2023/02/Digitalizzazione-e-safety-scaled.jpg"
                        ,
                    ],
                    description1: "Premium Digital Solutions",
                    description2: "Transform your business with our comprehensive digital services that drive innovation and growth. We provide cutting-edge solutions tailored to your specific needs.",
                    description3: "Our expert team delivers world-class technology services including AI & Digitization, Business Admin Support, and ICT & Cybersecurity Consulting.",
                    description4: "Join thousands of satisfied clients who trust The Cyber Wave for your digital transformation journey.",
                    button_name: "Get Started"
                };
                setSubscription(dummySubscriptionData);
            }, 100);
        };

        getSub();
    }, []);

    // Auto-slide images every 3 seconds
    useEffect(() => {
        if (subscription && subscription.image_links) {
            const interval = setInterval(() => {
                setCurrentImageIndex((prevIndex) =>
                    (prevIndex + 1) % subscription.image_links.length
                );
            }, 3000);

            return () => clearInterval(interval);
        }
    }, [subscription]);

    if (!subscription) {
        return <p className="text-center text-white"></p>;
    }

    return (
        <section className="py-16 bg-black">
            <div className="container mx-auto px-6 flex flex-col md:flex-row items-center space-x-8">
                {/* Left Image Section */}
                <div className="w-full md:w-1/2 mb-8 md:mb-0 relative">
                    <div className="relative overflow-hidden rounded-lg shadow-lg">
                        <img
                            src={subscription.image_links[currentImageIndex]}
                            alt="Digital Solutions"
                            className="w-full h-64 md:h-80 object-cover transition-opacity duration-1000"
                        />
                        {/* Image indicators */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                            {subscription.image_links.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentImageIndex(index)}
                                    className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentImageIndex
                                        ? 'bg-blue-500 scale-125'
                                        : 'bg-white/50 hover:bg-white/75'
                                        }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Text Section */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-white mb-6">
                        {subscription.description1}
                    </h2>
                    <p className="text-lg text-white mb-6">
                        {subscription.description2}
                    </p>
                    <p className="text-lg text-white mb-6">
                        {subscription.description3}
                    </p>
                    <p className="text-lg text-white mb-6">
                        {subscription.description4}
                    </p>
                    {/* <button
                        className="px-4 py-2 border-2 border-blue-600 text-white rounded-lg hover:bg-blue-700 mt-10 flex items-center justify-center"
                    >
                        {subscription.button_name}{" "}
                        <ShoppingCartIcon className="mr-2" />
                    </button> */}
                </div>
            </div>
        </section>
    );
};

export default Subscription;
