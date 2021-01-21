function GreetingView({ changeChild }) {
  return (
    <div className="" style={{ height: "80vh" }}>
      <div className="heading-container">
        <h1 className="heading">WELCOME TO THE FUTURE WITH DTS</h1>
        <h2 className="sub-heading">Digital Tutorial Services</h2>
      </div>
      <div className=""></div>
      <div className="d-flex">
        <button
          onClick={() => changeChild("/login")}
          className="greeting-button"
          style={{ background: "#DFB824" }}
        >
          Login
        </button>
        <button
          onClick={() => changeChild("/register-selector")}
          className="greeting-button"
          style={{ background: "#EE2A28" }}
        >
          Register
        </button>
      </div>

      <p className="login-instructions">
        If you are Already Registered As A Teacher or A Student Please Login
        With Your Credentials.
        <br />
        <br /> If you are New to the Platform Please Register !
      </p>

      <div className="d-flex-column pd-hr-16">
        <button
          onClick={() => redirectUser("https://primetuition.lk/index2.php")}
          className="greeting-button w-100 mb-16"
          style={{ background: "var(--gold)" }}
        >
          Online Time Table
        </button>
        <button
          onClick={() =>
            redirectUser("https://primetuition.lk/Hyb2T/tutory-time-table.php")
          }
          className="greeting-button w-100 mb-16"
          style={{ background: "var(--blue)" }}
        >
          Hybrid Time Table
        </button>
      </div>
    </div>
  );
}

function redirectUser(url) {
  window.location = url;
}

export default GreetingView;
