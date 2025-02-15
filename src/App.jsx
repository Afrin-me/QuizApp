import React from 'react' 
import {Routes, Route} from 'react-router-dom'
import {Home} from './pages/Home'
import {Login} from './pages/Login'
import {Quiz} from './pages/Quiz'
import {Results} from './pages/Results'
import PrivateRoute from "./context/PrivateRoute";
import Navbar from './components/Navbar'


function App() {

  return (
    <>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/quiz"
          element={
            <PrivateRoute>
              <Quiz />
            </PrivateRoute>
          }
        />
        <Route path="/results" element={<Results />} />
      </Routes>
    </>
  );
}

export default App
