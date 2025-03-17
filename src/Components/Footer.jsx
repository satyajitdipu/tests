import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";
import facebook from "../assets/facebook.png";
import insta from "../assets/instgram.png";
import linkedin from "../assets/linkedin.png";
import yt from "../assets/yt.png";

const Footer = () => {
  return (
    <>
      <section className="footer_sec py-xl-5 py-lg-4 py-md-4 py-2">
        <div className="container">
          <div className="row">
            <div className="col-12 col-xl-6 col-lg-6 col-md-6">
              <h6 className="fw-bold">VTXGames</h6>
              <p>
                Do you want to become a VTX Games Insider? Share your email for
                all the latest info about new games and updates
              </p>
            
            </div>
           
            <div className="col-12 col-xl-2 col-lg-2 col-md-2">
              <h6 className="fw-bold">Company</h6>
              <ul className="p-0">
               <NavLink to={"/"}>Home</NavLink>
                <li>About us</li>
              <NavLink to={"pricing"}>Pricing</NavLink>
              <NavLink to={"exploregames"}>All games</NavLink>
                <li>Privacy</li>
                <li>Terms and conditions</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div className="col-12 col-xl-2 col-lg-2 col-md-2">
              <h6 className="fw-bold">Social Media</h6>
              <ul className="p-0 d-none">
                <li>Facebook</li>
                <li>Instagram</li>
                <li>Linkedin</li>
              </ul>
              <div className="row">
                <div className="col-3 p-0 text-center">
                  <a href="https://www.facebook.com/ASPSRemoteSpeechVTx?_rdr">
                    <img
                      src={facebook}
                      className="img-fluid w-75"
                      alt="slider_img5"
                    />
                  </a>
                </div>
                <div className="col-3 p-0 text-center">
                 <a href="">
                 <img
                    src={insta}
                    className="img-fluid w-75"
                    alt="slider_img5"
                  />
                 </a>
                </div>
                <div className="col-3 p-0 text-center">
                  <a href="">
                  <img
                    src={linkedin}
                    className="img-fluid w-75"
                    alt="slider_img5"
                  />
                  </a>
                </div>
                <div className="col-3 p-0 text-center">
                  <a href="">
                  <img
                    src={yt}
                    className="img-fluid w-75"
                    alt="slider_img5"
                  />
                  </a>
                </div>
                {/* <div className="col-3 p-0 text-center">
                  <img src={facebook} className="img-fluid w-75" alt="slider_img5" />
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="copyright_sec p-4">
        <div className="container">
          <div className="row d-flex justify-content-between">
            <div className="col-6 col-xl-3 col-lg-3 col-md-5">
              @2024 All Rights Reserved
            </div>
            <div className="col-6  col-xl-3 col-lg-3 col-md-5 text-end">
              Powered bt: Remote Speech
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
