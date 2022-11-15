function solve(num) {
    let input = String(num);
    let isSame = true;
    let sum = 0;
    for (let i = 0; i < input.length; i++) {
        sum += Number(input[i]);
        if(input[0] !== input[i]) {
            isSame = false;
        }
        
    }
    console.log(isSame);
    console.log(sum);
    
}
solve(2222222)