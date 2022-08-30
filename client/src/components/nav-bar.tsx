import React from "react";
import { Link } from "react-router-dom";
import getUrl from "../utils/url";

export default function NavBar ({name, setName}: { name: string, setName: (name: string) => void }) {
  const logout = async () => {
    await fetch(`${getUrl()}/logout`,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })

    setName('')

  }


  const menu = name ? (
                      <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                          <Link className="nav-link active" to="/login" onClick={logout} >Logout</Link>
                        </li>
                      </ul>
                    ):
                    (
                      <ul className="navbar-nav me-auto mb-2 mb-md-0">
                        <li className="nav-item">
                          <Link to="/login" className="nav-link active"  >Login</Link>
                        </li>
                        <li className="nav-item">
                          <Link className='nav-link active' to="/register">Register</Link>
                        </li>
                      </ul>
                    )
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">Home</Link>
          <div>
            {menu}
          </div>
        </div>
      </nav>
    </div>
  )
}