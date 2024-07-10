const removeFromArray = function(array, ...target ) {
return array.filter((find) => !target.includes(find))
}
// Do not edit below this line
module.exports = removeFromArray;
