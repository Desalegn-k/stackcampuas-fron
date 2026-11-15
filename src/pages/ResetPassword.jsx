 import React, { useState } from "react";
 import { useParams,useNavigate } from "react-router-dom";
 import axios from "../axiosConfig";
 import "./css/ForgotPassword.css";
 import "./css/ResetPassword.css";

 const ResetPassword = () => {
   const { token } = useParams();
   const [password, setPassword] = useState("");
   
   const [message, setMessage] = useState("");
   const navigate=useNavigate();

   const handleSubmit = async (e) => {
     e.preventDefault();
     try {
       const res = await axios.post(`/users/reset-password/${token}`, {
         password,
       });
       setMessage(`${res.data.msg} Navigating to login page...`);
        setTimeout(()=>{
        navigate("/login")
       },5000)
     } catch (err) {
       setMessage("Invalid or expired token");
     }
   };

   return (
     <main className="classfor password-page">
       <h2>Reset Password</h2>
       <form onSubmit={handleSubmit} className="resetform password-form">
         <input
           className="forget"
           type="password"
           placeholder="Enter new password"
           value={password}
           onChange={(e) => setPassword(e.target.value)}
           required
           
         />
        <div className="resetbtn password-actions">
         <button type="submit" className="">
           Reset Password
         </button>
        </div>
       </form>
       <p >{message}</p>
     </main>
   );
 };

 export default ResetPassword;
