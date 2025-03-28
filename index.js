function isPalindrome(word) {
  function isPalindrome(word) {
    for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
      const endIndex = word.length - 1 - startIndex;
      if (word[startIndex] !== word[endIndex]) {
        return false;
      }
    }
  
    return true;
  }
}

/* 
  Add your pseudocode here

  lets iterate from the beginning of the string to the middle of the string.
  Then compare the letter we're iterating over to the corresponding letter at the end of the string.
  If the letters don't match, return false and if we reach the middle, and all the letters match, return true
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
