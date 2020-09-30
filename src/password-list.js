import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import './public/main.css';
import { deletePassword } from './actions'
function PasswordList() {
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
      </button></td>
        </tr>
    )
  })
  
  return (
    <div>
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

export default PasswordList