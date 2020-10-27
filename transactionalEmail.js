// inject the redirect url via a hidden
// form field and have it submitted
function injectRedirectUrl(url) {
var input = document.createElement("input");
	input.setAttribute("type", "hidden");
	input.setAttribute("name", "redirect-url");
	input.setAttribute("value", url);
	document.getElementById(form.id).appendChild(input);
}

// triggered form submit 
function captureSubmit(event) {

// Get current form button waiting text
let waitMessage = event.target.submitButton.getAttribute('data-wait');

// Show waiting text
event.target.submitButton.value = waitMessage;

// Disable the form button
event.target.submitButton.disabled = true;

}

// replace with your form ID
const form = document.getElementById('get-access');

// inject redirect url into a hidden form field
injectRedirectUrl(form.dataset.redirect);

// capture form submit
form.addEventListener('submit', captureSubmit);
