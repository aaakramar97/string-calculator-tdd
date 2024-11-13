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
      setError((error as Error).message);
    }
  };

  return (
    <main className="container">
      <div className="string-calculator">
        <h1>String Calculator</h1>
        <Input onChange={(e) => setInput(e.target.value)} />
        <Button name="Calculate" onClick={handleCalculate} />
        <p>Result : {result}</p>
        {error && <p>{error}</p>}
      </div>
    </main>
  );
}
