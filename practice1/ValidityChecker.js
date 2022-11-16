function solve(x1, y1, x2, y2) {
    function isValid(x1, y1, x2, y2) {
        let validity = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))
        if (Number.isInteger(validity)) {
            return console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else{
            return console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
    isValid(x1, y1, 0, 0);
    isValid(x2, y2, 0, 0);
    isValid(x1, y1, x2, y2)

}
solve(3, 0, 0, 4)