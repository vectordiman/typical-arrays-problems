
exports.min = function min (array) {
  if (array && array.length > 0)
  {
      let min = array[0];
      for(let index = 1; index < array.length; index++)
      {
          if(min > array[index])
              min = array[index];
      }
      return min;
  }
  return 0;
}

exports.max = function max (array) {
    if (array && array.length > 0)
    {
        let max = array[0];
        for(let index = 1; index < array.length; index++)
        {
            if(max < array[index])
                max = array[index];
        }
        return max;
    }
    return 0;
}

exports.avg = function avg (array) {
    if (array && array.length > 0)
    {
        let sum = 0;
        for(let index = 0; index < array.length; index++)
        {
            sum += array[index]
        }
        return sum / array.length;
    }
  return 0;
}
