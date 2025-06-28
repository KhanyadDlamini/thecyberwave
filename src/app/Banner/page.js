"use client";
import { useEffect, useState } from 'react';

const Banner = () => {
    const [bannerData, setBannerData] = useState(null);

    // Hardcoded dummy data instead of fetching from server
    const getBannerData = async () => {
        // Simulate API delay
        setTimeout(() => {
            const dummyData = {
                banner_link: "https://static.vecteezy.com/system/resources/thumbnails/000/693/159/small/technology-banner-background-with-connecting-dotted-design.jpg",
                welcome_line: "Welcome to The Cyber Wave",
                text1: "Discover Amazing",
                text2: "Digital Content",
                description: "Explore the latest in technology, entertainment, and digital innovation with our curated collection of premium content."
            };
            setBannerData(dummyData);
        }, 100);
    };

    useEffect(() => {
        getBannerData(); // Load the hardcoded data when the component mounts
    }, []);

    return (
        <div className="relative w-full">
            {/* Conditionally render banner image if data is fetched */}
            {bannerData ? (
                <>
                    <img
                        src={bannerData.banner_link}
                        alt="Banner"
                        className="w-full h-auto max-h-[400px] sm:max-h-[500px] md:max-h-[600px] lg:max-h-[700px] object-cover"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 px-4 sm:px-8 md:px-12 py-6 sm:py-10 md:py-12">
                        {/* Welcome Line */}
                        <p className="text-sm sm:text-base text-gray-200 mt-10 sm:mt-14 ml-4 sm:ml-8 md:ml-12 max-w-full truncate">
                            {bannerData.welcome_line}
                        </p>

                        {/* Banner Text */}
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 mt-6 ml-4 sm:ml-8 md:ml-12 max-w-full truncate">
                            {bannerData.text1}
                        </h1>
                        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 mt-4 sm:mt-6 ml-4 sm:ml-8 md:ml-12 max-w-full truncate">
                            {bannerData.text2}
                        </h1>

                        {/* Description */}
                        <p className="text-sm sm:text-base text-gray-200 mb-6 ml-4 sm:ml-8 md:ml-12 max-w-full truncate">
                            {bannerData.description}
                        </p>

                    </div>
                </>
            ) : (
                <p className="text-center text-white"></p>
            )}
        </div>
    );
};

export default Banner;
