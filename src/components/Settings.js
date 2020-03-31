import React from "react";
import { AuthContext } from "../Auth";
import {Spinner} from 'react-bootstrap';
import SettingsQuestions from "./SettingsQuestions";

const Settings = ({ currentUser }) => {
  return (
    <div className="checklist-background-image">
          <AuthContext.Consumer>
            {( {currentUser} ) => {
              if (currentUser) {
                return <><SettingsQuestions currentUser={currentUser} /></>
              }
              else {
                return <div className="d-flex justify-content-center pt-5 pb-5">
                <Spinner animation="border" variant="dark" role="status" size="lg" />
                </div>
              }
            }}
          </AuthContext.Consumer>
    </div>
  );
};

export default Settings;