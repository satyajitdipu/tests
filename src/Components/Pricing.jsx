import "./Pricing.css";
import { Link, useNavigate } from "react-router-dom";
import tick from "../assets/icon_tick.png";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Myprofile from "./Myprofile";

const Pricing = () => {
  const navigate = useNavigate();
  const [billingDetails, setBillingDetails] = useState(null);
  const [userDatas, setUserDatas] = useState(null);

  useEffect(() => {
    fetchUserData();
    fetchBillingDetails();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await axios.get("https://virtualtxai.com/api/me", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      setUserDatas(response.data);
    } catch (error) {
      console.error(
        "Error fetching user data:",
        error.response?.data || error.message
      );
    }
  };

  const fetchBillingDetails = async () => {
    try {
      const response = await axios.get(
        "https://virtualtxai.com/api/billing-details",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      setBillingDetails(response.data.data);
    } catch (error) {
      console.error(
        "Error fetching billing details:",
        error.response?.data || error.message
      );
    }
  };

  const handleSubscription = async (planType) => {
    const token = localStorage.getItem("token");

    if (!token) {
      localStorage.setItem("planType", planType);
        navigate("/myaccount");
        return;
    }

 else {
  try {
    console.log("Token:", token);
    console.log("Selected Plan:", planType);

    const response = await fetch("https://virtualtxai.com/api/create-checkout-session", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ plan: planType }),
    });

    const data = await response.json();
    console.log("API Response:", data);

    if (!response.ok) {
        throw new Error(data.error || "Something went wrong");
    }

    if (data.url) {
        window.location.href = data.url; // Redirect to Stripe checkout
    } 
    else if(data.message=="User already has an active subscription."){
      navigate("/myprofile"); // Redirect to profile

    }
    else {
        console.error("Stripe URL missing in response. Full API response:", data);
    }
} catch (error) {
    console.error("Error in handleSubscription:", error.message);
}
}
};


  return (
    <>
      <section className="pricing_sec mt-xl-5 mt-lg-5 mt-md-4 mt-3  py-xl-5 py-lg-5 py-md-4 py-3 ">
        <div className="container py-xl-5 py-lg-4 py-md-3 py-3">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-md-8 col-12">
              <h1 className="fw-bold large_font py-xl-4 py-lg-3 py-md-3 py-0">
                We've got a plan <br /> that's
                <span className="green_txt">perfect</span> for you
              </h1>
              <h5 className="fw-bold fst-italic large_font2 pt-xl-4 pt-lg-4 pt-md-3 pt-1">
                Features included in every plan:
              </h5>
              {[
                "Coloring book and other free games.",
                "Full roster of interactive therapy platform.",
                "Games for all age groups.",
                "Therapy Activity card",
                "Notifications for new updates.",
              ].map((feature, index) => (
                <div
                  key={index}
                  className="features py-xl-3 py-lg-3 py-md-2 py-2 d-flex justify-content-start align-item-center gap-2"
                >
                  <img src={tick} alt="tick" className="img-fluid" />
                  <p className="mb-0 mt-xl-1 mt-lg-2 mt-md-1 mt-2">{feature}</p>
                </div>
              ))}
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 pricing_right">
              {[
                { type: "Monthly", price: "9.99", plan: "monthly" },
                { type: "Quarterly", price: "26.97", plan: "quarterly" },
                { type: "Yearly", price: "95.90", plan: "yearly" },
              ].map((plan, index) => (
                <div key={index} className="row my-xl-3 my-lg-3 my-md-2 my-2">
                  <div className="col-12 tabs p-xl-4 p-lg-4 p-md-2 p-2">
                    <h6 className="fw-bold">{plan.type}</h6>
                    <h2 className="fw-bold">${plan.price}</h2>
                    <p>
                      {plan.type === "Monthly"
                        ? "Single User login/billed monthly"
                        : plan.type === "Quarterly"
                        ? "Single user login / $4.4 billed monthly for 6 months"
                        : "Single user login / $7.9 billed monthly for a year"}
                    </p>
                    <button
                      className="fw-bold py-xl-3 py-lg-3 py-md-2 py-2 d-flex justify-content-center align-item-center subscribe_now_btn"
                      onClick={() => handleSubscription(plan.plan)}
                    >
                      Subscribe now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="accordion_sec mt-xl-4 mt-lg-4 mt-md-4 mt-3  py-xl-5 py-lg-5 py-md-4 py-3">
        <div className="container pb-xl-5 pb-lg-4 pb-md-3 pb-2">
          <h3 className="pb-xl-5 pb-lg-5 pb-md-3 pb-2 fw-bold">
            Frequently Asked Questions
          </h3>
          <div className="row">
            <div className="col-12">
              <div className="accordion" id="accordionExample">
                {[
                  { id: "One", title: "Accordion Item #1", content: "This is the first item's accordion body." },
                  { id: "Two", title: "Accordion Item #2", content: "This is the second item's accordion body." },
                  { id: "Three", title: "Accordion Item #3", content: "This is the third item's accordion body." },
                ].map((item, index) => (
                  <div key={index} className="accordion-item">
                    <h2 className="accordion-header" id={`heading${item.id}`}>
                      <button
                        className="accordion-button collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#collapse${item.id}`}
                        aria-expanded="false"
                        aria-controls={`collapse${item.id}`}
                      >
                        {item.title}
                      </button>
                    </h2>
                    <div
                      id={`collapse${item.id}`}
                      className="accordion-collapse collapse"
                      aria-labelledby={`heading${item.id}`}
                      data-bs-parent="#accordionExample"
                    >
                      <div className="accordion-body">
                        <strong>{item.content}</strong> You can modify any of this with custom CSS.
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Pricing;
