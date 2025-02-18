import React, { useState, useEffect, createContext, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import axios from "axios";
import "./Activity.css";
import slider1 from "../src/assets/slider1.png";
import slider2 from "../src/assets/slider2.png";
import slider3 from "../src/assets/slider3.png";
import back_to_card from "../src/assets/back_arrow.png";
import next_arrow from "../src/assets/next_arrow.png";
import annotator_img from "../src/assets/annotator.png";
import activity_button from "../src/assets/activity_button.png";
import articulation_img from "../src/assets/Articulationp.png";
import language_img from "../src/assets/languagep.png";
import fluenc_img from "../src/assets/Fluencyp.png";
import articulation_img_clicked from "../src/assets/articulation_img_clicked.png";
import language_img_clicked from "../src/assets/language_img_clicked.png";
import fluenc_img_clicked from "../src/assets/fluenc_img_clicked.png";
import language_btn from "../src/assets/language_btn.png";
import fluency_img from "../src/assets/fluency_img.png";

import hoverSound from "../src/assets/sound-effect.wav"; // Import the audio file

const Activitycard = ({ isOpen, images, descriptions }) => {
  const [isMainModalOpen, setIsMainModalOpen] = useState(false);
  const [isArticulationModalOpen, setIsArticulationModalOpen] = useState(false);
  const [isLanguageModalOpen, setIsLanguageModalOpen] = useState(false);
  const [isFluencyModalOpen, setIsFluencyModalOpen] = useState(false);
  const [selectedValues, setSelectedValues] = useState([]);
  const [isProceedClicked, setIsProceedClicked] = useState(false);
  const [selected, setSelected] = useState(null); // Track the selected div

  const [articulations, setArticulations] = useState([]); // Articulation data
  const [fluency, setFluency] = useState([]); // Articulation data
  const [Language, setLanguage] = useState([]);
  const [positions, setPositions] = useState([]);
  const [subcatagory, setSubcatagory] = useState([]);
  const [selectedTabs, setSelectedTabs] = useState([]);
  const [selectedTabtype, setSelectedTabtype] = useState([]);
  const [isNewModalOpen, setIsNewModalOpen] = useState(false);
  const colors = ["#4CBB16", "#FF5733", "#FFC300", "#900C3F", "#3498DB"]; // Distinct colors
  const [selectedButtons, setSelectedButtons] = useState([]);
  const [subcategories, setSubCategories] = useState([]);
  const [isSubcategoryModalOpen, setIsSubcategoryModalOpen] = useState(false);

  const [selectedItems, setSelectedItems] = useState([]); // Categories/Words
  const [selectedArticulations, setSelectedArticulations] = useState([]); // Articulations
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility
  const [selectedArticulation, setSelectedArticulation] = useState(null); // Selected articulation
  const [storedSelections, setStoredSelections] = useState({}); // To store selections for each articulation
  // Language
  const [activeSection, setActiveSection] = useState(null); // Tracks the currently active section
  const [selectedCheckboxes, setSelectedCheckboxes] = useState({}); // Stores selected checkboxes per section
  const [completedSections, setCompletedSections] = useState([]); // Tracks which sections are completed
  const [alertStates, setAlertStates] = useState({});
  const [showDoneAlert, setShowDoneAlert] = useState(false);
  const [selectedIds, setSelectedIds] = useState([]);
  const [formattedSelections, setFormattedSelections] = useState({
    filters: [],
  });
  const [ArticulationData, setArticulationData] = useState([]);
  const [LanguageData, setLanguageData] = useState([]);
  const [FluencyData, setFluencyData] = useState([]);
  const [selectedFluencyId, setSelectedFluencyId] = useState(""); // Stores selected fluency ID
  const [selectedSentences, setSelectedSentences] = useState([]); // Stores sentences
  const [activeIndex, setActiveIndex] = useState(0); // Track the active sentence index
  const [selectedSound, setSelectedSound] = useState("");
  const [selectedPosition, setSelectedPosition] = useState("");
  const [selectedSentence, setSelectedSentence] = useState("");
  const [selectedSubCategory, setSelectedSubCategory] = useState("");
  const [selectedLanguageType, setSelectedLanguageType] = useState("");
  const [selectedQuestionType, setSelectedQuestionType] = useState("");
  const [Languageallquestion, setLanguageallquestion] = useState([]);
  const [Filtersubcat, setFiltersubcat] = useState([]);
  const [Filtercat, setFiltercat] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [filteredSubCategories, setfilteredSubCategories] = useState([]);
  const [filteredQuestions, setFilteredQuestions] = useState([]);
  const [isAnyChecked, setIsAnyChecked] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [popupMessage, setPopupMessage] = useState("");
  const [isShowanswer, setShowanswer] = useState(true);
  const [popupContent, setPopupContent] = useState("");


  

  const handleShowAnswerMcq = (answers) => {
    console.log(answers);
    setPopupContent(answers);
    setIsPopupVisible((prev) => !prev);
    // Hide the popup after 4 seconds
  setTimeout(() => {
    setIsPopupVisible(false);
  }, 3000);
  };

  const handleDisplayAnswer = (answers) => {
    console.log(answers);
    setPopupContent(answers);
    setIsPopupVisible(true);
  };
  useEffect(() => {
    setIsPopupVisible(false); // Set popup visibility to false on reload
  }, []);

  // show answer function

  const [highlightedAnswer, setHighlightedAnswer] = useState(null);

  const ShowAnsYesno = (answers) => {
    // Assuming answers is an object with a property that indicates the answer

    setHighlightedAnswer(answers);
    console.log(answers);
  };

  const ShowAns = (answers) => {
    setInputValue(answers);
    setPopupMessage(answers); // Set the message for the popup
    setIsPopupVisible(true); // Show the popup

    // Hide the popup after 4 seconds
    setTimeout(() => {
      setIsPopupVisible(false);
    }, 4000);
  };

  const handleNextSinglequestion = () => {
    setInputValue(""); // Clear input on next
    setIsPopupVisible(false);
    setHighlightedAnswer(null);
  };

  const handlePrevSinglequestion = () => {
    setInputValue(""); // Clear input on prev
    setIsPopupVisible(false);
    setHighlightedAnswer(null);
  };

  // Handle dropdown selection
  const handleFluencyChange = (e) => {
    const fluencyId = e.target.value;
    setSelectedFluencyId(fluencyId);

    // Find selected fluency and update sentences
    const selectedFluency = FluencyData.find(
      (fluency) => fluency.fluency_id == fluencyId
    );
    setSelectedSentences(selectedFluency ? selectedFluency.levels : []);
    setActiveIndex(0); // Reset index when changing fluency
  };

  // Auto-select first fluency when FluencyData is available
  useEffect(() => {
    if (FluencyData.length > 0) {
      setSelectedFluencyId(FluencyData[0].fluency_id);
      setSelectedSentences(FluencyData[0].levels);
    }
  }, [FluencyData]);
  const [hasData, setHasData] = useState({
    articulation: false,
    language: false,
    fluency: false,
  });
  // Function to go to the next sentence
  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === selectedSentences.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous sentence
  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? selectedSentences.length - 1 : prevIndex - 1
    );
  };

  //articulation filter
  const positionMapping = {
    Initial: 1,
    Middle: 2,
    Final: 3,
  };

  useEffect(() => {
    if (storedSelections && Object.keys(storedSelections).length > 0) {
      const firstSound = Object.keys(storedSelections)[0]; // Get the first sound
      if (firstSound) {
        setSelectedSound(firstSound);
        setSelectedPosition(storedSelections[firstSound]?.[0]?.[0] || ""); // First position
        setSelectedSentence(storedSelections[firstSound]?.[1]?.[0] || ""); // First sentence type
      }
    }
  }, [storedSelections]); // Added dependency to re-run if storedSelections updates

  // Update selectedPosition & selectedSentence when selectedSound changes
  useEffect(() => {
    if (selectedSound && storedSelections[selectedSound]) {
      setSelectedPosition(storedSelections[selectedSound]?.[0]?.[0] || ""); // First position
      setSelectedSentence(storedSelections[selectedSound]?.[1]?.[0] || ""); // First sentence type
    }
  }, [selectedSound, storedSelections]); // Added storedSelections as dependency

  const ArfilteredData = Object.keys(ArticulationData)
    .filter((key) => !selectedSound || key === selectedSound) // Filter by sound
    .reduce((acc, key) => {
      acc[key] = ArticulationData[key].filter((item) => {
        const mappedPosition = positionMapping[selectedPosition] || null;
        const matchesPosition =
          !selectedPosition || item.position_mapped == mappedPosition;
        const matchesSentence =
          !selectedSentence || item.sentence === selectedSentence;
        return matchesPosition && matchesSentence;
      });
      return acc;
    }, {});

  //language filter
  useEffect(() => {
    if (Filtercat.length > 0) {
      setSelectedLanguageType(Filtercat[0].id); // Set first value on render
    }
  }, [Filtercat]); // Runs when Filtercat changes
  useEffect(() => {
    setIsPopupVisible(false);
    let filtered = LanguageData;
    console.log(selectedQuestionType);
    if (selectedLanguageType) {
      filtered = filtered.filter(
        (item) => item.language_type_id == selectedLanguageType
      );
    }
    if (selectedSubCategory) {
      filtered = filtered.filter(
        (item) => item.sub_category_id == selectedSubCategory
      );
      setInputValue(""); // Clear input on next
    }
    if (selectedQuestionType) {
      filtered = filtered.filter(
        (item) => item.question_type_id == selectedQuestionType
      );
      setInputValue(""); // Clear input on next
    }
    console.log(filtered);
    setFilteredData(filtered);
  }, [
    selectedLanguageType,
    selectedSubCategory,
    selectedQuestionType,
    LanguageData,
  ]);

  // Filter subcategories based on selected language type
  useEffect(() => {
    if (selectedLanguageType) {
      const filteredSub = Filtersubcat.filter(
        (sub) => sub.cat_id == selectedLanguageType
      );
      console.log(filteredData);
      setfilteredSubCategories(filteredSub);
      setSelectedSubCategory(filteredSub.length > 0 ? filteredSub[0].id : ""); // Auto-select first subcategory
    } else {
      setfilteredSubCategories([]);
      setSelectedSubCategory("");
    }
    console.log(filteredSubCategories);
  }, [selectedLanguageType, Filtersubcat]);

  // 🔹 Extract unique question_type_id based on selected sub_category_id and language_type_id
  useEffect(() => {
    if (selectedLanguageType && selectedSubCategory) {
      const filtered = LanguageData.filter(
        (item) =>
          item.language_type_id == selectedLanguageType &&
          item.sub_category_id == selectedSubCategory
      );

      // Extract unique question_type_id values
      const uniqueQuestionTypeIds = [
        ...new Set(filtered.map((item) => item.question_type_id)),
      ];

      // Filter Languageallquestion to match question_type_id
      const matchingQuestions = Languageallquestion.filter((q) =>
        uniqueQuestionTypeIds.includes(q.question_type_id)
      );

      setFilteredQuestions(matchingQuestions);
      setSelectedQuestionType(
        matchingQuestions.length > 0
          ? matchingQuestions[0].question_type_id
          : ""
      );
    } else {
      setFilteredQuestions([]);
      setSelectedQuestionType("");
    }
  }, [
    selectedLanguageType,
    selectedSubCategory,
    LanguageData,
    Languageallquestion,
  ]);

  // option answer
  const [showCorrectAnswer, setShowCorrectAnswer] = useState([]);

  // Handle Show Answer with parameter
  const handleShowAnswer = (correctOption) => {
    try {
      const correctIndexes = JSON.parse(correctOption); // Parse correct indexes
      setShowCorrectAnswer(correctIndexes.map(Number)); // Convert to numbers
    } catch (error) {
      console.error("Error parsing correct_option:", error);
      setShowCorrectAnswer([]); // Fallback in case of an error
    }
  };
  // State to track the active section
  const [activeSections, setActiveSections] = useState("articulation");

  // Image mapping for each section
  const imageMap = {
    articulation: articulation_img_clicked, // New image when clicked
    language: language_img_clicked, // New image when clicked
    fluency: fluenc_img_clicked, // New image when clicked
  };
  // Slider_variables

  // Language modal once

  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    if (isOpen) {
      const hasSeenPopup = localStorage.getItem("hasSeenLanguagePopup");

      if (!hasSeenPopup) {
        setShowPopup(true);

        // Hide the popup automatically after 4 seconds
        setTimeout(() => {
          setShowPopup(false);
          localStorage.setItem("hasSeenLanguagePopup", "true"); // Store flag
        }, 4000);
      }
    }
  }, [isOpen]);

  // Language modal once

  // Fluency slider

  const slides = [
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis, voluptas.",
    "This is the second slide. It should only be visible when active.",
    "This is the third slide. It should only be visible when active.",
  ];
  const updateSlides = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === "next") {
        return (prevIndex + 1) % slides.length;
      } else {
        return (prevIndex - 1 + slides.length) % slides.length;
      }
    });
  };

  // Fluency slider end

  // Handles button click and toggles sections
  const handleButtonClickLanguage = async (id) => {
    try {
      // Set the active section
      setActiveSection((prev) => (prev === id ? null : id));

      // Make API call to fetch subcategories by category ID
      const response = await axios.get(
        `https://virtualtxai.com/api/lang-subcategories/${id}`,
        {}
      );

      // Handle API response
      if (response.data.success) {
        // Store the fetched subcategories in state
        console.log("Fetched Subcategories:", response.data.data);
        setSubCategories(response.data.data); // Assuming you have a state for subcategories
        setIsSubLanguageModalOpen(true); // Open the modal
      } else {
        console.error("API Error:", response.data.message);
      }
    } catch (error) {
      console.error("Error fetching subcategories:", error);
    }
  };

  // Handles checkbox selection
  const handleCheckboxChange = (sectionIndex, item) => {
    setSelectedCheckboxes((prev) => {
      const currentSelections = prev[sectionIndex] || [];
      const isSelected = currentSelections.includes(item);

      // Update the selections for the active section
      const updatedSelections = {
        ...prev,
        [sectionIndex]: isSelected
          ? currentSelections.filter((i) => i !== item) // Remove if already selected
          : [...currentSelections, item], // Add if not selected
      };

      // Check if no checkboxes are selected after the update
      if (updatedSelections[sectionIndex].length === 0) {
        // Perform your existing actions
        setCompletedSections((prevCompleted) =>
          prevCompleted.filter((section) => section !== sectionIndex)
        );
        setActiveSection(null);
        setAlertStates((prev) => ({
          ...prev,
          [sectionIndex]: true, // Show alert for the current button
        }));
        setTimeout(() => {
          setAlertStates((prev) => ({
            ...prev,
            [sectionIndex]: false, // Hide alert after 3 seconds
          }));
        }, 3000);
        setIsSubLanguageModalOpen(false);
      }

      // Check if any checkbox is selected in any section
      const anyCheckboxSelected = Object.values(updatedSelections).some(
        (selections) => selections.length > 0
      );
      setIsAnyChecked(anyCheckboxSelected);

      return updatedSelections;
    });
  };
  // Handles Done button click
  const handleDoneLanguage = () => {
    setIsSubLanguageModalOpen(false);

    const currentSelections = selectedCheckboxes[activeSection] || [];

    if (currentSelections.length === 0) {
      setShowDoneAlert(true); // Show the animated alert
      setTimeout(() => setShowDoneAlert(false), 3000);
      setActiveSection(null);
      return;
    }

    // Merge new selections with previous ones while avoiding duplicates
    setFormattedSelections((prev) => {
      const existingFilters = prev?.filters || [];

      // Remove any previous entries for the activeSection to prevent duplicates
      const updatedFilters = existingFilters.filter(
        (filter) => filter.language_type_id !== activeSection
      );

      // Add new selections for the activeSection
      const newFilters = currentSelections.map((subCategoryId) => ({
        language_type_id: activeSection,
        sub_category_id: subCategoryId,
      }));

      return { filters: [...updatedFilters, ...newFilters] };
    });
    console.log(
      "Updated Selections:",
      JSON.stringify(formattedSelections, null, 2)
    );

    // Store selected checkboxes while preserving previous selections
    setSelectedCheckboxes((prev) => ({
      ...prev,
      [activeSection]: currentSelections,
    }));

    // Mark the section as completed
    setCompletedSections((prev) =>
      prev.includes(activeSection) ? prev : [...prev, activeSection]
    );

    // Reset active section
    setActiveSection(null);
  };

  // Handles Reset All button click
  const handleResetAllLanguage = () => {
    setActiveSection(null); // Clear the active section
    setCompletedSections([]); // Clear completed sections
    setSelectedCheckboxes({}); // Clear all checkbox selections
  };

  const [isSubLanguageModalOpen, setIsSubLanguageModalOpen] = useState(false);

  // Language end

  // Fluency start

  const [selectedLevels, setSelectedLevels] = useState([]); // Store selected levels
  const handleResetFluency = () => {
    setSelectedLevels([]); // Clear all selected levels
  };

  // Handle level selection
  const handleLevelClick = (level) => {
    if (selectedLevels.includes(level)) {
      // If the level is already selected, remove it
      setSelectedLevels(selectedLevels.filter((l) => l !== level));
    } else {
      // If the level is not selected, add it
      setSelectedLevels([...selectedLevels, level]);
    }
  };

  // Fluency end
  const handleSelect = (articulation) => {
    const storedData = storedSelections[articulation.sound_name] || [[], []]; // Retrieve stored data

    setSelectedArticulations((prev) => {
      if (!prev.includes(articulation.sound_name)) {
        return [...prev, articulation.sound_name];
      }
      return prev; // Prevent duplicate selection
    });

    setSelectedItems([...storedData[0], ...storedData[1]]); // Restore categories and words
    setSelectedArticulation(articulation);
    setIsModalOpen(true); // Open modal
  };

  const handleClick = (item) => {
    setSelectedItems((prev) =>
      prev.includes(item) ? prev.filter((i) => i !== item) : [...prev, item]
    );
  };

  // Handle Done Button Click
  const handleDone = () => {
    if (!selectedArticulation || selectedItems.length === 0) {
      alert("Please select at least one category or word.");
      return;
    }

    setStoredSelections((prev) => {
      const updatedSelections = {
        ...prev,
        [selectedArticulation.sound_name]: [
          selectedItems.filter((item) =>
            positions.some((pos) => pos.question === item)
          ), // ✅ Categories
          selectedItems.filter((item) =>
            subcatagory.some((sub) => sub.question === item)
          ), // ✅ Words
        ],
      };

      console.log("Selections Saved:", updatedSelections);
      return updatedSelections;
    });

    setIsModalOpen(false);
  };

  const handleProceed = async () => {
    try {
      setIsProceedClicked(true);
      let response;

      // Initialize a local object to track data availability
      const localHasData = {
        articulation: false,
        fluency: false,
        language: false,
      };

      // Fetch articulation images if selections exist
      if (storedSelections && Object.keys(storedSelections).length > 0) {
        response = await axios.post(
          "https://virtualtxai.com/api/get-image-by-artic-id-and-sentence",
          storedSelections
        );
        if (response.data.success) {
          setArticulationData(response.data.data);
          localHasData.articulation = true; // Articulation data is available
        } else {
          console.error("Image API Error:", response.data.message);
        }
      }

      // Fetch fluency sentences if selected IDs exist
      if (selectedIds && selectedIds.length > 0) {
        try {
          const fluencyResponse = await axios.post(
            "https://virtualtxai.com/api/get-fluency-sentences",
            { ids: selectedIds }
          );
          if (fluencyResponse.data.success) {
            setFluencyData(fluencyResponse.data.data); // Store sentences data
            localHasData.fluency = true; // Fluency data is available
          } else {
            console.error("Fluency API Error:", fluencyResponse.data.message);
          }
        } catch (error) {
          console.error("Error fetching fluency sentences:", error);
        }
      }

      // Fetch language data if formatted selections exist
      if (formattedSelections && formattedSelections.filters?.length > 0) {
        try {
          const languageResponse = await axios.post(
            "https://virtualtxai.com/api/language-children-multiple",
            formattedSelections
          );
          const languageQuesResponse = await axios.get(
            "https://virtualtxai.com/api/language-question-types"
          );
          if (languageResponse.data.success) {
            setLanguageData(languageResponse.data.data);
            setFiltersubcat(languageResponse.data.filter);
            setFiltercat(languageResponse.data.catagory);
            setLanguageallquestion(languageQuesResponse.data.data);
            localHasData.language = true; // Language data is available
          }
        } catch (error) {
          console.error("Error fetching language data:", error);
        }
      }

      // Update hasData state based on localHasData
      setHasData(localHasData);

      // Update active sections based on available data
      if (
        localHasData.fluency &&
        !localHasData.articulation &&
        !localHasData.language
      ) {
        setActiveSections("fluency");
      } else if (
        !localHasData.fluency &&
        localHasData.articulation &&
        !localHasData.language
      ) {
        setActiveSections("articulation");
      } else if (
        !localHasData.fluency &&
        !localHasData.articulation &&
        localHasData.language
      ) {
        setActiveSections("language");
      } else if (
        localHasData.fluency &&
        !localHasData.articulation &&
        localHasData.language
      ) {
        setActiveSections("language");
      } else {
        setActiveSections("articulation"); // If multiple data types are available
      }

      // Clear selections after processing
      if (
        (storedSelections && Object.keys(storedSelections).length > 0) ||
        (selectedIds && selectedIds.length > 0) ||
        (formattedSelections && formattedSelections.filters?.length > 0)
      ) {
        setSelectedArticulations([]);
       
      }
      setIsNewModalOpen(true);
    } catch (error) {
      console.error("Error calling the API:", error);
    }
  };

  useEffect(() => {
    const savedSelections = JSON.parse(
      sessionStorage.getItem("articulationSelections") // Use sessionStorage here
    );
    if (savedSelections) {
      setStoredSelections(savedSelections);
    }
  }, []);

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedArticulation(null);
  };

  const getBackgroundColor = (soundName) =>
    selectedArticulation?.sound_name === soundName ? "#ABB838" : "#f0f0f0";

  const handleNextClick = () => {
    if (
      selectedButtons.length === 1 &&
      selectedButtons.includes("Articulation")
    ) {
      setIsArticulationModalOpen(true);
      setIsMainModalOpen(false);
    } else if (
      selectedButtons.length === 2 &&
      selectedButtons.includes("Language") &&
      selectedButtons.includes("Fluency")
    ) {
      setIsLanguageModalOpen(true);
      setIsMainModalOpen(false);
    }
    if (
      selectedButtons.length === 2 &&
      selectedButtons.includes("Articulation") &&
      selectedButtons.includes("Language")
    ) {
      setIsArticulationModalOpen(true);
      setIsMainModalOpen(false);
    }
    if (
      selectedButtons.length === 3 &&
      selectedButtons.includes("Articulation") &&
      selectedButtons.includes("Language") &&
      selectedButtons.includes("Fluency")
    ) {
      setIsArticulationModalOpen(true);
      setIsMainModalOpen(false);
    }
    if (selectedButtons.length === 1 && selectedButtons.includes("Language")) {
      setIsLanguageModalOpen(true);
      setIsMainModalOpen(false);
    }
    if (selectedButtons.length === 1 && selectedButtons.includes("Fluency")) {
      setIsFluencyModalOpen(true);
      setIsMainModalOpen(false);
    }
    if (
      selectedButtons.length === 2 &&
      selectedButtons.includes("Fluency") &&
      selectedButtons.includes("Articulation")
    ) {
      setIsArticulationModalOpen(true);
      setIsMainModalOpen(false);
    }
  };

  const handleButtonClick = (buttonLabel) => {
    setSelectedButtons(
      (prevSelected) =>
        prevSelected.includes(buttonLabel)
          ? prevSelected.filter((label) => label !== buttonLabel) // Remove if already selected
          : [...prevSelected, buttonLabel] // Add if not selected
    );
  };

  useEffect(() => {
    axios
    .get("https://virtualtxai.com/api/articulations") // Replace with actual endpoint
    .then((response) => {
        console.log("Articulations:", response.data.data);
        setArticulations(response.data.data); // Assuming response.data.data is an array
      })
      .catch((error) => {
        console.error("Error fetching articulation data:", error);
      });
  }, []);
  useEffect(() => {
    axios
    .get("https://virtualtxai.com/api/lang-categories") // Replace with actual endpoint
    .then((response) => {
        console.log("Language catagory", response.data.data);
        setLanguage(response.data.data); // Assuming response.data.data is an array
      })
      .catch((error) => {
        console.error("Error fetching language data:", error);
      });
  }, []);
  useEffect(() => {
    axios
    .get("https://virtualtxai.com/api/fluency-levels") // Replace with actual endpoint
    .then((response) => {
        console.log("fluency-levels:", response.data.data);
        setFluency(response.data.data); // Assuming response.data.data is an array
      })
      .catch((error) => {
        console.error("Error fetching Fluency data:", error);
      });
  }, []);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  // Fetch data from API
  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await axios.get(
          "https://virtualtxai.com/api/articulation-data"
        ); // Replace with actual endpoint
        setPositions(response.data.positions); // Assuming response.data.positions is an array
        setSubcatagory(response.data.subcategories);
        console.log("Positions:", response.data.positions);
        console.log("Subcategories:", response.data.subcategories);
      } catch (error) {
        console.error("Error fetching articulation positions:", error);
      }
    };

    fetchPositions();
  }, []);
  // Define unique background colors for each subcategory
  const subcategoryColors = {
    Word: "#ff6347", // Red
    Phrase: "#32cd32", // Green
    Sentence: "#6495ed", // Cornflower Blue
    Initial: "#ffb6c1", // Light Pink
    Middle: "#ffa500", // Orange
    Final: "#8a2be2", // Blue Violet
  };

  const closeNewModal = () => {
    setIsNewModalOpen(false); // Close the new modal
  };

  // Toggle Subcategory Modal
  const toggleSubcategoryModal = () => {
    setIsSubcategoryModalOpen((prevState) => !prevState);
  };

  // Toggle Articulation Modal
  const toggleArticulationModal = () => {
    setIsMainModalOpen(false); // Close main modal
    setIsLanguageModalOpen(false); // Close Language modal
    setIsArticulationModalOpen(!isArticulationModalOpen); // Toggle Articulation modal
  };

  // Handle Reset button click
  const handleReset = () => {
    setSelectedArticulations([]); // Clear all selected values
    setSelected(null); // Reset the selected value
  };

  // Close all modals
  const closeModal = () => {
    setIsMainModalOpen(false);
    setIsArticulationModalOpen(false);
    setIsLanguageModalOpen(false);
    setIsFluencyModalOpen(false);
  };

  const handleOverlayButtonClick = () => {
    if (isProceedClicked) {
      setIsNewModalOpen(true);
      // Handle the different modal logic here
    } else {
      setIsMainModalOpen(true); // Open the main modal
    }
  };
  const buttonImages = {
    Articulation: articulation_img,
    Language: language_img,
    Fluency: fluenc_img,
  };
  const handleLevelClicks = (levelId) => {
    setSelectedIds((prev) =>
      prev.includes(levelId)
        ? prev.filter((id) => id !== levelId)
        : [...prev, levelId]
    );
  };
  return (
    <div className="video-container">
      <iframe
        src="https://vtxgames.com/public/backend/assets/game_unzip_file/1811708053661215/vtx/"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <button className="overlay-button" onClick={handleOverlayButtonClick}>
        <img
          src={activity_button}
          alt="Articulation"
          className="img-fluid w-25"
        />
      </button>

      {isMainModalOpen && (
        <div className="modal-container" onClick={closeModal}>
          <div className="modal-content " onClick={(e) => e.stopPropagation()}>
            <div className="d-flex justify-content-center flex-column gap-4 ">
              <div className="d-flex justify-content-center gap-4 position-relative">
                {["Articulation", "Language", "Fluency"].map((buttonLabel) => (
                  <button
                    key={buttonLabel}
                    className={`articulation_button px-4 py-5 fw-bold fs-2 d-flex justify-content-center align-items-center ${
                      selectedButtons.includes(buttonLabel)
                        ? "selected-bg"
                        : "default-bg"
                    }`}
                    onClick={() => handleButtonClick(buttonLabel)}
                  >
                    <img
                      src={buttonImages[buttonLabel]} // Dynamically set image based on the label
                      alt={buttonLabel}
                      className="img-fluid w-25 me-2" // Added spacing with 'me-2'
                    />
                    {buttonLabel}
                  </button>
                ))}
              </div>
              <div className="d-flex justify-content-between">
                <button
                  className="close-button px-3 py-2  mb-3 "
                  onClick={closeModal}
                >
                  Previous
                </button>
                <button
                  className="px-3 py-2  mb-3 close-button"
                  onClick={handleNextClick}
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Articulation Modal */}
      {isArticulationModalOpen && (
        <div
          className="modal-container"
          onClick={closeModal}
          style={{
            overflowY: "auto", // Enable vertical scrolling if content exceeds screen
            maxHeight: "100vh", // Limit height to the viewport
            padding: "20px", // Add padding to avoid content touching edges
            boxSizing: "border-box",
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "transparent",
              top: "1rem",
              margin: "0 auto",
              width: "100%",
              maxWidth: "1390px", // Center the modal with a maximum width
            }}
          >
            <div className="d-flex justify-content-between align-items-center mt-5">
              {/* Articulation Button (Active) */}
              <div>
                <button
                  style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    color: "#fff",
                    background: "#4CBB16",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  className="px-3 py-2 rounded me-3"
                >
                  Articulation
                </button>
                {/* Language Button (Active) */}
                <button
                  onClick={() => setIsLanguageModalOpen(true)}
                  style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    color: "#fff",
                    color: "grey",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  className="px-3 py-2 rounded me-3"
                >
                  Language
                </button>
                {/* Fluency Button (Disabled if Articulation and Language are selected) */}
                <button
                  onClick={() => setIsFluencyModalOpen(true)}
                  style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    color: "#fff",
                    color: "grey",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  className="px-3 py-2 rounded me-3"
                >
                  Fluency
                </button>
              </div>

              {/* Reset Button */}
              <button
                style={{
                  marginTop: "20px",
                  padding: "10px 20px",
                  background: "#4CBB16",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={handleReset} // Reset functionality
              >
                Reset
              </button>
            </div>

            <div
              className="row mt-4"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {articulations.map((articulation) => (
                <div
                  key={articulation.id}
                  onClick={() => handleSelect(articulation)}
                  className="col-md-1 d-flex justify-content-center align-items-center"
                  style={{
                    margin: "10px",
                    height: "6rem",
                    background: selectedArticulations.includes(
                      articulation.sound_name
                    )
                      ? "#4CBB17"
                      : "#f8f9fa", // Highlight selected
                    borderRadius: "10px",
                    padding: "20px",
                    textAlign: "center",
                    cursor: "pointer",
                    minWidth: "100px",
                    maxWidth: "150px",
                  }}
                >
                  <h5
                    style={{
                      color: selectedArticulations.includes(
                        articulation.sound_name
                      )
                        ? "#fff"
                        : "grey", // Adjust text color
                      fontSize: "1.2rem",
                      fontWeight: "700",
                    }}
                  >
                    {articulation.sound_name}
                  </h5>
                </div>
              ))}
            </div>

            <div className="d-flex justify-content-between gap-5 align-items-center">
              <button
                style={{
                  marginTop: "20px",
                  padding: "10px 20px",
                  background: "#4CBB16",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={() => {
                  closeModal();
                  setIsMainModalOpen(true);
                }} // Reset functionality
              >
                Prev
              </button>

              {/* Proceed Button */}
              {selectedItems.length > 0 && (
                <button
                  style={{
                    marginTop: "20px",
                    padding: "10px 20px",
                    background: "#4CBB17",
                    color: "#fff",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={handleProceed}
                >
                  Proceed
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {isModalOpen && (
        <div
          className="modal"
          style={{
            display: "block",
            position: "fixed",
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.5)",
            overflow: "hidden", // Hides scrollbars within the modal
          }}
          onClick={handleCloseModal}
        >
          <div
            className="modal-content"
            style={{
              position: "relative",
              margin: "10% auto",
              padding: "20px",
              top: "-114px",
              backgroundColor: "transparent",
              borderRadius: "10px",
              maxWidth: "50rem",
              overflow: "hidden", // Ensures no scrolling inside the modal
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <h3>{selectedArticulation?.sound_name}</h3>
            <p>
              {selectedArticulation?.description || "No description available."}
            </p>

            <div>
              <h2 className="text-light">Select a sub category and position</h2>
              <div className="words_section">
                {/* Categories */}
                <div className="row d-flex justify-content-center gap-3 my-5">
                  {positions.map((item, index) => (
                    <div
                      key={index}
                      className="col-md-2 py-5 px-5 rounded d-flex justify-content-center align-items-center"
                      style={{
                        background: selectedItems.includes(item.question)
                          ? "#4CBB17"
                          : "#f8f9fa",
                        color: selectedItems.includes(item.question)
                          ? "#fff"
                          : "#000",
                        cursor: "pointer",
                        border: "1px solid #ddd",
                      }}
                      onClick={() => handleClick(item.question)}
                    >
                      <h5 className="m-0 p-0">{item.question}</h5>
                    </div>
                  ))}
                </div>

                <hr className="bg-light p-1" />

                {/* Words Section */}
                <div className="row d-flex justify-content-center gap-3 my-5">
                  {subcatagory.map((subcatagory, index) => (
                    <div
                      key={index + positions.length} // Unique key using index & question
                      className="col-md-2 py-5 px-5 rounded d-flex justify-content-center align-items-center"
                      style={{
                        background: selectedItems.includes(subcatagory.question)
                          ? "#4CBB17"
                          : "#f8f9fa",
                        color: selectedItems.includes(subcatagory.question)
                          ? "#fff"
                          : "#000",
                        cursor: "pointer",
                        border: "1px solid #ddd",
                      }}
                      onClick={() => handleClick(subcatagory.question)}
                    >
                      <h5 className="m-0 p-0">{subcatagory.question}</h5>
                    </div>
                  ))}
                </div>
                <div>
                  <button
                    onClick={handleDone}
                    style={{
                      marginTop: "20px",
                      padding: "10px 20px",
                      background: "#4CBB17",
                      color: "#fff",
                      border: "none",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Language Modal */}
      {isLanguageModalOpen && (
        <div className="modal-container " onClick={closeModal}>
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{ background: "transparent", top: "-4rem" }}
          >
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <div className="d-flex justify-content-between gap-2 mb-5">
              <div
                style={{
                  display: "flex",
                  gap: "14px",
                }}
              >
                {/* Disabled Articulation Button */}
                <button
                  onClick={() => {
                    closeModal();
                    setIsArticulationModalOpen(true);
                  }}
                  style={{
                    marginTop: "0px",
                    padding: "10px 20px",
                    color: "grey",
                    background: "#ddd",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "not-allowed",
                  }}
                >
                  Articulation
                </button>

                {/* Active Language Button */}
                <button
                  style={{
                    marginTop: "0px",
                    padding: "10px 20px",
                    color: "#fff",
                    background: "#4CBB16",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Language
                </button>

                {/* Active Fluency Button */}
                <button
                  style={{
                    marginTop: "0px",
                    padding: "10px 20px",
                    color: "#000",
                    background: "#fff",
                    border: "1px solid #ccc",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    closeModal();
                    setIsFluencyModalOpen(true);
                  }}
                >
                  Fluency
                </button>
              </div>

              <button
                onClick={handleResetAllLanguage}
                style={{
                  marginTop: "0px",
                  padding: "10px 20px",
                  color: "#000",
                  background: "#fff",
                  border: "1px solid #ccc",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Reset All
              </button>
            </div>
            {/* now working */}
            {/* Modal Content */}
            <div className="d-flex justify-content-center gap-4">
              {/* One-time Popup */}
              {showPopup && (
                <div className=" popup slide-down">
                  <p>Welcome! Choose language goals.</p>
                </div>
              )}{" "}
            </div>

            <div className="">
              {/* Button Section */}
              <div className="container d-flex flex-wrap justify-content-center gap-2">
                {Language.map((item, index) => (
                  <div key={item.id} className=" position-relative">
                    <button
                      className={` px-3 py-5 rounded fw-bold  ${
                        activeSection === item.id ||
                        completedSections.includes(item.id)
                          ? "language_btn_bg text-white"
                          : "btn-light"
                      }`}
                      style={{
                        fontSize: "1.1rem",
                        fontWeight: "bold",
                        border: "none",
                        width: "13rem",
                        height: "11rem",
                        color:
                          activeSection === item.id ||
                          completedSections.includes(item.id)
                            ? "white"
                            : "grey",
                      }}
                      onClick={() => handleButtonClickLanguage(item.id)} // Pass the ID when clicked
                    >
                      {item.category_name} {/* Display the category name */}
                    </button>

                    {/* Chat-Style Alert */}
                    {alertStates[item.id] && (
                      <div
                        className="chat-alert"
                        style={{
                          position: "absolute",
                          top: "-8rem", // Positioned above the button
                          left: "50%",
                          transform: "translateX(-50%)",
                          background: "#F5CB4D",
                          width: "150px", // Small width for bubble
                          color: "#fff",
                          padding: "10px 15px",
                          borderRadius: "15px", // Rounded edges for bubble effect
                          fontSize: "0.9rem",
                          fontWeight: "bold",
                          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                          textAlign: "center", // Center the text inside
                          wordWrap: "break-word", // Ensure long words break properly
                          whiteSpace: "normal", // Allow text wrapping
                        }}
                      >
                        You have not selected any of the checkboxes.
                        {/* Chat Bubble Tail */}
                        <div
                          style={{
                            position: "absolute",
                            bottom: "-10px", // Positioned below the bubble
                            left: "50%",
                            transform: "translateX(-50%)",
                            width: "0",
                            height: "0",
                            borderLeft: "10px solid transparent",
                            borderRight: "10px solid transparent",
                            borderTop: "10px solid #F5CB4D", // Same color as bubble
                          }}
                        ></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Below Button Area */}
              {isSubLanguageModalOpen && (
                <div
                  style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgb(0 0 0 / 71%)", // Semi-transparent background
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    zIndex: 1000, // Ensure it's on top of other elements
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "transparent",
                      padding: "20px",
                      borderRadius: "10px",
                      width: "100%",
                      maxWidth: "1200px",
                    }}
                  >
                    {/* Below Button Area */}
                    {activeSection !== null && (
                      <div
                        style={{
                          height: "auto",
                          flexWrap: "wrap",
                        }}
                        className="below_button_area p-3 rounded mt-3 d-flex flex-wrap justify-content-center gap-3"
                      >
                        {/* Audio element for the hover sound */}
                        <audio
                          id="hover-sound"
                          src={hoverSound}
                          preload="auto"
                        ></audio>

                        {(subcategories || []).map((subcategory, idx) => (
                          <div
                            key={subcategory.id}
                            className="d-flex justify-content-center align-items-center gap-2 py-4"
                            style={{
                              backgroundColor: "#fff",
                              borderRadius: "5px",
                              padding: "10px",
                              color: "#000",
                              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                              transition:
                                "transform 0.2s ease, box-shadow 0.2s ease", // Smooth transition for hover effect
                              cursor: "pointer", // Indicates interactivity
                            }}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.transform =
                                "translateY(-4px)"; // Lift the tab on hover
                              e.currentTarget.style.boxShadow =
                                "0 6px 12px rgba(0, 0, 0, 0.2)"; // Enhance shadow on hover
                              const hoverSound = document.getElementById(
                                "hover-sound"
                              );
                              hoverSound.currentTime = 0; // Reset sound to start
                              hoverSound.play(); // Play the sound
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.transform = "translateY(0)"; // Reset position
                              e.currentTarget.style.boxShadow =
                                "0 2px 4px rgba(0, 0, 0, 0.1)"; // Reset shadow
                            }}
                          >
                            <input
                              className="form-check-input m-0 p-0"
                              type="checkbox"
                              value={subcategory.id}
                              checked={(
                                selectedCheckboxes[activeSection] || []
                              ).includes(subcategory.id)}
                              onChange={() =>
                                handleCheckboxChange(
                                  activeSection,
                                  subcategory.id
                                )
                              }
                              id={`checkbox-${activeSection}-${idx}`}
                            />
                            <p className="m-0">{subcategory.category_name}</p>
                          </div>
                        ))}

                        <button
                          className="language_done_btn"
                          style={{
                            padding: "10px 20px",
                            color: "#fff",
                            background: "rgb(76, 187, 22)",
                            border: "none",
                            borderRadius: "5px",
                            cursor: "pointer",
                            transition:
                              "transform 0.2s ease, box-shadow 0.2s ease", // Smooth transition for hover effect
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.transform =
                              "translateY(-2px)"; // Lift the button on hover
                            e.currentTarget.style.boxShadow =
                              "0 4px 8px rgba(0, 0, 0, 0.2)"; // Add shadow on hover
                            const hoverSound = document.getElementById(
                              "hover-sound"
                            );
                            hoverSound.currentTime = 0; // Reset sound to start
                            hoverSound.play(); // Play the sound
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "translateY(0)"; // Reset position
                            e.currentTarget.style.boxShadow = "none"; // Remove shadow
                          }}
                          onClick={handleDoneLanguage}
                        >
                          Done
                        </button>
                      </div>
                    )}

                    {/* Close button for the modal */}
                  </div>
                </div>
              )}

              {/* Proceed button section */}
              {/* Proceed Button */}
              <button
                style={{
                  marginTop: "20px",
                  padding: "10px 20px",
                  background: "#4CBB17",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
                onClick={handleProceed}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Fluency Modal */}
      {isFluencyModalOpen && (
        <div
          className="modal-container"
          onClick={closeModal}
          style={{
            overflowY: "auto", // Enable vertical scrolling if content exceeds screen
            maxHeight: "100vh", // Limit height to the viewport
            padding: "20px", // Add padding to avoid content touching edges
            boxSizing: "border-box",
          }}
        >
          <div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            style={{
              background: "transparent",
              top: "1rem",

              margin: "0 auto",
              width: "100%",
              maxWidth: "850px", // Center the modal with a maximum width
              borderRadius: "10px",
              padding: "20px",
            }}
          >
            <span className="close-button" onClick={closeModal}>
              &times;
            </span>
            <div className="d-flex justify-content-between gap-2">
              <div
                style={{
                  display: "flex",
                  gap: "14px",
                }}
              >
                <button
                  onClick={() => {
                    closeModal();
                    setIsArticulationModalOpen(true);
                  }}
                  style={{
                    marginTop: "0px",
                    padding: "10px 20px",
                    color: "#fff",
                    color: "grey",

                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Articulation
                </button>

                <button
                  onClick={() => {
                    closeModal();
                    setIsLanguageModalOpen(true);
                  }}
                  style={{
                    marginTop: "0px",
                    padding: "10px 20px",
                    color: "#fff",
                    color: "grey",

                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Language
                </button>
                <button
                  style={{
                    marginTop: "0px",
                    padding: "10px 20px",
                    color: "#fff",
                    background: "#4CBB16",

                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                >
                  Fluency{" "}
                </button>
              </div>

              <div></div>

              <button
                onClick={handleResetFluency}
                style={{
                  marginTop: "0px",
                  padding: "10px 20px",
                  color: "#fff",
                  background: "#4CBB16",

                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Reset
              </button>
            </div>

            <div className="d-flex gap-2 justify-content-center my-4">
              {fluency.map((level) => (
                <button
                  key={level.id}
                  className="px-5 py-4"
                  style={{
                    color: selectedIds.includes(level.id) ? "#fff" : "grey",
                    background: selectedIds.includes(level.id)
                      ? "#4CBB17"
                      : "#fff",
                    border: "none",
                    fontWeight: "600",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={() => handleLevelClicks(level.id)}
                >
                  {level.name}
                </button>
              ))}
            </div>

            <div>
              <button
                style={{
                  marginTop: "0px",
                  padding: "10px 20px",
                  color: "#fff",
                  background: "#4CBB16",

                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Done
              </button>
              <button
                style={{
                  marginTop: "20px",
                  padding: "10px 20px",
                  background: "#4CBB17",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                  display: "ruby-text",
                  border: "none",
                  float: "inline-end",
                }}
                onClick={handleProceed}
              >
                Proceed
              </button>
            </div>
          </div>
        </div>
      )}

      {/* New Modal */}
      {isNewModalOpen && (
        <div className="modal-container">
          <div
            className="modal-content w-100"
            onClick={(e) => e.stopPropagation()}
            style={{ background: "transparent" }}
          >
            <div className="slider_area d-flex p-1 justify-content-center align-items-center vh-100">
              {/* Left Section */}
              <div
                className={`drop_down_section w-25 articulation_dropdowns ${
                  activeSections === "articulation" ? "" : "d-none"
                }`}
              >
                {/* Sound Dropdown */}

                {/* 🔹 1st Dropdown: Select Sound */}
                <select
                  className="w-100 sound_name"
                  onChange={(e) => setSelectedSound(e.target.value)}
                  value={selectedSound}
                >
                  <option value="">Select Sound</option>
                  {Object.keys(storedSelections).map((sound) => (
                    <option key={sound} value={sound}>
                      {sound}
                    </option>
                  ))}
                </select>

                {/* 🔹 2nd Dropdown: Show 1st Array (Initial, Middle, Final) */}
                {selectedSound && (
                  <select
                    className="w-100 my-4 sound_position"
                    onChange={(e) => setSelectedPosition(e.target.value)}
                    value={selectedPosition}
                  >
                    <option value="">Select Position</option>
                    {storedSelections[selectedSound][0].map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                )}

                {/* 🔹 3rd Dropdown: Show 2nd Array (Sentences, Phrases, Words) */}
                {selectedSound && selectedPosition && (
                  <select
                    className="w-100 my-4 sound_position"
                    onChange={(e) => setSelectedSentence(e.target.value)}
                    value={selectedSentence}
                  >
                    <option value="">Select Type</option>
                    {storedSelections[selectedSound][1].map((item, index) => (
                      <option key={index} value={item}>
                        {item}
                      </option>
                    ))}
                  </select>
                )}

                <div
                  className="annotator d-none flex-column gap-2 justify-content-center align-items-center text-light mt-4"
                  style={{ fontSize: "1.6rem" }}
                >
                  <img
                    src={annotator_img}
                    alt="annotator_img"
                    className="img-fluid w-25"
                  />
                  Annotator
                </div>
                <div onClick={closeNewModal} className="back_to_main_menu mt-5">
                  <button
                    className="px-4 py-2  w-100 mt-5"
                    style={{
                      borderRadius: "9px",
                      background: "#F0F0F0",
                      fontWeight: "500",
                    }}
                  >
                    {" "}
                    Back to main menu
                  </button>
                </div>
              </div>
              <div
                className={`drop_down_section w-25 language_dropdowns ${
                  activeSections === "language" ? "" : "d-none"
                }`}
              >
                <div>
                  {/* 🔹 1st Dropdown: Select Language Type */}
                  <select
                    className="w-100 my-4 sound_position"
                    onChange={(e) => setSelectedLanguageType(e.target.value)}
                    value={selectedLanguageType}
                  >
                    <option value="">Select Language Type</option>
                    {Filtercat.map((lang) => (
                      <option key={lang.id} value={lang.id}>
                        {lang.category_name}
                      </option>
                    ))}
                  </select>

                  {/* 🔹 2nd Dropdown: Filtered Subcategories */}
                  {selectedLanguageType && (
                    <select
                      className="w-100 my-4 sound_position"
                      onChange={(e) => setSelectedSubCategory(e.target.value)}
                      value={selectedSubCategory}
                    >
                      <option value="">Select Subcategory</option>
                      {filteredSubCategories.map((sub) => (
                        <option key={sub.id} value={sub.id}>
                          {sub.category_name}
                        </option>
                      ))}
                    </select>
                  )}

                  {/* 🔹 3rd Dropdown: Filtered Question Types */}
                  {selectedLanguageType && selectedSubCategory && (
                    <select
                      className="w-100 my-4 sound_position"
                      onChange={(e) => setSelectedQuestionType(e.target.value)}
                      value={selectedQuestionType}
                    >
                      <option value="">Select Question Type</option>
                      {filteredQuestions.map((question, index) => (
                        <option key={index} value={question.question_type_id}>
                          {question.question_type_name}
                        </option>
                      ))}
                    </select>
                  )}
                </div>

                <div
                  className="annotator d-none flex-column gap-2 justify-content-center align-items-center text-light mt-4"
                  style={{ fontSize: "1.6rem" }}
                >
                  <img
                    src={annotator_img}
                    alt="annotator_img"
                    className="img-fluid w-25"
                  />
                  Annotator
                </div>
                <div onClick={closeNewModal} className="back_to_main_menu mt-5">
                  <button
                    className="px-4 py-2  w-100 mt-5"
                    style={{
                      borderRadius: "9px",
                      background: "#F0F0F0",
                      fontWeight: "500",
                    }}
                  >
                    {" "}
                    Back to main menu
                  </button>
                </div>
              </div>
              <div
                className={`drop_down_section w-25 fluency_dropdowns ${
                  activeSections === "fluency" ? "" : "d-none"
                }`}
              >
                <select
                  name="fluency"
                  id="fluency"
                  className="w-100 my-4 sound_position"
                  onChange={handleFluencyChange}
                  value={selectedFluencyId} // ✅ Bind value to selectedFluencyId
                >
                  <option value="">Select Fluency</option>
                  {FluencyData.map((fluency) => (
                    <option key={fluency.fluency_id} value={fluency.fluency_id}>
                      {fluency.fluency_name}
                    </option>
                  ))}
                </select>

                <div onClick={closeNewModal} className="back_to_main_menu mt-5">
                  <button
                    className="px-4 py-2  w-100 mt-5"
                    style={{
                      borderRadius: "9px",
                      background: "#F0F0F0",
                      fontWeight: "500",
                    }}
                  >
                    {" "}
                    Back to main menu
                  </button>
                </div>
              </div>
              {/* Middle Section with Slider */}
              <div
                className={`slider_section_for_articulation d-flex flex-column align-items-center w-75 mx-3 p-4 ${
                  activeSections === "articulation" ? "" : "d-none"
                }`}
                style={{ borderRadius: "10px", background: "transparent" }}
              >
                <div
                  style={{
                    border: "5px solid #1C2244",
                    borderRadius: "30px",
                    width: "44rem",
                    height:"44rem"
                  }}
                  id="articulationSlider"
                  className="carousel bg-light p-4"
                  data-bs-ride="false"
                  data-bs-interval="false"
                  data-bs-pause="true"
                >
                  {/* Carousel Inner */}
                  <div className="carousel-inner">
                    {Object.keys(ArfilteredData).length > 0 ? (
                      Object.keys(ArfilteredData).map((key, index) => {
                        return ArfilteredData[key].map((item, itemIndex) => {
                          return (item?.images || []).map(
                            (child, childIndex) => {
                              return (
                                <div
                                  className={`carousel-item ${
                                    index === 0 &&
                                    itemIndex === 0 &&
                                    childIndex === 0
                                      ? "active"
                                      : ""
                                  }`}
                                  key={child.id}
                                >
                                  <img
                                    src={child.image}
                                    className="d-block w-100 img-fluid"
                                    alt={`Slide ${childIndex + 1}`}
                                    style={{
                                      height: "600px",
                                      objectFit: "contain",
                                    }}
                                  />

                                  {item.words && (
                                    <div className="carousel-caption d-none d-md-block">
                                      <h3
                                        className="mx-4 text-center"
                                        style={{
                                          minWidth: "200px",
                                          color: "black",
                                          fontWeight: "bold",
                                        }}
                                      >
                                        {item.words}
                                      </h3>
                                    </div>
                                  )}
                                </div>
                              );
                            }
                          );
                        });
                      })
                    ) : (
                      <div className="carousel-item active">
                        <img
                          src="default-image-url"
                          className="d-block w-100 img-fluid"
                          alt="Default Slide"
                          style={{ height: "600px", objectFit: "contain" }}
                        />
                      </div>
                    )}
                  </div>

                  {/* Slider Controls - Placed Below */}
                  <div style={{marginTop:"39rem"}} className="d-flex align-items-center justify-content-center ">
                    {/* Prev Button */}
                    <button
                      className="btn btn-light mx-2 position-absolute"
                      type="button"
                      data-bs-target="#articulationSlider"
                      data-bs-slide="prev"
                      style={{
                        right: "44rem",
                        border: "none",
                        background: "transparent",
                      }}
                    >
                      <img
                        src={back_to_card}
                        alt="Previous"
                        style={{ width: "3rem" }}
                      />
                    </button>

                    {/* Next Button */}
                    <button
                      className="btn btn-light mx-2 position-absolute"
                      type="button"
                      data-bs-target="#articulationSlider"
                      data-bs-slide="next"
                      style={{
                        left: "44rem",
                        border: "none",
                        background: "transparent",
                      }}
                    >
                      <img
                        src={next_arrow}
                        alt="Next"
                        style={{ width: "3rem" }}
                      />
                    </button>
                  </div>
                </div>
              </div>
              {activeSections === "language" && selectedQuestionType == 5 ? (
                // Show this section when selectedQuestionType is 5 feel in the blanks
                <div
                  className="slider_section_for_language d-flex flex-column align-items-center w-75 mx-3 p-4"
                  style={{ borderRadius: "10px", background: "transparent" }}
                >
                  <div
                    style={{
                      border: "5px solid #1C2244",
                      borderRadius: "30px",
                      width: "44rem",
                      height: "43rem",
                    }}
                    id="languageSlider5"
                    className="carousel bg-light p-4 ms-5"
                    data-bs-ride="false"
                    data-bs-interval="false"
                    data-bs-pause="true"
                  >
                    <div className="carousel-inner">
                      {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                          <div
                            key={item.id}
                            className={`carousel-item ${
                              index === 0 ? "active" : ""
                            }`}
                          >
                            <div className="d-flex justify-content-center">
                              <img
                                src={item.image_url}
                                className="d-block  img-fluid"
                                alt={`Slide ${index + 1}`}
                                style={{ height: "32rem", width: "32rem" }}
                              />
                            </div>
                            <div
                              style={{ bottom: "3rem" }}
                              className="carousel-caption d-block "
                            >
                              <h4 className="text-dark fw-bold ">
                                {item.questions}
                              </h4>
                            </div>
                            <div className="show_ans_feelintheblank">
                              {isPopupVisible && (
                                <div
                                  className="chat-popup "
                                  style={{
                                    width: "19rem",
                                    color: "#fff",
                                    position: "absolute",
                                    left: "50%", // Center horizontally
                                    transform:
                                      "translateX(-0%) translateY(58%)", // Adjust position to center and move above
                                    background: "#6AB04C", // Background color for the chat bubble
                                    color: "white", // Text color
                                    padding: "10px 15px",
                                    borderRadius: "15px 0px 15px 0px", // Semi-round shape with a flat bottom
                                    border: "5px solid #fff", // Border color
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                    zIndex: 1000,

                                    opacity: 1,
                                    marginBottom: "10px", // Space between popup and content
                                  }}
                                >
                                  <h6 className="text-light">{popupContent}</h6>
                                  <div
                                    className="chat-arrow d-none"
                                    style={{
                                      position: "absolute",
                                      top: "100%", // Position the arrow below the popup
                                      left: "6%", // Center the arrow
                                      transform: "translateX(-50%)", // Center the arrow
                                      width: "0",
                                      height: "0",
                                      borderLeft: "10px solid transparent",
                                      borderRight: "10px solid transparent",
                                      borderTop: "10px solid #6AB04C", // Same color as the popup background
                                    }}
                                  />
                                </div>
                              )}
                              <button
                                onClick={() =>
                                  handleDisplayAnswer(item.answers)
                                }
                                className="px-3 py-2"
                                style={{
                                  background: "#6AB04C",
                                  borderRadius: "10px",
                                  color: "#fff",
                                  border: "none",
                                  marginTop: "6rem",
                                }}
                              >
                                Show Answer
                              </button>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="carousel-item active">
                          <img
                            src="default-image-url"
                            className="d-block w-100 img-fluid"
                            alt="Default Slide"
                            style={{ height: "560px", objectFit: "cover" }}
                          />
                          <div className="carousel-caption d-block">
                            <h3 className="text-black fw-bold">
                              No Data Available
                            </h3>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : activeSections == "language" && selectedQuestionType == 4 ? (
                // Show this section when yes or no is 1
                <div
                  className="slider_section_for_language d-flex flex-column align-items-center w-75 mx-3 p-4"
                  style={{ borderRadius: "10px", background: "transparent" }}
                >
                  <div
                    style={{
                      border: "5px solid #1C2244",
                      borderRadius: "30px",
                      width: "44rem",
                      height: "43rem",
                    }}
                    id="languageSlider5"
                    className="carousel bg-light p-4 ms-5"
                    data-bs-ride="false"
                    data-bs-interval="false"
                    data-bs-pause="true"
                  >
                    <div className="carousel-inner">
                      {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                          <div
                            key={item.id}
                            className={`carousel-item ${
                              index === 0 ? "active" : ""
                            }`}
                          >
                            <img
                              src={item.image_url}
                              className="d-block w-100 img-fluid"
                              alt={`Slide ${index + 1}`}
                              style={{ height: "32rem", width: "32rem" }}
                            />
                            <div className="carousel-caption d-block">
                              <h3 className="text-dark fw-bold">
                                {item.questions}
                              </h3>
                            </div>

                            <div className="yes_or_no_ans position-absolute w-100 mt-4 pt-5 d-flex justify-content-center align-items-center gap-4">
                              <div className="d-flex gap-3">
                                <div
                                  style={{
                                    backgroundColor:
                                      highlightedAnswer === '["Yes"]'
                                        ? "lightgreen"
                                        : "transparent",
                                    padding: "10px",
                                    borderRadius: "5px",
                                    color:
                                      highlightedAnswer === '["Yes"]'
                                        ? "#fff"
                                        : "#000",
                                  }}
                                >
                                  Yes
                                </div>
                                <div
                                  style={{
                                    backgroundColor:
                                      highlightedAnswer === '["No"]'
                                        ? "lightcoral"
                                        : "transparent",
                                    padding: "10px",
                                    borderRadius: "5px",
                                    color:
                                      highlightedAnswer === '["No"]'
                                        ? "#fff"
                                        : "#000",
                                  }}
                                >
                                  No
                                </div>
                              </div>
                              <button
                                className="px-3 py-2"
                                style={{
                                  background: "#6AB04C",
                                  borderRadius: "10px",
                                  color: "#fff",
                                  border: "none",
                                }}
                                onClick={() => ShowAnsYesno(item.answers)}
                              >
                                Show Answer
                              </button>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="carousel-item active">
                          <img
                            src="default-image-url"
                            className="d-block w-100 img-fluid"
                            alt="Default Slide"
                            style={{ height: "560px", objectFit: "cover" }}
                          />
                          <div className="carousel-caption d-block">
                            <h3 className="text-black fw-bold">
                              No Data Available
                            </h3>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : activeSections === "language" && selectedQuestionType == 2 ? (
                // Show this section when selectedQuestionType is multiple choice questions
                <div
                  className="slider_section_for_language d-flex flex-column align-items-center w-75 mx-3 p-4"
                  style={{ borderRadius: "10px", background: "transparent" }}
                >
                  <div
                    style={{
                      border: "5px solid #1C2244",
                      borderRadius: "30px",
                      width: "44rem",
                      height: "44rem",
                    }}
                    id="languageSlider2"
                    className="carousel bg-light p-4 ms-5"
                    data-bs-ride="false"
                    data-bs-interval="false"
                    data-bs-pause="true"
                  >
                    <div className="carousel-inner">
                      {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                          <div
                            key={item.id}
                            className={`carousel-item ${
                              index === 0 ? "active" : ""
                            }`}
                          >
                            <div className="d-flex flex-column gap-2">
                              <div className=" d-flex  justify-content-center ">
                                <img
                                  src={item.image_url}
                                  className="d-block  img-fluid"
                                  alt={`Slide ${index + 1}`}
                                  style={{
                                    height: "28rem",
                                    width: "28rem",
                                  }}
                                />
                              </div>

                              <h4
                                style={{ marginTop: "1rem" }}
                                className="text-black fw-bold text-dark w-100  pe-5 "
                              >
                                {item.questions}
                              </h4>
                              <div
                                style={{ marginTop: "0rem" }}
                                className="options_section ms-0 d-flex flex-column justify-content-center gap-1  align-items-center "
                              >
                                {item.answers &&
                                  typeof item.answers === "string" &&
                                  (() => {
                                    let answersArray;
                                    try {
                                      answersArray = JSON.parse(item.answers); // Convert string to array
                                    } catch (error) {
                                      console.error(
                                        "Error parsing answers:",
                                        error
                                      );
                                      answersArray = []; // Fallback in case of an error
                                    }

                                    return answersArray.length > 0 ? (
                                      <>
                                        <div className="option-group">
                                          {answersArray
                                            .slice(0, 2)
                                            .map((answer, index) => (
                                              <h5
                                                key={index}
                                                className="text-dark"
                                                style={{
                                                  background: showCorrectAnswer.includes(
                                                    index
                                                  )
                                                    ? "#6AB04C" // Highlight correct answer
                                                    : "transparent",
                                                  color: showCorrectAnswer.includes(
                                                    index
                                                  )
                                                    ? "#fff"
                                                    : "#000",
                                                  padding: "5px",
                                                  borderRadius: "5px",
                                                  marginTop: "-1rem",
                                                }}
                                              >
                                                {String.fromCharCode(
                                                  97 + index
                                                )}
                                                . {answer}
                                              </h5>
                                            ))}
                                                                            {answersArray
                                            .slice(2, 4)
                                            .map((answer, index) => (
                                              <h5
                                                key={index + 2}
                                                className="text-dark me-4"
                                                style={{
                                                  background: showCorrectAnswer.includes(
                                                    index + 2
                                                  )
                                                    ? "#6AB04C"
                                                    : "transparent",
                                                  color: showCorrectAnswer.includes(
                                                    index + 2
                                                  )
                                                    ? "#fff"
                                                    : "#000",
                                                  padding: "5px",
                                                  borderRadius: "5px",
                                                  marginTop: "-1rem",
                                                }}
                                              >
                                                {String.fromCharCode(
                                                  99 + index
                                                )}
                                                . {answer}
                                              </h5>
                                            ))}
                                        </div>
                                        
                                      </>
                                    ) : null;
                                  })()}
                              </div>
                            </div>
                            <div className=" show_ans_multi d-flex justify-content-center mt-0">
                              <button
                                className="px-3 py-2"
                                style={{
                                  background: "#6AB04C",
                                  borderRadius: "10px",
                                  color: "#fff",
                                  border: "none",
                                  marginTop: "-1rem",
                                }}
                                onClick={() =>
                                  handleShowAnswer(item.correct_option)
                                }
                              >
                                Show Answer
                              </button>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="carousel-item active">
                          <img
                            src="default-image-url"
                            className="d-block w-100 img-fluid"
                            alt="Default Slide"
                            style={{ height: "600px", objectFit: "cover" }}
                          />
                          <div className="carousel-caption d-block">
                            <h3 className="text-black fw-bold">
                              No Data Available
                            </h3>
                          </div>
                        </div>
                      )}
                    </div>
                    <div
                      style={{ marginTop: "-1rem" }}
                      className="d-flex align-items-center justify-content-center "
                    >
                      {/* Prev Button */}
                      <button
                        className="btn btn-light mx-2 position-absolute"
                        type="button"
                        data-bs-target="#languageSlider2"
                        data-bs-slide="prev"
                        onClick={() => setShowCorrectAnswer([])} // Clears correct answers
                        style={{
                          right: "44rem",
                          border: "none",
                          background: "transparent",
                        }}
                      >
                        <img
                          src={back_to_card}
                          alt="Previous"
                          style={{ width: "3rem" }}
                        />
                      </button>

                      {/* Next Button */}
                      <button
                        className="btn btn-light mx-2 position-absolute"
                        type="button"
                        data-bs-target="#languageSlider2"
                        onClick={() => setShowCorrectAnswer([])} // Clears correct answers
                        data-bs-slide="next"
                        style={{
                          left: "44rem",
                          border: "none",
                          background: "transparent",
                        }}
                      >
                        <img
                          src={next_arrow}
                          alt="Next"
                          style={{ width: "3rem" }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ) : activeSections === "language" && selectedQuestionType == 3 ? (
                // Show this section when selectedQuestionType is multiple image with single  question
                <div
                  className="slider_section_for_language d-flex flex-column align-items-center w-75 mx-3 p-4"
                  style={{ borderRadius: "10px", background: "transparent" }}
                >
                  <div
                    style={{
                      border: "5px solid #1C2244",
                      borderRadius: "30px",
                      width: "44rem",
                      height: "44rem",
                    }}
                    id="languageSlider2"
                    className="carousel bg-light p-4 ms-5"
                    data-bs-ride="false"
                    data-bs-interval="false"
                    data-bs-pause="true"
                  >
                    <div className="carousel-inner">
                      {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                          <div
                            key={item.id}
                            className={`carousel-item ${
                              index === 0 ? "active" : ""
                            }`}
                          >
                            <div className="d-flex flex-column gap-2">
                              <div className="d-flex flex-wrap gap-0 justify-content-between">
                                {JSON.parse(item.image).map(
                                  (imgName, imgIndex) => (
                                    <img
                                      key={imgIndex}
                                      src={`https://virtualtxai.com/backend/assets/language_image/${imgName}`}
                                      className="d-block img-fluid"
                                      alt={`Slide ${index +
                                        1} - Image ${imgIndex + 1}`}
                                      style={{
                                        height: "16rem",
                                        width: "16rem",
                                      }}
                                    />
                                  )
                                )}
                              </div>
                            </div>
                            <div>
                              <h4
                                style={{ marginTop: "1rem" }}
                                className="text-black fw-bold text-dark w-100  pe-5 "
                              >
                                {item.questions}
                              </h4>
                         
                            </div>
                            <div className=" show_ans_multi  mt-4">

                            {isPopupVisible && (
                                <div
                                  className="chat-popup "
                                  style={{
                                    width: "19rem",
                                    color: "#fff",
                                    position: "absolute",
                                    left: "62%", // Center horizontally
                                    transform:
                                      "translateX(-0%) translateY(3%)", // Adjust position to center and move above
                                    background: "#6AB04C", // Background color for the chat bubble
                                    color: "white", // Text color
                                    padding: "10px 15px",
                                    borderRadius: "15px 0px 15px 0px", // Semi-round shape with a flat bottom
                                    border: "5px solid #fff", // Border color
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                    zIndex: 1000,

                                    opacity: 1,
                                    marginBottom: "10px", // Space between popup and content
                                  }}
                                >
                                  <h6 className="text-light">{popupContent}</h6>
                                  <div
                                    className="chat-arrow d-none"
                                    style={{
                                      position: "absolute",
                                      top: "100%", // Position the arrow below the popup
                                      left: "6%", // Center the arrow
                                      transform: "translateX(-50%)", // Center the arrow
                                      width: "0",
                                      height: "0",
                                      borderLeft: "10px solid transparent",
                                      borderRight: "10px solid transparent",
                                      borderTop: "10px solid #6AB04C", // Same color as the popup background
                                    }}
                                  />
                                </div>
                              )}
                              <button
                                className="px-3 py-2"
                                style={{
                                  background: "#6AB04C",
                                  borderRadius: "10px",
                                  color: "#fff",
                                  border: "none",
                                  marginTop: "2rem",
                                }}
                                onClick={() =>
                                  handleShowAnswerMcq(item.answers)
                                }
                              >
                                Show Answer
                              </button>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="carousel-item active">
                          <img
                            src="default-image-url"
                            className="d-block w-100 img-fluid"
                            alt="Default Slide"
                            style={{ height: "600px", objectFit: "cover" }}
                          />
                          <div className="carousel-caption d-block">
                            <h3 className="text-black fw-bold">
                              No Data Available
                            </h3>
                          </div>
                        </div>
                      )}
                    </div>
                    <div
                      style={{ marginTop: "-1rem" }}
                      className="d-flex align-items-center justify-content-center "
                    >
                      {/* Prev Button */}
                      <button
                        className="btn btn-light mx-2 position-absolute"
                        type="button"
                        data-bs-target="#languageSlider2"
                        data-bs-slide="prev"
                        onClick={() => setShowCorrectAnswer([])} // Clears correct answers
                        style={{
                          right: "44rem",
                          border: "none",
                          background: "transparent",
                        }}
                      >
                        <img
                          src={back_to_card}
                          alt="Previous"
                          style={{ width: "3rem" }}
                        />
                      </button>

                      {/* Next Button */}
                      <button
                        className="btn btn-light mx-2 position-absolute"
                        type="button"
                        data-bs-target="#languageSlider2"
                        onClick={() => setShowCorrectAnswer([])} // Clears correct answers
                        data-bs-slide="next"
                        style={{
                          left: "44rem",
                          border: "none",
                          background: "transparent",
                        }}
                      >
                        <img
                          src={next_arrow}
                          alt="Next"
                          style={{ width: "3rem" }}
                        />
                      </button>
                    </div>
                  </div>
                </div>
              ) : activeSections === "language" ? (
                // Default section when selectedQuestionType is NOT 5 or 2
                <div
                  className="slider_section_for_language d-flex flex-column align-items-center w-75 mx-3 p-4"
                  style={{ borderRadius: "10px", background: "transparent" }}
                >
                  <div
                    style={{
                      border: "5px solid #1C2244",
                      borderRadius: "30px",
                      width: "44rem",
                      height: "43rem",
                    }}
                    id="languageSliderDefault"
                    className="carousel bg-light p-4"
                    data-bs-ride="false"
                    data-bs-interval="false"
                    data-bs-pause="true"
                  >
                    <div className="carousel-inner">
                      {filteredData.length > 0 ? (
                        filteredData.map((item, index) => (
                          <div
                            key={item.id}
                            className={`carousel-item ${
                              index === 0 ? "active" : ""
                            }`}
                          >
                            <div
                              className="d-flex justify-content-center"
                              style={{ height: "30rem" }}
                            >
                              <img
                                src={item.image_url}
                                className="d-block  img-fluid"
                                alt={`Slide ${index + 1}`}
                                style={{ height: "32rem", width: "32rem" }}
                              />
                            </div>
                            <div
                              style={{ top: "31.75rem" }}
                              className="carousel-caption d-block"
                            >
                              {selectedSubCategory !== 8 && (
                                <h3 className="text-black fw-bold text-dark mt-3">
                                  {item.questions}
                                </h3>
                              )}
                            </div>

                            {/* show answer section */}
                            <div
                              style={{
                                position: "absolute",
                                bottom: "-10rem",
                                width: "100%",
                              }}
                              className="show_ans mt-4 d-flex gap-2 justify-content-center align-items-center"
                            >
                              {/* Chat Popup */}
                              {isPopupVisible && (
                                <div
                                  className="chat-popup "
                                  style={{
                                    width: "19rem",
                                    color: "#fff",
                                    position: "absolute",
                                    left: "50%", // Center horizontally
                                    transform:
                                      "translateX(-0%) translateY(-100%)", // Adjust position to center and move above
                                    background: "#6AB04C", // Background color for the chat bubble
                                    color: "white", // Text color
                                    padding: "10px 15px",
                                    borderRadius: "15px 0px 15px 0px", // Semi-round shape with a flat bottom
                                    border: "5px solid #fff", // Border color
                                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                                    zIndex: 1000,

                                    opacity: 1,
                                    marginBottom: "10px", // Space between popup and content
                                  }}
                                >
                                  <h6 className="text-light">{popupMessage}</h6>
                                  <div
                                    className="chat-arrow d-none"
                                    style={{
                                      position: "absolute",
                                      top: "100%", // Position the arrow below the popup
                                      left: "6%", // Center the arrow
                                      transform: "translateX(-50%)", // Center the arrow
                                      width: "0",
                                      height: "0",
                                      borderLeft: "10px solid transparent",
                                      borderRight: "10px solid transparent",
                                      borderTop: "10px solid #6AB04C", // Same color as the popup background
                                    }}
                                  />
                                </div>
                              )}

                              {isShowanswer && selectedSubCategory !== 8 && (
                                <button
                                  onClick={() => ShowAns(item.answers)} // Wrap in an arrow function
                                  className="px-3 py-2"
                                  style={{
                                    background: "#6AB04C",
                                    borderRadius: "10px",
                                    color: "#fff",
                                    border: "none",
                                  }}
                                >
                                  Show Answer
                                </button>
                              )}
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="carousel-item active">
                          <img
                            src="default-image-url"
                            className="d-block w-100 img-fluid"
                            alt="Default Slide"
                            style={{ height: "560px", objectFit: "cover" }}
                          />
                          <div className="carousel-caption d-block">
                            <h3 className="text-black fw-bold">
                              No Data Available
                            </h3>
                          </div>
                        </div>
                      )}
                    </div>
                    {filteredData.length > 1 && (
                      <div
                        style={{ marginTop: "9rem" }}
                        className="d-flex align-items-center justify-content-center "
                      >
                        {/* Prev Button */}
                        <button
                          onClick={handlePrevSinglequestion}
                          className="btn btn-light mx-2 position-absolute"
                          type="button"
                          data-bs-target={`#${
                            selectedQuestionType === 5
                              ? "languageSlider5"
                              : selectedQuestionType === 2
                              ? "languageSlider2"
                              : "languageSliderDefault"
                          }`}
                          data-bs-slide="prev"
                          style={{
                            right: "43.5rem",
                            border: "none",
                            background: "transparent",
                          }}
                        >
                          <img
                            src={back_to_card}
                            alt="Previous"
                            style={{ width: "3rem" }}
                          />
                        </button>

                        {/* Next Button */}
                        <button
                          onClick={handleNextSinglequestion}
                          className="btn btn-light mx-2 position-absolute"
                          type="button"
                          data-bs-target={`#${
                            selectedQuestionType === 5
                              ? "languageSlider5"
                              : selectedQuestionType === 2
                              ? "languageSlider2"
                              : "languageSliderDefault"
                          }`}
                          data-bs-slide="next"
                          style={{
                            left: "43.5rem",
                            border: "none",
                            background: "transparent",
                          }}
                        >
                          <img
                            src={next_arrow}
                            alt="Next"
                            style={{ width: "3rem" }}
                          />
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              ) : null}
              {/* Navigation Buttons */}
              <div
                className={`slider_section_for_articulation d-flex flex-column align-items-center w-75 mx-3 p-4 ${
                  activeSections === "fluency" ? "" : "d-none"
                }`}
                style={{ borderRadius: "10px", background: "transparent" }}
              >
                <div
                  style={{
                    border: "5px solid #1C2244",
                    borderRadius: "30px",
                    width: "44rem",
                    height: "43rem",
                  }}
                  className="carousel bg-light p-4 ms-5"
                >
                  {/* Carousel Inner */}
                  <div className="carousel-inner h-100">
                    {selectedSentences.length > 0 ? (
                      selectedSentences.map((sentence, index) => (
                        <div
                          key={sentence.id}
                          className={`carousel-item ${
                            index === activeIndex ? "active" : "d-none"
                          } h-100 text-dark d-flex align-items-center justify-content-center`}
                        >
                          <h2>{sentence.sentence}</h2>
                        </div>
                      ))
                    ) : (
                      <div className="carousel-item active h-100 text-dark d-flex align-items-center justify-content-center">
                        <h2>No sentences available</h2>
                      </div>
                    )}
                  </div>

                  {/* Slider Controls */}
                  {selectedSentences.length > 1 && (
                    <div className="d-flex align-items-center justify-content-center mt-3">
                      {/* Prev Button */}
                      <button
                        className="btn btn-light mx-2 position-absolute"
                        onClick={handlePrev}
                        style={{
                          right: "44rem",
                          border: "none",
                          background: "transparent",
                        }}
                      >
                        <img
                          src={back_to_card}
                          alt="Previous"
                          style={{ width: "3rem" }}
                        />
                      </button>

                      {/* Next Button */}
                      <button
                        className="btn btn-light mx-2 position-absolute"
                        onClick={handleNext}
                        style={{
                          left: "44rem",
                          border: "none",
                          background: "transparent",
                        }}
                      >
                        <img
                          src={next_arrow}
                          alt="Next"
                          style={{ width: "3rem" }}
                        />
                      </button>
                    </div>
                  )}
                </div>
              </div>
              {/* Right Section */}
              <div className="button_section d-flex w-25 flex-column  justify-content-center">
                <div className="d-flex flex-column gap-5 align-items-center">
                  <button
                    className="px-5 py-2 mt-0"
                    style={{
                      borderRadius: "10px",
                      border: "2px solid #0F2D45",
                      color: "#0F2D45",
                      fontWeight: "bold",
                    }}
                    onClick={() => {
                      setIsNewModalOpen(false);
                      setIsSubLanguageModalOpen(false);
                      setIsMainModalOpen(false);
                      setIsFluencyModalOpen(false);
                      setIsArticulationModalOpen(false);
                      setIsLanguageModalOpen(false);
                    }}
                  >
                    Return to Game
                  </button>

                  {hasData.articulation && (
                    <div className="d-flex flex-column align-items-center gap-2 text-light">
                      <img
                        style={{ width: "5rem" }}
                        src={
                          activeSections === "articulation"
                            ? imageMap.articulation
                            : articulation_img
                        }
                        alt="articulation_img"
                        className="img-fluid cursor-pointer"
                        onClick={() => setActiveSections("articulation")}
                      />
                      <h4
                        style={{
                          color:
                            activeSections === "articulation"
                              ? "#E77519"
                              : "#fff",
                          fontWeight:
                            activeSections === "articulation"
                              ? "bold"
                              : "normal",
                        }}
                      >
                        Articulation
                      </h4>
                    </div>
                  )}

                  {hasData.language && (
                    <div className="d-flex flex-column align-items-center gap-2 text-light">
                      <img
                        style={{ width: "5rem" }}
                        src={
                          activeSections === "language"
                            ? imageMap.language
                            : language_img
                        }
                        alt="language_btn"
                        className="img-fluid cursor-pointer"
                        onClick={() => setActiveSections("language")}
                      />
                      <h4
                        style={{
                          color:
                            activeSections === "language" ? "#E77519" : "#fff",
                          fontWeight:
                            activeSections === "language" ? "bold" : "normal",
                        }}
                      >
                        Language
                      </h4>
                    </div>
                  )}

                  {hasData.fluency && (
                    <div className="d-flex flex-column align-items-center gap-2 text-light">
                      <img
                        style={{ width: "5rem" }}
                        src={
                          activeSections === "fluency"
                            ? imageMap.fluency
                            : fluenc_img
                        }
                        alt="fluency_img"
                        className="img-fluid cursor-pointer"
                        onClick={() => setActiveSections("fluency")}
                      />
                      <h4
                        style={{
                          color:
                            activeSections === "fluency" ? "#E77519" : "#fff",
                          fontWeight:
                            activeSections === "fluency" ? "bold" : "normal",
                        }}
                      >
                        Fluency
                      </h4>
                    </div>
                  )}
                </div>
              </div>
              ;
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Activitycard;
