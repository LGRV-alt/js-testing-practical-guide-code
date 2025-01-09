import { it, expect } from "vitest";
import { add } from "./math";

it("Should summarize all number values in an array", () => {
  // ----- Triple A pattern -------

  // Arrange
  const numbers = [1, 2, 3];
  const expectedResult = numbers.reduce(
    (preValue, curValue) => preValue + curValue,
    0
  );

  // Act
  const result = add(numbers);

  //   Assert
  expect(result).toBe(expectedResult);
});

it("should yeild NaN if at least one invalid number is provided", () => {
  const inputs = ["invalid", 2];

  const result = add(inputs);

  expect(result).toBeNaN();
});

it("should yeild a correct sum if an array of numeric string values is provided", () => {
  const numbers = ["2", "1"];

  const expectedResult = numbers.reduce(
    (preValue, curValue) => +preValue + +curValue,
    0
  );

  const result = add(numbers);

  expect(result).toBe(expectedResult);
});

it("should yeild 0 if an empty array is provided", () => {
  const numbers = [];

  const result = add(numbers);

  expect(result).toBe(0);
});

it("should throw an error is no value is passed into the function", () => {
  const resultFn = () => {
    add();
  };
  expect(resultFn).toThrow(/is not iterable/);
});

it("should throw an error if provided with multiple arguments instead on an array", () => {
  const num1 = 1;
  const num2 = 2;

  const resultFn = () => {
    add(num1, num2);
  };
  expect(resultFn).toThrow(/is not iterable/);
});
