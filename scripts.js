/* Add your JavaScript to this file */

document.addEventListener('DOMContentLoaded', function () {
	const form = document.querySelector('.newsletter form');
	const input = document.querySelector('#email');
	const messageDiv = document.querySelector('.message');

	if (!form || !input || !messageDiv) return;

	function showMessage(text, isError) {
		messageDiv.textContent = text;
		messageDiv.style.color = isError ? '#b91c1c' : '#064e3b';
	}

	function isValidEmail(email) {
		return /^\S+@\S+\.\S+$/.test(email);
	}

	form.addEventListener('submit', function (e) {
		e.preventDefault();
		const email = input.value.trim();

		if (!email || !isValidEmail(email)) {
			showMessage('Please enter a valid email address.', true);
			return;
		}

		showMessage(`Thank you! Your email address \`${email}\` has been added to our mailing list!`, false);
		input.value = '';
	});
});