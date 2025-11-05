import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DefultError from '../component/Errors/DefultError'
import WebSite from '../layouts/WebSite'


function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<WebSite />}>
                    <Route path="*" element={<DefultError /> } />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
