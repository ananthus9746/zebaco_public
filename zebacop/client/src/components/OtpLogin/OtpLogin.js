import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OtpLogin.css";
import { auth } from "../../firebase";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { AdminOtpLogin } from "../../APIs/UserApi";

//+918590069678

function OtpLogin() {
  const Navigate = useNavigate();
  // Inputs
  const [mynumber, setnumber] = useState("");

  const [otp, setotp] = useState("");
  const [showOtp, setshowOtp] = useState(false);
  const [final, setfinal] = useState("");
  const [erorr, setError] = useState("");

  //====================SEND OTP============================//
  const sendOtp = async (e) => {
    e.preventDefault();
    let number = "+91" + mynumber;
    // console.log("number..", number);
    await AdminOtpLogin({ Mynumber: number })
      .then((response) => {
        console.log("sucess response1..", response.data.number);

        localStorage.setItem("phoneNumber", response.data.number);
        const phoneNumber = localStorage.getItem("phoneNumber");
        console.log("phoneNumber from localstorage..", phoneNumber);

        // localStorage.setItem("AdminToken", response.data.AdminToken);

        console.log("token..,", response.data.AdminToken);

        // fireOtp(resNumber);
        let num = phoneNumber;

        window.recaptchaVerifier = new RecaptchaVerifier(
          "sign-in-button",
          {
            callback: (response) => {
              console.log("prepared phone auth process");
            },
          },
          auth
        );
        const appVerifier = window.recaptchaVerifier;

        console.log("num..", num);

        signInWithPhoneNumber(auth, num, appVerifier)
          .then((confirmationResult) => {
            alert("otp sent");
            setshowOtp(true);
            // SMS sent. Prompt user to type the code from the message, then sign the
            // user in with confirmationResult.confirm(code).
            window.confirmationResult = confirmationResult;
            window.authToken = response.data.AdminToken;
            // ...
          })
          .catch((error) => {
            // Error; SMS not sent
            alert("SMS not sent");
            console.log(error);

            // ...
          });
      })
      .catch((error) => {
        console.log(error?.response?.data?.error);
        setError(error?.response?.data?.error);
      });
  };
  //==================VERIFY OTP====================//
  const verifyOtp = (e) => {
    e.preventDefault();
    console.log("verify otp..", otp);

    window.confirmationResult
      .confirm(otp)
      .then((result) => {
        alert("sucess", window.authToken);
        localStorage.setItem("AdminToken", window.authToken);
        localStorage.removeItem("phoneNumber");
        Navigate("/admin");
        // ...
      })
      .catch((error) => {
        alert("Wrong verification code");
        // User couldn't sign in (bad verification code?)
        // ...
      });
  };
  //================================================//

  return (

    <div className="otp_container">
      <button className="goback_btn" onClick={() => Navigate(-1)}>
        Go Back
      </button>


      
      {showOtp ? (
        ""
      ) : (
        <form className="otp_container" onSubmit={sendOtp}>
          <label>Phone number</label>
          <input
            className="otp_inputs"
            type="txt"
            name=""
            id=""
            onChange={(e) => {
              setnumber(e.target.value);
              setError("");
            }}
          />
          <button className="otp_btns">Get otp</button>
          <p className="otp_error">{erorr}</p>
        </form>
      )}



      {showOtp ? (
        <form className="otp_container" onSubmit={verifyOtp}>
          <label>Enter Otp</label>
          <input
            className="otp_inputs"
            type="text"
            name=""
            id=""
            onChange={(e) => {
              setotp(e.target.value);
            }}
          />
          <button className="otp_btns">Login</button>
        </form>
      ) : (
        ""
      )}


      <div id="sign-in-button"></div>
    </div>
  );
}

export default OtpLogin;
