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
    <a href="#" class="btn btn-primary "id='hideMe'>hide</a>
  </div>
</div>
  `;
		mainRow.appendChild(myColumn);
	});
};

const myBtn = () => {
	const myRow = document.getElementById('buttons');
	const myDiv = document.createElement('div');
	myDiv.classList.add('col-4');
	myDiv.innerHTML = `<a class="btn btn-primary col-4" href="#" role="button" id='load'>Load</a>`;
	myRow.appendChild(myDiv);
};
const myBtnNext = () => {
	const myRow = document.getElementById('buttons');
	const myDiv = document.createElement('div');
	myDiv.classList.add('col-4');
	myDiv.innerHTML = `<a class="btn btn-info col-4" href="#" role="button" id='next'>next</a>`;
	myRow.appendChild(myDiv);
};
// Buttons
myBtn();
myBtnNext();

const loadButton = (photos) => {
	const btn = document.getElementById('load');
	btn.addEventListener('click', () => {
		console.log('Eccomi');
		generateCards(photos);
	});
};

let urlToUse = 'https://api.pexels.com/v1/search?query=cat';
let dog = 'dog';

const nextButton = (photos) => {
	const btn = document.getElementById('next');
	btn.addEventListener('click', () => {
		console.log('next');

		generateCards(photos);
	});
};

// hide button event
const hide = () => {
	const btn = document.getElementById('hideMe');
	btn.addEventListener('click', (e) => {
		console.log('hide');
		e.target.classList.add.toggle('visually-hidden');
	});
};
hide();
const myContentsCall = function () {
	fetch(urlToUse, {
		headers: { Authorization: 'koZ0OuD6ZL672MnYizYDeIivn7nUsQjVFye6uwyG2mnb8l3SnRwQwTUz' },
	})
		.then((res) => {
			if (res.ok) {
				console.log('tutto appo');
				return res.json();
			} else {
				throw new Error('ERRORE');
			}
		})
		.then((data) => {
			console.log('la mia Api', data.photos);
			const photos = data.photos;
			nextButton(photos);
			loadButton(photos);
		})
		.catch(function (err) {
			console.log('Ciaone proprio');
		});
};

myContentsCall();
