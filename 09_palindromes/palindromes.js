const palindromes = function (string) {
    const replacedString = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    return replacedString === replacedString.split("").reverse().join("");
};

// Do not edit below this line
module.exports = palindromes;
