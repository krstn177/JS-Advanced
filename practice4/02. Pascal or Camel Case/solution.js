function solve() {
    let text = document.getElementById('text').value;
    let namingConvention = document.getElementById('naming-convention').value;

    function transform(word){
      word = word.toLowerCase();
      word = word.charAt(0).toUpperCase() + word.substring(1);
      return word;
    }

    let result = '';
    
    let words = text.split(' ');
    if (namingConvention == 'Camel Case') {
      for (let i = 0; i < words.length; i++) {
        if (i == 0) {
          words[i] = words[i].toLowerCase();
        } else{
          words[i] = transform(words[i]);
        }
      }
    } else if (namingConvention == 'Pascal Case'){
      for (let i = 0; i < words.length; i++) {
        words[i] = transform(words[i]);
      }
    } else{
      return document.getElementById('result').textContent = 'Error!'
    }
    result = words.join('');
    document.getElementById('result').textContent = result;
}