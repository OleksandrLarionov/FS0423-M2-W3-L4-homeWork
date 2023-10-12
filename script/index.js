const generateCards = (immagins) => {
	immagins.forEach((immagin) => {
		const mainRow = document.getElementById('row');
		const myColumn = document.createElement('col');
		myColumn.classList.add('col-3');
		myColumn.innerHTML = `
  <div class="card"">
  <img src="${immagin.src.large}" class="card-img-top" alt="${immagin.alt}">
  <div class="card-body">
    <h5 class="card-title">${immagin.photographer}</h5>
    <p class="card-text">${immagin.photographer_url}</p>
    <a href="#" class="btn btn-primary">coming soon</a>
    <a href="#" class="btn btn-primary "onclick='hide(event)'>hide</a>
  </div>
</div>
  `;
		mainRow.appendChild(myColumn);
	});
};

//  empty func
const empty = () => {
	const mainRow = document.getElementById('row');
	mainRow.innerHTML = '';
};

// Buttons

const myBtn = () => {
	const myRow = document.getElementById('buttons');
	const myDiv = document.createElement('div');
	myDiv.classList.add('col-6', 'justify-content-end', 'd-flex');
	myDiv.innerHTML = `<a class="btn btn-primary my-4 col-5" href="#" role="button" id='load'>Load</a>`;
	myRow.appendChild(myDiv);
};
const myBtnNext = () => {
	const myRow = document.getElementById('buttons');
	const myDiv = document.createElement('div');
	myDiv.classList.add('col-6', 'justify-content-start', 'd-flex');
	myDiv.innerHTML = `<a class="btn btn-info my-4 col-5" href="#" role="button" id='next'>next</a>`;
	myRow.appendChild(myDiv);
};
// Buttons
myBtn();
myBtnNext();
let myUrl = 'https://api.pexels.com/v1/search?query=';
// Buttons Events
const loadButton = (photos) => {
	const btn = document.getElementById('load');
	btn.addEventListener('click', () => {
		// console.log('load');
		empty();
		myContentsCall('cats');
	});
};

const next = (photos) => {
	const btn = document.getElementById('next');
	btn.addEventListener('click', () => {
		// console.log('next');
		empty();
		myContentsCall('dogs');
	});
};
next();
loadButton();
// hide button event
const hide = (e) => {
	// console.log('its me mario');
	e.target.closest('col').classList.toggle('visually-hidden');
};

const myContentsCall = function (name) {
	fetch(myUrl + name, {
		headers: { Authorization: 'koZ0OuD6ZL672MnYizYDeIivn7nUsQjVFye6uwyG2mnb8l3SnRwQwTUz' },
	})
		.then((res) => {
			if (res.ok) {
				// console.log('tutto appo');
				return res.json();
			} else {
				throw new Error('ERRORE');
			}
		})
		.then((data) => {
			// console.log('la mia Api', data.photos);
			const photos = data.photos;
			next(photos);
			loadButton(photos);
			generateCards(photos);
		})
		.catch(function (err) {
			console.log('Ciaone proprio', err);
		});
};
