function solve(input) {
    let products = {};
    for (let info of input) {
        let infoSplitted = info.split(' | ');
        let town = infoSplitted[0];
        let product = infoSplitted[1];
        let price = Number(infoSplitted[2]);
        if (!products.hasOwnProperty(product)) {
            products[product] = {town, price}
        } else{
            if (price < products[product].price) {
                products[product] = {town, price};
            }
        }
    }
    for (let product of Object.keys(products)) {
        console.log(`${product} -> ${products[product].price} (${products[product].town})`);
    }


}
solve(['Sample Town | Sample Product | 1000',
'Sample Town | Orange | 2',
'Sample Town | Peach | 1',
'Sofia | Orange | 3',
'Sofia | Peach | 2',
'New York | Sample Product | 1000.1',
'New York | Burger | 10'])