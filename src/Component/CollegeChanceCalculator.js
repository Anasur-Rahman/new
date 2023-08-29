// <label htmlFor="roll" className="form-label">Enter your roll:</label>
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import "../css/CollegeChanceCalculator.css";

const CollegeChanceCalculator = ({ studentData }) => {
  const [roll, setRoll] = useState("");
  const [collegeChance, setCollegeChance] = useState(null);
  const [chances, setChances] = useState({});

  const handleRollChange = (event) => {
    setRoll(event.target.value);
  };

  const calculateCollegeChance = () => {
    const parsedRoll = parseInt(roll);

    // Convert student rolls to integers for comparison
    const student = studentData.find(
      (student) => parseInt(student.roll) === parsedRoll
    );

    if (!student) {
      setCollegeChance("Student not found");
      setChances({}); // Reset chances
      return;
    }

    let chances = {};

    if (student.total_number > 1216 && student.gpa === "5.00") {
      chances = {
        "Chittagong College": 100,
        "Govt. Mohsin College": 100,
        "Govt. City College": 100,
        "Bakalia Govt. College": 100,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (student.total_number === 1215 && student.gpa === "5.00") {
      chances = {
        "Chittagong College": 98.1,
        "Govt. Mohsin College": 100,
        "Govt. City College": 100,
        "Bakalia Govt. College": 100,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (student.total_number === 1216 && student.gpa === "5.00") {
      chances = {
        "Chittagong College": 99.7,
        "Govt. Mohsin College": 100,
        "Govt. City College": 100,
        "Bakalia Govt. College": 100,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (
      student.total_number < 1215 &&
      student.total_number > 1211 &&
      student.gpa === "5.00"
    ) {
      chances = {
        "Chittagong College": 92,
        "Govt. Mohsin College": 100,
        "Govt. City College": 100,
        "Bakalia Govt. College": 100,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (
      student.total_number < 1212 &&
      student.total_number > 1207 &&
      student.gpa === "5.00"
    ) {
      chances = {
        "Chittagong College": 87,
        "Govt. Mohsin College": 100,
        "Govt. City College": 100,
        "Bakalia Govt. College": 100,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (
      student.total_number < 1208 &&
      student.total_number > 1204 &&
      student.gpa === "5.00"
    ) {
      chances = {
        "Chittagong College": 79,
        "Govt. Mohsin College": 100,
        "Govt. City College": 100,
        "Bakalia Govt. College": 100,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (
      student.total_number < 1200 &&
      student.total_number > 1188 &&
      student.gpa === "5.00"
    ) {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 91.2,
        "Govt. City College": 100,
        "Bakalia Govt. College": 100,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (student.total_number === 1200 && student.gpa === "5.00") {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 96,
        "Govt. City College": 100,
        "Bakalia Govt. College": 100,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (student.total_number === 1201 && student.gpa === "5.00") {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 97.2,
        "Govt. City College": 100,
        "Bakalia Govt. College": 100,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (student.total_number === 1202 && student.gpa === "5.00") {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 98,
        "Govt. City College": 100,
        "Bakalia Govt. College": 100,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (student.total_number === 1188 && student.gpa === "5.00") {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 86,
        "Govt. City College": 99,
        "Bakalia Govt. College": 100,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (
      student.total_number < 1188 &&
      student.total_number > 1185 &&
      student.gpa === "5.00"
    ) {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 0,
        "Govt. City College": 98.1,
        "Bakalia Govt. College": 100,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (student.total_number === 1185 && student.gpa === "5.00") {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 0,
        "Govt. City College": 97,
        "Bakalia Govt. College": 100,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (
      student.total_number < 1185 &&
      student.total_number > 1178 &&
      student.gpa === "5.00"
    ) {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 0,
        "Govt. City College": 81,
        "Bakalia Govt. College": 100,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (student.total_number === 1178 && student.gpa === "5.00") {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 0,
        "Govt. City College": 0,
        "Bakalia Govt. College": 98.3,
        "Chittagong Government Model School and College ": 100,
      };
    } else if (
      student.total_number < 1178 &&
      student.total_number > 1172 &&
      student.gpa === "5.00"
    ) {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 0,
        "Govt. City College": 0,
        "Bakalia Govt. College": 87.7,
        "Chittagong Government Model School and College ": 99,
      };
    }

    //start
    else if (
      student.total_number < 1173 &&
      student.total_number > 1169 &&
      student.gpa === "5.00"
    ) {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 0,
        "Govt. City College": 0,
        "Bakalia Govt. College": 82,
        "Chittagong Government Model School and College ": 93,
      };
    } else if (
      student.total_number < 1170 &&
      student.total_number > 1165 &&
      student.gpa === "5.00"
    ) {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 0,
        "Govt. City College": 0,
        "Bakalia Govt. College": 61,
        "Chittagong Government Model School and College ": 87,
      };
    } else if (
      student.total_number < 1166 &&
      student.total_number > 1163 &&
      student.gpa === "5.00"
    ) {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 0,
        "Govt. City College": 0,
        "Bakalia Govt. College": 31,
        "Chittagong Government Model School and College ": 37,
      };
    } else if (
      student.total_number < 1164 &&
      student.total_number > 1159 &&
      student.gpa === "5.00"
    ) {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 0,
        "Govt. City College": 0,
        "Bakalia Govt. College": 0,
        "Chittagong Government Model School and College ": 11,
      };
    } else if (
      student.total_number < 1160 &&
      student.total_number > 1155 &&
      student.gpa === "5.00"
    ) {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 0,
        "Govt. City College": 0,
        "Bakalia Govt. College": 0,
        "Chittagong Government Model School and College ": 17,
      };
    } else if (student.total_number < 1156) {
      chances = {
        "Chittagong College": 0,
        "Govt. Mohsin College": 0,
        "Govt. City College": 0,
        "Bakalia Govt. College": 0,
        "Chittagong Government Model School and College ": 0,
      };
    }
    setChances(chances);

    setRoll(parsedRoll);
  };

  return (
    <div className="container mt-4">
      <h2 id="h2c" className="text-xl font-bold">
        College Chance Calculator
      </h2>
      <div className="mb-3">
        <input
          type="number"
          placeholder="Enter Your Roll : "
          className="form-control"
          id="roll"
          value={roll}
          onChange={handleRollChange}
        />
      </div>

      <div className="d-flex flex-column align-items-center mt-3">
        <button
          className="btn btn-primary mb-2"
          onClick={calculateCollegeChance}
        >
          Calculate Chance
        </button>
        {Object.keys(chances).length > 0 && roll && (
          <div>
            <h3 className="mt-3">Your Information:</h3>
            {studentData.map((student) => {
              if (parseInt(student.roll) === parseInt(roll)) {
                return (
                  <p key={student.roll}>
                    Hey, {student.name}, Your Total Mark is{" "}
                    {student.total_number} & You Obtained GPA {student.gpa}
                  </p>
                );
              }
              return null;
            })}
            <h3 className="mt-3">College Chances:</h3>
            <div className="card-container">
              {Object.keys(chances).map((college, index) => (
                <Card
                  key={college}
                  className={`card ${index % 2 === 0 ? "even" : "odd"}`}
                >
                  <div className="card-content">
                    <Card.Title className="title">{college}</Card.Title>
                    <Card.Text className="chance">Chance: </Card.Text>
                    <Card.Text className="percentage">
                      {chances[college]}%
                    </Card.Text>
                  </div>
                </Card>
              ))}
            </div>
            <p>
              Each time you change Roll number click on the Calculate Chance
              Button to see the estimated Percentage
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CollegeChanceCalculator;
