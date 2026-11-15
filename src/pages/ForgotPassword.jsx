 import React, { useState } from "react";
 import axios from "../axiosConfig";
 import './css/ForgotPassword.css'

 const ForgotPassword = () => {
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/users/forgot-password", { email });
      setMessage(res.data.msg);
    } catch (err) {
      console.error("Forgot password error:", err); // 👈 log full error to browser console

      if (err.response) {
        // Server responded with a specific status
        console.error("Backend response:", err.response.data);
        setMessage(err.response.data.msg || "Server error occurred");
      } else if (err.request) {
        // No response from backend (network or CORS)
        console.error("No response from server:", err.request);
        setMessage("No response from server");
      } else {
        // Something else went wrong
        console.error("Error setting up request:", err.message);
        setMessage("Error sending reset link");
      }
    }
  };


   return (
     <main className="classfor password-page">
       <p className="messageboth password-notice">
         {" "}
         Password reset is currently unavailable due to server response.
         <br />
         Please contact me at{" "}
         <a href="mailto:desu2464@gmail.com">desu2464@gmail.com</a> to rest your password and more support.{" "}
       </p>
       <h2>Forgot Password</h2>
       <form onSubmit={handleSubmit} className="password-form">
         <div className="resetemail password-field">
           <input
             className="forget"
             type="email"
             placeholder="Enter your email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             required
             readOnly
           />
         </div>

         <div className="resetbtn password-actions">
           <button type="submit" className="" disabled>
             Send Reset Link
           </button>
         </div>
       </form>
       <p className="messageboth">{message} </p>
     </main>
   );
 };

 export default ForgotPassword;
