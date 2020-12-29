function countUniqueValues(arr){
  if(arr.length === 0){
    console.log(0)
  }
  let lookup = {};
  for(var i = 0; i < arr.length; i++){
    let num = arr[i];
    if(!lookup[num]){
      lookup[num] = num
    }
  }
  let count = 0
  for(num in lookup){
    count++
  }
  console.log(count)
}

countUniqueValues([1,1,1,1,1,2])
countUniqueValues([1,2,3,4,4,4,7,7,12,12,13])
countUniqueValues([])
countUniqueValues([-2,-1,-1,0,1])