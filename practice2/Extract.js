function solve(arr) {
    let result = [];
    let biggest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        let currentNum  = arr[i];
        if (currentNum >= biggest) {
            result.push(currentNum);
            biggest = currentNum;
        }
        
    }
    return result;
}
solve([1,3,8,4,10,12,3,2,24]);