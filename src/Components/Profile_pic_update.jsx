import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import plus_icon from "../assets/plus_icon_profile.png";
import "./Profile_pic.css";

function MyVerticallyCenteredModal(props) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(props.profile);

  // Handle file selection
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Preview the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  // Handle file upload to the API
  const handleUpload = async () => {
    if (selectedFile) {
      const formData = new FormData();
      formData.append('photo', selectedFile);

      try {
        const response = await fetch('https://virtualtxai.com/api/profile/photo', {
          method: 'POST',
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: formData, // Pass the FormData instance here
        });

        const data = await response.json();

        if (response.ok) {
          // Handle success response
          console.log('Profile picture updated successfully', data);
          // Optionally, you can update the profile picture on the UI
          props.onHide(); // Close the modal after successful upload
        } else {
          // Handle errors here
          console.error('Error updating profile picture:', data);
        }
      } catch (error) {
        console.error('Error:', error);
      }
    }
  };

  return (
    <Modal
      dialogClassName='custom-dialog'
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Update profile picture
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='position-relative d-flex justify-content-center align-items-center flex-column'>
          <img src={previewImage} alt="Profile_pic_update" className='img-fluid w-50 text-center update_profile' />
          <img className='position-absolute plus_icon' src={plus_icon} alt="plus_icon" />
          <input type="file" onChange={handleFileChange} />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleUpload}>Upload</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default MyVerticallyCenteredModal;
