import React, { SyntheticEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import getUrl from "../utils/url";

export default function Register() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);


  const submit = async (e: SyntheticEvent) => {
    e.preventDefault()
    await fetch(`${getUrl()}/register`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name,
        email,
        password,
      })
    })

    setRedirect(true)
  }

  if (redirect) {
    return <Navigate to="/login"/>
  }


  return (
    <div>
      <form onSubmit={submit}>
        <h1 className="h3 mb-3 fw-normal">Please register</h1>

        <input className="form-control" id="floatingName" placeholder="name" required
          onChange={e => setName(e.target.value)}
        />

        <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" required
          onChange={e => setEmail(e.target.value)}
        />

        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" required
          onChange={e => setPassword(e.target.value)}
        />

        <button className="w-100 btn btn-lg btn-primary" type="submit">Register</button>
      </form>
    </div>
  )
}