function solve(input) {
    let result = [];
    for (let hero of input) {
        let [name, level, items] = hero.split(' / ');
        level = Number(level);
        items = items ? items.split(', ') : [];
        let heroObj = {
            name,
            level,
            items
        } 
        result.push(heroObj);
    }
    console.log(JSON.stringify(result));
}
solve(['Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'])