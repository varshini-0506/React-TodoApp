import React from "react"
import ReactDOM from "react-dom/client"
import Todowrapper from "./components/Todowrapper/Todowrapper"

const root= ReactDOM.createRoot(document.getElementById("root"))

const App=()=>{
    return(
        <div className="2xl:container mx-auto h-screen bg-[#7EC8E3] font-[Quicksand]">
            <div className="w-[70%] h-[100%] mx-auto flex justify-center items-center">
               <Todowrapper/>
            </div>
        </div>
    );
}

root.render(<App/>)