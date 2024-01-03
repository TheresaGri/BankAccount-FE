import LoginForm from "../components/LoginForm.jsx";
import { useState } from "react";
import "./LoginPage.css";

const LoginPage = () => {
  const [userNumber, setUserNumber] = useState("");
  const [password, setPassword] = useState("");

  const onHandleSubmit = (event) => {
    event.preventDefault();
  //  console.log("Hello");

  }
  const handleChangeUserNumber = (event) => {
   // console.log(event.target.value);
    setUserNumber(event.target.value);
  };

  const handleChangePassword = (event) => {
    //console.log(event.target.value);
    setPassword(event.target.value);
  }
  return (
    <div className="login_page_container">
      <LoginForm
      handleSubmit={onHandleSubmit}
        userNumberValue={userNumber}
        handleChangeUserNumber={handleChangeUserNumber}
        passwordValue={password}
        handleChangePassword={handleChangePassword}
      />
    </div>
  );
};

export default LoginPage;
