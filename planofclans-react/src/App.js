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
import Connected from "./components/Connected";
import Game from "./components/Game";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />}></Route>
      <Route path={"/login"} element={<Connected />}></Route>
      <Route
        path={"/game"}
        element={
          <PrivateRoute
            isAuthenticated={true}
            component={<Game />}
          ></PrivateRoute>
        }
      ></Route>
    </Routes>
  );
}

export default App;
