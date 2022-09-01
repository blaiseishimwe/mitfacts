var utils = require("course-utilities");

//Define kist variable

var kist = utils.load("./kist.js", "kist");

describe("KIST", () => {
  test("Object properties present", () => {
    expect(kist).toHaveProperty("student");
  });
});
