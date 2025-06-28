"use client";
import { useEffect, useState } from 'react';

const InfiniteIcons = () => {
    const [icons, setIcons] = useState([]); // Store the icons data

    // Hardcoded dummy data instead of fetching from server
    const getInfiniteIcons = async () => {
        setTimeout(() => {
            const dummyIconsData = [
                {
                    image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/2560px-Google_2015_logo.svg.png",
                    alt_text: "Google"
                },
                {
                    image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2560px-IBM_logo.svg.png",
                    alt_text: "IBM"
                },
                {
                    image_link: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Microsoft_logo_%282012%29.svg/2560px-Microsoft_logo_%282012%29.svg.png",
                    alt_text: "Microsoft"
                },
                {
                    image_link: "https://i.ibb.co/p67T417z/JC-logo.png",
                    alt_text: "Jonathan Cyber"
                }

            ];
            setIcons(dummyIconsData);
        }, 100);
    };
    useEffect(() => {
        getInfiniteIcons(); // Load hardcoded data when the component mounts
    }, []);

    return (
        <section className="py-12 bg-black shadow-[0px_4px_10px_2px_rgba(0,0,255,0.5)] hover:shadow-[0px_6px_15px_3px_rgba(0,0,255,0.7)]">
            <div className="overflow-hidden">
                <div className="flex animate-marquee space-x-8 px-6 md:px-12">
                    {/* Render the icons */}
                    {[...Array(3)].map((_, index) => (
                        icons.map((icon, imageIndex) => (
                            <img
                                key={`img-${index}-${imageIndex}`}
                                src={icon.image_link} // Use image link from fetched data
                                alt={icon.alt_text || `Icon ${imageIndex}`} // Add alt text if available
                                className="w-40 md:w-60 bg-gray-900" // Adjust size for smaller and larger screens
                            />
                        ))
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InfiniteIcons;
