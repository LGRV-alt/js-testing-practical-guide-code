import { it, describe, expect } from "vitest";
import { transformToNumber, cleanNumbers } from "./numbers";

describe("transformToNumber", () => {
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
});

describe("cleanNumbers()", () => {
  it("should return an array of number values if an array of string number values", () => {
    const numberValues = ["1", "2"];

    const cleanedNumbers = cleanNumbers(numberValues);

    // expect(cleanedNumbers[0]).toBeTypeOf("number");
    expect(cleanedNumbers).toEqual([1, 2]);
  });

  it("should throw an error if an array of at least one empty string is passed", () => {
    const numberValues = ["", 1];

    const cleanFn = () => cleanNumbers(numberValues);

    expect(cleanFn).toThrow();
  });
});
