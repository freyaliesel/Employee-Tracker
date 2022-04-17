const { it, expect } = require("@jest/globals");
const { isValidString, isValidNumber, isValidSalary } = require("../utils/Functions.js");

describe("Functions", () => {
    describe("isValidString", () => {
        it("should return true when a string is passed as an argument", () => {
            expect(isValidString("hello")).toEqual(true);
            expect(isValidString("Hello World!")).toEqual(true);
        });
        it("should return false when called without passing a parameter", () => {
            expect(isValidString()).toEqual(false);
        });
        it("should return false when passed an empty string", () => {
            expect(isValidString("")).toEqual(false);
        });
        it("should return false when passed non-strings", () => {
            expect(isValidString(4)).toEqual(false);
            expect(isValidString(true)).toEqual(false);
            expect(isValidString(NaN)).toEqual(false);
            expect(isValidString(undefined)).toEqual(false);
            expect(isValidString(null)).toEqual(false);
        });
    });
    describe("isValidNumber", () => {
        it("should return true when passed a number", () => {
            expect(isValidNumber(4)).toEqual(true);
            expect(isValidNumber(2000)).toEqual(true);
        });
        it("should return false when passed a number less than or equal to zero", () => {
            expect(isValidNumber(-4)).toEqual(false);
            expect(isValidNumber(0)).toEqual(false);
        });
        it("should return false when passed a float", () => {
            expect(isValidNumber(4.3)).toEqual(false);
        });
    });
    describe("isValidSalary", () => {
        it("should return true when passed a valid hourly or yearly salary", () => {
            expect(isValidSalary(275.80)).toEqual(true);
            expect(isValidSalary(35568)).toEqual(true);
            expect(isValidSalary(500895)).toEqual(true);
            expect(isValidSalary(7.25)).toEqual(true);
        });
        it("should return false when not passed a parameter", () => {
            expect(isValidSalary()).toEqual(false);
        });
        it("should return false when not passed a number", () => {
            expect(isValidSalary("Beth")).toEqual(false);
            expect(isValidSalary(false)).toEqual(false);
            expect(isValidSalary(NaN)).toEqual(false);
            expect(isValidSalary(null)).toEqual(false);
        });
        it("should return false when passed a federally illegal hourly or salaried yearly amount", () => {
            expect(isValidSalary(6.50)).toEqual(false);
            expect(isValidSalary(10000)).toEqual(false);
            expect(isValidSalary(25000)).toEqual(false);
            expect(isValidSalary(35567)).toEqual(false);
        });
    });
});
