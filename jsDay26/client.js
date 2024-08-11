const socket = new WebSocket('ws://localhost:8080');

socket.addEventListener('open', function (event) {
    console.log('Connected to the server');
});

socket.addEventListener('message', function (event) {
    const chatWindow = document.getElementById('chat-window');
    const message = JSON.parse(event.data);
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.innerHTML = `<span class="username">${message.username}:</span> ${message.text}`;
    chatWindow.appendChild(messageElement);
    chatWindow.scrollTop = chatWindow.scrollHeight;
});

document.getElementById('send-btn').addEventListener('click', function () {
    const usernameInput = document.getElementById('username');
    const messageInput = document.getElementById('message');

    const message = {
        username: usernameInput.value,
        text: messageInput.value,
    };

    socket.send(JSON.stringify(message));
    messageInput.value = '';
});

document.getElementById('message').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        document.getElementById('send-btn').click();
    }
});