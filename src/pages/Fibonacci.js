import React, { useState } from "react";
import { fibonacci } from "../functions";
import { Button } from "@material-ui/core";
import TextField from "@mui/material/TextField";

export function Fibonacci() {
  const [result, setResult] = useState(0);

  const [fibonacciMax, setFibonacciMax] = useState(null);
  function handleSetFibonacci(e) {
    setFibonacciMax(+e.target.value);
  }

  function solveFibonacci() {
    setResult(fibonacci(fibonacciMax));
  }

  return (
    <div className="container">
      <div className="input">
        <TextField
          id="outlined-basic"
          label="Вх. данные"
          variant="outlined"
          onChange={handleSetFibonacci}
          type="number"
        />
      </div>
      <Button variant="contained" onClick={solveFibonacci}>
        Решить
      </Button>
      <div>{result}</div>
    </div>
  );
}
