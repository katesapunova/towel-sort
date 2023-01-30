
// You should implement your task here.

module.exports = function towelSort (matrix=[]) {

  if (matrix.length === 0) {
    return [];
  }
  let arrReverse = matrix.reduce(function(a, b, i) {
     if (i%2===0) {
      return a.concat(b);
    }
    return a.concat(b.reverse());
  });

return arrReverse;
}
