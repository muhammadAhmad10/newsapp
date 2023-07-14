import "../styles/auth.css";
import { Link } from "react-router-dom";

export default function Login({
  head,
  title,
  setEmail,
  setPassword,
  setCheckBox,
  checkText,
  secondButton,
  to,
  handleOperation,
  forgotPassword,
  buttonText,
  secondText,
  disableButton,
  errorMessage,
}) {
  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleCheckBox = (e) => {
    const value = e.target.checked;
    setCheckBox(value);
  };

  return (
    <div className="container-fluid contain">
      <h4 className="mb-4 mt-4">{head}</h4>

      <div
        className="container bg-light loginform mb-4"
        aria-labelledby="tab-login"
      >
        <form className="  mt-4 ">
          <h2 className="mb-4">{title}</h2>

          <div className="form-outline mb-3">
            <label className="form-label" htmlFor="loginName">
              Email
            </label>
            <input
              type="email"
              id="loginName"
              onChange={handleEmail}
              className="form-control pt-2 pb-2"
            />
          </div>

          <div className="form-outline mb-3">
            <label className="form-label" htmlFor="loginPassword">
              Password
            </label>
            <input
              type="password"
              id="loginPassword"
              className="form-control  pt-2 pb-2"
              onChange={handlePassword}
            />
          </div>
          <div
            style={{ fontSize: "12px", marginBottom: "5px", marginLeft: "2px" }}
            className="text-danger"
          >
            {errorMessage}
          </div>

          <div
            className={`mb-2 d-flex  justify-content-between position-relative ${
              forgotPassword ? "pt-4" : "pt-0"
            }`}
          >
            <div className="col-md-12 d-flex justify-content-center">
              <div className="form-check mb-3 mb-md-0">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultChecked={true}
                  //   value={checkb}
                  id="loginCheck"
                  onChange={handleCheckBox}
                />
                <label className="form-check-label get" htmlFor="loginCheck">
                  {checkText}
                </label>
              </div>
            </div>
            {forgotPassword ? (
              <div className="col-md-6 d-flex justify-content-center pass ">
                <a href="#!" className="links">
                  Forgot your password?
                </a>
              </div>
            ) : null}
          </div>
          <div className="d-grid gap-2 mb-4 pb-2 mt-3">
            <button
              className="btn btn-primary"
              type="button"
              disabled={disableButton}
              onClick={handleOperation}
            >
              {buttonText}
            </button>
          </div>

          <div className="text-center mb-5">
            <p className="have">
              {secondText}{" "}
              <Link className="links" to={`/${to}`}>
                {secondButton}
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
