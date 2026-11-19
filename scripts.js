/* Add your JavaScript to this file */

// The <script> tag is in the <head>, so the page hasn't loaded yet when this
// file runs. Wait for the DOM before touching any elements.
document.addEventListener('DOMContentLoaded', init);

function init() {
    // TODO: find the newsletter form and attach handleSubmit to its "submit" event
}

function handleSubmit(event) {
    // TODO: stop the page from reloading
    // TODO: read the email from the input
    // TODO: if it's empty, show "Please enter a valid email address."
    //       otherwise show the "Thank you! ..." message
}

function showMessage(text) {
    // TODO: put text into the div with class "message" (replacing anything there)
}
