// Data
const breakfastMenu = [
	'Pancakes- $12',
	'Eggs Benedict -$22.99',
	'Oatmeal -$21.99',
	'Frittata -$15',
];
const mainCourseMenu = [
	'Steak -$10',
	'Pasta - $24.99',
	'Burger - $8.49',
	'Salmon - $3.22',
];
const dessertMenu = [
	'Cake $4.24,',
	'Ice Cream - $6.99',
	'Pudding - $1.99',
	'Fruit Salad - $9',
];

let mainCourseItems = '';
let dessertItems = '';

// Array map method
const breakfastMenuItemsHTML = breakfastMenu
	.map((item, index) => `<p>Item ${index + 1} : ${item} </p>`)
	.join('');
document.getElementById('breakfastMenuItems').innerHTML =
	breakfastMenuItemsHTML;

// Array forEach method
mainCourseMenu.forEach((item, index) => {
	mainCourseItems += `<p> Item ${index + 1}: ${item} </p>`;
});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItems;

// for loop to itreate in Array
for (let i = 0; i < dessertMenu.length; i++) {
	dessertItems += `<p> Item ${i + 1}: ${dessertMenu[i]} </p>`;
}
document.getElementById('dessertMenuItems').innerHTML = dessertItems;
