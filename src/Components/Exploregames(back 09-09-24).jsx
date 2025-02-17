import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import slider_img1 from "../assets/slider_img1.png";
import slider_img2 from "../assets/slider_img2.png";
import slider_img3 from "../assets/slider_img3.png";
import slider_img4 from "../assets/slider_img4.png";
import slider_img5 from "../assets/slider_img5.png";
import exolpregames_img from "../assets/explore_games_img.png";
import "./Explore.css";
import Backtotop from "./Backtotop";

const Exploregames = () => {
  const [games, setGames] = useState([]);
  const [categories, setCategories] = useState([]);
  const [ageFilters, setAgeFilters] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedAgeFilter, setSelectedAgeFilter] = useState('');
  const navigate = useNavigate();

  // Fetch games, categories, and age filters from API
  const fetchGamesData = async (ageFilter = '', category = '') => {
    try {
      const response = await fetch(`https://virtualtxai.com/api/all-games?age_filters=${ageFilter}&categories=${category}`);
      const data = await response.json();
      setGames(data.all_games);
      console.log(data)
      setCategories(data.all_categories);
      setAgeFilters(data.all_age_filters);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    // Fetch initial data
    fetchGamesData();
  }, []);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    fetchGamesData(selectedAgeFilter, category);
  };

  const handleAgeFilterChange = (ageFilter) => {
    setSelectedAgeFilter(ageFilter);
    fetchGamesData(ageFilter, selectedCategory);
  };

  const handleGameClick = () => {
    navigate("/Gamedescription");
  };

  return (
    <div>
      <section className="explore_games_sec py-4 bg-white text-white">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 mt-5 pt-5">
              <h1 className="text-dark fw-bold ps-5 pt-5 mt-5">Explore Games</h1>
              <p className="text-dark py-xl-3 py-lg-3 py-md-2 py-1 ps-xl-5 ps-lg-4 ps-md-3 ps-1 lh-lg">
                VTX Games is a collection of specialized therapy games
                strategically developed to increase client engagement and
                support a variety of clear therapy goals. Specific games can be
                selected, and suggested, which encourages a client’s progression
                towards even greater results!
              </p>
            </div>
            <div className="col-xl-6">
              <img src={exolpregames_img} className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </section>

      {/* Category and Age Filters */}
      <section className="dark_blue_bg p-3">
        <div className="container">
          <div className="row">
            <div className="col">
              <select onChange={(e) => handleCategoryChange(e.target.value)} className="form-select">
                <option value="">All Categories</option>
                {categories.map((category) => (
                  <option key={category.id} value={category.name}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            <div className="col">
              <select onChange={(e) => handleAgeFilterChange(e.target.value)} className="form-select">
                <option value="">All Ages</option>
                {ageFilters.map((ageFilter) => (
                  <option key={ageFilter.id} value={ageFilter.name}>
                    {ageFilter.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Games Section */}
      <section className="games_section_explore">
        <div className="container pb-5">
          <div className="row">
            {games.map((game) => (
              <div key={game.id} className="col-xl-2 col-lg-2 col-md-2 col-12 mt-4" onClick={handleGameClick}>
                <img src={game.game_image} alt="" className="img-fluid rounded_top" />
                <div className="rounded_btm p-2 grey_bg">
                  <p className="fw-bolder mb-0">{game.game_name}</p>
                  <p className="mb-0" style={{ fontSize: 10 }}>
                    {game.description}
                  </p>
                </div>
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
