function isEven(number) {
    let result
    if (number % 2 == 0) {
        result = true;
    } else {
        result = false;
    }
    return result;

}

function createArr(arr) {
    let arrNums = [];
    for (let i = 0; i < arr.length; i++) {
        if (isEven(arr[i])) {
            arrNums.push(arr[i]);
        }
    }
    return arrNums;
}

let arrNums = createArr(numbers);
console.log(arrNums);


