import React, { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "../axiosConfig";
import "./css/Register.css";

export default function Register() {
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const useNameDom = useRef(null);
  const firstNameDom = useRef(null);
  const lastNameDom = useRef(null);
  const emailDom = useRef(null);
  const passwordDom = useRef(null);

  async function HandleSubmit(e) {
    e.preventDefault();

    const firstValue = firstNameDom.current.value;
    const usernameValue = useNameDom.current.value;
    const lastValue = lastNameDom.current.value;
    const emailVlue = emailDom.current.value;
    const paswordvalue = passwordDom.current.value;

    if (
      !usernameValue ||
      !firstValue ||
      !lastValue ||
      !emailVlue ||
      !paswordvalue
    ) {
      setMessage("Please provide all required information.");
      return;
    }

    try {
      await axios.post("/users/register", {
        username: usernameValue,
        firstname: firstValue,
        lastname: lastValue,
        email: emailVlue,
        password: paswordvalue,
      });

      alert("Registration successful, please login.");
      navigate("/login");
    } catch (error) {
      setMessage(
        error.response?.data?.msg || "Registration failed. Please try again.",
      );

      console.error("Registration error:", error.response || error);
    }
  }

  return (
    <>
      <section className="whole-co">
        <section className="register-container">
          <div className="internal-regi-container">
            <h1 className="Join-network">Join the network</h1>

            <h4 className="already-container">
              <span className="span-already">
                Already Have An Account?
                <Link to="/login" className="sign-in">
                  Sign In
                </Link>
              </span>
            </h4>
          </div>

          <p id="provid">{message}</p>

          <form onSubmit={HandleSubmit}>
            <div className="input-cont">
              <input
                ref={useNameDom}
                name="username"
                type="text"
                placeholder="User name*"
              />
            </div>

            <div className="last-first">
              <div className="F-name">
                <input
                  ref={firstNameDom}
                  name="firstname"
                  type="text"
                  placeholder="First name*"
                />
              </div>

              <div className="L-name">
                <div>
                  <input
                    ref={lastNameDom}
                    name="lastname"
                    type="text"
                    placeholder="Last name*"
                  />
                </div>
              </div>
            </div>

            <div className="input-cont">
              <input
                ref={emailDom}
                name="email"
                type="email"
                placeholder="Email*"
              />
            </div>

            <div className="input-cont flex">
              <div className="password">
                <input
                  ref={passwordDom}
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Password*"
                />
              </div>

              <button
                type="button"
                className="show"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                style={{
                  cursor: "pointer",
                  display: "flex",
                  alignItems: "center",
                  gap: "5px",
                }}
              >
                <img
                  src={showPassword ? "/icons/normal.png" : "/icons/hidn.png"}
                  alt=""
                  style={{ width: "20px", height: "20px" }}
                />
              </button>
            </div>

            <div className="agree">
              I agree to the <span className="privacy">privacy policy</span> and{" "}
              <span className="privacy">terms of service</span>
            </div>

            <div className="submit-btn">
              <button type="submit" className="btn btn-primary" id="subm">
                Agree and Join
              </button>
            </div>
          </form>
        </section>

        <section className="discription">
          <p className="about">About</p>

          <h1 className="about-title">StackCampus</h1>

          <p className="abouy-dis">
            StackCampus is a collaborative learning platform built for students,
            developers, and tech enthusiasts. It provides a space to ask
            questions, share knowledge, and learn from peers — just like a
            digital campus for coders.
          </p>

          <p className="abouy-dis">
            Our mission is to empower learners by connecting them with a
            supportive community where knowledge flows freely. Whether you're
            solving coding challenges, exploring new technologies, or helping
            others grow, StackCampus is where learning becomes teamwork.
            <br />
            <br />
            <Link to="/Howitworks" className="haw-m1">
              How it Works
            </Link>
          </p>
        </section>
      </section>
    </>
  );
}
