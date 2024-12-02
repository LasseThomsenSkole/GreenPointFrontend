import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {BrowserRouter, Route, Routes} from "react-router";
import './index.css'
import Frontpage from './Components/Frontpage.jsx'
import Calendar from './Components/Calendar.jsx'
import LoginPage from "./Components/LoginPage.jsx";

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Frontpage/>}/>
                <Route path="/login" element={<LoginPage/>}/>
                <Route path="/kalender" element={<Calendar/>}></Route>
            </Routes>
        </BrowserRouter>
    </StrictMode>,
)
