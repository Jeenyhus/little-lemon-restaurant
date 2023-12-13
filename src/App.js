import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Nav from "./components/Nav";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
    return (
        <Router>
            <div>
                <Nav />
                <Routes>
                    <Route path="/" element={<Header />} />
                    <Route path="/main" element={<Main />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
