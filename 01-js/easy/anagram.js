/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    compare = {};

    if (str1.length != str2.length) {
      return false;
    }

    let len = str1.length;

    for (let i = 0; i < len; i++) {
        if (compare[str1[i]] != undefined) {
            //console.log(`Already exists in object: ${str1[i]} with value: ${compare[str1[i]]}`);
            compare[str1[i]]++;
            continue;
        }
        
        //console.log(`Doesn't exist yet: ${str1[i]}`);
        compare[str1[i]] = 1;
    }

    for (let i = 0; i < len; i++) {
        if (compare[str2[i]] == 0) {
          //console.log(`Trying to subtract from 0: ${str2[i]}`);
          return false;
        }

        //console.log(`Exists in the object: ${str2[i]}`);
        compare[str2[i]]--;
    }

    for (values of Object.values(compare)) {
        //console.log(`Value is ${values}`);
        if (values != 0) {
          return false;
        }
    }
    return true;
}

module.exports = isAnagram;
