//const Employee = require("./lib/Employee.js")
const Intern = require("./lib/Intern.js")
const Manager = require("./lib/Manager.js")
const Engineer = require("./lib/Engineer.js");
const Employee = require("./lib/Employee.js");

const eng = new Engineer(name="joe", id="1", email="jrule@gmail.com", github="http://github.com/JosephRule")
console.log(eng)


const manager = new Manager(name = "Nikita", id="2", email="nparikh@stuff.com", officeNumber = 2)
console.log(manager)

const intern = new Intern(name = "joe", id = "2", email = "stuf@email.com", school = "stuff")
console.log(intern)
console.log(intern.getRole())
// svg icons
// <i class="bi bi-cup"></i>
// <i class="bi bi-wrench"></i>
// <i class="bi bi-book"></i>
