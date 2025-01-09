import { it, expect } from "vitest";
import { transformToNumber } from "./numbers";

it("should convert a string to a number", () => {
  const stringNumber = "3";

  const result = transformToNumber(stringNumber);

  expect(result).toBe(+stringNumber);
});

it("should have a type of number", () => {
  const stringNumber = "20";

  const result = transformToNumber(stringNumber);

  expect(result).toBeTypeOf("number");
});

it("should return NaN if the string does not contain a number", () => {
  const string = "Lewis";

  const result = transformToNumber(string);

  expect(result).toBeNaN();
});
