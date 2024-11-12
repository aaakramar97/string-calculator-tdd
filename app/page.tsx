"use client";
import { useState } from "react";
import Input from "./components/input/Input";
import Button from "./components/button/Button";

export default function Page() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (e: any) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  const handleCalculate = () => {
    const sum = add(input);
    setResult(sum.toString());
  };

  const add = (numbers: string) => {
    if (numbers === "") return 0;
    return parseInt(input);
  };
  return (
    <main className="container">
      <div className="string-calculator">
        <h1>String Calculator</h1>
        <Input onChange={handleInputChange} />
        <Button name="Calculate" onClick={handleCalculate} />
        <p>Result : {result}</p>
      </div>
    </main>
  );
}
