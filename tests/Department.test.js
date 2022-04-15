const { it, expect } = require("@jest/globals");
const Department = require("../lib/Department.js");

describe("Department", () => {
    describe("Initialization", () => {
        it("should create a new 'Department' object", () => {
            const dept = new Department("Shoes", 5);
            expect(dept instanceof Department).toEqual(true);
        });
        it("should create an object with a name and id if provided valid arguments", () => {
            const dept = new Department("Shoes", 5);
            expect(dept.name).toEqual("Shoes");
            expect(dept.id).toEqual(5);
        });

    });
    describe("Error Catching", () => {
        it("should throw an error if provided no arguments", () => {
            const cb = () => new Department();
            expect(cb).toThrow();
        });
        it("should throw an error if 'name' is not a string", () => {
            const cb = () => new Department(5, "Shoes");
            const err = new Error(
                "Expected parameter 'name' to be a non-empty string"
            );
            expect(cb).toThrow(err);
        });
        it("should throw an error if 'id' is not provided", () => {
            const cb = () => new Department("Shoes");
            const err = new Error(
                "Expected parameter 'id' to be a non-negative number"
            );
            expect(cb).toThrow(err);
        });
        it("should throw an error if 'id' is not a number", () => {
            const cb = () => new Department("Shoes", "five");
            const err = new Error(
                "Expected parameter 'id' to be a non-negative number"
            );
            expect(cb).toThrow(err);
        });
    })
});
