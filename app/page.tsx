"use client";
import { useState } from "react";
import Input from "./components/input/Input";
import Button from "./components/button/Button";
import { add } from "./utils/stringCalculator";

export default function Page() {
  const [input, setInput] = useState<string>("");
  const [result, setResult] = useState<string>("");
  const [error, setError] = useState<string>("");

  const handleCalculate = () => {
    try {
      const sum = add(input);
      setResult(sum.toString());
      setError("");
    } catch (error) {
      console.log(error);
      setResult("");
      setError((error as Error).message);
    }
  };

  return (
    <>
      <div className="string-calculator">
        <h1>String Calculator</h1>
        <Input onChange={(e) => setInput(e.target.value)} />
        <Button name="Calculate" onClick={handleCalculate} />
        <span style={{ minHeight: "20px" }}>{result || error || ""}</span>
      </div>
    </>
  );
}
