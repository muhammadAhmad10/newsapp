import { useNavigate, Route, useLocation, Routes } from "react-router-dom";
import FrontPage from "./pages/frontPage";
import Header from "./pages/header";
import Footer from "./pages/footer";
import ErrorPage from "./errorpage";
import { useEffect, useState } from "react";
import Login from "./auth/login";
import { app } from "./config";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";

function App() {
  let navigate = useNavigate();
  let location = useLocation();

  const [selectedOption, setSelectedOption] = useState("home");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [checkBox, setCheckBox] = useState(true);
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));

  const handleOperation = async (id) => {
    const auth = getAuth();
    if (id === "register") {
      await createUserWithEmailAndPassword(auth, email, password).then(
        (res) => {
          localStorage.setItem("isLogin", JSON.stringify("login"));
          localStorage.setItem("durationOfLogin", JSON.stringify(checkBox));

          navigate("/home");
          // console.log("user registered successfully!");
        }
      );
    }
    if (id === "login") {
      await signInWithEmailAndPassword(auth, email, password);
      localStorage.setItem("isLogin", JSON.stringify("login"));
      localStorage.setItem("durationOfLogin", JSON.stringify(checkBox));

      navigate("/home");
      // console.log("user login successfully!");
    }
    // console.log("button clicked is: ", id);
  };

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  useEffect(() => {
    const check = JSON.parse(localStorage.getItem("durationOfLogin"));
    if (check === true) {
      setTimeout(() => {
        setSelectedOption("logout");
        //2 days in ms = 172800000
      }, 60000);
    }
  });

  useEffect(() => {
    // console.log("logout button pressed", selectedOption);
    if (selectedOption === "logout") {
      localStorage.setItem("isLogin", JSON.stringify(null));
      navigate("/");
    }
  }, [selectedOption]);

  const showHeaderAndFooter = location.pathname !== "/login";
  // console.log("header & footer: ", showHeaderAndFooter);

  return (
    <div className="App">
      {/* <Router> */}
      {/* {window.location.pathname === "/login" && (
        <Header handleOptionChange={handleOptionChange} />
      )} */}

      {showHeaderAndFooter && (
        <Header handleOptionChange={handleOptionChange} />
      )}

      <Routes>
        <Route
          path="/"
          element={<FrontPage selectedOption={selectedOption} />}
        />
        {isLogin === "login" ? (
          <>
            <Route path="/home" element={<FrontPage selectedOption="home" />} />
            <Route
              path="/latest"
              element={<FrontPage selectedOption="latest" />}
            />
            <Route path="/tech" element={<FrontPage selectedOption="tech" />} />
            <Route
              path="/sports"
              element={<FrontPage selectedOption="sports" />}
            />
          </>
        ) : (
          <>
            <Route
              path="/login"
              element={
                <Login
                  head="Global News"
                  title="Sign in to your account"
                  checkText="Remember me"
                  secondButton="Register"
                  to="register"
                  setEmail={setEmail}
                  setPassword={setPassword}
                  setCheckBox={setCheckBox}
                  handleOperation={() => handleOperation("login")}
                  forgotPassword={true}
                  buttonText="Sign in"
                  secondText="Not a member?"
                />
              }
            />
            <Route
              path="/register"
              element={
                <Login
                  head="Global News"
                  title="Create your account"
                  checkText="Get emails from Global news about important updates, industry news, and events. If you change your mind, you can unsubscribe at any time."
                  secondButton="Sign in"
                  to="login"
                  setEmail={setEmail}
                  setPassword={setPassword}
                  setCheckBox={setCheckBox}
                  handleOperation={() => handleOperation("register")}
                  forgotPassword={false}
                  buttonText="Create account"
                  secondText="Have an accound?"
                />
              }
            />
          </>
        )}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      {showHeaderAndFooter && (
        <Footer handleOptionChange={handleOptionChange} />
      )}
      {/* {window.location.pathname === "/login" && (
        <Footer handleOptionChange={handleOptionChange} />
      )} */}
      {/* </Router> */}
    </div>
  );
}

export default App;
