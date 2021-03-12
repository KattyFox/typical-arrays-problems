
exports.min = function min (array) {
  if (!array||array.length===0){
    return 0
  }
  let example = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] < example) {
            example = array[i]
        }
    }
    return example;
}

exports.max = function max (array) {
  if (!array||array.length===0){
    return 0
  }
  let example = array[0];
  for (let i = 1; i < array.length; i++) {
      if (array[i] > example) {
          example = array[i]
      }
  }
  return example;
}

exports.avg = function avg (array) {
  if (!array||array.length===0){
    return 0
  }
  let result = array[0];
  for (let i = 1; i < array.length; i++) {
      result += array[i];
  }
  return result/array.length;  
}
