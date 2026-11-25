function calculateaverge (arr) {
    let average = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++ ){
        sum += arr[i];
    }
    average = sum/arr.length;
    return average;
}

console.log(calculateaverge([2,3,4,5,6,7]));