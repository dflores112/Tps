function averagePair(arr,avg){

  let i = 0;
  let j = arr.length - 1;
  while(i < arr.length){
    if((arr[i] + arr[j]) / 2 === avg){
      return [arr[i], arr[j]]
    }
  }
}