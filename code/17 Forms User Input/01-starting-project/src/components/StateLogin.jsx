// import { useState } from "react";
import Input from './Input';
import {isEmail, isNotEmpty, hasMinLength} from "../util/validation"
import useInput from "../hooks/useInput.js";

export default function Login() {
  const {value: emailValue, handleInputChange: handleEmailChange, handleInputBlur: handleEmailBlur, hasError: emailHasError} = useInput('', (value)=> {
    return isEmail(value) && isNotEmpty(value);
  });

  const {value : passwordValue, handleInputChange: handlePasswordChange, handleInputBlur: handlePasswordBlur, hasError: passwordHasError} = useInput('', (value)=> {  return hasMinLength(value, 6);});

  // const [enteredValues, setEnteredValues] = useState({
  //   email: "",
  //   password: "",
  // });

  // const[didEdit , setDidEdit] = useState({
  //   email: false,
  //   password: false,
  // });

  // const emailIsInvalid = didEdit.email && !isEmail(enteredValues.email) && !isNotEmpty(enteredValues.email)
  // const passwordIsInvalid = didEdit.password && !hasMinLength(enteredValues.password, 6)


  function handleSubmit(event) {
    event.preventDefault();
    if(emailHasError || passwordHasError){
      return;
    }
    console.log(emailValue, passwordValue);

  }

  // function handleInputChange(identifier, value) {
  //   setEnteredValues((preValues) => ({
  //     ...preValues,
  //     [identifier]: value
  //   }))

  //   setDidEdit((preValues) => ({
  //     ...preValues,
  //     [identifier]: false
  //   }))
  // }

  // function handleInputBlur(identifier){
  //     setDidEdit((preValues) => ({
  //       ...preValues,
  //       [identifier]: true
  //     }))
  // }

  // function handleEmailChange(event) {
  //   setEnteredEmail(event.target.value);
  // }

  // function handlePasswordChange(event) {
  //   setEnteredPassword(event.target.value);
  // }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input  label= "Email" id="email" type="email" name="email"  onBlur={handleEmailBlur}  onChange={handleEmailChange}
            value={emailValue} error={emailHasError && "Please Enter a valid email"}/>


        <Input  label= "Password" id="password" type="password" name="password"  onBlur={handlePasswordBlur}  onChange={handlePasswordChange}
                    value={passwordValue} error={passwordHasError && "Please Enter a valid password"}/>

      </div>

      <p className="form-actions">
        <button className="button button-flat">Reset</button>
        <button  className="button" >Login</button>
      </p>
    </form>
  );
}
