
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    const engineer = new Engineer("Nikita", 2, "nikita@nikita.com", "github.com/Nikita");

    describe("Initialization", () => {
        it("should create an object with name, id and email if provided valid arguments", () => {

            expect(engineer.github).toEqual("github.com/Nikita")
            expect(engineer.getRole()).toEqual("Engineer")
        })
    })

})

