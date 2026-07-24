import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    Navigate
} from "react-router-dom";

import Home from "./Components/Home";
import TrainersList from "./Components/TrainersList";
import TrainerDetails from "./Components/TrainerDetails";

function App() {

    return (

        <BrowserRouter>

            <nav
                style={{
                    padding: "15px",
                    background: "#1976d2"
                }}
            >

                <Link
                    to="/home"
                    style={{
                        color: "white",
                        marginRight: "20px",
                        textDecoration: "none"
                    }}
                >
                    Home
                </Link>

                <Link
                    to="/trainers"
                    style={{
                        color: "white",
                        textDecoration: "none"
                    }}
                >
                    Trainers
                </Link>

            </nav>

            <Routes>

                <Route
                    path="/"
                    element={<Navigate to="/home" />}
                />

                <Route
                    path="/home"
                    element={<Home />}
                />

                <Route
                    path="/trainers"
                    element={<TrainersList />}
                />

                <Route
                    path="/trainer/:id"
                    element={<TrainerDetails />}
                />

            </Routes>

        </BrowserRouter>

    );
}

export default App;