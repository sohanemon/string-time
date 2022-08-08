/* --------------------------------------------------------------------- */
/*                          working with string                          */
/* --------------------------------------------------------------------- */
const str =
  "tumi bondhu kala pakhi, ami jeno ki, boshonto kale tomai bhulte parini";

/* ------------------- to find out any text in string ------------------ */
console.log(str.search("khi")); /* note: returns the index of first appearance*/
console.log(str.indexOf("khi")); /*  note: same to search */
console.log(str.includes("khi")); /* note: it returns boolean */
console.log(str.replace("kala", "dhola")); /* note: search and replace */

/* --------------------------------------------------------------------- */

/* ---------------------- to make the string slice --------------------- */
console.log(str.substring(5, 11)); /* note: returns the substring between */
console.log(str.slice(5, 11)); /*  note: same as substring */
/* --------------------------------------------------------------------- */

/* ---------------- mutation. note: string is immutable ---------------- */
console.log(str.concat(" hawa")); /* note: adds at the end of string */
/* --------------------------------------------------------------------- */

/* ------------------------- string properties ------------------------- */
console.log(str.length); /* note: finds the length of a string */
/* --------------------------------------------------------------------- */
console.log(
  str.trim()
); /* note: trims the string around. Also there trim start end available*/

/* --------------------------------------------------------------------- */
/*                         now working with array                        */
/* --------------------------------------------------------------------- */

const arr = str.split(" ");

console.log(arr);
console.log(arr.join(" ")); /* note: returns a string */
console.log(arr.slice(1, 3));
/**
 * it doesn't changes the original array
 * 1 is the starting index to slice here
 * 3 is the ending index but it never slices ending indexed item
 * so here may *splice out from index 1 to 2
 */
console.log(arr.splice(1, 3));
/**
 * bug: it changes the original array
 * 1 is the starting index. [overload +1 if count is undefined]
 * 3 is the counting number to which delete number of element.
 * so here may *delete 3 items from index 1
 */

/* --------------------------------------------------------------------- */
/*                        immutability of string                         */
/* --------------------------------------------------------------------- */

const string = "sada sada kala kala";
string[0] = "k";
console.log(string[1]);
console.log(
  string
); /*output: sada sada kala kala note: becoz string is immutable */
