const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

const input = document.querySelector('#fruit');
const suggestions = document.querySelector('.suggestions');



input.onkeyup = function() {
	// onkeyup when typing anything into the search fruit page, function will be executed.
	let result = [];
	// filtered result will store the keywords from const fruit
	let inputOut = input.value;
	// inputOut will store the value from input
	if (inputOut.length) {
		//inputOut has some value then
		result = fruit.filter((keyword) =>{
			return keyword.toLowerCase().includes(inputOut.toLowerCase())
		});
		// result will store filtered original array from const fruit
		// this function will filter the array const fruits based on the inputOut we are adding to the input field
		// to lower case added to accomodate user input being lower or uppercase
		// return 
	}
	display(result);
	// this will display the results from the function stored in the const content

	if (!result.length){
		// no value in the suggestions box
		suggestions.innerHTML = ' ';
	}
}

function display (result) {
	const content = result.map((list)=> {
		return "<li onclick = selectInput(this)>" + list + "</li>";
	});

	suggestions.innerHTML = "<ul>" + content.join('') + "</ul>";

	// function display contains result, result is an array that contains search keywords. Li tag is added for all search terms. Map will get each string from the array and add an li in the beginning and an li at the end. Then it will return this value under the const content. 

	// .join('') allows for the removal of commas between arrays in fruit when typing in search bar
}

function selectInput(list) {
	input.value = list.innerHTML;
	suggestions.innerHTML = ' ';

	// selectInputs displays the selected input in innerHTML, suggestions.innerHTML removes all other entry fields from the bottom of the search bar
}