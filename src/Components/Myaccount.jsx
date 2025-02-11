import React, { useState } from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Myaccount.css";
import create_acc_img from "../assets/create_acc_img.png";


const Myaccount = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    fullName: "",
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    acceptTerms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Check if occupation is selected
    if (!formData.occupation) {
      Swal.fire({
        icon: "warning",
        title: "Missing Information",
        text: "Please select an occupation.",
        customClass: {
          popup: "custom-swal-popup",
          title: "custom-swal-title",
          content: "custom-swal-text",
        },
      });
      return;
    }
  
    // Check if terms are accepted
    if (!formData.acceptTerms) {
      Swal.fire({
        icon: "warning",
        title: "Terms & Conditions",
        text: "Please accept the privacy policy and terms & conditions.",
        customClass: {
          popup: "custom-swal-popup",
          title: "custom-swal-title",
          content: "custom-swal-text",
        },
      });
      return;
    }
  
    try {
      const response = await axios.post(
        "https://virtualtxai.com/api/register",
        {
          full_name: formData.fullName,
          first_name: formData.firstName,
          last_name: formData.lastName,
          password: formData.password,
          password_confirmation: formData.password,
          email: formData.email,
          occupation: formData.occupation,
          plan_type: localStorage.getItem('planType'), // Add the selected plan type here
        },
        {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
    
      // Extract the payment URL from the API response
      const paymentUrl = response.data.payment_url;
    
      // Show success alert
      Swal.fire({
        icon: "success",
        title: "Registration Successful",
        text: "Redirecting to the payment page...",
        timer: 3000,
        timerProgressBar: true,
        showConfirmButton: false,
        customClass: {
          popup: "custom-swal-popup-success",
          title: "custom-swal-title",
          content: "custom-swal-text",
        },
      }).then(() => {
        // Redirect to the payment page
        window.location.href = paymentUrl;
      });
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "An unexpected error occurred. Please try again.";
      Swal.fire({
        icon: "error",
        title: "Error",
        text: errorMessage,
        customClass: {
          popup: "custom-swal-popup-error",
          title: "custom-swal-title",
          content: "custom-swal-text",
        },
      });
    }
  };
  
  const handleClick = () => {
    navigate("/login");
  };

  return (
    <>
      <section className="mt-xl-5 mt-lg-5 mt-md-4 mt-3 py-xl-5 py-lg-5 py-md-4 py-3 create_acc_sec">
        <div className="container ">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 ">
              <h1 className="pt-xl-5 pt-lg-4 pt-md-3 pt-2">
                Create your account
              </h1>
              <div>
                <img src={create_acc_img} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 mt-xl-5 mt-lg-5 mt-md-4 mt-3 pt-xl-5 pt-lg-4 pt-md-3 pt-2">
              <div className="form_sec p-xl-4 p-lg-4 p-md-3 p-2 position-relative">
                <div className="button_sec_create_acc d-flex justify-content-center gap-2 position-absolute">
                  <button className="log_in_btn_green px-xl-5 px-lg-5 px-md-4 px-3 py-xl-3 py-lg-3 py-md-2 py-1">
                    Sign Up
                  </button>
                  <button
                    onClick={handleClick}
                    className="log_in_btn px-xl-5 px-lg-5 px-md-4 px-3 py-xl-2 py-lg-2 py-md-1 py-1"
                  >
                    Log In
                  </button>
                </div>

                <form
                  onSubmit={handleSubmit}
                  className="pt-xl-5 pt-lg-5 pt-md-4 pt-3 create_acc_inputs"
                >
                  <input
                    name="email"
                    placeholder="Enter your Email"
                    className="p-xl-4 p-lg-4 p-md-3 p-3"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <div className="d-flex gap-2 my-xl-3 my-lg-3 my-md-2 my-2">
                    <input
                      name="firstName"
                      placeholder="Enter your First name"
                      className="p-xl-4 p-lg-4 p-md-3 p-3"
                      type="text"
                      value={formData.firstName}
                      onChange={handleChange}
                    />
                    <input
                      name="lastName"
                      placeholder="Enter your lastName"
                      className="p-xl-4 p-lg-4 p-md-3 p-3"
                      type="text"
                      value={formData.lastName}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="d-flex gap-2 my-xl-3 my-lg-3 my-md-2 my-2">
                    <input
                      name="password"
                      placeholder="Type your password"
                      className="p-xl-4 p-lg-4 p-md-3 p-3"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                    <input
                      name="password_confirmation"
                      placeholder="Confirm your password"
                      className="p-xl-4 p-lg-4 p-md-3 p-3"
                      type="password"
                      value={formData.password_confirmation}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="d-flex gap-2 my-xl-3 my-lg-3 my-md-2 my-2">
                    {/* <input
                      name="occupation"
                      placeholder="Select an occupation"
                      className="p-xl-4 p-lg-4 p-md-3 p-3"
                      type="text"
                      value={formData.occupation}
                      onChange={handleChange}
                    /> */}
                    <select
                      className="w-100 p-3 rounded"
                      name="occupation"
                      onChange={handleChange} // Attach the onChange event here
                      value={formData.occupation} // Bind the selected value to the state
                      placeholder="Select an occupation"
                    >
                      <option value="">Select occupation</option>
                      <option value="2">Speech language pathologist</option>
                      <option value="3">Psycologist</option>
                      <option value="4">Occupational therapist</option>
                      <option value="5">Social worker</option>
                    </select>
                  </div>
                  <div className="d-flex justify-content-start align-items-center gap-2 my-xl-5 my-lg-4 my-md-3 my-2 create_acc_checkbox">
                    <input
                      name="acceptTerms"
                      className="checkbox"
                      type="checkbox"
                      checked={formData.acceptTerms}
                      onChange={handleChange}
                    />
                    I accept the privacy policy and terms & conditions
                  </div>
                  <div className="create_acc_submit text-center">
                    <button
                      type="submit"
                      className="px-xl-5 px-lg-5 px-md-4 px-3 py-xl-3 py-lg-3 py-md-3 py-2 mt-xl-5 mt-lg-5 mt-md-4 mt-4"
                    >
                      Create account
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Myaccount;
