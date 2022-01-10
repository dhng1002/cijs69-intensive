let arr = [2, 3, -5, -2, 4]
function adjacentElementsProduct(inputArray) {
    let newArr = []
    for(let index = 0 ; index < inputArray.length; index++){
        if(isNaN(inputArray[index+1]) === false){
        newArr.push(inputArray[index] * inputArray[index+1])
        }
    }
    return newArr.filter(arr1 =>{
        return newArr.every(arr2 => {
            return arr1 >= arr2
        })
    })
}

console.log(...adjacentElementsProduct(arr))