import "./App.css";
// import Counter from "./components/Counter";

// import Layout from "./components/Layout/Layout/Layout";

import { Route, Routes } from "react-router-dom";
import MainMenu from "./components/MainMenu/MainMenu";
import Game from "./components/Game/Game";
import Map from "./components/Map/Map";

function App() {
    return (
        <div className="App">
            {/* <MainMenu /> */}
            <Routes>
                <Route path="" element={<MainMenu />} />
                <Route path="game/*" element={<Game />} />
                <Route path="map/*" element={<Map />} />
                {/* <Route path="profile/*" element={<ToDo />} /> */}
            </Routes>
        </div>
    );
}

export default App;
