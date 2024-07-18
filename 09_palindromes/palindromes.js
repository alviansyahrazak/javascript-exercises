const palindromes = function (string) {
  const cleanString = string.replace(/[^a-z0-9]/gi, "").toLowerCase()
  const reverseString = cleanString.split("").reverse().join("")
  return cleanString === reverseString
};

// Do not edit below this line
module.exports = palindromes;