import React from "react"

import {Routes, Route, Link} from "react-router-dom"

import Home from "./components/Home"
import About from "./components/About"
import Contact from "./components/Contact"

export default function App() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
            </nav>

            <Routes>
                <Route exact path="/" element={<Home />} />

                <Route path="/about" element={<About />} />

                <Route path="/contact" element={<Contact />} />
            </Routes>
        </div>
    )
}