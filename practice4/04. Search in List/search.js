function search() {
   let searchedElement = document.getElementById('searchText').value;
   let list = document.getElementById('towns');
   let towns = Array.from(list.children);
   let result = document.getElementById('result');
   let matches = 0;

   for (let town of towns) {
      town.style.fontWeight = 'normal';
      town.style.textDecoration = '';
   }

   for (const town of towns) {
      if (town.textContent.includes(searchedElement)) {
         matches++;
         console.log(town);
         town.style.fontWeight = 'bold';
         town.style.textDecoration = 'underline';
      }

   }
   result.textContent = `${matches} matches found`
}
