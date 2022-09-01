// module "C:/Users/bishi/Desktop/MIT Full Stack MERN/Week 7 Intro GitHub Testing and DOM/mitfacts/node_modules/course-utilities/index"

var utils = require("course-utilities");

//Define kist variable

var kist = utils.load("./kist.js", "kist");

// use describe method to group several related tests

describe("KIST", () => {
  test("Object properties present", () => {
    expect(kist).toHaveProperty("student");
  });

  test("student", () => {
    expect(kist.student).toBe("Blaise Ishimwe");
  });

  test("Founded range", () => {
    expect(kist.founded).toBeLessThanOrEqual(2022);
    expect(kist.founded).toBeGreaterThanOrEqual(1990);
  });
});
