import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Myprofile.css";
import profilepic from "../assets/my_pic.jpg";
import Resetpasswordmodal from "./Resetpasswordmodal";
import Profile_pic_update from "../Components/Profile_pic_update";

const Myprofile = () => {

  const navigate = useNavigate();

  const [userDatas, setUserDatas] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    user_type: "",
    customer_first_name: "",
    customer_last_name: "",
    phone_number: "",
    country: "",
    city: "",
    oldpassword: "",
    password: "",
    confirmpassword: "",
    address_line_1: "",
    occupation: "",
  });

  const [rightsec, setRightSec] = useState(true);
  const [profile, Setprofile] = useState(profilepic);
  const [showmodal, setshowmodal] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const Closemodal = () => {
    setshowmodal(false);
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setUserDatas({
      ...userDatas,
      [e.target.name]: e.target.value,
    });
  };

  const Speechhub = () => {
    navigate("/speechtherapyhub_new");
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      console.log(typeof userDatas.password);

      const response = await axios.post(
        "https://virtualtxai.com/api/change-password",
        {
          new_password: userDatas.password,
          new_password_confirmation: userDatas.confirmpassword,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      console.log("Password reset successfully:", response.data);
    } catch (error) {
      console.error(
        "Error resetting password:",
        error.response?.data || error.message
      );

      setshowmodal(false);
    }
  };

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://virtualtxai.com/api/update-profile",
        {
          username: userDatas.username,
          first_name: userDatas.first_name,
          last_name: userDatas.last_name,
          email: userDatas.email,
          occupation: userDatas.occupation,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      console.log("Profile updated successfully:", response.data);
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };
  const occupationMap = {
    1: "Speech-Language Pathologist",
    2: "Psychologist",
    3: "Occupational Therapist",
    4: "Social Worker",
    5: "Other",
  };
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
      Setprofile(response.data.profile_photo_url);
      console.log(response.data);
    } catch (error) {
      console.error(
        "Error fetching user data:",
        error.response?.data || error.message
      );
    }
  };

  return (
    <>
      <Profile_pic_update
        profile={profile}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
      {showmodal && (
        <Resetpasswordmodal
          Closemodal={Closemodal}
          handleResetPassword={handleResetPassword}
          setshowmodal={setshowmodal}
          userDatas={userDatas}
          setUserDatas={setUserDatas}
        />
      )}
      <section className="mt-xl-5 mt-lg-5 mt-md-4 mt-4 py-xl-5 py-lg-5 py-md-5 py-4">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-7 col-12 profile_pic d-flex justify-content-start align-items-center gap-3">
              <img src={profile} className="img-fluid" alt="profilepic" />
              <div>
                <h3 className="mb-0">{userDatas.username}</h3>
                <p
                  className="myprofile_text_green"
                  onClick={() => setModalShow(true)}
                >
                  Edit Profile image
                </p>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-5 col-12 ">
              {rightsec ? (
                <div className="profile_bg_blue p-xl-5 p-lg-5 p-md-4 p-3">
                  <h4 className="fw-bold text-light">Current Plan</h4>
                  <p className="text-light">
                    You've currently subscribed to the QUARTERLY PLAN. Next
                    payment on 3 Feb, 2024
                  </p>
                </div>
              ) : (
                <div className="profile_bg_grey p-xl-5 p-lg-5 p-md-4 p-3">
                  <h4 className="fw-bold text-light">
                    Not Subscribed to any plan
                  </h4>
                  <p className="text-light">
                    Lorem ipsum dusken sske kfioopn kwel
                  </p>
                  <button className="py-xl-3 py-lg-3 py-md-2 py-2 px-xl-5 px-lg-5 px-md-4 px-3">
                    Go to Pricing page
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <div className="d-flex justify-content-center align-items-center gap-2">
        <button className="button_class py-3 px-4 fs-5">My Profile</button>
        <button  onClick={Speechhub}  className="button_class profile_bg_grey2 text-dark">Work space</button>
      </div>

      <section className="personal_details my-xl-5 my-lg-5 my-md-4 my-3 mt-0">
        <form onSubmit={handleUpdateProfile}>
          <div className="container profile_bg_grey2 p-xl-4 p-lg-4 p-md-3 p-3">
            <h4>Personal Details</h4>
            <div className="row my-4">
              <div className="col-xl-4 col-lg-4 col-md-12 col-12">
                <div className="d-flex flex-column">
                  <label>User name</label>
                  <input
                    className="p-3 profile_input_box"
                    placeholder="Enter your user name"
                    value={userDatas.username || ""}
                    name="username"
                    type="text"
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-12">
                <div className="d-flex flex-column">
                  <label>First name</label>
                  <input
                    className="p-3 profile_input_box"
                    placeholder="Enter your First name"
                    type="text"
                    name="first_name"
                    value={userDatas.first_name || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-12">
                <div className="d-flex flex-column">
                  <label>Last name</label>
                  <input
                    className="p-3 profile_input_box"
                    placeholder="Enter your Last name"
                    type="text"
                    name="last_name"
                    value={userDatas.last_name || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-12 col-12">
                <div className="d-flex flex-column">
                  <label>Email</label>
                  <input
                    className="p-3 profile_input_box"
                    placeholder="Enter your Email"
                    type="email"
                    name="email"
                    value={userDatas.email || ""}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="col-xl-4 col-lg-4 col-md-12 col-12">
              <div className="col-xl-4 col-lg-4 col-md-12 col-12">
  <div className="d-flex flex-column">
    <label>User Type</label>
    <select
      className="w-100 p-3 rounded"
      name="occupation"
      onChange={handleChange} // Trigger this when a user selects a new option
      value={userDatas.occupation || ""} // Bind this to the occupation value
    >
      <option value="">Select occupation</option>
      {Object.entries(occupationMap).map(([key, value]) => (
        <option key={key} value={key}>
          {value}
        </option>
      ))}
    </select>
  </div>
</div>
              </div>
            </div>

            <div className="profile_btn_sec pt-xl-5 pt-lg-5 pt-md-4 pt-3 text-end">
              <button
                onClick={() => setshowmodal(true)}
                className="profile_btn_bg px-xl-5 px-lg-5 px-md-4 px-4 py-xl-3 py-lg-3 py-md-3 py-2"
              >
                Reset Password
              </button>
              <button
                type="submit"
                className="profile_btn_bg ms-xl-5 ms-lg-5 ms-md-4 ms-4 px-xl-5 px-lg-5 px-md-4 px-4 py-xl-3 py-lg-3 py-md-3 py-2"
              >
                Update
              </button>
            </div>
          </div>
        </form>
      </section>

      <section className=" my-xl-5 my-lg-5 my-md-4 my-3">
        <div className="container profile_bg_grey2 p-xl-4 p-lg-4 p-md-3 p-3">
          <h4>Notifications</h4>
          <div className="row">
            <div className="col-12 d-flex gap-3  justify-content-start align-items-center">
              Receive newsletters, promotions, news and game updates from
              virtualTx games
              <div class="form-check form-switch vtx_monthly_plan_input">
                <input
                  class="form-check-input p-3 toggle"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className=" my-xl-5 my-lg-5 my-md-4 my-3">
        <div className="container profile_bg_grey2 p-xl-4 p-lg-4 p-md-3 p-3">
          <h4>Current Plan</h4>
          <h5 className="pt-3">VTXGames monthly Plan</h5>
          <h6>Valid till : 24 June 2023</h6>
          <div className="row">
            <div className="col-9 d-flex gap-3  justify-content-start align-items-center">
              Automatic Renewal every month
              <div class="form-check form-switch vtx_monthly_plan_input">
                <input
                  class="form-check-input p-3 toggle"
                  type="checkbox"
                  id="flexSwitchCheckDefault"
                />
              </div>
            </div>
            <div className="col-3 text-end">
              <button
                class="profile_btn_bg px-xl-5 px-lg-5 px-md-4 px-4 py-xl-3 py-lg-3 py-md-3 py-2 "
                fdprocessedid="dtpjxa"
              >
                Reset Password
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="personal_details my-xl-5 my-lg-5 my-md-4 my-3">
        <form action="">
          <div className="container profile_bg_grey2 p-xl-4 p-lg-4 p-md-3 p-3">
            <h4>Billing Information</h4>
            <div className="row my-4">
              <div className="col-xl-4 col-lg-4 col-md-12 col-12">
                <div className="d-flex flex-column">
                  <label htmlFor="">Customer first name</label>
                  <input
                    className="p-3 profile_input_box"
                    placeholder="Customer first name"
                    type="text"
                  />
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-12">
                <div className="d-flex flex-column">
                  <label htmlFor="">Customer last name</label>
                  <input
                    className="p-3 profile_input_box"
                    placeholder="Customer last name"
                    type="text"
                  />
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-12">
                <div className="d-flex flex-column">
                  <label htmlFor="">Email address</label>
                  <input
                    className="p-3 profile_input_box"
                    placeholder="Email address"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-xl-4 col-lg-4 col-md-12 col-12">
                <div className="d-flex flex-column">
                  <label htmlFor="">Phone no</label>
                  <input
                    className="p-3 profile_input_box"
                    placeholder="Enter your Phone no"
                    type="number"
                  />
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-12">
                <div className="d-flex flex-column">
                  <label htmlFor="">Country</label>
                  <input
                    className="p-3 profile_input_box"
                    placeholder="Enter Country "
                    type="password"
                  />
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-12">
                <div className="d-flex flex-column">
                  <label htmlFor="">City</label>
                  <input
                    className="p-3 profile_input_box"
                    placeholder="Enter your City"
                    type="text"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-xl-4 col-lg-4 col-md-12 col-12">
                <div className="d-flex flex-column">
                  <label htmlFor="">Address</label>
                  <input
                    className="p-3 profile_input_box"
                    placeholder="Enter your Address"
                    type="text"
                  />
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 col-md-12 col-12">
                <div className="d-flex flex-column">
                  <label htmlFor="">Zipcode</label>
                  <input
                    className="p-3 profile_input_box"
                    placeholder="Enter Zipcode "
                    type="password"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-xl-4 col-lg-4 col-md-12 col-12">
                <div className="d-flex justify-content-start align-items-center">
                  <h6>Are you a company</h6>
                  <input
                    className="largerCheckbox ms-3"
                    placeholder="Company name"
                    type="checkbox"
                  />
                </div>
              </div>
            </div>
            <div className="row mt-4">
              <div className="col-xl-4 col-lg-4 col-md-12 col-12">
                <div className="d-flex flex-column">
                  <label htmlFor="">Company name</label>
                  <input
                    className="p-3 profile_input_box"
                    placeholder="Enter your Company name"
                    type="text"
                  />
                </div>
              </div>
            </div>

            <div className="profile_btn_sec pt-xl-5 pt-lg-5 pt-md-4 pt-3 text-end">
              <button className="profile_btn_bg px-xl-5 px-lg-5 px-md-4 px-4 py-xl-3 py-lg-3 py-md-3 py-2 ">
                Billing History
              </button>
              <button className="profile_btn_bg ms-3 px-xl-5 px-lg-5 px-md-4 px-4 py-xl-3 py-lg-3 py-md-3 py-2">
                Update
              </button>
            </div>
          </div>
        </form>
      </section>
      <section className=" my-xl-5 my-lg-5 my-md-4 my-3">
        <div className="container profile_bg_grey2 p-xl-4 p-lg-4 p-md-3 p-3">
          <h4>Personal Details</h4>

          <div className="row my-4">
            <div className="col-xl-4 col-lg-4 col-md-12 col-12">
              <div className="d-flex flex-column">
                <label htmlFor="">Card number</label>
                <input
                  className="p-3 profile_input_box"
                  placeholder="xxxx xxxxx xxxxx"
                  type="text"
                />
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-12 col-12">
              <div className="d-flex flex-column">
                <label htmlFor="">Expiry Date</label>
                <input
                  className="p-3 profile_input_box "
                  placeholder="MM/DD/YY"
                  type="text"
                />
              </div>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-12 col-12">
              <div className="d-flex flex-column">
                <label htmlFor="">CVV</label>
                <input
                  className=" p-3 profile_input_box"
                  placeholder="CVV"
                  type="text"
                />
              </div>
            </div>
          </div>
          <div className="row d-flex justify-content-end align-items-center">
            <div className="col-3 text-end">
              <button
                class="profile_btn_bg px-xl-5 px-lg-5 px-md-4 px-4 py-xl-3 py-lg-3 py-md-3 py-2 "
                fdprocessedid="dtpjxa"
              >
                Change Card
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className=" my-xl-5 my-lg-5 my-md-4 my-3">
        <div className="container profile_bg_grey2 p-xl-4 p-lg-4 p-md-3 p-3">
          <div className="row d-flex justify-content-end align-items-center">
            <div className="col-3 text-end">
              <button
                class="profile_btn_bg px-xl-5 px-lg-5 px-md-4 px-4 py-xl-3 py-lg-3 py-md-3 py-2 "
                fdprocessedid="dtpjxa"
              >
                Log Out
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Myprofile;
