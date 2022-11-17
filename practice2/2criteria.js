function solve(arr) {
    arr.sort(twoCriteriaSort)
    function twoCriteriaSort(current, next){
        if (current.length == next.length) {
            return current.localeCompare(next);
        } 
        return current.length - next.length;
    }
    console.log(arr.join('\n'));
}
solve(['Isacc', 
'Theodor', 
'Jack', 
'Harrison', 
'George'])