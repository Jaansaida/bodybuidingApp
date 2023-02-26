const form = document.querySelector('form');
const email = document.getElementById('email');
const password = document.getElementById('password');

form.addEventListener('submit', (event) => {
	event.preventDefault();
	if (email.value === '' || password.value === '') {
		alert('Please enter email and password.');
	} else {
		alert(`Email: ${email.value}\nPassword: ${password.value}`);
	}
});
