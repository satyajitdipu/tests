import React from "react";
import "./contactus.css";
import contactus_img from "../assets/contactus_img.png";
const Contactus = () => {
  return (
    <section className="contactus_sec mt-xl-5 mt-lg-5 mt-md-4 mt-0 py-xl-5 py-lg-5 py-md-4 py-4 bg-white text-white">
      <div className="container py-xl-5 py-lg-4 py-md-4 py-2">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <h1 className="text-dark">We would love to hear from you</h1>
            <img
              src={contactus_img}
              className="img-fluid"
              alt="contactus_img"
            />
          </div>
          <div className="col-xl-6 col-lg-6 col-md-12 col-12">
            <form
              className="fom_sec p-xl-4 p-lg-4 p-md-3 p-1 rounded"
              action=""
            >
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label text-dark">
                  Your Name
                </label>
                <input
                  type="text"
                  class="form-control p-xl-3 p-lg-3 p-md-2 p-1"
                  id="exampleFormControlInput1"
                  placeholder="First name and last name"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label text-dark">
                  Your email
                </label>
                <input
                  type="email"
                  class="form-control p-xl-3 p-lg-3 p-md-2 p-1"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label text-dark">
                  Your Message
                </label>
                <textarea
                  class="form-control  p-xl-5 p-lg-4 p-md-3 p-3"
                  id="exampleFormControlTextarea1"
                  rows="3"
                ></textarea>
              </div>
              <div className="btn_sec text-end">
                <button className="send_btn py-xl-3 py-lg-3 py-md-2 py-1 px-xl-5 px-lg-4 px-md-3 px-2 rounded">Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contactus;
