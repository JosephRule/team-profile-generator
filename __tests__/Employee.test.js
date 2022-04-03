
const Employee = require("../lib/Employee");

describe("Employee", () => {
    const employee = new Employee("Nikita", 2, "nikita@nikita.com");

    describe("Initialization", () => {
        it("should create an object with name, id and email if provided valid arguments", () => {
            expect(employee.name).toEqual("Nikita");
            expect(employee.id).toEqual(2);
            expect(employee.email).toEqual("nikita@nikita.com")
            expect(employee.getRole()).toEqual("Employee")
            expect(employee.getId()).toEqual(2);
            expect(employee.getEmail()).toEqual("nikita@nikita.com")
        })
    })

})

