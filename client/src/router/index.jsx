import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomePage from '../pages/HomePage/HomePage'
import DefultError from '../component/Errors/DefultError'
import WebSite from '../layouts/WebSite'


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<WebSite />}>
                    <Route path="*" element={<DefultError /> } />
                    <Route index element={<HomePage /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
