function solve(arr) {
    let result = {};

    for (let line of arr) {
        let [product, price] = line.split(' : ');
        let letter = product[0];
        if (!result.hasOwnProperty(letter)) {
            result[letter] = {};
        }
        result[letter][product] = price;
    }
    let sortedLetters = Object.keys(result).sort((a, b) => a.localeCompare(b))
    for (let letter of sortedLetters) {
        console.log(letter);
        let sortedProduct = Object.keys(result[letter]).sort((a, b) => a.localeCompare(b));
        for (const product of sortedProduct) {
            console.log(`  ${product}: ${result[letter][product]}`);
        }
    }
}
solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);