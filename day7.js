// function without parameter,  a function which make a number square
function square() {
  let num = 2;
  let sq = num * num;
  console.log(sq * sq, "\n");
  console.log(sq);
}
//   square() // 4

// function without parameter
function addTwoNumbers() {
  let numOne = 10;
  let numTwo = 20;
  let sum = numOne + numTwo;

  console.log(sum);
}

//   addTwoNumbers() // a function has to be called by its name to be executed
function printFullName() {
  let firstName = "Mohammed";
  let lastName = "Feroz";
  let space = " ";
  let fullName = firstName + space + lastName;
  console.log(fullName);
}

// printFullName() // calling a function
function printFullName() {
  let firstName = "Asabeneh";
  let lastName = "Yetayeh";
  let space = " ";
  let fullName = firstName + space + lastName;
  return fullName;
}
// console.log(printFullName())
// printFullName()

function addTwoNumbers() {
  let numOne = 2;
  let numTwo = 3;
  let total = numOne * numTwo;
  return total;
}

// console.log(addTwoNumbers())
// ---------------------------------------------------------------------------------
// function with one parameter

//   functionName(parm1) // during calling or invoking one argument needed

function areaOfCircle(r) {
  let area = Math.PI * r * r;
  return area;
}

//   console.log(areaOfCircle(10)) // should be called with one argument

function square(number) {
  return number * number;
}

//   console.log(square(10))
const a = "Cloud4c",
  b = "ctrlS";
function fullname(a, b) {
  let full_name = `${a} ${b}`;
  return full_name;
}
// console.log(fullname("mohammed","feroz"))
// console.log(fullname(a,b))
// ----------------------------------------------------------
// this function takes array as a parameter and sum up the numbers in the array
function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
const numbers = [1, 2, 3, 4, 5];
//calling a function
//   console.log(sumArrayValues(numbers));

const areaOfCircle2 = (radius) => {
  //fesagouras algorithgm--- Pi R square
  let area = Math.PI * radius * radius;
  return area;
};
//   console.log(areaOfCircle2(10))

// function declaration

function sumAllNums() {
  let sum = 1;
  //   let sum =0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

// console.log(sumAllNums(1, 2, 3, 4)) // 10
// console.log(sumAllNums(10, 20, 13, 40, 10))  // 93
// console.log(sumAllNums(15, 20, 30, 25, 10, 33, 40))  // 173
// function declaration

const sumAllNums2 = (...args) => {
  let sum = 0;
  for (const element of args) {
    // sum -= element
    // sum = sum + element
    sum = sum - element;
  }
  return sum;
};

// console.log(sumAllNums2(1, 2, 3, 4)) // 10
// console.log(sumAllNums2(10, 20, 13, 40, 10))  // 93
// console.log(sumAllNums2(15, 20, 30, 25, 10, 33, 40))  // 173
const sumAllNums3 = (...args) => {
  // console.log(arguments), arguments object not found in arrow function
  // instead we use a parameter followed by spread operator (...)
  console.log(args);
};
//    sumAllNums3(1, 2, 3, 4)

console.log("\n");

const anonymousFun = function () {
  console.log(
    "I am an anonymous function and my value is stored in anonymousFun"
  );
};
//   anonymousFun()

// Function expression || Expression Function
const square4 = function (n) {
  return n * n;
};
//   console.log(square4(6)) // -> 4
// ------------------------------------------------Self Invoking Functions

//   (function (n) {
//     console.log(n * n);
//   }
// )(6);
// 4, but instead of just printing if we want to return and store the data, we do as shown below

let squaredNum = (function (n) {
  return n * n;
})(10);

// console.log(squaredNum);
// (function (n) {
//   console.log(n * n);
// })(2);
// (function (n) {
//   console.log(n * n);
// })(6);

// Arrow function
// This is how we write normal or declaration function
// Let us change this declaration function to an arrow function
function square5(n) {
  return n * n;
}


const square6 = (n) => {
    return n * n;
};


// if we have only one line in the code block, it can be written as follows, explicit return
const square7 = (n) => n * n; // -> 4
// console.log(square6(3)); // -> 4
// console.log(square5(2)); // 4
// console.log(square7(4)); // -> 4
// ---------------------------
const changeToUpperCase = arr => {
    const newArr = []
    for (const element of arr) {
      newArr.push(element.toUpperCase())
    }
    return newArr
  }
  
  const countries = ['Finland', 'Sweden', 'Norway', 'Denmark', 'Iceland']
//   console.log(changeToUpperCase(countries))
  
  // ["FINLAND", "SWEDEN", "NORWAY", "DENMARK", "ICELAND"]
const lowercase = arr=>{
    const newarr=[]
    for (const element of arr){
        newarr.push(element.toLowerCase())
    }
    return newarr
}
// console.log(lowercase(countries))

const printFullName2 = (firstName, lastName) => {
    return `${firstName} ${lastName}`
  }
  
//   console.log(printFullName2('Asabeneh', 'Yetayeh'))
  

  const printFullName5 = (firstName, lastName) => `${firstName} ${lastName}`

// console.log(printFullName5('sinlge', 'line output'))
// -------------------------------------------------------------------------
function greetings(name = 'PETER:(Defdault name)') {
    let message = `${name}, welcome to 30 Days Of JavaScript!`
    return message
  }
  
//   console.log(greetings())
//   console.log(greetings('Feroz'))
function generateFullName0(firstName = 'Asabeneh', lastName = 'Yetayeh') {
    let space = ' '
    let fullName = firstName + space + lastName
    return fullName
  }
  
//   console.log(generateFullName0())
//   console.log(generateFullName0('David', 'Smith'))
function calculateAge(birthYear, currentYear = 2024) {
    let age = currentYear - birthYear
    return age
  }
  
//   console.log('Age: ', calculateAge(1998))
// ====================================
function calculateAge(birthYear) {
    const currentYear = new Date().getFullYear();
    // console.log(currentYear,"aa",new Date().getFullYear(),"pp",new Date())
    return currentYear - birthYear;
}

// Example usage
const age = calculateAge(1990);
// console.log(`Current Age: ${age}`);

// -----------------------------------------------

function dateDifference(birthDate) {
    const currentDate = new Date();
    console.log(currentDate,"currentDate")
    const birth = new Date(birthDate);
    console.log(birth,"birthdate")

    let years = currentDate.getFullYear() - birth.getFullYear();
    let days = currentDate.getDate() - birth.getDate();
 console.log(years,days,"yearsDays")
console.log(currentDate.getFullYear(),"currentDate.getFullYear()")
console.log(birth.getFullYear(),"birth.getFullYear()")
console.log(currentDate.getDate(),"currentDate.getDate()")
console.log(birth.getDate(),"birth.getDate()")
    // Adjust for negative days
    if (days < 0) {
        years--;
        const lastMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 0);
        days += lastMonth.getDate(); // Get days in the previous month
    }

    return { years, days };
}

// Example usage
const diff = dateDifference('1990-1-31'); // Format: YYYY-MM-DD
// const diff = dateDifference('1998-04-28'); // Format: YYYY-MM-DD
console.log(`Difference: ${diff.years} years and ${diff.days} days`);


  