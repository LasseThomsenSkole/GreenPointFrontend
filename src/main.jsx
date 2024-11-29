import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import './index.css'
import Frontpage from './Components/Frontpage.jsx'
import Login from './Components/Login.jsx'
import Searchbar from "@/Components/Searchbar.jsx";


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Frontpage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/search" element={<Searchbar/>}/>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
