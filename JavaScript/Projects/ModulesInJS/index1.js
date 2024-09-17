// Importing named export (Renamed while export)
// import { addTwoNumbers, divideTwoNumbers } from './calculate.js'

// let num1 = 10
// let num2 = 20

// console.log(addTwoNumbers(num1, num2))
// console.log(divideTwoNumbers(num1, num2))

// Importing named export (Rename while import)
// import { add as addTwoNumbers, divide as divideTwoNumbers } from './calculate.js'

// let num1 = 10
// let num2 = 20

// console.log(addTwoNumbers(num1, num2))
// console.log(divideTwoNumbers(num1, num2))

// Default export
// import addTwoNumbers from './calculate2.js'
// console.log(addTwoNumbers(3, 5))

// Importing named export
// import { add, divide } from './calculate.js'

// let num1 = 10
// let num2 = 20

// const sum = add(num1, num2)
// const average = divide(sum, 2)

// console.log(average)

// Importing named export
// import { displayUser } from './index2.js'

// const user = {
//   "id": 1,
//   "email": "george.bluth@reqres.in",
//   "first_name": "George",
//   "last_name": "Bluth",
//   "avatar": "https://reqres.in/img/faces/1-image.jpg"
// }

// displayUser(user)

/*
  # Benefits of modularizing your code
    - Achieve encapsulation
    - Improves readability and mantainability
    - Avoid redundancy/ promote reusability (DRY principle)

  # Disadvantages of using multiple script files for modularization:
    - Global scope pollution
    - Order dependency: If the files depend on each other, the order of
      inclusion becomes crucial, and it can be challenging to manage the correct sequence.
    - Performance issues

  # Syntax to convert a script to module
    <script src="index.js" type="module"></script>

  # Export/Import
    - Export: An internal entity can be used by the external environment (Towards the end of the file)
    - Import: An external entity can be used by the internal environment (Towards the beginning of the file)

  # Types of exports:
    - Named export: 
      - An entity when exported with name 'X' should be imported with the same name 'X'
      - Can export multiple entities
      - Syntax:
        - Export:
          Way 1: export { entity1, entity2, ... }
          Way 2: export function entity1 () {}, export var x = 10, etc
        - Import:
          import { entity1, entity2, ... } from './relative-path.js'

    - Default export: (default keyword)
      - An entity when exported with name 'X' can be imported with the any name
      - Can only export a single entity
      - Syntax:
        - Export: export default entity1
        - Import: import entity1 from './relative-path.js'

    # Relative path:
      - ./ Current folder
      - ../ Parent folder
      - / Child folder

    # Renaming Exports and Imports (as keyword)
      - Applicable in case of named export
      - Syntax:
        Export: export { add as addTwoNumbers }
        Import: import { add as addTwoNumbers } from './relative-path.js'
`
    # Future
      - Combined exports
      - Simple project while uses modules
*/