import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Home.css";
import hero_img from "../assets/hero_img.png";
import card_img1 from "../assets/card_img1.png";
import card_img2 from "../assets/card_img2.png";
import card_img3 from "../assets/card_img3.png";
import card_img4 from "../assets/card_img4.png";

import slider_img1 from "../assets/slider_img1.png";
import slider_img2 from "../assets/slider_img2.png";
import slider_img3 from "../assets/slider_img3.png";
import slider_img4 from "../assets/slider_img4.png";
import slider_img5 from "../assets/slider_img5.png";

import about_img from "../assets/about_img.png";

import AOS from "aos";
import "aos/dist/aos.css";
import Backtotop from "./Backtotop";

const Home = () => {
  const [gameDatas, setGameDatas] = useState(null);
  const [gameView2, setGameView2] = useState([]);
  const DEFAULT_IMAGE = "../assets/slider_img1.png";
  const [thoughtText, setThoughtText] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    AOS.init({ duration: "1500" });
    fetchGameData();
  }, []);

  // Function to fetch user data from the API
  const fetchGameData = async () => {
    try {
      const response = await axios.get("https://virtualtxai.com/api/games", {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      setGameDatas(response.data.game_view);
      setGameView2(response.data.game_view2);
      console.log(response.data);
    } catch (error) {
      console.error(
        "Error fetching user data:",
        error.response?.data || error.message
      );
    }
  };
  const handleThoughtSubmit = async (e) => {
    e.preventDefault();
    if (thoughtText.trim() && email.trim()) {
      try {
        const token = localStorage.getItem("token"); // Retrieve the token from local storage

        const response = await axios.post(
          "https://virtualtxai.com/api/bug-reports",
          {
            bug_details: thoughtText,
            email: email,
            priority: 'suggestion'
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          }
        );

        console.log("Response:", response.data);
        alert("Thank you for your feedback!");
        setThoughtText(""); // Clear the text area after submission
        setEmail(""); // Clear the email field after submission
      } catch (error) {
        console.error("Error submitting thought:", error);
        alert("There was an error submitting your thought. Please try again later.");
      }
    } else {
      alert("Please enter both text and email before submitting.");
    }
  };
  const [hover, Stover] = useState(false);
  const handleError = (event) => {
    event.target.src = DEFAULT_IMAGE;
  };

  const [img, Setimg] = useState(0);

  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/gameworkspace");
  };

  const Speechhub = () => {
    navigate("/speechtherapyhub");
  };

  const handleClick2 = () => {
    navigate("/occupationaltherapy");
  };

  const handleClick3 = () => {
    navigate("/behavioraltherapy");
  };
  const handleClick4 = () => {
    navigate("/schoolandorganisation");
  };

  const handleClickot = () => {
    navigate("/gameworkspace2");
  };

  const handleClickpt = () => {
    navigate("/gameworkspace3");
  };

  const handleClickso = () => {
    navigate("/gameworkspace4");
  };

  const handleClickgetstarted = () => {
    navigate("/myaccount");
  };

  // Define the scroll function
  const scrollToFreeGames = () => {
    const section = document.getElementById("freegames_sec");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [data, Setdata] = useState([
    {
      img: slider_img1,
      text1: "All hands on deck",
      text2: "Calling all pirets",
    },
    {
      img: slider_img2,
      text1: "All hands on deck",
      text2: "Calling all pirets",
    },
    {
      img: slider_img3,
      text1: "All hands on deck",
      text2: "Calling all pirets",
    },
    {
      img: slider_img4,
      text1: "All hands on deck",
      text2: "Calling all pirets",
    },
    {
      img: slider_img5,
      text1: "All hands on deck",
      text2: "Calling all pirets",
    },
  ]);
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  return (
    <div>
      <section className="hero_section mt-3 mt-lg-5 mt-md-5 ">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-6 col-md-12 p-3 p-sm-3 p-lg-5 mt-xl-5 mt-lg-5 mt-md-3 mt-3 ">
              <h1 className="fw-bold fs-lg-5 fs-md-3 mt-xl-0 mt-lg-0 mt-md-2 mt-2">
                VTXGames: Redefining Therapy Through Play!
              </h1>
              <p className="mb-0">
                Dive into the realm of VTXGames, the next generation in
                therapy. A curated library filled with custom-built, innovative
                therapy and activity materials for pediatrics through adults.
                These games aren't just fun; they're tailored to seamlessly fit
                into your therapy sessions.
              </p>

              <div className="hero_btn_sec d-none mt-xl-4 mt-lg-4 mt-md-3 mt-2 ">
                <div className="step_1 d-flex flex-column gap-2">
                  <div className="d-flex  gap-1 justify-content-around">
                    <button
                      data-aos="fade-right"
                      className="button_class2 orange_btn "
                      onClick={Speechhub}
                    >
                      Speech Therapist Hub
                    </button>
                    <button
                      data-aos="fade-left"
                      className="button_class2 violet_btn"
                      onClick={handleClick4}
                    >
                      School organisation Hub
                    </button>
                  </div>
                  <div className="d-flex  gap-3 justify-content-between">
                    <button
                      data-aos="fade-right"
                      className="button_class2 green_btn"
                      onClick={handleClick3}
                    >
                      Behavioral Therapists Hub
                    </button>

                    <button
                      data-aos="fade-left"
                      className="button_class2 sky_btn"
                      onClick={handleClick2}
                    >
                      Occupational Therapist Hub
                    </button>
                  </div>
                </div>
              </div>
              {/* Get started n free games button sec */}

              <div className="hero_btn_sec  mt-xl-4 mt-lg-4 mt-md-3 mt-2 ">
                <button
                  onClick={handleClickgetstarted}
                  className="button_class "
                >
                  Get Started
                </button>
                <button
                  id="freegames"
                  className="button_class"
                  onClick={scrollToFreeGames}
                >
                  Free Games
                </button>
              </div>
            </div>

            <div className="col-12 col-lg-6 col-md-12 hero_right_sec p-3 p-lg-2 p-md-0">
              <img
                data-aos="fade-down"
                src={hero_img}
                alt="hero_img"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
      {/* <section className="regular_update_sec my-lg-5 my-md-5 my-5 py-5 py-lg-1 py-md-2">
        <div className="container py-4">
          <div className="row">
            <div className="col-12 col-lg-4 col-md-4 text-center">
              <img src={regular_update_img} alt="regular_update_img" />
              <p>Regular Updates</p>
            </div>
            <div className="col-12 col-lg-4 col-md-4 text-center">
              <img src={premium_games_img} alt="premium_games_img" />
              <p>Premium Games</p>
            </div>
            <div className="col-12 col-lg-4 col-md-4 text-center">
              <img src={free_games_img} alt="free_games_img" />
              <p>Free Games</p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="whom_we_offer_sec my-lg-5 my-md-5 my-2 py-2 py-lg-1 py-md-2">
        <div className="container step_2">
          <h4 className=" text-capitalize fw-bold fs-5 pb-3 d-none">
            Whom we offer our services{" "}
          </h4>
          <div className="row">
            <div
              data-aos="fade-down"
              className="col-12 col-lg-3 col-md-3 "
              onClick={handleClick}
            >
              <div className="card-body orange_card  m-1 m-lg-0 m-md-0 pointer">
                <h5 className="fs-5 lh-lg fw-bolder text-white pt-xl-3 pt-lg-3 pt-md-2 pt-2">
                  Speech <br /> Therapists
                </h5>
                <div className="py-3 py-lg-2 py-md-2 text-end">
                  <img src={card_img1} alt="card_img1" className="img-fluid" />
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="col-12 col-lg-3 col-md-3"
              onClick={handleClickot}
            >
              <div className="card-body orange_card2  m-1 m-lg-0 m-md-0">
                <h5 className="lh-lg fw-bolder fs-5 text-white pt-xl-3 pt-lg-3 pt-md-2 pt-2">
                  Occupational <br /> Therapists
                </h5>
                <div className="py-3 py-lg-2 py-md-2 text-end">
                  <img src={card_img2} alt="card_img1" className="img-fluid" />
                </div>
              </div>
            </div>

            <div
              data-aos="fade-down"
              className="col-12 col-lg-3 col-md-3"
              onClick={handleClickpt}
            >
              <div className="card-body orange_card3  m-1 m-lg-0 m-md-0 ">
                <h5 className="lh-lg fw-bolder fs-5 text-white pt-xl-3 pt-lg-3 pt-md-2 pt-2">
                Mental Health <br /> Providers
                </h5>
                <div className="py-3 py-lg-2 py-md-2 text-end">
                  <img src={card_img3} alt="card_img1" className="img-fluid" />
                </div>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="col-12 col-lg-3 col-md-3"
              onClick={handleClickso}
            >
              <div className="card-body orange_card4  m-1 m-lg-0 m-md-0">
                <h5 className="lh-lg fw-bolder fs-5 text-white pt-xl-3 pt-lg-3 pt-md-2 pt-2">
                  School or <br /> Organisation
                </h5>
                <div className="py-3 py-lg-2 py-md-2 text-end">
                  <img src={card_img4} alt="card_img1" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* slider */}

      {/* Free Games Section */}
      <section className="whom_we_offer_sec my-lg-5 my-md-5 my-2 py-2 py-lg-1 py-md-2">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center pb-2">
            <h4 className="text-capitalize fw-bold fs-5 pb-3">Lastest Games</h4>
          </div>

          <div className="row">
            {gameDatas && gameDatas.length > 0 ? (
              <Carousel
                responsive={responsive}
                showDots={true}
                autoPlaySpeed={3000}
                autoPlay={true}
                infinite={true}
              >
                {gameDatas.map((game) => (
                  <Link to={`/Gamedescription/${game.id}`}>
                    <div
                      key={game.id}
                      className="img_wrapper mx-2 mb-lg-5 mb-md-4 mb-4"
                    >
                      {game.game_image ? (
                        <img
                          src={game.game_image} // Image URL from API
                          alt={game.title} // Assuming your API returns a 'title' field
                          className="img-fluid"
                        />
                      ) : (
                        <img
                          src={game.game_image || DEFAULT_IMAGE}
                          alt={game.title || "Game Image"}
                          className="img-fluid"
                          onError={handleError}
                        />
                      )}

                      <div className="card_text text-start p-1 p-lg-3 p-md-3">
                        <h5 className="fw-bold fs-6">{game.game_name}</h5>
                        <h6 className="">{game.short_description}</h6>
                      </div>
                    </div>
                  </Link>
                ))}
              </Carousel>
            ) : (
              <p>No games available at the moment.</p> // Fallback message
            )}
          </div>
        </div>
      </section>

      {/* Games for you */}
      <section
        id="freegames_sec"
        className="whom_we_offer_sec my-lg-5 my-md-5 my-2 py-2 py-lg-1 py-md-2"
      >
        <div className="container">
          <div className="d-flex justify-content-between align-items-center pb-2">
            <h4 className="text-capitalize fw-bold fs-5 pb-3">
              Free Games for you
            </h4>
          </div>

          <div className="row">
            {gameView2.length > 0 ? (
              <Carousel
                responsive={responsive}
                showDots={true}
                autoPlaySpeed={3000}
                autoPlay={true}
                infinite={true}
              >
                {gameView2.map((item) => (
                  <Link to={`/Gamedescription/${item.id}`} key={item.id}>
                    <div className="img_wrapper mx-2 mb-lg-5 mb-md-4 mb-4">
                      <img
                        src={item.game_image}
                        alt={item.title}
                        className="img-fluid"
                      />
                      <div className="card_text text-start p-1 p-lg-3 p-md-3">
                        <h5 className="fw-bold fs-6">{item.game_name}</h5>
                        <h6>{item.short_description}</h6>
                      </div>
                    </div>
                  </Link>
                ))}
              </Carousel>
            ) : (
              <p>No games available at the moment.</p>
            )}
          </div>
        </div>
      </section>
      {/* About us */}
      <section id="about-us" className="my-lg-5 my-md-5 my-2 py-2 py-lg-1 py-md-2">
        <div className="container  aboutus pt-lg-4 pt-md-3 pt-2">
          <div className="row">
            <div className="col-12 col-xl-7 col-lg-12 col-md-12 ">
              <img
                data-aos="fade-right"
                src={about_img}
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="col-12 col-xl-5 col-lg-12  col-md-12 pt-4 pe-lg-4 pe-md-5 pe-3 ps-xl-3 ps-lg-5 ps-md-5 ps-4">
              <h3 data-aos="fade-left" className="fw-bold text-white">
                Know us better
              </h3>
              <p data-aos="fade-left" className=" text-white" style={{fontSize:"1.3rem"}}>
              VTXGames is developed by a team of experienced clinicians and innovators who understand the evolving needs of therapists and their clients. 
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Virtualtxai banner */}
      {/* <section className="my-lg-5 my-md-5 my-2 py-2 py-lg-1 py-md-2">
        <div className="container  banner_vtx pt-lg-4 pt-md-3 pt-2">
          <div className="row">
            <div className="col-12 col-xl-6 col-lg-12 col-md-12 ">
              <img src={pc_pic} className="img-fluid " alt="pc_pic" />
            </div>
            <div className="col-12 col-xl-6 col-lg-12  col-md-12 pt-4 pe-lg-4 pe-md-5 pe-3 ps-xl-3 ps-lg-5 ps-md-5 ps-4 mt-xl-5 mt-lg-4 mt-md-4 mt-4">
              <h3 className="fw-bold text-white mt-xl-5 mt-lg-5 mt-md-4 mt-4">The One Stop Shop For <br />
              Every Therapist</h3>
             <div className="row">
              <div className="col-6">
                    <ul>
                      <li>
                      Extensive Material Library
                      </li>
                    </ul>
              </div>
             </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="my-5">
        <div className="container banner_vtx p-xl-5 p-lg-5 p-md-4 p-4">
          <div className="row d-flex justify-content-end">
           
            <div className="col-xl-5 col-lg-5 col-md-12 col-12">
              <h2 className="fw-bold text-light">
                The One Stop Shop For <br />
                Every Therapist
              </h2>
              <div className="row">
                <div className="col-7">
                  <ul className="ps-0 mt-xl-3 mt-lg-3 mt-md-2 mt-2">
                    <li>Extensive Material Library</li>
                    <li className="mt-2">build-in Video Teletherapy</li>
                    <li className="mt-2">Interactive Therapy Games</li>
                    <li className="mt-2">Easy Scheduling</li>
                    <li className="mt-2">Patient Intake Forms</li>
                    <li className="mt-2">Secure Online Payment</li>
                  </ul>
                </div>
                <div className="col-5 p-0 ">
                  <ul className="ps-0 mt-xl-3 mt-lg-3 mt-md-2 mt-2">
                    <li>Patient Billing</li>
                    <li className="mt-2">Chat Features</li>
                    <li className="mt-2">24 Hr Tech Support</li>
                    <li className="mt-2">HIPPA Compliant</li>
                  </ul>
                </div>
              </div>
              <button
                style={{ border: "none" }}
                className="px-5 py-3 mt-3 rounded "
              >
                Click here to visit VirtualTx
              </button>
            </div>
          </div>
        </div>
        <div className="container banner_vtx_mobile p-xl-5 p-lg-5 p-md-4 p-4">
          <div className="row d-flex justify-content-end">
           
            <div className="col-xl-5 col-lg-5 col-md-12 col-12">
              <h2 className="fw-bold text-light">
                The One Stop Shop For <br />
                Every Therapist
              </h2>
              <div className="row">
                <div className="col-7">
                  <ul className="ps-0 mt-xl-3 mt-lg-3 mt-md-2 mt-2">
                    <li>Extensive Material Library</li>
                    <li className="mt-2">build-in Video Teletherapy</li>
                    <li className="mt-2">Interactive Therapy Games</li>
                    <li className="mt-2">Easy Scheduling</li>
                    <li className="mt-2">Patient Intake Forms</li>
                    <li className="mt-2">Secure Online Payment</li>
                  </ul>
                </div>
                <div className="col-5 p-0 ">
                  <ul className="ps-0 mt-xl-3 mt-lg-3 mt-md-2 mt-2">
                    <li>Patient Billing</li>
                    <li className="mt-2">Chat Features</li>
                    <li className="mt-2">24 Hr Tech Support</li>
                    <li className="mt-2">HIPPA Compliant</li>
                  </ul>
                </div>
              </div>
              <button
                style={{ border: "none" }}
                className="px-5 py-3 mt-3 rounded "
              >
                Click here to visit VirtualTx
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Share a thought */}
      {/* <section className="my-lg-5 my-md-5 my-2 py-2 py-lg-1 py-md-2">
      <div className="container share_thought">
        <div className="row">
          <div className="col-12 col-xl-7 col-lg-7 col-md-12 p-lg-4 p-md-4 p-3">
            <h2 className="fw-bold">Share a Thought</h2>
            <p className="py-xl-2 py-lg-2 py-md-2 py-2">
              Write any message, post or feedback you'd like to share with us.
            </p>
            <form onSubmit={handleThoughtSubmit}>
              <textarea
                placeholder="Write text here"
                className="rounded p-4 border-0 w-100"
                value={thoughtText}
                onChange={(e) => setThoughtText(e.target.value)}
                cols="64"
                rows="7"
              ></textarea>
              <input
                type="email"
                placeholder="Enter email"
                className="p-3 border-0 rounded mt-xl-3 mt-lg-3 mt-md-2 mt-2 w-100"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                type="submit"
                className="send_btn_home rounded border-0 fw-bold py-3 px-xl-5 px-lg-3 px-md-3 px-2 ms-lg-2 ms-md-3 ms-2 mt-3"
              >
                Send
              </button>
            </form>
          </div>

          <div className="col-12 col-xl-5 col-lg-5 col-md-12">
            <img
              src={shareathought}
              className="img-fluid"
              alt="share a thought illustration"
            />
          </div>
        </div>
      </div>
    </section> */}
      <Backtotop />
    </div>
  );
};
export default Home;
