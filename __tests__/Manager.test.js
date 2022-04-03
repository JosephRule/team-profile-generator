
const Manager = require("../lib/Manager");

describe("Manager", () => {
    const manager = new Manager("Nikita", 2, "nikita@nikita.com", 6);

    describe("Initialization", () => {
        it("should create an object with name, id and email if provided valid arguments", () => {

            expect(manager.officeNumber).toEqual(6)
            expect(manager.getRole()).toEqual("Manager")
        })
    })

})