import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import "./SignIn.css";
import google from "../../Images/google.png";

const SignIn = () => {
  const { signInWithGoogle, setIsLoading } = useAuth();

  const location = useLocation();
  const history = useHistory();
  // console.log(location.state?.from);
  const redirect_uri = location.state?.from || "/home";

  const googleLoginHandler = () => {
    signInWithGoogle()
      .then((result) => {
        history.push(redirect_uri);
      })
      .finally(() => setIsLoading(false));
    /* .catch((error) => {
        setError(error.message);
      }); */
  };

  return (
    <div>
      <div
        style={{ backgroundColor: "whitesmoke" }}
        className="radius mt-5 pt-5 w-50 mx-auto d-grid justify-content-center"
      >
        <div>
          <h3 className="text-center text-dark mb-4 text-uppercase">
            Please <span style={{ color: "#ea3c23" }}>sign in</span>
          </h3>
        </div>
        {/* Google Button  */}
        <div className="mb-5">
          <button onClick={googleLoginHandler} className="signin-btn">
            <div className="d-flex align-items-center justify-content-between">
              <img height="32" width="32" src={google} alt="" />{" "}
              <span>Continue With Google</span>{" "}
              <span className="text-white">G</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
