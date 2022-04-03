
const Intern = require("../lib/Intern");

describe("Intern", () => {
    const intern = new Intern("Nikita", 2, "nikita@nikita.com", "U of I");

    describe("Initialization", () => {
        it("should create an object with name, id and email if provided valid arguments", () => {

            expect(intern.getSchool()).toEqual("U of I")
            expect(intern.getRole()).toEqual("Intern")
        })
    })

})