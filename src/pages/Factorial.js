import React, { useState } from "react";
import { factorial } from "../functions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

export function Factorial() {
  const [result, setResult] = useState(0);

  const [factorialMax, setFactorialMax] = useState(null);
  function handleSetFactorialMax(e) {
    setFactorialMax(+e.target.value);
  }

  function solveFactorial() {
    setResult(factorial(factorialMax));
  }

  return (
    <div className="container">
      <div className="input">
        <TextField
          id="outlined-basic"
          label="Вх. данные"
          variant="outlined"
          onChange={handleSetFactorialMax}
          type="number"
        />
      </div>
      <div>
        <Button variant="contained" onClick={solveFactorial}>
          Решить
        </Button>
      </div>

      <div>{result}</div>
    </div>
  );
}
