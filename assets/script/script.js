let profiles = document.getElementsByClassName('about'); // target index.html about class
let popUp = document.querySelector('.profile'); // popUp finds profile in index.html

for(item of profiles) {
	item.addEventListener('click', event => {
		popUp.classList.add('visible');
	});
}

let closeBtn = document.querySelector('.close-profile');

closeBtn.onclick = function() {
	popUp.classList.remove('visible');
}
