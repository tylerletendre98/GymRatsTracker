import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";

function Excercises() {
  const [exercises, setExercises] = useState();

  // useEffect(() => {
  //   axios
  //     .get({
  //       url: "https://api.api-ninjas.com/v1/exercises?muscle=legs",
  //       ,
  //     })
  //     .then((res) => {
  //       setExercises(res.data);
  //       console.log("logged");
  //     });
  // }, []);

  if (exercises !== undefined) {
    return (
      <div>
        {exercises.map((exercise) => {
          return (
            <div>
              <p>{exercise.name}</p>
            </div>
          );
        })}
      </div>
    );
  } else {
    return (
      <div>
        <h2>nothing</h2>
      </div>
    );
  }
}

export default Excercises;
