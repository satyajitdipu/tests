import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import exolpregames_img from "../assets/explore_games_img.png";
import "./Explore.css";
import Backtotop from "./Backtotop";
import AOS from "aos";
import "aos/dist/aos.css";

const Exploregames = () => {
  const [games, setGames] = useState([]);
  const [categories, setCategories] = useState([]);
  const [ageFilters, setAgeFilters] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedAgeFilter, setSelectedAgeFilter] = useState("");
  const [toggle, setToggle] = useState(false);
  const [active_btn, setActiveBtn] = useState(""); // Renamed for clarity
  const [activeCategory, setActiveCategory] = useState("");

 

  const navigate = useNavigate();

  // Fetch games, categories, and age filters from API
  const fetchGamesData = async () => {
    try {
      console.log("Fetching data with:", {
        selectedAgeFilter,
        selectedCategory,
      }); // Log parameters
      const response = await fetch(
        `https://virtualtxai.com/api/all-games?age_filters=${selectedAgeFilter}&categories=${selectedCategory}`
      );
      const data = await response.json();
      console.log("Fetched data:", data); // Log fetched data
      setGames(data.all_games);
      setCategories(data.all_categories);
      setAgeFilters(data.all_age_filters);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    AOS.init({ duration: "1500" });
    // Fetch initial data whenever category or age filter changes
    fetchGamesData();
  }, [selectedAgeFilter, selectedCategory]); // Updated dependencies

  const handleCategoryClick = (category) => {
    setSelectedCategory(category); // Update selectedCategory
    setActiveBtn(category); // Update active button to reflect the current category
    setActiveCategory(category); // Set clicked category as active
  };

  const handleAgeFilterClick = (ageFilter) => {
    setSelectedAgeFilter(ageFilter);
  };

  const handleGameClick = (gameId) => {
    navigate(`/Gamedescription/${gameId}`);
  };

  return (
    <div>
      <section className="explore_games_sec py-0 bg-white text-white py-xl-4 py-lg-4 py-md-3 py-2">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 mt-5 pt-xl-5 pt-lg-5 pt-md-4 pt-2">
              <h1
                data-aos="fade-right"
                className="text-dark fw-bold ps-5 pt-5 mt-5"
              >
                Explore Games
              </h1>
              <p
                data-aos="fade-right"
                className="text-dark py-xl-3 py-lg-3 py-md-2 py-1 ps-xl-5 ps-lg-4 ps-md-3 ps-1 lh-lg"
              >
               Get ready to play and progress with VTXGames! Our specialized therapy games make sessions engaging and effective.  
              </p>
            </div>
            <div data-aos="fade-left" className="col-xl-6">
              <img src={exolpregames_img} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Category and Age Filters */}
      <section className="dark_blue_bg p-xl-3 p-lg-3 p-md-3 p-4">
        <div className="container">
          <div className="row d-flex justify-content-center">
            <div className="col-xl-3 col-lg-3 col-md-3 col-12">
              <div
                onClick={() => setToggle(!toggle)}
                className="card-body grey_bg text-center rounded dropdown-toggle py-3"
              >
                All Categories
              </div>
            </div>

            {/* Filter buttons positioned outside of "All Categories" */}
           
           
            <div className="col-xl-2 col-lg-2 col-md-2 col-12">
              <button
                onClick={() => handleCategoryClick("SLP")}
                className={`btn py-xl-3 py-lg-3 py-md-2 py-2 my-xl-0 my-lg-0 my-md-0 my-2 text-center rounded w-100 mb-2 ${
                  active_btn === "SLP" ? "active_class" : "grey_bg"
                }`}
              >
                SLP
              </button>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-12">
              <button
                onClick={() => handleCategoryClick("OT")}
                className={`btn py-xl-3 py-lg-3 py-md-2 py-2 my-xl-0 my-lg-0 my-md-0 my-2 text-center rounded w-100 mb-2 ${
                  active_btn === "OT" ? "active_class" : "grey_bg"
                }`}
              >
                OT
              </button>
            </div>
            <div className="col-xl-2 col-lg-2 col-md-2 col-12">
              <button
                onClick={() => handleCategoryClick("MIND")}
                className={`btn py-xl-3 py-lg-3 py-md-2 py-2 my-xl-0 my-lg-0 my-md-0 my-2 text-center rounded w-100 mb-2 ${
                  active_btn === "MIND" ? "active_class" : "grey_bg"
                }`}
              >
                MIND
              </button>
            </div>
            <div className="col-xl-3 col-lg-3 col-md-3 col-12">
              <div className="dropdown">
                <button
                  className="py-3 btn btn-secondary dropdown-toggle grey_bg text-center rounded h-100 w-100 text-dark"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Age
                </button>
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuButton1"
                >
                  {ageFilters.map((ageFilter) => (
                    <li key={ageFilter.id}>
                      <a
                        className="dropdown-item"
                        onClick={() => handleAgeFilterClick(ageFilter.name)}
                      >
                        {ageFilter.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category 2 */}
      <section
        className={
          toggle
            ? "bg-grey p-xl-3 p-lg-3 p-md-3 p-2"
            : "bg-grey p-xl-3 p-lg-3 p-md-3 p-2 d-none"
        }
      >
        <div className="container">
          <div className="row ">
            {categories.map((category) => (
              <div
                key={category.id}
                className="col-xl-2 col-lg-2 col-md-3 col-12 mt-xl-2 mt-lg-2 mt-md-2 mt-1"
              >
                <div
                  onClick={() => handleCategoryClick(category.name)}
                  // Apply 'active_class' if this category is the active one
                  className={`card-body category2_bg text-center rounded ${
                    activeCategory === category.name ? "active_class2" : ""
                  }`}
                >
                  {category.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dropdown sec */}
      <section className="pt-xl-4 pt-lg-3 pt-md-2 pt-2">
        <div className="container">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-xl-3 col-lg-3 col-md-3 col-12">
              <h3 className="fw-bold py-xl-3 py-lg-3 py-md-2 py-2">
                All Games
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="games_section_explore">
        <div className="container pb-xl-5 pb-lg-4 pb-md-4 pb-3">
          <div className="row">
            {games.map((game) => (
              <div
                key={game.id}
                className="col-xl-2 col-lg-2 col-md-2 col-12 mt-xl-4 mt-lg-3 mt-md-2 mt-3"
                onClick={() => handleGameClick(game.id)}
              >
                <Link to={`/Gamedescription/${game.id}`}>
                  <img
                    src={game.game_image}
                    alt=""
                    className="img-fluid rounded_top"
                  />
                  <div className="rounded_btm p-xl-3 p-lg-3 p-md-1 p-2 grey_bg2">
                    <p className="fw-bolder mb-0 " style={{ fontSize: 13 }}>
                      {game.game_name}
                    </p>
                    <p className="mb-0" style={{ fontSize: 10 }}>
                      {game.description}
                    </p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Backtotop />
    </div>
  );
};

export default Exploregames;
