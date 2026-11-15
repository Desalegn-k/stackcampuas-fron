import React from "react";
import { Link } from "react-router-dom";
import './Four04.css'

export default function Four04() {
  return (
    <div>
      <main className="internal-page-wrapper">
        <div className="error-card">
          <div className="error-content">
            <div className="error-message">
              <h1 className="font-weght-bols">
                {" "}
                404 <br />
                Sorry,the page you're looking can't be found.
              </h1>
              <h5>
                Please go back to the {"  "}
                <Link to="/">home page</Link> and try again.if it still dosen't
                work for you,Please reach out to me at {"  "}
                <Link to="https://dessie.netlify.app">get me</Link>.
              </h5>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
