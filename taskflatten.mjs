import test from "./test.mjs";


//#region function -----------------------------------------------------------------

function flattenArray(array) {
}








//#endregion

//#region Tests --------------------------------------------------------------------

const tests = test("Sum function");

const example = [
    435,
    2028,
    [
        [
            3047, 4910, 8146,
            7999, 1433, 7211,
            1197, 6002
        ],
        2821,
        3508
    ]
];

const expected = [435, 2028, 3047, 4910, 8146, 7999, 1433, 7211, 1197, 6002, 2821, 3508]



// Valid inputs
tests.isEqual(flattenArray(example), expected, "The flattened array is correct");

// Invalid inputs
tests.isNotANumber(flattenArray("a"), "Flatten of 'a' is NaN");
tests.isNotANumber(flattenArray(), "Flatten of undefined is NaN");
