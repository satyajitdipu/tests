import React from 'react'
import { useNavigate } from "react-router-dom";
import "./speechtherapyhub.css";
import back_arrow from "../assets/back.png";
import card_img1 from "../assets/card_img1.png";
import slider_img1 from "../assets/slider_img1.png";
import slider_img2 from "../assets/slider_img2.png";
import slider_img3 from "../assets/slider_img3.png";
import slider_img4 from "../assets/slider_img4.png";
import slider_img5 from "../assets/slider_img5.png";
import hub_img_1 from "../assets/hub_img_1.png";
import my_plan_img from "../assets/my_plan_img.png";


const Speechtherapyhub = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/");
  };
  return (
    <>
       <section className='hub_header mt-xl-5 mt-lg-5 mt-md-4 mt-3 py-xl-5 py-lg-5 py-md-4 py-3'>
              <div className="container hub_bg p-xl-3 p-lg-3 p-md-2 p-2 position-relative ">
              <div className="back_btn">
                    <button onClick={handleClick} className='py-xl-2 py-lg-2 py-md-1 py-1 px-xl-4 px-lg-4 px-md-3 px-2 '><img src={back_arrow} alt="" /> Back</button>
                  </div>
                <div className="row d-flex justify-content-center align-items-center mt-xl-5 mt-lg-5 mt-md-4 mt-3 pt-xl-3 pt-lg-3 pt-md-2 pt-2">
                   <div className="col-xl-6 col-lg-6 col-md-6 col-12 px-xl-0 px-lg-0 px-md-0 px-5 text-center">
                     <h1 className='fw-bold'>SpeechTherapy Hub</h1>
                   </div>
                </div>
                <img src={card_img1} alt="card_img1" className='hub_img position-absolute' />
              </div>
       </section>
       <section className='mt-xl-4 mt-lg-4 mt-md-3 mt-2 py-xl-5 py-lg-5 py-md-4 py-3'>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-10 text-center">
            Welcome to our Speech Therapy Workspace. We understand the unique challenges and triumphs of speech therapists, and we're here to provide you with a dedicated space tailored to your expertise.
            </div>
          </div>
        </div>
     
       </section>

       <section>
        <div className="container py-xl-5 py-lg-5 py-md-4 py-3">
        <div className="row">
            <h4 className="fw-bold py-xl-4 py-lg-4 py-md-3 py-2">
            Games you've recently played
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

              <div className='row'>
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
             
            </div>
          </div>
        </div>
       </section>

       <section className='report_a_bug mt-xl-4 mt-lg-4 mt-md-3 mt-2 py-xl-5 py-lg-5 py-md-4 py-3'>
                <div className="container neon_green ">
                  <div className="row">
                    <div className="col-xl-7 col-lg-7 col-md-12 col-12 pt-xl-3 pt-lg-3 pt-md-4 pt-1 ps-xl-5 ps-lg-5 ps-md-3 ps-2 mt-xl-5 mt-lg-4 mt-md-3 mt-3">
                        <h4 className='fw-bold text-light'>Report a bug or Special request</h4>
                        <p className=' text-light my-xl-4 my-lg-4 my-md-3 my-2'> If you require a specific feature that is currently unavailable or any feedback, want to report a bug or issue, please jot it down here and send it to us. We'll promptly respond to your inquiry.</p>

                        <textarea className='p-xl-4 p-lg-3 p-md-2 p-2 pt-xl-3 ' placeholder='Write text here' name="" id="" cols="30" rows="4"></textarea>
                        <div className='text-end pt-xl-0 pt-lg-0 pt-md-0 pt-0 pb-xl-3 pb-lg-3 pb-md-2 pb-2'>
                          <button className='send_btn_home py-3 px-xl-5 px-lg-3 px-md-3 px-2'>Send</button>
                        </div>
                    </div>
                    <div className="col-xl-5 col-lg-5 col-md-12 col-12 ">
                       <img src={hub_img_1} className='img-fluid object-fit-cover' alt="" />
                    </div>
                  </div>
                </div>
       </section>

       <section className=' py-xl-5 py-lg-5 py-md-4 py-3'>
              <div className="container my_current_plan p-xl-4 p-lg-4 p-md-3 p-2">
                <div className="row">
                  <div className="col-xl-9 col-lg-9 col-md-9 col-12 pt-xl-4 pt-lg-4 pt-md-3 pt-2 ps-xl-4 ps-lg-4 ps-md-3 ps-3">
                             <h4 className='fw-bold text-light'>My Current Plan</h4>
                             <p  className=' text-light'>You've currently subscribed to the <b>QUATERLY</b> <br /> PLAN Next payment on 3 Feb, 2024 <br /> <br /> Upgrade for more benefits</p>

                             <div className="btn_sec_my_current_plan mt-xl-5 mt-lg-5 mt-md-4 mt-3 d-flex gap-2">
                              <button className='grey_btn px-xl-5 px-lg-5 px-md-4 px-3 py-xl-2 py-lg-2 py-md-1 py-1'>Cancel Plan</button>
                              <button className='px-xl-5 px-lg-5 px-md-4 px-3 py-xl-2 py-lg-2 py-md-1 py-1 bg-light'>Upgrade Plan</button>
                             </div>
                  </div>
                  <div className="col-xl-3 col-lg-3 col-md-3 col-12 my_plan_img">
                             <img src={my_plan_img} className='img-fluid'  alt="my_plan_img" />
                  </div>
                </div>
              </div>
       </section>
    </>
  )
}

export default Speechtherapyhub