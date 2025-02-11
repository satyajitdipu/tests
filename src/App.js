import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Contactus from "./Components/Contactus";
import Exploregames from "./Components/Exploregames";
import Gamedescription from "./Components/Gamedescription";
import Pricing from "./Components/Pricing";
import Gameworkspace from "./Components/Gameworkspace";
import Gameworkspace2 from "./Components/Gameworkspace2";
import Gameworkspace3 from "./Components/Gameworkspace3";
import Gameworkspace4 from "./Components/Gameworkspace4";
import Speechtherapyhub from "./Components/Speechtherapyhub";
import Speechtherapyhub_new from "./Components/Speechtherapyhub_new";
import Occupationaltherapyhub from "./Components/Occupationaltherapyhub";
import Behavioraltherapyhub from "./Components/Behavioraltherapisthub";
import Schoolandorganisation from "./Components/Schoolandorganisation";
import Filteredoage from "./Components/Filteredoage";
import Myaccount from "./Components/Myaccount";
import Login from "./Components/Login";
import Notification from "./Components/Notification";
import Myprofile from "./Components/Myprofile";
import Forgotpassword from "./Components/Forgotpassword";
import AutoLogin from "./Components/AutoLogin";
import Activitycard from "./Activitycard";
import NotFound from "./Components/NotFound"; // Add this component

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auto-login" element={<AutoLogin />} />
        <Route path="/about" element={<About />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/exploregames" element={<Exploregames />} />
        <Route path="/Gamedescription/:id" element={<Gamedescription />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/gameworkspace" element={<Gameworkspace />} />
        <Route path="/gameworkspace2" element={<Gameworkspace2 />} />
        <Route path="/Filteredoage/:occupation" element={<Filteredoage />} />
        <Route path="/gameworkspace3" element={<Gameworkspace3 />} />
        <Route path="/gameworkspace4" element={<Gameworkspace4 />} />
        <Route path="/speechtherapyhub" element={<Speechtherapyhub />} />
        <Route path="/speechtherapyhub_new" element={<Speechtherapyhub_new />} />
        <Route path="/occupationaltherapy" element={<Occupationaltherapyhub />} />
        <Route path="/behavioraltherapy" element={<Behavioraltherapyhub />} />
        <Route path="/schoolandorganisation" element={<Schoolandorganisation />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route path="/myaccount" element={<Myaccount />} />
        <Route path="/therapycard" element={<Activitycard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/notification" element={<Notification />} />
        <Route path="/myprofile" element={<Myprofile />} />
        <Route path="*" element={<NotFound />} /> {/* Catch-all route for 404 pages */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;