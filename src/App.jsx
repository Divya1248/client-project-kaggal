import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Register from "./Component/Auth/Register";
import Signin from "./Component/Auth/Signin";
import Datalist from "./Component/Profile/Datalist";
import Home from "./Pages/Home";
import Togglebar from "./Pages/Togglebar";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/datalist" element={<Datalist />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </Fragment>
  );
};

export default App;
