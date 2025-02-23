import test from "./test.mjs";

//#region function -----------------------------------------------------------------

function square(number) {
    return number * number;
}

function inchtomm(inches) {
    return inches * 25.4;
}

function root(number) {
    return Math.sqrt(number);
}

function cube(number) {
    return number * number * number;
}

function areaOfCircle(radius) {
    return 3.14 * radius * radius;
}

function greet(name) {
    if (typeof name !== "string") {
        return null;
    }
    return "Hello " + name;
}


//#endregion

//#region Tests --------------------------------------------------------------------
const tests = test("Sum function");


// Valid inputs
tests.isEqual(square(4), 16, "Square of 4 is 16");
tests.isEqual(square(-4), 16, "Square of -4 is 16");
tests.isEqual(square(2.5), 6.25, "Square of 2.5 is 6.25");
tests.isEqual(square(0), 0, "Square of 0 is 0");
tests.isEqual(inchtomm(1), 25.4, "1 inch is 25.4 mm");
tests.isEqual(inchtomm(0), 0, "0 inch is 0 mm");
tests.isEqual(root(9), 3, "Square root of 9 is 3");
tests.isEqual(root(0), 0, "Square root of 0 is 0");
tests.isEqual(cube(3), 27, "Cube of 3 is 27");
tests.isEqual(cube(-3), -27, "Cube of -3 is -27");
tests.isEqual(Math.round(areaOfCircle(3) * 100) / 100, 28.26, "Area of circle with radius 3 is 28.26");
tests.isEqual(areaOfCircle(0), 0, 0, "Area of circle with radius 0 is 0");
tests.isEqual(greet("John"), "Hello John", "Greet John is Hello John");


// Invalid inputs
tests.isNotANumber(square("a"), "Square of 'a' is NaN");
tests.isNotANumber(square(), "Square of undefined is NaN");
tests.isNotANumber(inchtomm("a"), "1 inch is NaN");
tests.isNotANumber(inchtomm(), "0 inch is NaN");
tests.isNotANumber(root("a"), "Square root of 'a' is NaN");
tests.isNotANumber(root(), "Square root of undefined is NaN");
tests.isNotANumber(cube("a"), "Cube of 'a' is NaN");
tests.isNotANumber(cube(), "Cube of undefined is NaN");
tests.isNotANumber(areaOfCircle("a"), "Area of circle with radius 'a' is NaN");
tests.isNotANumber(areaOfCircle(), "Area of circle with radius undefined is NaN");
tests.isEqual(greet(1), null, "Greet 1 should return null");
tests.isEqual(greet(null), null, "Greet null should return null");


// Edge cases
tests.isEqual(square(Infinity), Infinity, "Square of Infinity is Infinity");
tests.isEqual(inchtomm(Infinity), Infinity, "Infinity inch is Infinity mm");
tests.isEqual(root(Infinity), Infinity, "Square root of Infinity is Infinity");
tests.isEqual(cube(Infinity), Infinity, "Cube of Infinity is Infinity");
tests.isEqual(areaOfCircle(Infinity), Infinity, "Area of circle with radius Infinity is Infinity");


//#endregion