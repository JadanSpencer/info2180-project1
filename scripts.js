/* Add your JavaScript to this file */

// The <script> tag is in the <head>, so the page hasn't loaded yet when this
// file runs. Wait for the DOM before touching any elements.
document.addEventListener('DOMContentLoaded', init);

function init() {
    const form = document.querySelector('.newsletter form');
    form.addEventListener('submit', handleSubmit);
}

function handleSubmit(event) {
    // Stop the browser from actually submitting/reloading the page
    event.preventDefault();

    const email = document.querySelector('#email').value.trim();

    if (email === '') {
        showMessage('Please enter a valid email address.');
    } else {
        showMessage(`Thank you! Your email address ${email} has been added to our mailing list!`);
    }
}

function showMessage(text) {
    // textContent replaces any previous message and is safe for user input
    document.querySelector('.message').textContent = text;
}
