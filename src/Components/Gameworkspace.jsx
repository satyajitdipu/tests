import "./Gameworkspace.css";
import { Link, useNavigate } from "react-router-dom";
import React, { useState,useEffect } from "react";
import card_img1 from "../assets/card_img1.png";
import icon1 from "../assets/icon1.png";
import axios from "axios";
import AOS from "aos";
import slider_img1 from "../assets/slider_img1.png";
import slider_img2 from "../assets/slider_img2.png";
import slider_img3 from "../assets/slider_img3.png";
import slider_img4 from "../assets/slider_img4.png";
import slider_img5 from "../assets/slider_img5.png";
import workspace_bottom_img from "../assets/workspage_bottom_img.png";
const Gameworkspace = () => {
  const [viewall, Setviewall] = useState(true);
  const [gameView2, setGameView2] = useState([]);
  const [gameDatas, setGameDatas] = useState(null);

  function viewAll() {
    Setviewall(!true);
  }

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

  useEffect(() => {
    AOS.init({ duration: "1500" });
    fetchGameData();
  }, []);



  const handleClick = () => {
    
  };
  return (
    <>
      <section className="mt-xl-5 mt-lg-4 mt-md-3 mt-3 py-xl-5 py-lg-4 py-md-3 py-3 orange_bg">
        <div className="container py-xl-5 py-lg-5 py-md-4 py-2">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12">
              <p className="fw-bold text-light"></p>
              <h1 className="fw-bold lh-base text-light large_font py-xl-3 py-lg-3 py-md-3 py-0">
                Speech Therapy
              </h1>
              <div className="text-light mt-3">
                <div className="ps-0 my-3 col-xl-6 col-lg-6 col-md-12 col-12 game_workspace d-flex w-100  gap-2">
                  <img src={icon1} alt="" className="img-fluid" />
                  <div className="d-flex justify-content-center align-items-center">
                    <h5>Specialized games for Targeted Progress</h5>
                  </div>
                </div>
                <div className="ps-0 my-3 col-xl-6 col-lg-6 col-md-12 col-12 game_workspace d-flex w-100  gap-2">
                  <img src={icon1} alt="" className="img-fluid" />
                  <div className="d-flex justify-content-center align-items-center">
                    <h5>Flexible Subscription Plans</h5>
                  </div>
                </div>
                <div className="ps-0 my-3 col-xl-6 col-lg-6 col-md-12 col-12 game_workspace d-flex w-100  gap-2">
                  <img src={icon1} alt="" className="img-fluid" />
                  <div className="d-flex justify-content-center align-items-center">
                    <h5>Workspace for enhance Efficiency</h5>
                  </div>
                </div>
                <div className="ps-0 my-3 col-xl-6 col-lg-6 col-md-12 col-12 game_workspace d-flex w-100  gap-2">
                  <img src={icon1} alt="" className="img-fluid" />
                  <div className="d-flex justify-content-center align-items-center">
                    <h5>Activity Cards</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 text-end">
              <img src={card_img1} className="img-fluid " alt="card_img1" />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-xl-5 mt-lg-4 mt-md-3 mt-3 py-xl-5 py-lg-4 py-md-3 py-3">
        <div className="container">
         
          <div className="row">
            <h4 className="fw-bold py-xl-4 py-lg-4 py-md-3 py-2">
              Top Speech Therapy Games
            </h4>
            <div className="row">
            {gameView2.map((item) => (
                  <Link to={`/Gamedescription/${item.id}`} key={item.id} className="link">
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


            </div>
          </div>
        </div>
      </section>

      <section className="my-xl-4 my-lg-4 my-md-3 my-3 py-xl-4 py-lg-4 py-md-3 py-3 ">
        <div className="container sky_bg">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-12">
              <img
                src={workspace_bottom_img}
                className="img-fluid ms-xl-5 ms-lg-4 ms-md-3 ms-2"
                alt=""
              />
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12 py-xl-5 py-lg-4 py-md-3 py-3">
              <h2 className="fw-bold text-light my-xl-4 my-lg-4 my-md-3 my-3">
                Speach Therapy Hub
              </h2>
              <p className="text-light">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit accusantium amet asperiores laboriosam quis facere
                nisi iure modi optio porro? Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Tenetur officiis, assumenda
                placeat veniam, porro magni accusamus voluptatum tempora commodi
                qui, sequi delectus recusandae. Obcaecati harum blanditiis ad,
                libero sequi nemo?
              </p>
              <button className="px-xl-5 px-lg-5 px-md-4 px-3 py-xl-3 py-lg-3 py-md-2 py-2 goto_workspace_btn">
                Go to Workspace
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gameworkspace;
