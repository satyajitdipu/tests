import React, { useEffect, useRef, useState } from "react";
import "./Gamedescription.css";
import share_img from "../assets/share_img.png";
import play_game from "../assets/play_icon.png";
import pause from "../assets/pause.png";
import Carousel from "react-multi-carousel";
import slider_img1 from "../assets/slider_img1.png";
import slider_img2 from "../assets/slider_img2.png";
import slider_img3 from "../assets/slider_img3.png";
import slider_img4 from "../assets/slider_img4.png";
import slider_img5 from "../assets/slider_img5.png";
import star from "../assets/star.png";
import star_yellow from "../assets/yellow_star.png";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const Gamedescription = () => {
  const gamevidref = useRef();
  const [play, setPlay] = useState(false);
  const [gameDatas, setGameDatas] = useState(null);
  const [userRating, setUserRating] = useState(0);
  const [userReview, setUserReview] = useState('');
  const { id } = useParams();
  const [averageRating, setAverageRating] = useState(0);
  const [totalReviews, setTotalReviews] = useState(0);
  const [allReviews, setAllReviews] = useState([]);



  const data = [
    { img: slider_img1 },
    { img: slider_img2 },
    { img: slider_img3 },
    { img: slider_img4 },
    { img: slider_img5 },
  ];

  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 3 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 2 },
  };

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        const response = await axios.get(`https://virtualtxai.com/api/game/${id}`, {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        setGameDatas(response.data);
        console.log(response.data.un_zip_filename);
        fetchRatingsReviews(response.data.id);
      } catch (error) {
        console.error("Error fetching game data:", error.response?.data || error.message);
      }
    };

    const trackActivity = async () => {
      try {
        await axios.post(`https://virtualtxai.com/api/game/${id}`, {}, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
      } catch (error) {
        console.error("Error tracking activity:", error);
      }
    };

    fetchGameData();
    trackActivity();
  }, [id]);

  const fetchRatingsReviews = async (gameId) => {
    try {
      const response = await axios.get(`https://virtualtxai.com/api/ratings/${gameId}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      const { average_rating, total_reviews, ratings_reviews,user_rating,user_review } = response.data;
   
      
     
      setAverageRating(Number(average_rating) || 0);
      setTotalReviews(total_reviews);
      setAllReviews(ratings_reviews);
      setUserRating(user_rating);
    setUserReview(user_review);


      console.log(response.data)
    } catch (error) {
      console.error("Error fetching ratings and reviews:", error);
    }
  };

  const handleClick = () => {
    if (play) {
      gamevidref.current.pause();
    } else {
      gamevidref.current.play();
    }
    setPlay(!play);
  };

  const handleSubmit = async () => {
    if (!userRating || !userReview) {
      alert("Please provide a rating and a review.");
      return;
    }

    try {
      const response = await axios.post('https://virtualtxai.com/api/ratings', {
        game_id: gameDatas.id,
        rating: userRating,
        review: userReview,
      }, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      alert(response.data.message);
      fetchRatingsReviews(gameDatas.id); // Refresh ratings and reviews after submission
      setUserRating(0); // Reset user rating
      setUserReview(''); // Reset user review
    } catch (error) {
      console.error("Error submitting rating and review:", error.response?.data || error.message);
    }
  };

  return (
    <>
      {/* Game Video Section */}
      <section className="gamevideo_sec">
        {gameDatas ? (
          <>
            <video
              onClick={handleClick}
              id="game_vid"
              autoPlay
              src={gameDatas.game_video}
              ref={gamevidref}
              className="mt-2 mb-2"
            ></video>
            <div className="container-fluid" style={{ position: "absolute", top: "16%" }}>
              <div className="container">
                <div className="row d-flex justify-content-end align-items-center">
                  <div className="col-3 d-flex justify-content-end align-items-center">
                    <div className="share bg-white p-2">
                      <img src={share_img} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-center align-items-center">
                  <div className="col-3 d-flex justify-content-center align-items-center pt-0">
                    <div className="play_icon p-2">
                      <img onClick={handleClick} src={play ? pause : play_game} className="img-fluid" alt="" />
                    </div>
                  </div>
                </div>
                <div className="row d-flex justify-content-between align-items-center">
                  <div className="col-12">
                    <div className="d-flex justify-content-start gap-5 align-items-center w-75">
                      <h1 className="fw-bold text-white">{gameDatas.game_name}</h1>
                      <div className="v_line"></div>
                      <div className="star_sec d-flex gap-2 align-items-center">
                        <h1 className="fw-bold text-light mb-0">{averageRating.toFixed(1)}</h1>
                        <img src={star_yellow} alt="star" className="img-fluid w-75" />
                        <p className="mb-0 text-light">{totalReviews} reviews</p>
                      </div>
                      <button className="yellow_btn p-2">Subscribe Now To Play</button>
                      <Link to={`/game/${gameDatas.un_zip_filename}`}>
  <button className="yellow_btn p-2">Play</button>
</Link>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </section>

      {/* Game Gallery Section */}
      <section className="mt-2 pt-2">
        <div className="container">
          <h4 className="text-capitalize fw-bold pb-3">Game Gallery</h4>
          <Carousel responsive={responsive} showDots={true}>
            {data.map((item, index) => (
              <div key={index} className="img_wrapper mx-2 mb-4">
                <img src={item.img} alt={`slider_img${index + 1}`} className="img-fluid" style={{ borderRadius: 10 }} />
              </div>
            ))}
          </Carousel>
        </div>
      </section>

      {/* Game Description Section */}
      <section className="my-3">
        <div className="container">
          <h4 className="fw-bold pb-3">Game Description</h4>
          <h5>{gameDatas ? gameDatas.short_description : "Loading..."}</h5>
          <p className="mt-1">{gameDatas ? gameDatas.long_description : "Loading..."}</p>
        </div>
      </section>

      {/* How To Play Section */}
      <section className="my-3 pb-3">
  <div className="container">
    <h4 className="fw-bold">Write a Review</h4>
    <p className="pt-2">Please rate your experience with this game and leave a review.</p>

    {/* Display average rating and total reviews */}
    <div className="mb-3">
      <h5 className="mb-0">
        Average Rating: {averageRating.toFixed(1)} ({totalReviews} reviews)
      </h5>
    </div>

    {/* Star rating selector */}
    <div className="d-flex gap-1">
      {[...Array(5)].map((_, index) => (
        <img
          key={index}
          src={index < userRating ? star_yellow : star}
          alt="star"
          onClick={() => setUserRating(index + 1)} // Updates user rating on click
          className="star-icon"
          style={{ cursor: 'pointer' }} // Make it clear that the stars are clickable
        />
      ))}
    </div>

    {/* Review text area with controlled value */}
    <textarea
          value={userReview} // Sets the textarea value based on userReview state
          onChange={(e) => setUserReview(e.target.value)} // Updates userReview on change
          rows="4"
          placeholder="Write your review here..."
          className="form-control mt-2"
        ></textarea>

    {/* Submit button */}
    <button onClick={handleSubmit} className="yellow_btn mt-2">
      Submit Review
    </button>
  </div>
</section>


      {/* User Reviews Section */}
      <section className="my-5 pb-5">
  <div className="container">
    <h4 className="fw-bold">User Reviews</h4>
    <div className="row">
      {allReviews.length > 0 ? (
        allReviews.map((review, index) => (
          <div key={index} className="col-12 my-3">
            <div className="review-card p-3 border rounded d-flex align-items-start">
              {/* Display profile photo if available */}
              {review.user?.profilePhoto && (
                <img
                  src={review.user.profilePhoto}
                  alt="User Profile"
                  className="rounded-circle me-3"
                  style={{ width: '50px', height: '50px' }} // Set size as needed
                />
              )}
              <div>
                <h5 className="fw-bold">{review.user.first_name || 'Anonymous'}</h5>
                <div className="d-flex gap-3 align-items-center">
                  {[...Array(5)].map((_, i) => (
                    <img key={i} src={i < review.rating ? star_yellow : star} alt="star" />
                  ))}
                  <span className="text-muted">{new Date(review.created_at).toLocaleDateString()}</span>
                </div>
                <p>{review.review}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No reviews yet. Be the first to write one!</p>
      )}
    </div>
  </div>
</section>

    </>
  );
};

export default Gamedescription;
