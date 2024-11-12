"use client";
import { useState } from "react";
import Input from "./components/input/Input";
import Button from "./components/button/Button";

export default function Page() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleInputChange = (e: any) => {
    console.log("e.target.value", e.target.value);
    setInput(e.target.value);
  };

  const handleCalculate = () => {
    const sum = add(input);
    setResult(sum.toString());
  };

  const add = (numbers: string) => {
    console.log("numbers", numbers);
    if (numbers === "") return 0;
    if (numbers.includes(",")) {
      const splitNumber = numbers.split(",");
      const result = splitNumber.reduce(
        (acc, number) => acc + parseInt(number),
        0
      );
      console.log("numbers.includes(',')", numbers.split(","));
      return result;
    }

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
