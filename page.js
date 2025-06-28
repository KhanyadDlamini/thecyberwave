"use client"
import { SupportAgentOutlined, TvSharp, VideoCallOutlined, WhatsApp } from '@mui/icons-material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState } from "react";
import LoginModal from './LoginModal/page';

export default function Home() {
  const [isPayPalLoaded, setIsPayPalLoaded] = useState(false);
  const one = 15;
  const three = 29;
  const six = 39;
  const eight = 49;

  const currency = "$";

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState("");
  const [showLoginModal, setShowLoginModal] = useState(false);

  // Check if the user is logged in when the component loads
  useEffect(() => {
    const userLoggedIn = localStorage.getItem("userLoggedIn");
    if (userLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);


  useEffect(() => {
    // Check login status from localStorage
    const loggedIn = localStorage.getItem("userLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
  }, []);

  const loadPayPalButtons = (id, amount) => {
    if (window.paypal && window.paypal.Buttons) {
      window.paypal.Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                amount: {
                  value: amount,
                  currency_code: "USD",
                },
              },
            ],
          });
        },
        onApprove: (data, actions) => {
          return actions.order.capture().then((details) => {
            alert(`Transaction completed by ${details.payer.name.given_name}`);
          });
        },
        onError: (err) => {
          console.log("PayPal error", err);
        },
      }).render(`#paypal-button-${id}`);
    } else {
      console.log("PayPal SDK not loaded.");
    }
  };

  const oneMonth = async () => {
    if (!isPayPalLoaded) {
      console.error("PayPal SDK is not yet loaded.");
      return;
    }
    if (!isLoggedIn) {
      setShowModal(true); // Show login modal if not logged in
      return;
    }
    console.log("Buy", one);
    loadPayPalButtons("oneMonth", one);
  };


  const threeMonth = async () => {
    if (!isPayPalLoaded) {
      console.error("PayPal SDK is not yet loaded.");
      return;
    }
    if (!isLoggedIn) {
      setShowModal(true); // Show login modal if not logged in
      return;
    }
    console.log("Buy", three);
    loadPayPalButtons("threeMonth", three);
  };

  const sixMonth = async () => {
    if (!isPayPalLoaded) {
      console.error("PayPal SDK is not yet loaded.");
      return;
    }
    if (!isLoggedIn) {
      setShowModal(true); // Show login modal if not logged in
      return;
    }
    console.log("Buy", six);
    loadPayPalButtons("sixMonth", six);
  };

  const eightMonth = async () => {
    if (!isPayPalLoaded) {
      console.error("PayPal SDK is not yet loaded.");
      return;
    }
    if (!isLoggedIn) {
      setShowModal(true); // Show login modal if not logged in
      return;
    }
    console.log("Buy", eight);
    loadPayPalButtons("eightMonth", eight);
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AbRwpkZvPRe4Y3j6QBkUA-9-p3PghX5o-FZii0pwXTcpbKQscWy8CKW_ga6v7ejeAw8gMb310E84FS1D&currency=USD";
    script.async = true;
    script.onload = () => {
      console.log("PayPal SDK successfully loaded");
      setIsPayPalLoaded(true);
    };
    script.onerror = () => {
      console.error("PayPal SDK failed to load");
    };
    document.body.appendChild(script);
  }, []);


  useEffect(() => {
    // Check if user is logged in
    const userLoggedIn = localStorage.getItem("userLoggedIn");
    if (userLoggedIn === "true") {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSubscribe = async () => {
    if (!isLoggedIn) {
      setError("Please login first.");
      setShowLoginModal(true);

      // Remove error message after 3 seconds
      setTimeout(() => setError(""), 3000);
      return;
    }

    try {
      const username = localStorage.getItem("loggedInUser"); // Ensure user info is stored
      console.log("console within try............", username)
      if (!username) {
        setError("User not found.");
        setTimeout(() => setError(""), 3000);
        return;
      }

      const response = await fetch("http://localhost:5000/getSubscription", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username }),
      });

      const data = await response.json();

      if (!data.success) {
        setError("User subscription not found.");
        setTimeout(() => setError(""), 3000);
        return;
      }

      const amount = data.amount;
      window.location.href = `https://www.paypal.com/checkout?amount=${amount}`;
    } catch (error) {
      setError("Error processing subscription.");
      setTimeout(() => setError(""), 3000);
    }
  };

  const handleLogout = () => {
    localStorage.setItem("userLoggedIn", "false");
    setIsLoggedIn(false);
    setError("Logged out successfully.");
    setTimeout(() => setError(""), 3000); // Hide error after 3 seconds
  };


  return (
    <div>
      <nav className="flex items-center justify-between px-6 py-4 bg-gray-800 text-white">
        {/* Logo with Image */}
        <div className="text-xl font-bold ml-20">
          <img
            src="https://i.ibb.co/RpxvQrQD/ip-removebg-preview.png" // Replace with your real logo image URL
            alt="Logo"
            className="w-32" // Adjust width as needed
          />
        </div>

        {/* Navigation Links */}
        <div className="flex gap-6">
          <a href="#subscription" className="hover:underline">
            HOME
          </a>
          <a href="#subscription" className="hover:underline">
            OUR SUBSCRIPTIONS
          </a>
          <a href="#reviews" className="hover:underline">
            REVIEWS
          </a>
          <a href="#contact" className="hover:underline">
            CONTACT US
          </a>
        </div>

        {/* Cart Button with Increased Size */}
        {error && <p className="text-red-500">{error}</p>}
        {/* Show "START THE FUN" button only if user is NOT logged in */}
        {!isLoggedIn && (
          <button
            onClick={handleSubscribe}
            className="px-3 py-1 border-2 border-blue-600 text-white rounded-lg hover:bg-blue-700 text-lg"
          >
            START THE FUN {"  "}
            <ShoppingCartIcon className="mr-2" />
          </button>
        )}l
        {/* Show Login Modal only if user is not logged in */}
        {showLoginModal && (
          <LoginModal
            isOpen={showLoginModal}
            onClose={() => setShowLoginModal(false)}
            onLogin={() => {
              localStorage.setItem("userLoggedIn", "true");
              setIsLoggedIn(true);
              setShowLoginModal(false);
              setError(""); // Clear error after login
            }}
          />
        )}

        {/* Show LOGOUT button only when user is logged in */}
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="px-4 py-2 border-2 border-red-600 text-white rounded-lg hover:bg-red-700"
          >
            USER LOGOUT
          </button>
        )}
      </nav>

      {/* Banner Image */}
      <div className="relative">
        <img
          src="https://i.ibb.co/sHKx71b/Female-watching-movie.jpg" // Replace with your image URL
          alt="Banner"
          className="w-full max-h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 px-6 py-12">
          <p className="text-lg text-gray-200 mt-14 ml-20">
            Welcome..............................................................
          </p>
          <h1 className="text-5xl font-bold text-white mb-4 mt-8 ml-20">BEST INTERNATIONAL</h1>
          <h1 className="text-5xl font-bold text-white mb-4 mt-6 ml-20">IPTV TECH, WHO WE ARE</h1>
          <p className="text-lg text-gray-200 mb-8 ml-20">
            We are an internet-powered Television Services provider that is offering you a new cost-effective viewing <br />experience.
            With our unbeatable subscription you shall be able to watch ALL you favourite channels<br /> on any internet powered device, across multiple platforms
          </p>
          <h2 className="text-3xl font-bold text-white ml-20">Subscribe</h2>
          <button
            onClick={handleSubscribe}
            className="px-4 py-2 border-2 border-blue-600 text-white rounded-lg hover:bg-blue-700 mt-10 flex items-center ml-20"
          >
            Subscribe {" "}
            <ShoppingCartIcon className="mr-2" />
          </button>

          {/* Show Login Modal only if user is not logged in */}
          {showLoginModal && (
            <LoginModal
              isOpen={showLoginModal}
              onClose={() => setShowLoginModal(false)}
              onLogin={() => {
                localStorage.setItem("userLoggedIn", "true");
                setIsLoggedIn(true);
                setShowLoginModal(false);
                setError(""); // Clear error after login
              }}
            />
          )}
        </div>
      </div>

      {/* Why Choose Fox IPTV Hub Section */}
      <section className="py-12 bg-black">
        <h2 className="text-2xl text-center text-blue-600">
          CORE FEATURES
        </h2>
        <h2 className="text-4xl font-bold text-center mb-10 text-white ">
          Why Choose Fox IPTV Hub?
        </h2>
        <div className="flex flex-wrap justify-center gap-6 px-6">
          {/* Card 1 */}
          <div className="bg-blank rounded-lg p-6 w-80 text-center shadow-[0px_4px_10px_2px_rgba(0,0,255,0.5)] hover:shadow-[0px_6px_15px_3px_rgba(0,0,255,0.7)]">
            <div className="text-blue-500 text-4xl mb-4">
              <i className="fas fa-tv"></i> {/* Replace with any relevant icon */}
            </div>
            <TvSharp className="mr-2 text-4xl text-white" />
            <h3 className="text-xl font-bold mb-2 text-white">High Streaming Quality</h3>
            <p className="text-white">
              We provide the best streaming on 4K/FHD/HD/SD to
              ensure you get the best playback experience on television.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-blank rounded-lg p-6 w-80 text-center shadow-[0px_4px_10px_2px_rgba(0,0,255,0.5)] hover:shadow-[0px_6px_15px_3px_rgba(0,0,255,0.7)]">
            <div className="text-green-500 text-4xl mb-4">
              <i className="fas fa-headset"></i> {/* Replace with any relevant icon */}
            </div>
            <SupportAgentOutlined className="mr-2 text-4xl text-white" />
            <h3 className="text-xl font-bold mb-2 text-white">24/7 Customer Support</h3>
            <p className="text-white">
              Oue friendly and knowlwdge customer support team is
              available 24/7 to help you with issues or questions
              you may have.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-black rounded-lg p-6 w-80 text-center shadow-[0px_4px_10px_2px_rgba(0,0,255,0.5)] hover:shadow-[0px_6px_15px_3px_rgba(0,0,255,0.7)]">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-star"></i> {/* Replace with any relevant icon */}
            </div>
            <VideoCallOutlined className="mr-2 text-4xl text-white" />
            <h3 className="text-xl font-bold mb-2 text-white">Support All Devices</h3>
            <p className="text-white">
              You can watch your favorite TV channels on all your decices:
              Smart TV, Mag, smartphone, tablet, Firestick, computer
              android Box.
            </p>
          </div>
        </div><br /><br />
        <div className="flex flex-wrap justify-center gap-6 px-6">
          {/* Card 1 */}
          <div className="bg-blank rounded-lg p-6 w-80 text-center shadow-[0px_4px_10px_2px_rgba(0,0,255,0.5)] hover:shadow-[0px_6px_15px_3px_rgba(0,0,255,0.7)]">
            <div className="text-blue-500 text-4xl mb-4">
              <i className="fas fa-tv"></i> {/* Replace with any relevant icon */}
            </div>
            <TvSharp className="mr-2 text-4xl text-white" />
            <h3 className="text-xl font-bold mb-2 text-white">Affordable Plans</h3>
            <p className="text-white">
              Choose from a variety plans that fit your needs and budget. No
              hidden fees, no surprises.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-blank rounded-lg p-6 w-80 text-center shadow-[0px_4px_10px_2px_rgba(0,0,255,0.5)] hover:shadow-[0px_6px_15px_3px_rgba(0,0,255,0.7)]">
            <div className="text-green-500 text-4xl mb-4">
              <i className="fas fa-headset"></i> {/* Replace with any relevant icon */}
            </div>
            <SupportAgentOutlined className="mr-2 text-4xl text-white" />
            <h3 className="text-xl font-bold mb-2 text-white">Flexible Contracts</h3>
            <p className="text-white">
              Choose from sgort-term or long term contracts
              that fit your lifestyle. No long-term commitments required.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-black rounded-lg p-6 w-80 text-center shadow-[0px_4px_10px_2px_rgba(0,0,255,0.5)] hover:shadow-[0px_6px_15px_3px_rgba(0,0,255,0.7)]">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-star"></i> {/* Replace with any relevant icon */}
            </div>
            <VideoCallOutlined className="mr-2 text-4xl text-white" />
            <h3 className="text-xl font-bold mb-2 text-white">Premium Channels</h3>
            <p className="text-white">
              Explore our extensive Premium Channel library fro the best global Entertainament.
            </p>
          </div>
        </div>
      </section>


      {/* OUR CHANNELS Section */}
      <section className="py-12 bg-black">
        <div className="max-w-4xl mx-auto text-center px-6">

          <div className="bg-black rounded-lg p-6">
            <p className="text-white text-xl font-semibold">
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="container mx-auto px-6 flex items-center space-x-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-6"></h2>
          <p className="text-lg  mb-6 text-white">
            <small className="text-lg text-blue-800">OUR CHANNELS</small><br />
            As well as a large selection of channels, in addition to the latest films and trendy series of the moment.
          </p>

          {/* Right Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold  mb-6 text-white">
              ALL WORLDWIDE CHANNELS
            </h2>
            <p className="text-lg text-white mb-6">
              Don't miss out our best sport live channels
            </p>
            <p className="text-lg text-white mb-6">
              FOX IPTV HUB Shop offers you a Subscription From <span className="text-blue-600 font-bold">€15 Monthly</span>. Discover the Best Subscriptions with access to <span className="text-blue-600 font-bold">+26,000 International Channels</span> and <span className="text-blue-600 font-bold">+95,000 VOD contents</span>.

            </p>

          </div>
        </div>
      </section>

      {/* Infinite Scrolling Images Section */}
      <section className="py-12 bg-black shadow-[0px_4px_10px_2px_rgba(0,0,255,0.5)] hover:shadow-[0px_6px_15px_3px_rgba(0,0,255,0.7)]">
        <div className="overflow-hidden">
          <div className="flex animate-marquee space-x-8 px-6">
            <img
              src="https://i.ibb.co/Wx0WS9F/1-removebg-preview.png"
              alt="DSTV"
              className="w-60 bg-gray-900"
            />
            <img
              src="https://i.ibb.co/2jcwpR9/2-removebg-preview.png"
              alt="Image 2"
              className="w-60 bg-gray-900"
            />
            <img
              src="https://i.ibb.co/HNqsvMc/3-removebg-preview.png"
              alt="IPTV Icon"
              className="w-60 bg-gray-900"
            />
            <img
              src="https://i.ibb.co/sw8R84F/4-removebg-preview.png"
              alt="Google"
              className="w-60 bg-gray-900"
            />
            <img
              src="https://i.ibb.co/fr70qWy/5-removebg-preview.png"
              alt="App Store"
              className="w-60 bg-gray-900"
            />
            {/* Duplicate images for the infinite scroll effect */}
            <img
              src="https://i.ibb.co/LQYs73Q/6-removebg-preview.png"
              alt="DSTV"
              className="w-60 bg-gray-900"
            />
            <img
              src="https://i.ibb.co/xJVm1HJ/7-removebg-preview.png"
              alt="Image 2"
              className="w-60 bg-gray-900"
            />
            <img
              src="https://i.ibb.co/FHS6Djy/8-removebg-preview.png"
              alt="IPTV Icon"
              className="w-60 bg-gray-900"
            />
            <img
              src="https://i.ibb.co/34LTnrH/9-removebg-preview.png"
              alt="Google"
              className="w-60 bg-gray-900"
            />
            <img
              src="https://i.ibb.co/wyXhWWr/10-removebg-preview.png"
              alt="App Store"
              className="w-60 bg-gray-900"
            />
            {/* Duplicate images for the infinite scroll effect */}
            <img
              src="https://i.ibb.co/1zq5FpY/11-removebg-preview.png"
              alt="DSTV"
              className="w-60 bg-gray-900"
            />
            <img
              src="https://i.ibb.co/2tYjrr8/12-removebg-preview.png"
              alt="Image 2"
              className="w-60 bg-gray-900"
            />
            <img
              src="https://i.ibb.co/Wx0WS9F/1-removebg-preview.png"
              alt="DSTV"
              className="w-60 bg-gray-900"
            />
            <img
              src="https://i.ibb.co/2jcwpR9/2-removebg-preview.png"
              alt="Image 2"
              className="w-60 bg-gray-900"
            />
            <img
              src="https://i.ibb.co/HNqsvMc/3-removebg-preview.png"
              alt="IPTV Icon"
              className="w-60 bg-gray-900"
            />
            <img
              src="https://i.ibb.co/sw8R84F/4-removebg-preview.png"
              alt="Google"
              className="w-60 bg-gray-900"
            />
            <img
              src="https://i.ibb.co/fr70qWy/5-removebg-preview.png"
              alt="App Store"
              className="w-60 bg-gray-900"
            />
            {/* Duplicate images for the infinite scroll effect */}
            <img
              src="https://i.ibb.co/LQYs73Q/6-removebg-preview.png"
              alt="DSTV"
              className="w-60 bg-gray-900"
            />
            <img
              src="https://i.ibb.co/xJVm1HJ/7-removebg-preview.png"
              alt="Image 2"
              className="w-60 bg-gray-900"
            />
            <img
              src="https://i.ibb.co/FHS6Djy/8-removebg-preview.png"
              alt="IPTV Icon"
              className="w-60 bg-gray-900"
            />
            <img
              src="https://i.ibb.co/34LTnrH/9-removebg-preview.png"
              alt="Google"
              className="w-60 bg-gray-900"
            />
            <img
              src="https://i.ibb.co/wyXhWWr/10-removebg-preview.png"
              alt="App Store"
              className="w-60 bg-gray-900"
            />
            {/* Duplicate images for the infinite scroll effect */}
            <img
              src="https://i.ibb.co/1zq5FpY/11-removebg-preview.png"
              alt="DSTV"
              className="w-60 bg-gray-900"
            />
            <img
              src="https://i.ibb.co/2tYjrr8/12-removebg-preview.png"
              alt="Image 2"
              className="w-60 bg-gray-900"
            />

          </div>
        </div>
      </section>
      {/* Infinite Scrolling Images Section */}
      <section className="py-12 bg-black">
        <div className="overflow-hidden">
          <div className="flex animate-marquee space-x-8 px-6">
            <img
              src="https://berkleyspectator.com/wp-content/uploads/2022/01/vgPj2F128qtShMaT9DNa8ODtWUFhqqrFPEUWfTRo-e1642785179405-683x900.jpeg"
              alt="DSTV"
              className="w-80"
            />
            <img
              src="https://static.toiimg.com/photo/85836503.cms?imgsize=15892"
              alt="Image 2"
              className="w-80"
            />
            <img
              src="https://cdn.marvel.com/content/1x/thunderbolts_lob_crd_03.jpg"
              alt="IPTV Icon"
              className="w-80"
            />
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/thor-2-6657515fcffd9.jpg?crop=1xw:1xh;center,top&resize=980"
              alt="Google"
              className="w-80"
            />
            <img
              src="https://www.ws-trend.de/cdn/shop/files/wsonnwald_00886_marvel_thor_977db1b4-2044-4800-90b6-7ea623854e88_480x480.webp"
              alt="App Store"
              className="w-80"
            />
            <img
              src="https://berkleyspectator.com/wp-content/uploads/2022/01/vgPj2F128qtShMaT9DNa8ODtWUFhqqrFPEUWfTRo-e1642785179405-683x900.jpeg"
              alt="DSTV"
              className="w-80"
            />
            <img
              src="https://static.toiimg.com/photo/85836503.cms?imgsize=15892"
              alt="Image 2"
              className="w-80"
            />
            <img
              src="https://cdn.marvel.com/content/1x/thunderbolts_lob_crd_03.jpg"
              alt="IPTV Icon"
              className="w-80"
            />
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/thor-2-6657515fcffd9.jpg?crop=1xw:1xh;center,top&resize=980"
              alt="Google"
              className="w-80"
            />
            <img
              src="https://www.ws-trend.de/cdn/shop/files/wsonnwald_00886_marvel_thor_977db1b4-2044-4800-90b6-7ea623854e88_480x480.webp"
              alt="App Store"
              className="w-80"
            />
            <img
              src="https://berkleyspectator.com/wp-content/uploads/2022/01/vgPj2F128qtShMaT9DNa8ODtWUFhqqrFPEUWfTRo-e1642785179405-683x900.jpeg"
              alt="DSTV"
              className="w-80"
            />
            <img
              src="https://static.toiimg.com/photo/85836503.cms?imgsize=15892"
              alt="Image 2"
              className="w-80"
            />
            <img
              src="https://cdn.marvel.com/content/1x/thunderbolts_lob_crd_03.jpg"
              alt="IPTV Icon"
              className="w-80"
            />
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/thor-2-6657515fcffd9.jpg?crop=1xw:1xh;center,top&resize=980"
              alt="Google"
              className="w-80"
            />
            <img
              src="https://www.ws-trend.de/cdn/shop/files/wsonnwald_00886_marvel_thor_977db1b4-2044-4800-90b6-7ea623854e88_480x480.webp"
              alt="App Store"
              className="w-80"
            />
          </div>
        </div>
      </section>
      {/* OUR CHANNELS Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6 flex items-center space-x-8">
          <h2 className="text-3xl font-bold text-blue-800 mb-6"></h2>
          <p className="text-lg  mb-6 text-white ml-20">
            <small className="text-lg text-blue-800 ">POPULAR MOVIES</small><br />
            The most popular movies to watch in 2024.<br />
            As well as a large selection of channels, in addition to the latest films and trendy series of the moment.
          </p>

          {/* Right Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left ml-20">
            <h2 className="text-3xl font-bold  mb-6 text-white">
              ALL WORLDWIDE CHANNELS
            </h2>
            <p className="text-lg text-white mb-6">
              We have in our  subscription   the best of the best sports and cinema channels from all over the world.
            </p>
            <p className="text-lg text-white mb-6">
              Action, Thriller, Comedies, Dramas, Sci-Fi And Many More Movies!
            </p>

          </div>
        </div>
      </section>
      {/* Infinite Scrolling Images Section */}
      <section className="py-12 bg-black">
        <div className="overflow-hidden">
          <div className="flex animate-marquee space-x-8 px-6">
            <img
              src="https://berkleyspectator.com/wp-content/uploads/2022/01/vgPj2F128qtShMaT9DNa8ODtWUFhqqrFPEUWfTRo-e1642785179405-683x900.jpeg"
              alt="DSTV"
              className="w-80"
            />
            <img
              src="https://static.toiimg.com/photo/85836503.cms?imgsize=15892"
              alt="Image 2"
              className="w-80"
            />
            <img
              src="https://cdn.marvel.com/content/1x/thunderbolts_lob_crd_03.jpg"
              alt="IPTV Icon"
              className="w-80"
            />
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/thor-2-6657515fcffd9.jpg?crop=1xw:1xh;center,top&resize=980"
              alt="Google"
              className="w-80"
            />
            <img
              src="https://www.ws-trend.de/cdn/shop/files/wsonnwald_00886_marvel_thor_977db1b4-2044-4800-90b6-7ea623854e88_480x480.webp"
              alt="App Store"
              className="w-80"
            />
            <img
              src="https://berkleyspectator.com/wp-content/uploads/2022/01/vgPj2F128qtShMaT9DNa8ODtWUFhqqrFPEUWfTRo-e1642785179405-683x900.jpeg"
              alt="DSTV"
              className="w-80"
            />
            <img
              src="https://static.toiimg.com/photo/85836503.cms?imgsize=15892"
              alt="Image 2"
              className="w-80"
            />
            <img
              src="https://cdn.marvel.com/content/1x/thunderbolts_lob_crd_03.jpg"
              alt="IPTV Icon"
              className="w-80"
            />
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/thor-2-6657515fcffd9.jpg?crop=1xw:1xh;center,top&resize=980"
              alt="Google"
              className="w-80"
            />
            <img
              src="https://www.ws-trend.de/cdn/shop/files/wsonnwald_00886_marvel_thor_977db1b4-2044-4800-90b6-7ea623854e88_480x480.webp"
              alt="App Store"
              className="w-80"
            />
            <img
              src="https://berkleyspectator.com/wp-content/uploads/2022/01/vgPj2F128qtShMaT9DNa8ODtWUFhqqrFPEUWfTRo-e1642785179405-683x900.jpeg"
              alt="DSTV"
              className="w-80"
            />
            <img
              src="https://static.toiimg.com/photo/85836503.cms?imgsize=15892"
              alt="Image 2"
              className="w-80"
            />
            <img
              src="https://cdn.marvel.com/content/1x/thunderbolts_lob_crd_03.jpg"
              alt="IPTV Icon"
              className="w-80"
            />
            <img
              src="https://hips.hearstapps.com/hmg-prod/images/thor-2-6657515fcffd9.jpg?crop=1xw:1xh;center,top&resize=980"
              alt="Google"
              className="w-80"
            />
            <img
              src="https://www.ws-trend.de/cdn/shop/files/wsonnwald_00886_marvel_thor_977db1b4-2044-4800-90b6-7ea623854e88_480x480.webp"
              alt="App Store"
              className="w-80"
            />
          </div>
        </div>
      </section>

      <section className="py-12 bg-black">
        <h2 className="text-3xl font-bold text-center text-blue-800">OUR PRICING</h2>
        <h2 className="text-3xl font-bold text-center text-white">Choose your subscription</h2>
        <h6 className="text-center text-gray-500 mb-10">Not sure? <a href='' className='text-blue-800'>Try our 24h trial</a></h6>
        <div className="flex justify-center gap-8">
          {/* 1 Month Plan */}
          <div className="bg-#0f0f0f shadow-2xl shadow-blue-500 rounded-lg p-6 w-80">
            <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">1 Month</h3>
            <div className="text-center text-3xl font-bold text-gray-800">{currency}{one}</div>
            <div className="mt-4 text-gray-700">
              <p className="mb-2">High Performance Server</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> HD, FHD, 4K, 8K
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> +26,000 Channels
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> +120,000 VOD
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> Catch-up / EPG
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> Always Uptime Server
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> Adult channels
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> Anti-Freeze™ 3.0 Technology
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> Support 24/7
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> All devices supported
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> 7 day money-back guarantee
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <button className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                onClick={oneMonth}
              >
                BUY NOW
              </button>
              <div id="paypal-button-oneMonth"></div>
              <p className="text-center text-sm mt-2">Ready within 1-2 hour</p>
              <LoginModal isOpen={showModal} onClose={() => setShowModal(false)} onLogin={() => setIsLoggedIn(true)} />
            </div>
          </div>

          {/* 3 Months Plan */}
          <div className="bg-#0f0f0f shadow-2xl shadow-blue-500 rounded-lg p-6 w-80">
            <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">3 Months</h3>
            <div className="text-center text-3xl font-bold text-gray-800">{currency}{three}</div>
            <div className="mt-4 text-gray-700">
              <p className="mb-2">High Performance Server</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> HD, FHD, 4K, 8K
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> +26,000 Channels
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> +120,000 VOD
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> Catch-up / EPG
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> Always Uptime Server
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> Adult channels
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> Anti-Freeze™ 3.0 Technology
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> Support 24/7
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> All devices supported
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> 7 day money-back guarantee
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <button className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                onClick={threeMonth}
              >
                BUY NOW
              </button>
              <div id="paypal-button-threeMonth"></div>
              <p className="text-center text-sm mt-2">Ready within 1-2 hour</p>
            </div>
          </div>
          {/* 6 Months Plan */}
          <div className="bg-#0f0f0f shadow-2xl shadow-blue-500 rounded-lg p-6 w-80">
            <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">6 Months</h3>
            <div className="text-center text-3xl font-bold text-gray-800">{currency}{six}</div>
            <div className="mt-4 text-gray-700">
              <p className="mb-2">High Performance Server</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> HD, FHD, 4K, 8K
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> +26,000 Channels
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> +120,000 VOD
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> Catch-up / EPG
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> Always Uptime Server
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> Adult channels
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> Anti-Freeze™ 3.0 Technology
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> Support 24/7
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> All devices supported
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> 7 day money-back guarantee
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <button className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                onClick={sixMonth}
              >
                BUY NOW
              </button>
              <div id="paypal-button-sixMonth"></div>
              <p className="text-center text-sm mt-2">Ready within 1-2 hour</p>
            </div>
          </div>

          {/* 8 Months Plan (Popular) */}
          <div className="bg-#0f0f0f shadow-2xl shadow-blue-500 rounded-lg p-6 w-80 border-4 border-blue-500">
            <h3 className="text-2xl font-semibold text-center mb-4 text-gray-800">8 Months</h3>
            <div className="text-center text-3xl font-bold text-gray-800">{currency}{eight}</div>
            <div className="mt-4 text-gray-700">
              <p className="mb-2">High Performance Server</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> HD, FHD, 4K, 8K
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> +26,000 Channels
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> +120,000 VOD
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> Catch-up / EPG
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> Always Uptime Server
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> Adult channels
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> Anti-Freeze™ 3.0 Technology
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> Support 24/7
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> All devices supported
                </li>
                <li className="flex items-center">
                  <span className="text-blue-600 mr-2">&#10003;</span> 7 day money-back guarantee
                </li>
              </ul>
            </div>
            <div className="mt-6">
              <button className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                onClick={eightMonth}
              >
                BUY NOW
              </button>
              <div id="paypal-button-eightMonth"></div>
              <p className="text-center text-sm mt-2">Ready within 1-2 hour</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black">
        <div className="container mx-auto px-6 flex items-center space-x-8">
          {/* Left Image Section */}
          <div className="w-full md:w-1/2">
            <img
              src="https://ichef.bbci.co.uk/images/ic/1200xn/p036y0lz.jpg"
              alt="Sports Live Channels"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Right Text Section */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-6">
              Don't miss out our best sport live channels
            </h2>
            <p className="text-lg text-white  mb-6">
              Fox IPTV Hub The N°1 PREMIUM subscription in Europe with + 23,000 Channels in 4K/FHD/HD Quality and Unlimited films and series, All the TV you love in a Single 4K Subscription with Multi-screen Broadcast Without cuts nor Hassle.
            </p>
            <p className="text-lg text-white  mb-6">
              We offer you stable subscriptions and 4K, FHD, HEVC, and HD image quality to adapt to any connection speed.
            </p>
            <p className="text-lg text-white ">
              Catch the biggest games and PPV events. Grab a big bowl of popcorn and live the excitement.
            </p>
            <button
              onClick={handleSubscribe}
              className="px-4 py-2 border-2 border-blue-600 text-white rounded-lg hover:bg-blue-700 mt-10 flex items-center ml-20"
            >
              OUR SUBSCRIPTIONS  {"  "}
              <ShoppingCartIcon className="mr-2" />
            </button>

            {/* Show Login Modal only if user is not logged in */}
            {showLoginModal && (
              <LoginModal
                isOpen={showLoginModal}
                onClose={() => setShowLoginModal(false)}
                onLogin={() => {
                  localStorage.setItem("userLoggedIn", "true");
                  setIsLoggedIn(true);
                  setShowLoginModal(false);
                  setError(""); // Clear error after login
                }}
              />
            )}
          </div>
        </div>
      </section>

      <section className="py-12 bg-black">
        <div className="flex flex-wrap justify-center gap-6 px-6">
          {/* Card 1 */}
          <div className=" rounded-lg p-6 w-80 text-start">
            <div className="text-blue-500 text-4xl mb-4">
              <i className="fas fa-tv"></i> {/* Replace with any relevant icon */}
            </div>
            <div className="text-xl font-bold">
              <img
                src="https://i.ibb.co/V08dZLGT/Whats-App-Image-2025-02-10-at-11-15-34-52e0197f-removebg-preview.png" // Replace with your real logo image URL
                alt="Logo"
                className="w-32" // Adjust width as needed
              />
            </div>
            <p className="text-white">
              We make television affordable and accessible to everyone, everywhere! With over 20,000 satisfied customers,
            </p><br />
            <div className="text-xl font-bold">
              <img
                src="https://cdn.britannica.com/29/4229-050-BED17BAD/Flag-Eswatini.jpg" // Replace with your real logo image URL
                alt="Logo"
                className="w-32" // Adjust width as needed
              />
            </div>
          </div>

          {/* Card 2 */}
          <div className="rounded-lg p-6 w-80 text-start">
            <div className="text-green-500 text-4xl mb-4">
              <i className="fas fa-headset"></i> {/* Replace with any relevant icon */}
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Link Info</h3>
            <ul className="text-white list-disc list-inside">
              <li>PRIVACY POLICY.</li>
              <li>TERMS OF SERVICE.</li>
              <li>REFUND AND RETURNS POLICY.</li>
              <li>OUR SUBSCRIPTIONS.</li>
            </ul>
          </div>


          {/* Card 3 */}
          <div className="rounded-lg p-6 w-80">
            <div className="text-red-500 text-4xl mb-4">
              <i className="fas fa-star"></i> {/* Replace with any relevant icon */}
            </div>
            <h3 className="text-xl font-bold mb-2 text-white">Customer Support 24/7</h3>
            <a
              href="https://wa.me/+27710081610?text=Hello%20Customer%20Support%2C%20I%20need%20help!"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 border-2 border-blue-600 text-white rounded-lg hover:bg-blue-700 text-lg mt-4 flex items-center justify-center"
            >
              <WhatsApp className="mr-2" />
              WhatsApp Us
            </a>
            <p className="text-white mt-5"><br />
              sales.international@iptvtek.net
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}