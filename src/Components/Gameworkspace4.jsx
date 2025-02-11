import "./Gameworkspace4.css";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import card_img4 from "../assets/card_img4.png";
import icon1 from "../assets/icon1.png";

import slider_img1 from "../assets/slider_img1.png";
import slider_img2 from "../assets/slider_img2.png";
import slider_img3 from "../assets/slider_img3.png";
import slider_img4 from "../assets/slider_img4.png";
import slider_img5 from "../assets/slider_img5.png";
import workspace_bottom_img from "../assets/workspage_bottom_img.png";
const Gameworkspace = () => {
  const [viewall, Setviewall] = useState(true);
  const navigate = useNavigate();

  function viewAll() {
    Setviewall(!true);
  }

  const handleClick = () => {
    navigate("/Gamedescription");
  };
  return (
    <>
      <section className="mt-xl-5 mt-lg-4 mt-md-3 mt-3 py-xl-5 py-lg-4 py-md-3 py-3 orange_bg_so ">
        <div className="container py-xl-5 py-lg-5 py-md-4 py-2">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12">
             
              <h1 className="fw-bold lh-base text-light large_font py-xl-3 py-lg-3 py-md-3 py-0">
                School or <br /> Organization
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
              <img src={card_img4} className="img-fluid w-75" alt="card_img1" />
            </div>
          </div>
        </div>
      </section>
      <section className="mt-xl-5 mt-lg-4 mt-md-3 mt-3 py-xl-5 py-lg-4 py-md-3 py-3  ">
        <div className="container ">
         
          <div className="row ">
            <h4 className="fw-bold py-xl-4 py-lg-4 py-md-3 py-2">
              All Our Games
            </h4>
            <div className="row">
              <div
                onClick={handleClick}
                className="col-xl-3 col-lg-3 col-md-3 col-12 mt-xl-4 mt-lg-3 mt-md-2 mt-3"
              >
                <img
                  src={slider_img1}
                  alt=""
                  className="img-fluid rounded_top"
                />
                <div className="rounded_btm p-xl-3 p-lg-3 p-md-1 p-2 grey_bg">
                  <p className="fw-bolder mb-0 " style={{ fontSize: 13 }}>
                    All hands on deck
                  </p>
                  <p className="mb-0" style={{ fontSize: 10 }}>
                    Calling all pirets
                  </p>
                </div>
              </div>

              <div
                onClick={handleClick}
                className="col-xl-3 col-lg-3 col-md-3 col-12 mt-xl-4 mt-lg-3 mt-md-2 mt-3"
              >
                <img
                  src={slider_img2}
                  alt=""
                  className="img-fluid rounded_top"
                />
                <div className="rounded_btm p-xl-3 p-lg-3 p-md-1 p-2 grey_bg">
                  <p className="fw-bolder mb-0 " style={{ fontSize: 13 }}>
                    All hands on deck
                  </p>
                  <p className="mb-0" style={{ fontSize: 10 }}>
                    Calling all pirets
                  </p>
                </div>
              </div>
              <div
                onClick={handleClick}
                className="col-xl-3 col-lg-3 col-md-3 col-12 mt-xl-4 mt-lg-3 mt-md-2 mt-3"
              >
                <img
                  src={slider_img3}
                  alt=""
                  className="img-fluid rounded_top"
                />
                <div className="rounded_btm p-xl-3 p-lg-3 p-md-1 p-2 grey_bg">
                  <p className="fw-bolder mb-0 " style={{ fontSize: 13 }}>
                    All hands on deck
                  </p>
                  <p className="mb-0" style={{ fontSize: 10 }}>
                    Calling all pirets
                  </p>
                </div>
              </div>
              <div
                onClick={handleClick}
                className="col-xl-3 col-lg-3 col-md-3 col-12 mt-xl-4 mt-lg-3 mt-md-2 mt-3"
              >
                <img
                  src={slider_img4}
                  alt=""
                  className="img-fluid rounded_top"
                />
                <div className="rounded_btm p-xl-3 p-lg-3 p-md-1 p-2 grey_bg">
                  <p className="fw-bolder mb-0 " style={{ fontSize: 13 }}>
                    All hands on deck
                  </p>
                  <p className="mb-0" style={{ fontSize: 10 }}>
                    Calling all pirets
                  </p>
                </div>
              </div>
              <div
                onClick={handleClick}
                className="col-xl-3 col-lg-3 col-md-3 col-12 mt-xl-4 mt-lg-3 mt-md-2 mt-3"
              >
                <img
                  src={slider_img2}
                  alt=""
                  className="img-fluid rounded_top"
                />
                <div className="rounded_btm p-xl-3 p-lg-3 p-md-1 p-2 grey_bg">
                  <p className="fw-bolder mb-0 " style={{ fontSize: 13 }}>
                    All hands on deck
                  </p>
                  <p className="mb-0" style={{ fontSize: 10 }}>
                    Calling all pirets
                  </p>
                </div>
              </div>
              <div
                onClick={handleClick}
                className="col-xl-3 col-lg-3 col-md-3 col-12 mt-xl-4 mt-lg-3 mt-md-2 mt-3"
              >
                <img
                  src={slider_img5}
                  alt=""
                  className="img-fluid rounded_top"
                />
                <div className="rounded_btm p-xl-3 p-lg-3 p-md-1 p-2 grey_bg">
                  <p className="fw-bolder mb-0 " style={{ fontSize: 13 }}>
                    All hands on deck
                  </p>
                  <p className="mb-0" style={{ fontSize: 10 }}>
                    Calling all pirets
                  </p>
                </div>
              </div>
              <div
                onClick={handleClick}
                className="col-xl-3 col-lg-3 col-md-3 col-12 mt-xl-4 mt-lg-3 mt-md-2 mt-3"
              >
                <img
                  src={slider_img4}
                  alt=""
                  className="img-fluid rounded_top"
                />
                <div className="rounded_btm p-xl-3 p-lg-3 p-md-1 p-2 grey_bg">
                  <p className="fw-bolder mb-0 " style={{ fontSize: 13 }}>
                    All hands on deck
                  </p>
                  <p className="mb-0" style={{ fontSize: 10 }}>
                    Calling all pirets
                  </p>
                </div>
              </div>
              <div
                onClick={handleClick}
                className="col-xl-3 col-lg-3 col-md-3 col-12 mt-xl-4 mt-lg-3 mt-md-2 mt-3"
              >
                <img
                  src={slider_img2}
                  alt=""
                  className="img-fluid rounded_top"
                />
                <div className="rounded_btm p-xl-3 p-lg-3 p-md-1 p-2 grey_bg">
                  <p className="fw-bolder mb-0 " style={{ fontSize: 13 }}>
                    All hands on deck
                  </p>
                  <p className="mb-0" style={{ fontSize: 10 }}>
                    Calling all pirets
                  </p>
                </div>
              </div>

              <div className={viewall ? "row d-none" : "row"}>
                <div
                  onClick={handleClick}
                  className="col-xl-3 col-lg-3 col-md-3 col-12 mt-xl-4 mt-lg-3 mt-md-2 mt-3"
                >
                  <img
                    src={slider_img2}
                    alt=""
                    className="img-fluid rounded_top"
                  />
                  <div className="rounded_btm p-xl-3 p-lg-3 p-md-1 p-2 grey_bg">
                    <p className="fw-bolder mb-0 " style={{ fontSize: 13 }}>
                      All hands on deck
                    </p>
                    <p className="mb-0" style={{ fontSize: 10 }}>
                      Calling all pirets
                    </p>
                  </div>
                </div>
                <div
                  onClick={handleClick}
                  className="col-xl-3 col-lg-3 col-md-3 col-12 mt-xl-4 mt-lg-3 mt-md-2 mt-3"
                >
                  <img
                    src={slider_img2}
                    alt=""
                    className="img-fluid rounded_top"
                  />
                  <div className="rounded_btm p-xl-3 p-lg-3 p-md-1 p-2 grey_bg">
                    <p className="fw-bolder mb-0 " style={{ fontSize: 13 }}>
                      All hands on deck
                    </p>
                    <p className="mb-0" style={{ fontSize: 10 }}>
                      Calling all pirets
                    </p>
                  </div>
                </div>
                <div
                  onClick={handleClick}
                  className="col-xl-3 col-lg-3 col-md-3 col-12 mt-xl-4 mt-lg-3 mt-md-2 mt-3"
                >
                  <img
                    src={slider_img2}
                    alt=""
                    className="img-fluid rounded_top"
                  />
                  <div className="rounded_btm p-xl-3 p-lg-3 p-md-1 p-2 grey_bg">
                    <p className="fw-bolder mb-0 " style={{ fontSize: 13 }}>
                      All hands on deck
                    </p>
                    <p className="mb-0" style={{ fontSize: 10 }}>
                      Calling all pirets
                    </p>
                  </div>
                </div>
                <div
                  onClick={handleClick}
                  className="col-xl-3 col-lg-3 col-md-3 col-12 mt-xl-4 mt-lg-3 mt-md-2 mt-3"
                >
                  <img
                    src={slider_img2}
                    alt=""
                    className="img-fluid rounded_top"
                  />
                  <div className="rounded_btm p-xl-3 p-lg-3 p-md-1 p-2 grey_bg">
                    <p className="fw-bolder mb-0 " style={{ fontSize: 13 }}>
                      All hands on deck
                    </p>
                    <p className="mb-0" style={{ fontSize: 10 }}>
                      Calling all pirets
                    </p>
                  </div>
                </div>
                <div
                  onClick={handleClick}
                  className="col-xl-3 col-lg-3 col-md-3 col-12 mt-xl-4 mt-lg-3 mt-md-2 mt-3"
                >
                  <img
                    src={slider_img2}
                    alt=""
                    className="img-fluid rounded_top"
                  />
                  <div className="rounded_btm p-xl-3 p-lg-3 p-md-1 p-2 grey_bg">
                    <p className="fw-bolder mb-0 " style={{ fontSize: 13 }}>
                      All hands on deck
                    </p>
                    <p className="mb-0" style={{ fontSize: 10 }}>
                      Calling all pirets
                    </p>
                  </div>
                </div>
                <div
                  onClick={handleClick}
                  className="col-xl-3 col-lg-3 col-md-3 col-12 mt-xl-4 mt-lg-3 mt-md-2 mt-3"
                >
                  <img
                    src={slider_img2}
                    alt=""
                    className="img-fluid rounded_top"
                  />
                  <div className="rounded_btm p-xl-3 p-lg-3 p-md-1 p-2 grey_bg">
                    <p className="fw-bolder mb-0 " style={{ fontSize: 13 }}>
                      All hands on deck
                    </p>
                    <p className="mb-0" style={{ fontSize: 10 }}>
                      Calling all pirets
                    </p>
                  </div>
                </div>
                <div
                  onClick={handleClick}
                  className="col-xl-3 col-lg-3 col-md-3 col-12 mt-xl-4 mt-lg-3 mt-md-2 mt-3"
                >
                  <img
                    src={slider_img2}
                    alt=""
                    className="img-fluid rounded_top"
                  />
                  <div className="rounded_btm p-xl-3 p-lg-3 p-md-1 p-2 grey_bg">
                    <p className="fw-bolder mb-0 " style={{ fontSize: 13 }}>
                      All hands on deck
                    </p>
                    <p className="mb-0" style={{ fontSize: 10 }}>
                      Calling all pirets
                    </p>
                  </div>
                </div>
                <div
                  onClick={handleClick}
                  className="col-xl-3 col-lg-3 col-md-3 col-12 mt-xl-4 mt-lg-3 mt-md-2 mt-3"
                >
                  <img
                    src={slider_img2}
                    alt=""
                    className="img-fluid rounded_top"
                  />
                  <div className="rounded_btm p-xl-3 p-lg-3 p-md-1 p-2 grey_bg">
                    <p className="fw-bolder mb-0 " style={{ fontSize: 13 }}>
                      All hands on deck
                    </p>
                    <p className="mb-0" style={{ fontSize: 10 }}>
                      Calling all pirets
                    </p>
                  </div>
                </div>
              </div>
              <div className="button_sec_workspace pt-xl-5 pt-lg-5 pt-md-3 pt-2 text-center">
                {viewall ? (
                  <button
                    className="px-xl-5 px-lg-5 px-md-4 px-3 py-xl-3 py-lg-3 py-md-2 py-2"
                    onClick={viewAll}
                  >
                    View all
                  </button>
                ) : null}
              </div>
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
                School or Organization Hub
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
