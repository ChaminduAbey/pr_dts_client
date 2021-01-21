import React, { useState } from "react";

import { Link } from "react-router-dom";
import primeTutionOnline from "../../../images/home-images/primeTutuion-online-logo.png";
import primeTution from "../../../images/home-images/primeTution-logo.png";
import Hyb2T from "../../../images/home-images/hyb2t-logo.png";
import { Formik, Field, Form } from "formik";
import { Route, Switch, useLocation } from "react-router-dom";
import GreetingView from "./GreetingView";
import "./LoginView.css";

function loginUser(email, password) {
  const requestOptions = {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  };
  console.log({ email, password });
  fetch("https://dts.chords.org.lk/api/v2/user/login", requestOptions)
    .then((response) => response.json())
    .then((response) => {
      if (response.error != null) {
        return alert(response.error);
      }

      window.location.href = `https://primetuition.lk/login_dts.php?token=${
        response.jwt_token
      }&redirect=${encodeURI("https://primetuition.lk/my_wall.php")}`;
    });
}

function LogInComponent() {
  let [child, setChild] = useState(
    GreetingView({
      changeChild,
    })
  );

  function changeChild(name) {
    if (name == "/login") {
      setChild(LogInView());
    }
    if (name == "/register-selector") {
      setChild(RegisterSelect());
    }

    if (name == "/greet") {
      setChild(
        GreetingView({
          changeChild,
        })
      );
    }
  }
  return (
    <div
      className="home__grid-item login_view"
      data-aos-delay="100"
      data-aos="zoom-in-up"
    >
      {child}
      {BottomWebSiteView()}
    </div>
  );
}

function redirectUser(url) {
  window.location = url;
}

function RegisterSelect() {
  return (
    <div className="login-view" style={{ height: "70vh" }}>
      <div className="heading-container">
        <h1 className="heading">WELCOME TO DTS</h1>
        <h2 className="sub-heading">Digital Tutorial Services</h2>
      </div>

      <div className="d-flex-column">
        <button
          onClick={() => redirectUser("https://primetuition.lk/students2.php")}
          className="transparent-bg d-flex mb-8"
          style={{
            borderColor: "var(--gold)",
          }}
        >
          I'm A Student
        </button>
        <p className="  grey-color">Click here to register As A New Student</p>

        <button
          className="transparent-bg d-flex"
          onClick={() => redirectUser("https://primetuition.lk/teachers2.php")}
          style={{
            borderColor: "var(--red)",
          }}
        >
          I'm A Teacher
        </button>

        <p className="  grey-color">Click here to register As A Teacher</p>
      </div>
    </div>
  );
}

function LogInView() {
  return (
    <div className="login-view" style={{ height: "70vh" }}>
      <div className="heading-container">
        <h1 className="heading">WELCOME BACK TO DTS</h1>
        <h2 className="sub-heading">Digital Tutorial Services</h2>
      </div>
      <p className="center" style={{ fontSize: "1.3em" }}>
        Login Portal
      </p>
      <Formik
        initialValues={{ email: "" }}
        onSubmit={async (values, actions) => {
          actions.setSubmitting(false);
          loginUser(values.email, values.password);
        }}
      >
        <Form className="d-flex-column">
          <label htmlFor="">Enter Email/ User ID</label>
          <Field
            className="input-field"
            // placeholder="Enter Email/ID"
            name="email"
            type="text"
          />
          <label htmlFor="">Enter Password</label>
          <Field
            className="input-field"
            // placeholder="Enter Password"
            name="password"
            type="password"
          />
          <div className="" style={{ height: "16px" }}></div>
          <button
            className="greeting-button"
            style={{ background: "#DFB824" }}
            type="submit"
          >
            Login
          </button>
        </Form>
      </Formik>
    </div>
  );
}

function BottomWebSiteView() {
  return (
    <div className="login_bottom-bar">
      <Link
        target="__blank"
        to={"https://primetuition.lk/index2.php"}
        className="w-33"
      >
        <img src={primeTutionOnline} alt="Prime Tution Image" className="" />
      </Link>

      <Link
        target="__blank"
        to={"https://primetuition.lk/Hyb2T/tutory-time-table.php"}
        className="w-33"
      >
        <img src={Hyb2T} alt="Hyb2T Image" className="" />
      </Link>

      <Link
        target="__blank"
        to={"https://www.primetuition.org/index2.php"}
        className="w-33"
      >
        <img
          src={primeTution}
          alt="Prime Tution Online Image"
          className="w-33"
        />
      </Link>
    </div>
  );
}

export default LogInComponent;
