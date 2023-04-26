const testing = require('../lib/testing.js');
const sorting = require('../src/bubble-sort.js');

const assert = testing.assert;
const printHeadLine = testing.printHeadLine;
const assertArray = testing.assertArray;
const bubbleSort = sorting.bubbleSort;

const it = function (testName, testData) {
  assertArray(testData.expected, testData.actual, testName);
};

const testBubbleSort = function() {
  printHeadLine("\nbubbleSort");

  it("should give nothing, if empty list is provided", {
    actual: bubbleSort([]),
    expected: [],
  });

  it("should return the same list, if there is single element in the list", {
    actual: bubbleSort([1]),
    expected: [1],
  });

  it("should return the same list, if single number is repeated multiple times", {
    actual: bubbleSort([2, 2, 2, 2]),
    expected: [2, 2, 2, 2],
  });

  it("should give the list in increasing order, if list has more than one element", {
    actual: bubbleSort([2, 4, 3]),
    expected: [2, 3, 4],
  });

  it("should give the list in ascending order, if list contains both positive, negative and zeros in the list", {
    actual: bubbleSort([0, 3, -2, 0, -4, 5]),
    expected: [-4, -2, 0, 0, 3, 5],
  });
}

testBubbleSort();
testing.getSummary();
