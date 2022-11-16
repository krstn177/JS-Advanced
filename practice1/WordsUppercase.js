function solve(string) {
    let pattern = /\w+/gm;
    let arr = []
    let match = pattern.exec(string);
    while (match != null) {
        let word = match[0];
        word = word.toLocaleUpperCase();
        arr.push(word);
        match = pattern.exec(string);
        
    }
    console.log(arr.join(", "));
}
solve('Hi, how are you?');