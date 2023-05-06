import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
  useLocation,
  Redirect,
  Navigate,
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import Game from "./components/Game";
import Login from "./components/Login";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />}></Route>
      <Route path={"/login"} element={<Login />}></Route>
      <Route
        path={"/game"}
        element={
          <PrivateRoute isAuthenticated={true}>
            <Game />
          </PrivateRoute>
        }
      ></Route>
    </Routes>
  );
}

export default App;
