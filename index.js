const array = [1,3,5,4,5,7];
let finalArr = [];
function checkArrayOfNumbers (arrayOfNumbers) {
    const arrayLength = arrayOfNumbers.length;
    for (let i = 0; i<arrayLength-2; i++){
        let result = array[i]<array[i+1]&&array[i+1]>array[i+2]||array[i]>array[i+1]&&array[i+1]<array[i+2];
        finalArr.push(+result);

    }
    return finalArr;

}

console.log(checkArrayOfNumbers(array));
