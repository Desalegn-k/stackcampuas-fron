import React from "react";
import { Link } from "react-router-dom";
import './Four04.css'

export default function Four04() {
  return (
    <div>
      <section className="internal-page-wrapper">
        <div className="container">
          <div className="row h-100 align-ietms-centrer justify-content-center text-center">
            <div className="col-12 mt-5 pt-5">
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
      </section>
    </div>
  );
}
