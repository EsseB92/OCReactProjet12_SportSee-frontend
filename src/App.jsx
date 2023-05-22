import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Connexion from './pages/Connexion';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Connexion />} />
                <Route path="/user/:userId" element={<Home />} />
                {/* <Route path="*" element={<Error />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
