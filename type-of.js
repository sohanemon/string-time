/* --------------------------------------------------------------------- */
/*           checking different type of  variables using typeof          */
/* --------------------------------------------------------------------- */

/* ---------------------------- declaration ---------------------------- */
const roll = 1;
const name = "emon";
const isStudent = true;
const courses = {
  cse101: "Data Structure",
  cse102: "Algorithm",
};
const books = ["ansi-c", "algorithm"];
const getData = () => {};
/* --------------------------------------------------------------------- */

/* ------------------ checking the types using typeof ------------------ */
console.log(typeof roll); //returns number
console.log(typeof name); //returns string [void]
console.log(typeof isStudent); //returns boolean
console.log(typeof courses); //returns object
console.log(typeof books); //returns bug: object
console.log(typeof getData); //returns function
/* --------------------------------------------------------------------- */
