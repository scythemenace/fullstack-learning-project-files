/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.split(" ").join("");
  str = str.replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '');
  if (str.length == 0) {
    return true;
  }
  i = 0;
  j = str.length - 1;

  while (i < j) {
    //console.log(`Curr value of i: ${i}`);
    //console.log(`Curr value of j: ${j}`);
    if (str[i] != str[j]) {
      //console.log(`${str[i]} is not equal to ${str[j]}`);
      return false;
    }

    i++;
    j--;
  }

  return true;
}

//console.log(isPalindrome('Able, was I ere I saw Elba!'));

module.exports = isPalindrome;
