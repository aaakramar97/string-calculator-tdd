import { add } from "./stringCalculator";

test("returns 0 for empty string", () => {
    expect(add("")).toBe(0);
});

test("returns the number for a single number", () => {
    expect(add("1")).toBe(1);
})

test("returns the sum of two or more numbers", () => {
    expect(add("1,5")).toBe(6);
    expect(add("1,5,4")).toBe(10);
})

test("returns the sum accepting new lines as delimiter", () => {
    expect(add("1\n5,4")).toBe(10);
    expect(add("1\n2\n4")).toBe(7);
})

test("returns the sum accepting custom delimiters", () => {
    expect(add("//;\n1;5")).toBe(6);
    expect(add("//;\n1;5;4")).toBe(10);
})
