import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './public/main.css';
import { addPassword ,deletePassword, editPassword } from './actions'
import zxcvbn from 'zxcvbn'

function PasswordList() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch()
  const passwords = useSelector((state) => state.passwords)

  const passwordList = passwords.map((pass, index) => {
    return (
        <tr key={index} index={index}>
          <td>{pass.name}</td>
          <td>{pass.password}
          <button
          onClick={(e) => {
            dispatch(deletePassword(index));
          }}
      >
          Delete
      </button>
      <button
          onClick={(e) => {
            dispatch(editPassword(index, name, password));
          }}
      >
          Edit
      </button></td>
        </tr>
    )
  })
  
  return (
    <div>
      <div className="Form">
        <strong>Password Creator!</strong>
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
        {/* <div>{name}</div> */}
        <div>Password:</div>
        <input onChange={(e) => setPassword(e.target.value)} value={password} />
        {/* <div>{password}</div> */}
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
      
      <div>Saved:</div>
      <table class="minimalistBlack">
        <thead>
        <tr>
          <th>Name:</th>
          <th>Password:</th>
        </tr>
        </thead>
        <tbody>
          {passwordList}
        </tbody>

      </table>
    </div>
  )
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
export default PasswordList