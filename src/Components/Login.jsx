import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import create_acc_img from "../assets/create_acc_img.png";
import { Modal, Button, Alert } from "react-bootstrap";
import SweetAlert from "react-bootstrap-sweetalert";


const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [forgotPasswordEmail, setForgotPasswordEmail] = useState("");
  const [alertMessage, setAlertMessage] = useState("");
  const [alertVariant, setAlertVariant] = useState("");
 

  const handleClick = () => {
    navigate("/myaccount");
  };

  const handleforgotpassword = () => {
    navigate("/forgotpassword");
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("https://virtualtxai.com/api/login", {
        login: formData.username,
        password: formData.password,
      });
      console.log("Login successful:", response.data);
      localStorage.setItem("token", response.data.access_token);
   
      navigate("/");
    
      window.location.reload();
     
    } catch (error) {
      console.error("Error logging in:", error.response?.data || error.message);
    }
  };

  const handleForgotPasswordSubmit = async (e) => {
    e.preventDefault();
    console.log(forgotPasswordEmail);
    try {
      const response = await axios.post(
        "https://virtualtxai.com/api/forgot-password",
        {
          email: forgotPasswordEmail,
        }
      );
      setAlertMessage("Email sent! Please check your inbox.");
      setAlertVariant("success");
    } catch (error) {
      setAlertMessage("Error: Invalid email address.");
      setAlertVariant("danger");
    } finally {
      setShowModal(false);
    }
  };

  return (
    <>
      <section className="mt-xl-5 mt-lg-5 mt-md-4 mt-3 py-xl-5 py-lg-5 py-md-4 py-3 create_acc_sec">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12">
              <h1 className="pt-xl-5 pt-lg-4 pt-md-3 pt-2">
                Login to your account
              </h1>
              <div>
                <img src={create_acc_img} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 mt-xl-5 mt-lg-5 mt-md-4 mt-3 pt-xl-5 pt-lg-4 pt-md-3 pt-2">
              <div className="form_sec p-xl-4 p-lg-4 p-md-3 p-2 position-relative">
                <div className="button_sec_create_acc d-flex justify-content-center gap-2 position-absolute">
                  <button
                    onClick={handleClick}
                    className="log_in_btn px-xl-5 px-lg-5 px-md-4 px-3 py-xl-3 py-lg-3 py-md-2 py-1"
                  >
                    Sign Up
                  </button>
                  <button className="log_in_btn_green px-xl-5 px-lg-5 px-md-4 px-3 py-xl-2 py-lg-2 py-md-1 py-1">
                    Log In
                  </button>
                </div>
                <form
                  onSubmit={handleSubmit}
                  className="pt-xl-5 pt-lg-5 pt-md-4 pt-3 create_acc_inputs"
                >
                  <input
                    name="username"
                    placeholder="Enter your user name or email id"
                    className="p-xl-4 p-lg-4 p-md-3 p-3"
                    type="text"
                    value={formData.username}
                    onChange={handleChange}
                  />
                  <div className="d-flex gap-2 my-xl-3 my-lg-3 my-md-2 my-2">
                    <input
                      name="password"
                      placeholder="Password"
                      className="p-xl-4 p-lg-4 p-md-3 p-3"
                      type="password"
                      value={formData.password}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="create_acc_submit text-center">
                    <button
                      type="submit"
                      className="px-xl-5 px-lg-5 px-md-4 px-3 py-xl-3 py-lg-3 py-md-3 py-2 mt-xl-5 mt-lg-5 mt-md-4 mt-4"
                    >
                      Log In
                    </button>
                  </div>
                </form>
              </div>
              <div className="py-xl-5 py-lg-4 py-md-3 py-3 text-center">
                <p onClick={handleforgotpassword}
                >
                  Forgot password?
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Forgot Password Modal */}
      <Modal dialogClassName='custom-dialog2' show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Reset Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {alertMessage && (
            <Alert variant={alertVariant} onClose={() => setAlertMessage("")} dismissible>
              {alertMessage}
            </Alert>
          )}
          <form onSubmit={handleForgotPasswordSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Enter your email"
                value={forgotPasswordEmail}
                onChange={(e) => setForgotPasswordEmail(e.target.value)}
                required
              />
            </div>
            <div className="text-center mt-4">
              <Button className="button_class" type="submit" variant="primary">
                Send Reset Link
              </Button>
            </div>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Login;
