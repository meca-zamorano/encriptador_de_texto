const textInput = document.getElementById('textInput');
const messageContainer = document.getElementById('message-container');

textInput.addEventListener('input', function() {
    if (this.value.trim() !== "") {
        messageContainer.style.opacity = 0;
    } else {
        messageContainer.style.opacity = 1;
    }
});