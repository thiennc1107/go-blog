import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Login from './pages/login'
import NavBar from './components/nav-bar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Register from './pages/register'

function App() {
  const [name, setName] = useState('');

  useEffect(() => {
    (
      async () => {
      	const res = await fetch('http://localhost:8000/api/user',{
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'include',
        })
        const content = await res.json()
        setName(content.name)
      }
    )()
  }, [])

  return (
    <div className="App">
      <BrowserRouter>
        <NavBar name={name} setName={setName}/>
        <main className="form-signin w-100 m-auto">
            <Routes>
              <Route path="/" element={<Home name={name}/>}/>
              <Route path="/login" element={<Login setName={setName}/>}/>
              <Route path="/register" element={<Register/>}/>
            </Routes>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App
