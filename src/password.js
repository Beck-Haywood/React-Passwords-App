import React, { Component, useState } from "react";
import { useDispatch } from "react-redux";
import { addPassword, deletePassword } from "./actions";
import zxcvbn from 'zxcvbn'
import {loadState} from './local-store'
import './public/main.css';


function Password(props) {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <div>
        <button
          onClick={(e) => {
            setPassword(generatePasswordWithDash());
          }}
        >
          Generate
        </button>

      </div>
      <div>Name:</div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <div>{name}</div>
      <div>Password:</div>
      <input onChange={(e) => setPassword(e.target.value)} value={password} />
      <div>{password}</div>
      <div>
        <button
          onClick={(e) => {
            dispatch(addPassword(name, password));
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}
function generatePassword() {
  let length = 8,
    char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
    password = "";
  for (let i = 0, n = char.length; i < length; ++i) {
    password += char.charAt(Math.floor(Math.random() * n));
  }
  console.log("generating password");
  console.log(password);
  // setPassword(password)
  return password;
}
function generatePasswordWithDash() {
  let char = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  let password = "";
  password += char.charAt(Math.floor(Math.random() * char.length));
  password += char.charAt(Math.floor(Math.random() * char.length));
  password += char.charAt(Math.floor(Math.random() * char.length));
  password += "-";
  password += char.charAt(Math.floor(Math.random() * char.length));
  password += char.charAt(Math.floor(Math.random() * char.length));
  password += char.charAt(Math.floor(Math.random() * char.length));
  password += "-";
  password += char.charAt(Math.floor(Math.random() * char.length));
  password += char.charAt(Math.floor(Math.random() * char.length));
  password += char.charAt(Math.floor(Math.random() * char.length));
  console.log("generating password");
  console.log(password);
  console.log(zxcvbn(password))
  // this.setState({ password: password });
  return password;
}
export default Password;
