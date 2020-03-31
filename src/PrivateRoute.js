import React, { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "./Auth";
import Header from "./components/Header";

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
  
  const {currentUser} = useContext(AuthContext);

  return (
    <>
    <Header currentUser={currentUser}/>
    <Route
      {...rest}
      render={
        routeProps => !!currentUser ? (
          <RouteComponent {...routeProps} currentUser={currentUser} />
        ) : (
          <Redirect to={"/home"} />
        )
      }
    />
    </>
  );
};


export default PrivateRoute