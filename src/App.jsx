import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AppProvider } from './context/AppContext';
import Home from './pages/Home/Home';
import Login from './components/Login/Login';


function App() {

  return (
    <>
      <Router>
        <AppProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </AppProvider>
      </Router>
    </>
  )
}

export default App
