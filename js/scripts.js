const icedCoffeeList = document.getElementById('iced-coffee');
const coffeeList = document.getElementById('hot-coffee');
const coffeeAPI = `https://api.sampleapis.com/coffee/hot`;

function displayContent(localData) {
	let allCoffees = localData.map(eachCoffee => {
		return `
         <div class="coffee-details">
            <h4 class="coffee-title">${eachCoffee.title}</h4>
            <p class="coffee-description">${eachCoffee.description}</p>
         </div>
      `;
	});
	coffeeList.innerHTML = allCoffees.join('');
}

async function getCoffees(calledAPI) {
	const response = await fetch(calledAPI);
	const data = await response.json();
	displayContent(data);
}

getCoffees(coffeeAPI);
