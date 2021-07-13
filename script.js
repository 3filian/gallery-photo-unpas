// const panel = document.querySelector('.panel');
// const option = document.querySelectorAll('.wrapper img');

// option.forEach((element) => {
// 	element.addEventListener('click', function() {
// 		panel.setAttribute('src', 'img/' + element.className + '.png');
// 	})
// })

const container = document.querySelector('.container'),
	panel = document.querySelector('.panel'),
	option = document.querySelectorAll('.option');

container.addEventListener('click', (e) => {

	if (e.target.className == 'option') {
		panel.src = e.target.src;

		panel.classList.add('fade');
		setTimeout(() => {
			panel.classList.remove('fade');
		}, 500);

		option.forEach(function(element) {
			element.className = 'option';
		});

		e.target.classList.add('active');
	}
})