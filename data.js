const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// bisogna creare un div da inserire nel container per ogni icona
// al suo interno bisogna inserire l'icona e un h3 per il nome

const container = document.querySelector(".icons_container");
container.classList.add("flex_container");
const selectElement = document.getElementById("icon_type");

selectElement.addEventListener('change', selectArray);

stampArray(icons);

function stampArray (array) {
	container.innerHTML = "";
	array.forEach(element => {
		const divIcon = document.createElement("div");
		divIcon.classList.add("icon_card", "flex_card");
		container.append(divIcon);

		const icon = document.createElement("i");
		icon.classList.add(element.family, element.prefix + element.name, element.color);
		divIcon.append(icon);

		const iconTag = document.createElement("h3");
		divIcon.append(iconTag);
		const iconText = document.createTextNode(element.name);
		iconTag.append(iconText);
	});
};

// cambiare le icone visualizzate in base al filtro select
function selectArray () {
	switch(selectElement.value) {
		case "animal":
			const animalArray = icons.filter((element) => element.type === "animal");
			stampArray(animalArray);
			break;
		case "vegetable":
			const vegArray = icons.filter((element) => element.type === "vegetable");
			stampArray(vegArray);
			break;
		case "user":
			const userArray = icons.filter((element) => element.type === "user");
			stampArray(userArray);
			break;
		default:
			stampArray(icons);
	};
};