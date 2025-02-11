import React from "react";
import "./Pricing.css";
import { useNavigate } from 'react-router-dom';
import tick from "../assets/icon_tick.png";
const Pricing = () => {
const navigate = useNavigate();
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
              <div className="features  py-xl-3 py-lg-3 py-md-2 py-2 d-flex justify-content-start align-item-center gap-2">
                <img src={tick} alt="tick" className="img-fluid" />
                <p className="mb-0 mt-xl-1 mt-lg-2 mt-md-1 mt-2">
                  Coloring book and other free games.
                </p>
              </div>
              <div className="features  py-xl-3 py-lg-3 py-md-2 py-2 d-flex justify-content-start align-item-center gap-2">
                <img src={tick} alt="tick" className="img-fluid" />
                <p className="mb-0 mt-xl-1 mt-lg-2 mt-md-1 mt-2">
                  Full roster of interactive therapy platform.
                </p>
              </div>
              <div className="features  py-xl-3 py-lg-3 py-md-2 py-2 d-flex justify-content-start align-item-center gap-2">
                <img src={tick} alt="tick" className="img-fluid" />
                <p className="mb-0 mt-xl-1 mt-lg-2 mt-md-1 mt-2">
                  Games for all age groups.
                </p>
              </div>
              <div className="features  py-xl-3 py-lg-3 py-md-2 py-2 d-flex justify-content-start align-item-center gap-2">
                <img src={tick} alt="tick" className="img-fluid" />
                <p className="mb-0 mt-xl-1 mt-lg-2 mt-md-1 mt-2">
                  Therapy Activity card
                </p>
              </div>
              <div className="features  py-xl-3 py-lg-3 py-md-2 py-2 d-flex justify-content-start align-item-center gap-2">
                <img src={tick} alt="tick" className="img-fluid" />
                <p className="mb-0 mt-xl-1 mt-lg-2 mt-md-1 mt-2">
                  Notifications for new updates.
                </p>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-md-4 col-12 pricing_right">
  <div className="row">
    <div className="col-12 tabs p-xl-4 p-lg-4 p-md-2 p-2">
      <h6 className="fw-bold">Monthly</h6>
      <h2 className="fw-bold">$9.99</h2>
      <p>Single User login/billed monthly</p>
      <button
        className="fw-bold py-xl-3 py-lg-3 py-md-2 py-2 d-flex justify-content-center align-item-center subscribe_now_btn"
        onClick={() => {
          // Store plan type in local storage
          localStorage.setItem("planType", "monthly");
navigate("/myaccount");
          // alert("Plan type set to monthly!");
        }}
      >
        Subscribe now
      </button>
    </div>
  </div>

              <div className="row my-xl-3 my-lg-3 my-md-2 my-2">
                <div className="col-12 tabs p-xl-4 p-lg-4 p-md-2 p-2">
                  <h6 className="fw-bold">Quaterly</h6>
                  <h2 className="fw-bold">$26.97</h2>
                  <p>single user login / $4.4 billed monthly for 6 months</p>
                  <button
        className="fw-bold py-xl-3 py-lg-3 py-md-2 py-2 d-flex justify-content-center align-item-center subscribe_now_btn"
        onClick={() => {
          // Store plan type in local storage
          localStorage.setItem("planType", "quarterly");
navigate("/myaccount");
          // alert("Plan type set to monthly!");
        }}
      >
        Subscribe now
      </button>
                </div>
              </div>
              <div className="row">
                <div className="col-12 tabs p-xl-4 p-lg-4 p-md-2 p-2">
                  <h6 className="fw-bold">yearly</h6>
                  <h2 className="fw-bold">$95.90</h2>
                  <p>single user login / $7.9 billed monthly for a year</p>
                  <button
        className="fw-bold py-xl-3 py-lg-3 py-md-2 py-2 d-flex justify-content-center align-item-center subscribe_now_btn"
        onClick={() => {
          // Store plan type in local storage
          localStorage.setItem("planType", "monthly");
navigate("/myaccount");
          // alert("Plan type set to monthly!");
        }}
      >
        Subscribe now
      </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="accordion_sec mt-xl-4 mt-lg-4 mt-md-4 mt-3  py-xl-5 py-lg-5 py-md-4 py-3">
       <div className="container pb-xl-5 pb-lg-4 pb-md-3 pb-2">
                <h3 className="pb-xl-5 pb-lg-5 pb-md-3 pb-2 fw-bold">Frequently Ask Question</h3>
        <div className="row">
            <div className="col-12">
            <div class="accordion" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                Accordion Item #1
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is
                shown by default, until the collapse plugin adds the appropriate
                classes that we use to style each element. These classes control
                the overall appearance, as well as the showing and hiding via
                CSS transitions. You can modify any of this with custom CSS or
                overriding our default variables. It's also worth noting that
                just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingTwo">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                Accordion Item #2
              </button>
            </h2>
            <div
              id="collapseTwo"
              class="accordion-collapse collapse"
              aria-labelledby="headingTwo"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="headingThree">
              <button
                class="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                Accordion Item #3
              </button>
            </h2>
            <div
              id="collapseThree"
              class="accordion-collapse collapse"
              aria-labelledby="headingThree"
              data-bs-parent="#accordionExample"
            >
              <div class="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is
                hidden by default, until the collapse plugin adds the
                appropriate classes that we use to style each element. These
                classes control the overall appearance, as well as the showing
                and hiding via CSS transitions. You can modify any of this with
                custom CSS or overriding our default variables. It's also worth
                noting that just about any HTML can go within the{" "}
                <code>.accordion-body</code>, though the transition does limit
                overflow.
              </div>
            </div>
          </div>
        </div>
            </div>
        </div>
       </div>
      </section>
    </>
  );
};

export default Pricing;
