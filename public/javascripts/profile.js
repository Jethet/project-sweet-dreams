const inputUsernameForm = document.querySelector("#update-section");
const editUsernameButton = document.querySelector("#edit-username-button");


editUsernameButton.addEventListener('click', function(e) {
    e.preventDefault();
    inputUsernameForm.style.display = 'block'
});
