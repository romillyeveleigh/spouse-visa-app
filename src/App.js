import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import SignUp from "./SignUp";
import Settings from "./components/Settings";
import SettingsQuestions from "./components/SettingsQuestions";
import Header from "./components/Header";
import Footer from "./components/Footer";
import WelcomePage from "./components/WelcomePage";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./PrivateRoute";

const App = () => {

  return (
    <>
    
    <AuthProvider>
      <Router >
        <div>
          <PrivateRoute exact path="/home" component={Home}/>
          <Route path="/settingsquestions" component={SettingsQuestions} />
          <Route path="/header" component={Header} />
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route path="/settings" component={Settings}/>
        </div>
      </Router>
    </AuthProvider>
    <Router >
      <div>
        <Route exact path="/" component={WelcomePage} />
      </div>
    </Router>
    <Footer />
    </>
  );
};

export default App;

