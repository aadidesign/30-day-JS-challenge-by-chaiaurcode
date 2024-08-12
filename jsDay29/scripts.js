let users = [{username: 'user1', password: 'pass1'}, {username: 'user2', password: 'pass2'}];
let posts = [];

function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        localStorage.setItem('loggedInUser', username);
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('create-post').style.display = 'block';
        displayPosts();
    } else {
        alert('Invalid username or password');
    }
}

function createPost() {
    const content = document.getElementById('post-content').value;
    const username = localStorage.getItem('loggedInUser');
    const timestamp = new Date().toLocaleString();

    const post = { username, content, timestamp };
    posts.push(post);
    displayPosts();
}

function displayPosts() {
    const postsFeed = document.getElementById('posts-feed');
    postsFeed.innerHTML = posts.map(post => `
        <div class="post">
            <div class="username">${post.username}</div>
            <div class="timestamp">${post.timestamp}</div>
            <div class="content">${post.content}</div>
            <button onclick="likePost()">Like</button>
            <button onclick="commentOnPost()">Comment</button>
        </div>
    `).join('');
}

function likePost() {
    alert('Liked the post!');
}

function commentOnPost() {
    alert('Commented on the post!');
}

window.onload = function() {
    if (localStorage.getItem('loggedInUser')) {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('create-post').style.display = 'block';
        displayPosts();
    }
};
