"use client";
import { useEffect, useRef, useState } from "react";
import { CONFIG } from "../../../config";
import LoginModal from "../LoginModal/page";

const Pricing = () => {
  const [pricingPlans, setPricingPlans] = useState([]);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const paypalRefs = useRef({});

  // Fetch pricing plans and login status
  useEffect(() => {
    const getPricing = async () => {
      try {
        const response = await fetch(`${CONFIG}/getPricing`);
        const data = await response.json();
        setPricingPlans(data);
      } catch (error) {
        console.error("Error fetching pricing data:", error);
      }
    };

    getPricing();

    const loggedIn = sessionStorage.getItem("userLoggedIn") === "true";
    setIsUserLoggedIn(loggedIn);
  }, []);

  // Load PayPal buttons dynamically for selected plan
  useEffect(() => {
    if (
      selectedPlan &&
      isUserLoggedIn &&
      paypalRefs.current[selectedPlan.month] &&
      !paypalRefs.current[selectedPlan.month].hasChildNodes()
    ) {
      const script = document.createElement("script");
      script.src = `https://www.paypal.com/sdk/js?client-id=AfLc7v-uApLZSGJ4hK3p3wUuQjVoHyZ9ZGSap2r_QYi-u0PsvfGmU-EujxtvQ188IxKyDpAM45TvjiAj&currency=USD`;
      script.addEventListener("load", () => {
        if (!paypalRefs.current[selectedPlan.month]) return;

        window.paypal
          .Buttons({
            createOrder: (data, actions) => {
              return actions.order.create({
                purchase_units: [
                  {
                    amount: {
                      value: "1.00",
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
          })
          .render(paypalRefs.current[selectedPlan.month]);
      });

      document.body.appendChild(script);
    }
  }, [selectedPlan, isUserLoggedIn]);

  // Called when user clicks "Buy Now"
  const handleBuyNow = (plan) => {
    if (!isUserLoggedIn) {
      setIsLoginModalOpen(true);
    } else {
      setSelectedPlan(plan);
    }
  };

  // Called after successful login
  const handleLogin = () => {
    setIsUserLoggedIn(true);
    setIsLoginModalOpen(false);

    setTimeout(() => {
      if (selectedPlan?.month && paypalRefs.current[selectedPlan.month]) {
        paypalRefs.current[selectedPlan.month].scrollIntoView({ behavior: "smooth" });
      }
    }, 300);
  };

  return (
    <section className="py-12 bg-black">
      <h2 className="text-3xl font-bold text-center text-blue-800 mb-6">OUR PRICING</h2>
      <h2 className="text-3xl font-bold text-center text-white mb-6">Choose your subscription</h2>
      <h6 className="text-center text-gray-500 mb-10">
        Not sure? <a href="#" className="text-blue-800">Try our 24h trial</a>
      </h6>

      <div className="flex justify-center gap-8 flex-wrap">
        {pricingPlans.length > 0 ? (
          pricingPlans.map((plan) => (
            <div
              key={plan.month}
              className="bg-[#0f0f0f] shadow-2xl shadow-blue-500 rounded-lg p-6 w-full sm:w-80"
            >
              {isUserLoggedIn && selectedPlan?.month === plan.month ? (
                <div
                  ref={(el) => (paypalRefs.current[plan.month] = el)}
                  className="flex justify-center items-center min-h-[200px]"
                />
              ) : (
                <>
                  <h3 className="text-2xl font-semibold text-center mb-4 text-white">{plan.month}</h3>
                  <div className="text-center text-3xl font-bold text-white">${plan.amount}</div>
                  <div className="mt-4 text-gray-300">
                    <p className="mb-2">High Performance Server</p>
                    <ul className="space-y-2 text-sm">
                      {Object.keys(plan)
                        .filter((key) => key.startsWith("text"))
                        .map((key, index) => (
                          <li key={index} className="flex items-center">
                            <span className="text-blue-600 mr-2">&#10003;</span> {plan[key]}
                          </li>
                        ))}
                    </ul>
                  </div>
                  <div className="mt-6">
                    <button
                      onClick={() => handleBuyNow(plan)}
                      className="w-full py-2 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
                    >
                      {plan.button_name || "BUY NOW"}
                    </button>
                    <p className="text-center text-sm mt-2">Ready within 1-2 hours</p>
                  </div>
                </>
              )}
            </div>
          ))
        ) : (
          <p className="text-center text-white">Loading pricing plans...</p>
        )}
      </div>

      {/* Login Modal */}
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onLogin={handleLogin}
      />
    </section>
  );
};

export default Pricing;
