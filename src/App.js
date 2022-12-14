import React from "react";
import SimpleForm from "./Components/simpleForm";
import "bootstrap/dist/css/bootstrap.min.css";

import "./index.css";

const App = () => {
  return (
    <>
      <div className="appHeading">
        <h1>Fill up the Form!</h1>
      </div>
      <div className="app">
        <SimpleForm />
      </div>
    </>
  );
};

export default App;
