import { Route, Redirect, Navigate } from "react-router-dom";
import Game from "./Game";

// const PrivateRoute = () => {
//   return (
//     <Route
//       element={() =>
//         true ? <Home /> : <Navigate to={{ pathname: "/login" }} />
//       }
//     />
//   );
// };

const PrivateRoute = (props) => {
  const { isAuthenticated } = props;
  return isAuthenticated ? props.children : <Navigate to="/login" />;
};

export default PrivateRoute;
