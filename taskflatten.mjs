import test from "./test.mjs";


//#region function -----------------------------------------------------------------
function isNumber(value) {
    if (typeof value === "number") {
        return true;
    }
    else {
        return false;
    }
}

function isArray(value) {
    if (value && typeof value === 'object' && value.constructor === Array) {
        return true;
    }
    else {
        return false;
    }
}

function flattenArray(array) {
    if (!isArray(array)) {
        return NaN;
    }
    if (array.length === null) {
        return [];
    }
    let flattenedArray = [];
    for (let i = 0; i < array.length; i++) {
        if (isNumber(array[i])) {
            flattenedArray[flattenedArray.length] = array[i];
        }
        else if (isArray(array[i])) {
            let nestedArray = flattenArray(array[i]);
            for (let j = 0; j < nestedArray.length; j++) {
                flattenedArray[flattenedArray.length] = nestedArray[j];
            }
        }
    }
    return flattenedArray;
}





//#endregion

//#region Tests --------------------------------------------------------------------

const tests = test("Tests for flattenArray function");

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

const expected = [435, 2028, 3047, 4910, 8146, 7999, 1433, 7211, 1197, 6002, 2821, 3508];



// Valid inputs
tests.isEqual(flattenArray(example), expected, "The flattened array matches the expected array");

// Invalid inputs
tests.isNotANumber(flattenArray("a"), "Flatten of 'a' is NaN");
tests.isNotANumber(flattenArray(), "Flatten of undefined is NaN");