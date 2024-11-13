import { add } from "./stringCalculator";

test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
});

test("returns the number for a single number", () => {
    expect(add("1")).toBe(1);
})

test("returns the sum of two numbers", () => {
    expect(add("1,5")).toBe(6);
    expect(add("1,5 ,4")).toBe(10);
})