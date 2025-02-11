import React, { useState } from 'react';
import "./Modal.css";
import resetpassword_img from '../assets/reset_password.png'
import close_icon from '../assets/close_icon.png';
import axios from "axios";

const Resetpasswordmodal = ({ setshowmodal, Closemodal }) => {
    const [userDatas, setUserDatas] = useState({
  
        password: "",
        confirmpassword: "",
    });

    const handleChange = (e) => {
        setUserDatas({
          ...userDatas,
          [e.target.name]: e.target.value
        });
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

          // Reset the state
          setUserDatas({
            password: "",
            confirmpassword: "",
          });

          // Close the modal
          Closemodal();

        } catch (error) {
          console.error("Error resetting password:", error.response?.data || error.message);
          setshowmodal(false);
        }
      };

  return (
    <>
     <div className="modal_wrapper">
        <div className="modal_area w-25 p-4 bg-dark rounded">
            <div className="close_btn text-light position-absolute end-0 text-center"><img onClick={Closemodal} src={close_icon} className='w-50' alt="close" /></div>
          <div className='text-center'>
            <img src={resetpassword_img} alt="resetpassword_img" className=' img-fluid text-center' />
          </div>
              <div className='py-2 '>
                <p className='text-light m-0 p-0'>Enter new password</p>
                <input type="password" className='w-100 py-2 rounded' name="password" value={userDatas.password}
                    onChange={handleChange} />
              </div>
              <div className='py-2 '>
                <p className='text-light m-0 p-0'>Confirm new password</p>
                <input type="password" name="confirmpassword" className='w-100 py-2 rounded' value={userDatas.confirmpassword}
                    onChange={handleChange} />
              </div>
              <div className='py-2'>
                <button onClick={handleResetPassword} style={{background:'#4CBB16'}} className='text-light w-100 rounded py-2 mt-2'>Submit</button>
              </div>
        </div>
     </div>
    </>
  );
}

export default Resetpasswordmodal;
