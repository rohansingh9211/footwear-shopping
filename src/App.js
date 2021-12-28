import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from "./comp/Login"
import Home from "./comp/Home"
import Sleeper from "./comp/Sleeper"
import { } from '@material-ui/icons'
import Add_Chart from './comp/Add_Chart'
const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/sleeper" element={<Sleeper />} />
        <Route exact path="/add_chart" element={<Add_Chart />} />
      </Routes>
    </Router>
  )
}

export default App
