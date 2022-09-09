import React from "react";
import {BrowserRouter as Router, Route, Redirect, Routes} from "react-router-dom";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />} exact />
        <Route path='/signup' element={<Signup />} exact />
      </Routes>
    </Router>
  );
}

export default App;
