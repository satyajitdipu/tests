import React from 'react'
import "./Notification.css";
import settings_img from "../assets/settings.png";
const Notification = () => {
  return (
    <>
      <section className='mt-xl-5 mt-lg-5  mt-md-4 mt-3 py-xl-5 py-lg-5 py-md-4 py-3'>
             <div className="container  pt-xl-4 pt-lg-4 pt-md-3 pt-2">
                <div className="row d-flex justify-content-between">
                    <div className="col-xl-3 col-lg-3 col-md-2 col-12">
                              <h3 className='notification_text_green fw-bold'>Notification</h3>
                    </div>
                    <div className="col-xl-3 col-lg-3 col-md-2 col-12 text-end">
                             <img src={settings_img} alt="" />
                    </div>
                </div>
                <h4 className='notification_text_black mt-xl-5 mt-lg-4 mt-md-4 mt-3'>28 December 2024</h4>
                <div className="row">
                    <div className="col-12">
                        <hr />
                    </div>
                </div>
                <div className="row my-xl-4 my-lg-4 my-md-4 my-3">
                    <div className="col-xl-1 col-lg-1 col-md-1 col-12 text-center">
                            <img src={settings_img} className='img-fluid' alt="settings_img" />
                    </div>
                    <div className="col-xl-11 col-lg-11 col-md-11 col-12">
                            <h5 className='mb-1'>Game Update</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam enim perferendis quo nulla incidunt eos nesciunt laudantium unde architecto ratione!</p>
                    </div>
                </div>
                <div className="row my-xl-4 my-lg-4 my-md-4 my-3">
                    <div className="col-xl-1 col-lg-1 col-md-1 col-12 text-center">
                            <img src={settings_img} className='img-fluid' alt="settings_img" />
                    </div>
                    <div className="col-xl-11 col-lg-11 col-md-11 col-12">
                            <h5 className='mb-1'>Feature Update</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam enim perferendis quo nulla incidunt eos nesciunt laudantium unde architecto ratione!</p>
                    </div>
                </div>
                <div className="row my-xl-4 my-lg-4 my-md-4 my-3">
                    <div className="col-xl-1 col-lg-1 col-md-1 col-12 text-center">
                            <img src={settings_img} className='img-fluid' alt="settings_img" />
                    </div>
                    <div className="col-xl-11 col-lg-11 col-md-11 col-12">
                            <h5 className='mb-1'>Feature Update</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam enim perferendis quo nulla incidunt eos nesciunt laudantium unde architecto ratione!</p>
                    </div>
                </div>
                <h4 className='notification_text_black mt-xl-5 mt-lg-4 mt-md-4 mt-3'>32 December 2024</h4>
                <div className="row">
                    <div className="col-12">
                        <hr />
                    </div>
                </div>
                <div className="row my-xl-4 my-lg-4 my-md-4 my-3">
                    <div className="col-xl-1 col-lg-1 col-md-1 col-12 text-center">
                            <img src={settings_img} className='img-fluid' alt="settings_img" />
                    </div>
                    <div className="col-xl-11 col-lg-11 col-md-11 col-12">
                            <h5 className='mb-1'>Game Update</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam enim perferendis quo nulla incidunt eos nesciunt laudantium unde architecto ratione!</p>
                    </div>
                </div>
                <div className="row my-xl-4 my-lg-4 my-md-4 my-3">
                    <div className="col-xl-1 col-lg-1 col-md-1 col-12 text-center">
                            <img src={settings_img} className='img-fluid' alt="settings_img" />
                    </div>
                    <div className="col-xl-11 col-lg-11 col-md-11 col-12">
                            <h5 className='mb-1'>Feature Update</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam enim perferendis quo nulla incidunt eos nesciunt laudantium unde architecto ratione!</p>
                    </div>
                </div>
                <div className="row my-xl-4 my-lg-4 my-md-4 my-3">
                    <div className="col-xl-1 col-lg-1 col-md-1 col-12 text-center">
                            <img src={settings_img} className='img-fluid' alt="settings_img" />
                    </div>
                    <div className="col-xl-11 col-lg-11 col-md-11 col-12">
                            <h5 className='mb-1'>Feature Update</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam enim perferendis quo nulla incidunt eos nesciunt laudantium unde architecto ratione!</p>
                    </div>
                </div>
                
             </div>
      </section>
    </>
  )
}

export default Notification