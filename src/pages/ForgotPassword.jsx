 import React, { useState } from "react";
 import axios from "axios";
 import './css/ForgotPassword.css'

 const ForgotPassword = () => {
   const [email, setEmail] = useState("");
   const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://stackcapus-desalegn.onrender.com/api/users/forgot-password",
        { email }
      );
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
     <div
       style={{ textAlign: "center", marginTop: "100px" }}
       className="classfor"
     >
       <h2>Forgot Password</h2>
       <form onSubmit={handleSubmit} className="">
         <div className="resetemail">
           <input
             className="forget"
             type="email"
             placeholder="Enter your email"
             value={email}
             onChange={(e) => setEmail(e.target.value)}
             required
           />
         </div>

         <div className="resetbtn">
           <button type="submit" className="">Send Reset Link</button>
         </div>
       </form>
       <p>{message}</p>
     </div>
   );
 };

 export default ForgotPassword;
