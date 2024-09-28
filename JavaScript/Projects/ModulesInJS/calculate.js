// Named export: Method 2
// export const add = (num1, num2) => {
//   return num1 + num2;
// }

// export const subtract = (num1, num2) => {
//   return num1 - num2;
// }

// export const multiply = (num1, num2) => {
//   return num1 * num2;
// }

// export const divide = (num1, num2) => {
//   return num1 / num2;
// }


// Named export: Method 1
const add = (num1, num2) => {
  return num1 + num2;
}

const subtract = (num1, num2) => {
  return num1 - num2;
}

const multiply = (num1, num2) => {
  return num1 * num2;
}

const divide = (num1, num2) => {
  return num1 / num2;
}

export { add as addTwoNumbers, subtract, multiply, divide as divideTwoNumbers }