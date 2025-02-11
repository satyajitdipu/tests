import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion"; // For animations

const AutoLogin = () => {
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("user_id");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("Processing payment...");

  useEffect(() => {
    if (userId) {
      axios
        .post("https://virtualtxai.com/api/auto-login", { user_id: userId })
        .then((response) => {
          // Store JWT token in localStorage
          localStorage.setItem("token", response.data.access_token);
          setMessage("Thank you for your payment! Redirecting to home page...");

          // Redirect after 3 seconds
          setTimeout(() => {
            navigate("/");
          }, 3000);
        })
        .catch((error) => {
          console.error("Auto-login failed:", error);
          setMessage("Auto-login failed. Redirecting to login page...");

          // Redirect to login after 3 seconds
          setTimeout(() => {
            navigate("/login");
          }, 3000);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [userId, navigate]);

  return (
    <div className="auto-login-container d-flex flex-column align-items-center justify-content-center vh-100">
      {/* Animated Message */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        {loading && (
          <div className="spinner-border text-primary mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        )}
        <h2 className="fw-bold">{message}</h2>
      </motion.div>
    </div>
  );
};

export default AutoLogin;
