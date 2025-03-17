import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Myprofile.css";
import profilepic from "../assets/my_pic.jpg";
import Resetpasswordmodal from "./Resetpasswordmodal";
import Profile_pic_update from "../Components/Profile_pic_update";

import hub_img_1 from "../assets/hub_img_1.png";
import my_plan_img from "../assets/my_plan_img.png";

const Myprofile = () => {
  const navigate = useNavigate();
  const [billingDetails, setBillingDetails] = useState(null);
  const fetchBillingDetails = async () => {
    try {
      const response = await axios.get("https://virtualtxai.com/api/billing-details", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
  
      console.log("Billing Details:", response.data);
      setBillingDetails(response.data.data); // Assuming you have a state setter
  
    } catch (error) {
      console.error(
        "Error fetching billing details:",
        error.response?.data || error.message
      );
    }
  };
  const handleClick = () => {
    navigate("/");
  };

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
    user_types: "",
  });

  const [rightsec, setRightSec] = useState(true);
  const [profile, Setprofile] = useState(profilepic);
  const [showmodal, setshowmodal] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  const [bugDetails, setBugDetails] = useState("");

  const [occupation, setOccupation] = useState(""); // Step 1: Create a state to store the occupation
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

  const myprofile = () => {
    navigate("/myprofile");
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();
    try {
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
          user_types: userDatas.user_types,
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

  const handleGameClick = (gameId) => {
    navigate(`/Gamedescription/${gameId}`); // Navigate to the game description using the game's ID
  };

  const filteredgamepage = (occupation) => {
    console.log(occupation);
    navigate(`/Filteredoage/${occupation}`);
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
      setOccupation(response.data.occupation); // Step 2: Store the occupation in the state
      console.log(response.data);
    } catch (error) {
      console.error(
        "Error fetching user data:",
        error.response?.data || error.message
      );
    }
  };

  const [recentGames, setRecentGames] = useState([]);
  useEffect(() => {
    const fetchRecentGames = async () => {
      try {
        const response = await axios.get(
          "https://virtualtxai.com/api/user/recent-games",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
              Accept: "application/json",
            },
          }
        );
        console.log(response.data);
        setRecentGames(response.data);
      } catch (error) {
        console.error("Error fetching recent games:", error);
      }
    };
    fetchRecentGames();
  }, []);

  const Allgames = () => {
    navigate("/allgames"); // Add this function to navigate to the "Allgames" page
  };
  const handleSubmitBugReport = async () => {
    try {
      const response = await axios.post(
        "https://virtualtxai.com/api/bug-reports", // API endpoint for bug reports
        {
          bug_details: bugDetails, // Send bug details in the request
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Include auth token
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );

      console.log("Bug report submitted successfully:", response.data);
      setBugDetails(""); // Clear the textarea after successful submission
      alert("Bug report submitted successfully!");
    } catch (error) {
      console.error(
        "Error submitting bug report:",
        error.response?.data || error.message
      );
      alert("Failed to submit bug report. Please try again.");
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
  {billingDetails?.subscription_status === "current" ? (
    <div className="profile_bg_blue p-xl-5 p-lg-5 p-md-4 p-3">
      <h4 className="fw-bold text-light">Current Plan</h4>
      <p className="text-light">
        You've currently subscribed to the{" "}
        {billingDetails.plan_type === "1"
          ? "MONTHLY PLAN"
          : billingDetails.plan_type === "2"
          ? "QUARTERLY PLAN"
          : billingDetails.plan_type === "3"
          ? "YEARLY PLAN"
          : "UNKNOWN PLAN"}
        . Next payment on {billingDetails.current_period_end}
      </p>
    </div>
  ) : (
    <div className="profile_bg_grey p-xl-5 p-lg-5 p-md-4 p-3">
      <h4 className="fw-bold text-light">Not Subscribed to any plan</h4>
      <p className="text-light">You are currently not subscribed to any plan.</p>
      <button className="py-xl-3 py-lg-3 py-md-2 py-2 px-xl-5 px-lg-5 px-md-4 px-3">
        Go to Pricing page
      </button>
    </div>
  )}
</div>;

        
          </div>
        </div>
      </section>
      <div className="d-flex justify-content-center align-items-center gap-2">
        <button
          onClick={myprofile}
          className="button_class profile_bg_grey2 text-dark"
        >
          My Profile
        </button>
        <button onClick={Speechhub} className=" button_class py-3 px-4 fs-5 ">
          Work space
        </button>
      </div>
      <section>
        <div className="container py-xl-5 py-lg-5 py-md-4 py-3">
          <div className="row">
            <h4 className="fw-bold py-xl-4 py-lg-4 py-md-3 py-2">
              Games you've recently played
            </h4>
            {recentGames.length > 0 ? (
              <div className="row">
                {recentGames.map((game) => (
                  <div
                    key={game.game_id}
                    className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-6 mt-xl-4 mt-lg-3 mt-md-2 mt-3"
                    onClick={() => handleGameClick(game.game_id)} // Call to handleGameClick
                  >
                    <img
                      src={game.game.game_image}
                      alt={game.game.title}
                      className="img-fluid rounded-top"
                    />
                    <div className="rounded-btm p-xl-3 p-lg-3 p-md-1 p-2 grey_bg">
                      <p className="fw-bolder mb-0" style={{ fontSize: 13 }}>
                        {game.game.game_name}
                      </p>
                      <p className="mb-0" style={{ fontSize: 10 }}>
                        {game.game.short_description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="container py-xl-5 py-lg-5 py-md-4 py-3 d-flex justify-content-center align-items-center">
                <div className="w-100 text-center">
                  <h2>You have not played any Games</h2>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      filteredgamepage(userDatas.occupation);
                    }}
                    className="button_class mt-3"
                  >
                    Click to view all games
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <section className="report_a_bug mt-xl-4 mt-lg-4 mt-md-3 mt-2 py-xl-5 py-lg-5 py-md-4 py-3">
        <div className="container neon_green ">
          <div className="row">
            <div className="col-xl-7 col-lg-7 col-md-12 col-12 pt-xl-3 pt-lg-3 pt-md-4 pt-1 ps-xl-5 ps-lg-5 ps-md-3 ps-2 mt-xl-5 mt-lg-4 mt-md-3 mt-3">
              <h4 className="fw-bold text-light">
                Report a bug or Special request
              </h4>
              <p className="text-light my-xl-4 my-lg-4 my-md-3 my-2">
                If you require a specific feature that is currently unavailable
                or any feedback, want to report a bug or issue, please jot it
                down here and send it to us. We'll promptly respond to your
                inquiry.
              </p>
              <textarea
                className="p-xl-4 p-lg-3 p-md-2 p-2 pt-xl-3"
                placeholder="Write text here"
                value={bugDetails}
                onChange={(e) => setBugDetails(e.target.value)}
                cols="30"
                rows="4"
              ></textarea>
              <div className="text-end pt-xl-0 pt-lg-0 pt-md-0 pt-0 pb-xl-3 pb-lg-3 pb-md-2 pb-2">
                <button
                  className="send_btn_home py-3 px-xl-5 px-lg-3 px-md-3 px-2"
                  onClick={handleSubmitBugReport}
                >
                  Send
                </button>
              </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12 col-12">
              <img
                src={hub_img_1}
                className="img-fluid object-fit-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>

    <section className="py-xl-5 py-lg-5 py-md-4 py-3">
      <div className="container my_current_plan p-xl-4 p-lg-4 p-md-3 p-2">
        <div className="row">
          <div className="col-xl-9 col-lg-9 col-md-9 col-12 pt-xl-4 pt-lg-4 pt-md-3 pt-2 ps-xl-4 ps-lg-4 ps-md-3 ps-3">
            <h4 className="fw-bold text-light">My Current Plan</h4>
            <p className="text-light mb-4">
              You've currently subscribed to the{" "}
              <b>{billingDetails?.plan_name || "N/A"}</b> PLAN
              <br />
              Next payment on{" "}
              <b>{billingDetails?.next_payment_date || "N/A"}</b>
              <br />
              <br />
              Upgrade for more benefits
            </p>

            <div className="btn_sec_my_current_plan mt-xl-5 mt-lg-5 mt-md-4 mt-3 d-flex gap-2">
              <button className="grey_btn px-xl-5 px-lg-5 px-md-4 px-3 py-xl-2 py-lg-2 py-md-1 py-1">
                Cancel Plan
              </button>
              <button className="px-xl-5 px-lg-5 px-md-4 px-3 py-xl-2 py-lg-2 py-md-1 py-1 bg-light">
                Upgrade Plan
              </button>
            </div>
          </div>
          <div className="col-xl-3 col-lg-3 col-md-3 col-12 text-center">
            <img src={billingDetails?.image_url || "default-image.png"} className="img-fluid" alt="Plan" />
          </div>
        </div>
      </div>
    </section>

    </>
  );
};

export default Myprofile;
