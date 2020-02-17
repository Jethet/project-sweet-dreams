const inputUsernameForm = document.querySelector("#update-section");
const inputPasswordForm = document.querySelector("#password-update-section");
const editUsernameButton = document.querySelector("#edit-username-button");
const editPasswordButton = document.querySelector('#edit-password-button')

editUsernameButton.addEventListener('click', function(e) {
    e.preventDefault();
    inputUsernameForm.style.display = 'block'
});

editPasswordButton.addEventListener('click', function(e) {
    e.preventDefault();
    inputPasswordForm.style.display = 'block'
});