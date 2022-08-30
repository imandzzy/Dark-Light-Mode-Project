import React from "react"
import Navbar from "./components/Navbar"
import Main from "./components/Main"

export default function App() {
    // var element = document.getElementById("changebg");
    const [darkMode, setDarkMode] = React.useState(true)
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)

        // if (element.className == "dark") {
        //     document.body.style.backgroundColor = "#282D35";
        // }
        // else if (element.className == "white") {
        //         document.body.style.backgroundColor = "white";
        // }
    }
    return (
        <div className="container">
           <Navbar darkMode={darkMode} 
                   toggleDarkMode={toggleDarkMode}/>
           <Main darkMode={darkMode}/>
        </div>
    )
}