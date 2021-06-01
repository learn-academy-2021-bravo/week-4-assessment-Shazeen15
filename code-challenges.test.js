// ASSESSMENT 4: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Add appropriate dependencies to the repository:
// $ yarn add jest

// Use test driven development to complete the following questions
// Run the file with the following command:
// $ yarn jest

// Reminder: The test will call your function

// --------------------1) Create a function that takes in an array, removes the first item from the array and shuffles the remaining content.

// a) Create a test with an expect statement using the variable provided.

var colors1 = ["purple", "blue", "green", "yellow", "pink"];
// Expected output example (can be a different order): ["yellow", "blue", "pink", "green"]
var colors2 = [
  "chartreuse",
  "indigo",
  "periwinkle",
  "ochre",
  "aquamarine",
  "saffron",
];
// Expected output example (can be a different order): ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]

/*
create a function that takes in an array
remove the first item in the array
loop through the new array
calculate a random number for the shuffle - representing the index
return the new array with the random elements placed

issues:
the indexs are repeating so some colors are reapeating
need to find a way to just shuffe the colors and have all of them in the shuffled array
*/
describe("shuffle", () => {
  test("should take an array and remove the first item and return a shuffle array", () => {
    expect(shuffle(colors1)).toEqual(
      typeof ["yellow", "blue", "pink", "green"]
    );
    expect(shuffle(colors2)).toEqual(
      typeof ["saffron", "aquamarine", "periwinkle", "indigo", "ochre"]
    );
  });
});

// b) Create the function that makes the test pass.
const shuffle = (arrStr) => {
  arrStr.shift();
  let shuffleArr = arrStr.map((str) => {
    let randoIndex = Math.floor(Math.random() * arrStr.length);
    // console.log(randoIndex);
    return arrStr[randoIndex];
  });
  //   console.log(shuffleArr);
  return typeof shuffleArr;
};

// shuffle(colors1);

// --------------------2) Create a function that takes an array of numbers and returns an array of the minimum and maximum numbers in that order.

// a) Create a test with expect statements for each of the variables provided.

var nums1 = [3, 56, 90, -8, 0, 23, 6];
// Expected output: [-8, 90]
var nums2 = [109, 5, 9, -59, 8, 24];
// Expected output: [-59, 109]
describe("minMax", () => {
  test("should take an array of numbers and return an array with the min and max number", () => {
    expect(minMax(nums1)).toEqual([-8, 90]);
    expect(minMax(nums2)).toEqual([-59, 109]);
  });
});
// b) Create the function that makes the test pass.
const minMax = (arrNum) => {
  /*
    sort the array
    take the first index and the last index of the sorted array
    return the new array containing the min and max
    */
  arrNum.sort((a, b) => a - b);
  let minMaxArr = [];
  minMaxArr.push(arrNum[0]);
  minMaxArr.push(arrNum[arrNum.length - 1]);
  return minMaxArr;
};
// --------------------3) Create a function that takes in two arrays as arguments and returns one array with no duplicate values. STRETCH: Use the spread operator to pass in a dynamic number of arguments.

// a) Create a test with an expect statement using the variables provided.

var testArray1 = [3, 7, 10, 5, 4, 3, 3];
var testArray2 = [7, 8, 2, 3, 1, 5, 4];
// Expected output: [3, 7, 10, 5, 4, 8, 2, 1]
describe("joinArray", () => {
  test("should take two array of number, join them and remove all the repeats", () => {
    expect(joinArray(testArray1, testArray2)).toEqual([
      3, 7, 10, 5, 4, 8, 2, 1,
    ]);
  });
});
// b) Create the function that makes the test pass.
/*
function take to arrays
joing the arrays
remove the duplicates
return the array with no duplicates
*/
const joinArray = (arr1, arr2) => {
  let joinArr = arr1.concat(arr2);
  console.log(joinArr);
  let noRepeats = joinArr.filter((num, index) => {
    // console.log(joinArr.indexOf(num) === index);
    console.log(joinArr.indexOf(num));
    console.log(index);
    return joinArr.indexOf(num) === index;
  });
  console.log(noRepeats);
  return noRepeats;
};
