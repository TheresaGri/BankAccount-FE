import "./LoginForm.css";

const LoginForm = ({handleSubmit,userNumberValue,handleChangeUserNumber,passwordValue, handleChangePassword}) => {
  
  return (
    <div className="login_form_container">
      <form className = "login_form"onSubmit={handleSubmit}>
        {" "}
        <label>
          user number:
          <input
            type="text"
            value={userNumberValue}
            onChange={handleChangeUserNumber}
          />{" "}
        </label>
        <label>
          password:
          <input
            type="text"
            value={passwordValue}
            onChange={handleChangePassword}
          />{" "}
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};


export default LoginForm;
