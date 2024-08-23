document.addEventListener('DOMContentLoaded', () => {
    const socket = new WebSocket('ws://localhost:8080');

    // Event listener for WebSocket connection open
    socket.addEventListener('open', () => {
        console.log('WebSocket connection opened.');
    });

    // Event listener for WebSocket messages
    socket.addEventListener('message', (event) => {
        console.log('Received message from server:', event.data);
        const chatWindow = document.getElementById('chat-window');
        const message = JSON.parse(event.data);
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.innerHTML = `<span class="username">${message.username}:</span> ${message.text}`;
        chatWindow.appendChild(messageElement);
        chatWindow.scrollTop = chatWindow.scrollHeight;
    });

    // Event listener for WebSocket errors
    socket.addEventListener('error', (error) => {
        console.error('WebSocket Error: ', error);
    });

    // Event listener for WebSocket connection close
    socket.addEventListener('close', () => {
        console.log('WebSocket connection closed.');
    });

    // Function to send a message
    const sendMessage = () => {
        const usernameInput = document.getElementById('username');
        const messageInput = document.getElementById('message');
        const username = usernameInput.value.trim();
        const messageText = messageInput.value.trim();

        if (username && messageText) {
            if (socket.readyState === WebSocket.OPEN) {
                const message = { username, text: messageText };
                socket.send(JSON.stringify(message));
                messageInput.value = '';
            } else {
                console.error('WebSocket is not open. Ready state: ', socket.readyState);
            }
        } else {
            alert('Please enter a username and a message.');
        }
    };

    // Event listener for the send button
    document.getElementById('send-btn').addEventListener('click', sendMessage);

    // Event listener for pressing Enter key
    document.getElementById('message').addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            sendMessage();
        }
    });
});
