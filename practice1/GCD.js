function solve(x, y) {
    while(x != y){
        x>y?x-=y:y-=x
    }
    console.log(x);
}
solve(15, 5);
solve(2154, 458);