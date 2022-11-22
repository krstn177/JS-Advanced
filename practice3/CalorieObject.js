function solve(input) {
    let result = {};
    for (let index = 0; index < input.length; index+=2) {
        let food = input[index];
        let calories = Number(input[index+1]);
        result[food] = calories;
        
    }
    console.log(result);
}
solve(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);