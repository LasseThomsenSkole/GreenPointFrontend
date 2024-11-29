import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import './index.css'
import Frontpage from './Components/Frontpage.jsx'
import Login from './Components/Login.jsx'


createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Frontpage/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/kalender" element={<Calendar/>}></Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
