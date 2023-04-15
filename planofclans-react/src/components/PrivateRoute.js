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
  //   console.log(component);
  const { isAuthenticated, component } = props;
  return isAuthenticated ? component : <Navigate to="/login" />;
};

export default PrivateRoute;
