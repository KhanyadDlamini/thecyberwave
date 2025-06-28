"use client";
import { useEffect, useState } from "react";
import Banner from "./Banner/page";
import Channels from "./Channels/page";
import ChooseFox from "./Choose/page";
import Footer from "./Footer/page";
import InfiniteIcons from "./InfiniteIcons/page";
import Nav from "./nav/page";
import Subscription from "./Subscription/page";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulating data fetching
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the time as needed
  }, []);

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <link
          rel="icon"
          href="https://media.licdn.com/dms/image/v2/C560BAQEf6_b9e9hgrw/company-logo_200_200/company-logo_200_200/0/1630621413613/lipasafe_logo?e=2147483647&v=beta&t=ODUTRoej2eiRSpkc6qa8XamEeuMIs7QRyATzTowcK90"
        ></link>
      </head>
      <div>
        <Nav />

        {loading ? (
          <div className="flex justify-center items-center h-screen">
            {/* SVG Spinner */}
            <svg
              className="animate-spin h-24 w-24 text-blue-500"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              ></circle>
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
              ></path>
            </svg>
          </div>
        ) : (
          <>
            <Banner />
            <ChooseFox />
            <Channels />
            <Subscription />
            <InfiniteIcons />
            <Footer />
          </>
        )}
      </div>
    </>
  );
}
