import React from 'react'

import forgot_passord from "../assets/forgot_password-removebg-preview.png";
const Forgotpassword = () => {
  return (
    <>
        <section className="mt-xl-5 mt-lg-5 mt-md-4 mt-3 py-xl-5 py-lg-5 py-md-4 py-3 create_acc_sec">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-12 col-12">
              <h1 className="pt-xl-5 pt-lg-4 pt-md-3 pt-2">
                Forgot Password
              </h1>
              <div>
                <img src={forgot_passord} className="img-fluid" alt="" />
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-12 col-12 mt-xl-5 mt-lg-5 mt-md-4 mt-3 pt-xl-5 pt-lg-4 pt-md-3 pt-2">
              <div className="form_sec mt-5 p-xl-4 p-lg-4 p-md-3 p-2 position-relative">
      
                <form
                  
                  className="pt-xl-5 pt-lg-5 pt-md-4 pt-3  create_acc_inputs"
                >
                  <input
                    name="username"
                    placeholder="Enter your  email id"
                    className="p-xl-4 p-lg-4 p-md-3 p-3"
                    type="text"
                 
                  />
                 
                  <div className="create_acc_submit text-center">
                    <button
                      type="submit"
                      className="px-xl-5 px-lg-5 px-md-4 px-3 py-xl-3 py-lg-3 py-md-3 py-2 mt-xl-5 mt-lg-5 mt-md-4 mt-4"
                    >
                      Submit
                    </button>
                  </div>
                </form>
              </div>
           
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Forgotpassword