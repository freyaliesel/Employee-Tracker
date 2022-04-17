const { it, expect } = require("@jest/globals");
const Role = require("../lib/Role.js");

describe("Role", () => {
    describe("Initialization", () => {
        it("should create a new 'Role' object", () => {
            const job = new Role("Accountant", 3, 55000);
            const job2 = new Role("Cashier", 15, 15.50)
            expect(job instanceof Role).toEqual(true);
            expect(job2 instanceof Role).toEqual(true);
            
        });
        it("should create an object with a name, id, and salary if provided valid arguments", () => {
            const job = new Role("Accountant", 3, 55000);
            const job2 = new Role("Cashier", 15, 15.50)
            expect(job.name).toEqual("Accountant");
            expect(job.id).toEqual(3);
            expect(job.salary).toEqual(55000);
            expect(job2.name).toEqual("Cashier");
            expect(job2.id).toEqual(15);
            expect(job2.salary).toEqual(15.50);
        });
    })

    describe("Error Checking", () => {
        it("should throw an error if provided no arguments", () => {
            const cb = () => new Role();
            expect(cb).toThrow();
        });
        it("should throw an error if 'name' is not a string", () => {
            const cb = () => new Role(3, "Accountant");
            const err = new Error(
                "Expected parameter 'name' to be a non-empty string"
            );
            expect(cb).toThrow(err);
        });
        it("should throw an error if 'id' is not provided", () => {
            const cb = () => new Role("Accountant");
            const err = new Error(
                "Expected parameter 'id' to be a non-negative number"
            );
            expect(cb).toThrow(err);
        });
        it("should throw an error if 'id' is not a valid id number", () => {
            const cb = () => new Role("Accountant", "three");
            const err = new Error(
                "Expected parameter 'id' to be a non-negative number"
            );
            expect(cb).toThrow(err);
        });
        it("should throw an error if 'salary' is not provided", () => {
            const cb = () => new Role("Accountant", 3);
            const err = new Error(
                "Expected parameter 'salary' to be a non-negative number"
            );
            expect(cb).toThrow(err);
        });
        it("should throw an error if 'salary' is not a valid salary", () => {
            const cb = () => new Role("Accountant", 3, .5);
            const cb2 = () => new Role("Accountant", 3, 6.25);
            const cb3 = () => new Role("Accountant", 3, 35000);
            const err = new Error(
                "Expected parameter 'salary' to be a non-negative number"
            );
            expect(cb).toThrow(err);
            expect(cb2).toThrow(err);
            expect(cb3).toThrow(err);
        });
    });

});
