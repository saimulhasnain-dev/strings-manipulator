/**
 * Function to convert string into uppercase string
 * @param {*} str:String
 * @returns 
 */
module.exports.intoUpperCase = (str) => {
  return str.toUpperCase()
}
/**
 * Function to convert string into lowercase string
 * @param {*} str:String
 * @returns 
 */
module.exports.intoLowerCase = (str) => {
  return str.toLowerCase()
}
/**
 * Function to get character at position
 * @param {*} str:String 
 * @param {*} position:Number 
 * @returns 
 */
module.exports.charAt = (str, position) => {
  return str.charAt(position)
}
/**
 * Function to get character ASCII code at position
 * @param {*} str 
 * @param {*} position 
 * @returns 
 */
module.exports.charCodeAt = (str, position) => {
  return str.charCodeAt(position)
}
/**
 * Function to check if string ends with a particular word
 * @param {*} str:String 
 * @param {*} key:String 
 * @returns boolean
 */
module.exports.endsWith = (str, key) => {
  return str.endsWith(key)
}
/**
 * Function to check if string starts with a particular word
 * @param {*} str:String 
 * @param {*} key:String 
 * @returns boolean
 */
module.exports.startsWith = (str, key) => {
  return str.startsWith(key)
}
/**
 * Function to get string from char code
 * @param {*} code:Number 
 * @returns 
 */
module.exports.fromCharCode = (code) => {
  return str.fromCharCode(code)
}
/**
 * Function to check if string includes a particular word or not
 * @param {*} str:String 
 * @param {*} key:String 
 * @returns boolean
 */
module.exports.stringIncludes = (str, key) => {
  return str.includes(key)
}
/**
 * Function to get position of a particular word within a string
 * @param {*} str:String 
 * @param {*} key:String 
 * @returns 
 */
module.exports.positionOf = (str, key) => {
  return str.indexOf(key)
}
/**
 * Function to get last position/index value of a particular word within a string
 * @param {*} str:String 
 * @param {*} key:String 
 * @returns 
 */
module.exports.lastPositionOf = (str, key) => {
  return str.lastIndexOf(key)
}
/**
 * Function to get length of a string
 * @param {*} str:String 
 * @returns number
 */
module.exports.lengthOfString = (str) => {
  return str.length
}
/**
 * Function to check if string matched a particular regex or a word in a given string
 * @param {*} str:String 
 * @param {*} key:String 
 * @returns 
 */
module.exports.stringMatches = (str, key) => {
  return str.match(key)
}
/**
 * Function to repeat string n number of times 
 * @param {*} str:String 
 * @param {*} times:String 
 * @returns 
 */
module.exports.repeatString = (str, times) => {
  return str.repeat(times)
}
/**
 * Function to replace a word with another within a string
 * @param {*} str:String 
 * @param {*} replace:String 
 * @param {*} replacewith:String 
 * @returns 
 */
module.exports.replaceString = (str, replace, replacewith) => {
  return str.replace(replace, replacewith)
}
/**
 * Function to return a string between two index within a string
 * @param {*} str:String 
 * @param {*} startPos:Number 
 * @param {*} endPos:Number 
 * @returns 
 */
module.exports.splitString = (str, startPos, endPos) => {
  return str.slice(startPos, endPos)
}
/**
 * Function to return array of words from string using a specific splitter
 * @param {*} str:String 
 * @param {*} splitter:String 
 * @returns 
 */
module.exports.convertStringToArray = (str, splitter) => {
  return str.split(splitter)
}
/**
 * Function to convert first letter of string into capital order
 * @param {*} str:String 
 * @returns 
 */
module.exports.convertFirstCaps = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
/**
 * Function to convert string into camel case 
 * @param {*} str:String 
 * @returns 
 */
module.exports.convertCamelCase = (str) => {
  return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
    return index === 0 ? word.toLowerCase() : word.toUpperCase();
  }).replace(/\s+/g, '');
}
/**
 * Function to convert string into pascal case
 * @param {*} str:String 
 * @returns 
 */
module.exports.convertPascalCase = (str) => {
  return str.replace(/(\w)(\w*)/g,
    function (g0, g1, g2) { return g1.toUpperCase() + g2.toLowerCase() })
}
/**
 * Function to convert any other character format into normal like pascal to normal
 * @param {*} str:String 
 * @returns 
 */
module.exports.convertNormalCase = (str) => {
  const result = str.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
}
/**
 * Function to convert normal number into roman format
 * @param {*} num:Number 
 * @returns 
 */
module.exports.convertRoman = (num) => {
  if (isNaN(num))
    return NaN;
  var digits = String(+num).split(""),
    key = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM",
      "", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC",
      "", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"],
    roman = "",
    i = 3;
  while (i--)
    roman = (key[+digits.pop() + (i * 10)] || "") + roman;
  return Array(+digits.join("") + 1).join("M") + roman;
}
