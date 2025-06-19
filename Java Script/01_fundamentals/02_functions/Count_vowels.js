function countVowels(word) {
  const vowels = 'aeiou';
  let count = 0;

  for (let char of word.toLowerCase()) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

// Example usage
const word = "Education";
console.log(`The word "${word}" contains ${countVowels(word)} vowels.`);
