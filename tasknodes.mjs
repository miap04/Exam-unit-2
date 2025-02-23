import test from "./test.mjs";

//#region function -----------------------------------------------------------------

function calculateSum(node) {
    if (!node) {
        return NaN;
    }
    let sum = node.value;
    if (node.left) {
        sum += calculateSum(node.left);
    }
    if (node.right) {
        sum += calculateSum(node.right);
    }
    return sum;
}

function deepestLevel(node) {
    if (!node) {
        return NaN;
    }
    let left = 0;
    let right = 0;
    if (node.left) {
        left = deepestLevel(node.left);
    }
    if (node.right) {
        right = deepestLevel(node.right);
    }
    return Math.max(left, right) + 1;
}

function countNodes(node) {
}


//#endregion

//#region Tests --------------------------------------------------------------------
const tests = test("Task Nodes");

const example = {
    value: 67, // Level 1
    left: { value: 765, left: null, right: null }, // Level 2
    right: {
        value: 167, // Level 2
        left: {
            value: 564, // Level 3
            left: null,
            right: { value: 379, left: null, right: null } // Level 4
        },
        right: null
    }
}

const exampleSum = 1942
const exampleDeepestLevel = 4
const exampleNodes = 5

// Valid inputs
tests.isEqual(calculateSum(example), exampleSum, "Sum of all nodes is 1942");
tests.isEqual(deepestLevel(example), exampleDeepestLevel, "Deepest level is 4");
tests.isEqual(countNodes(example), exampleNodes, "Number of nodes is 5");


// Invalid inputs
tests.isNotANumber(calculateSum(), "Sum of undefined is NaN");
tests.isNotANumber(deepestLevel(), "Deepest level of undefined is NaN");
tests.isNotANumber(countNodes(), "Number of nodes of undefined is NaN");


//#endregion