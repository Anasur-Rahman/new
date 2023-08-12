import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { data } from "./data/data.js";
import StudentTable from "./Component/StudentTable.js";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/index.css";
import CollegeChanceCalculator from "./Component/CollegeChanceCalculator.js";

const App = () => {
  return (
    <div className="main">
      <div className="header-text">
        <h1 className="h1">
          Calculate Your Chance To get into A GOVT. College
        </h1>
        <h2 className="h2">This is valid only for Science Group</h2>
      </div>

      <CollegeChanceCalculator studentData={data} />
      <a className="anchor" href="#bottom">
        How This App Calculate Your Chance
      </a>
      <StudentTable data={data} itemsPerPage={100} />
      <p id="bottom">
        It's not an official percentage. Your chance to get into the above
        college is estimated based on your total marks and your position on the
        CTG Board. It includes the total number of seats the colleges have. This
        app also considers students who may migrate to other districts. This
        chance may vary as the total marks of a student can change after
        rechecking the result. This chance is not 100% accurate.
      </p>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
export default App;
