const numbersArr = [30, 50, 40, 10, 70];
const average = numbersArr.reduce((total, number, index, arr) => {
    total+=number;
    console.log(total);
    if (index == arr.length - 1) {
        return total/arr.length;
    } else{
        return total;
    }
})
console.log(average);