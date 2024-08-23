// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Initialize variables
    let users = JSON.parse(localStorage.getItem('users')) || [];
    let posts = JSON.parse(localStorage.getItem('posts')) || [];
    let currentUser = localStorage.getItem('loggedInUser');

    // Event Listeners
    document.getElementById('login-btn').addEventListener('click', login);
    document.getElementById('register-btn').addEventListener('click', register);
    document.getElementById('post-btn').addEventListener('click', createPost);
    document.getElementById('show-register').addEventListener('click', showRegisterForm);
    document.getElementById('show-login').addEventListener('click', showLoginForm);
    document.getElementById('show-forgot-password').addEventListener('click', showForgotPasswordForm);
    document.getElementById('show-login-from-forgot').addEventListener('click', showLoginForm);
    document.getElementById('reset-password-btn').addEventListener('click', requestPasswordReset);
    document.getElementById('logout-btn').addEventListener('click', logout);
    document.getElementById('delete-account-btn').addEventListener('click', deleteAccount);
    document.getElementById('back-to-users').addEventListener('click', showUserList);
    document.getElementById('back-to-posts').addEventListener('click', showPostsFeed);

    function login() {
        const username = document.getElementById('login-username').value;
        const password = document.getElementById('login-password').value;

        const user = users.find(u => u.username === username && u.password === password);
        if (user) {
            currentUser = username;
            localStorage.setItem('loggedInUser', username);
            updateUIForLoggedInUser();
        } else {
            alert('Invalid username or password');
        }
    }

    function register() {
        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;
        const email = document.getElementById('register-email').value;

        if (users.some(u => u.username === username)) {
            alert('Username already exists');
            return;
        }

        users.push({ username, password, email });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful');
        showLoginForm();
    }

    function createPost() {
        const content = document.getElementById('post-content').value;
        if (!content.trim()) {
            alert('Post content cannot be empty');
            return;
        }

        const timestamp = new Date().toLocaleString();
        const post = { username: currentUser, content, timestamp };
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));
        displayPosts();
        document.getElementById('post-content').value = ''; // Clear textarea
    }

    function displayPosts() {
        const postsFeed = document.getElementById('posts-feed');
        postsFeed.innerHTML = posts.map((post, index) => `
            <div class="post">
                <div class="username">${post.username}</div>
                <div class="timestamp">${post.timestamp}</div>
                <div class="content">${post.content}</div>
                ${post.username === currentUser ? `
                    <div class="actions">
                        <button onclick="deletePost(${index})">Delete</button>
                    </div>
                ` : ''}
            </div>
        `).join('');
    }

    window.deletePost = function(index) {
        if (confirm('Are you sure you want to delete this post?')) {
            posts.splice(index, 1);
            localStorage.setItem('posts', JSON.stringify(posts));
            displayPosts();
        }
    }

    function showUserList() {
        document.getElementById('dashboard').style.display = 'none';
        document.getElementById('user-list').style.display = 'block';
        document.getElementById('view-user-posts').style.display = 'none';
        populateUserList();
    }

    function populateUserList() {
        const userList = document.getElementById('users');
        userList.innerHTML = users.map(user => `
            <li data-username="${user.username}">
                ${user.username}
            </li>
        `).join('');

        userList.querySelectorAll('li').forEach(item => {
            item.addEventListener('click', viewUserPosts);
        });
    }

    function viewUserPosts(e) {
        const username = e.target.getAttribute('data-username');
        if (username) {
            const userPosts = posts.filter(post => post.username === username);
            document.getElementById('user-posts-feed').innerHTML = userPosts.map(post => `
                <div class="post">
                    <div class="username">${post.username}</div>
                    <div class="timestamp">${post.timestamp}</div>
                    <div class="content">${post.content}</div>
                </div>
            `).join('');
            document.getElementById('dashboard').style.display = 'none';
            document.getElementById('user-list').style.display = 'none';
            document.getElementById('view-user-posts').style.display = 'block';
        }
    }

    function showRegisterForm() {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'block';
        document.getElementById('forgot-password-form').style.display = 'none';
    }

    function showLoginForm() {
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('forgot-password-form').style.display = 'none';
        document.getElementById('login-form').style.display = 'block';
    }

    function showForgotPasswordForm() {
        document.getElementById('login-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('forgot-password-form').style.display = 'block';
    }

    function requestPasswordReset() {
        const email = document.getElementById('forgot-email').value;
        const username = document.getElementById('forgot-username').value;
        const user = users.find(u => u.email === email && u.username === username);

        if (user) {
            const token = generateToken();
            passwordResetTokens.push({ username: user.username, token });
            localStorage.setItem('passwordResetTokens', JSON.stringify(passwordResetTokens));

            alert(`A password reset link has been simulated. Use this token to reset your password: ${token}`);
            showResetPasswordForm(token);
        } else {
            alert('Email or username not found');
        }
    }

    function showResetPasswordForm(token) {
        document.getElementById('forgot-password-form').style.display = 'none';
        document.getElementById('reset-password-form').style.display = 'block';
        document.getElementById('reset-token').value = token;
    }

    function resetPasswordWithToken() {
        const token = document.getElementById('reset-token').value;
        const newPassword = document.getElementById('new-password').value;

        const tokenEntry = passwordResetTokens.find(t => t.token === token);
        if (tokenEntry) {
            const user = users.find(u => u.username === tokenEntry.username);
            if (user) {
                user.password = newPassword;
                localStorage.setItem('users', JSON.stringify(users));
                alert('Password has been reset successfully');
                showLoginForm();
            } else {
                alert('User not found');
            }
        } else {
            alert('Invalid token');
        }
    }

    function generateToken() {
        return Math.random().toString(36).substr(2); // Simple token generator
    }

    function logout() {
        localStorage.removeItem('loggedInUser');
        currentUser = null;
        updateUIForLoggedOutUser();
    }

    function deleteAccount() {
        if (confirm('Are you sure you want to delete your account?')) {
            users = users.filter(user => user.username !== currentUser);
            posts = posts.filter(post => post.username !== currentUser);
            localStorage.setItem('users', JSON.stringify(users));
            localStorage.setItem('posts', JSON.stringify(posts));
            logout();
        }
    }

    function showPostsFeed() {
        document.getElementById('user-list').style.display = 'none';
        document.getElementById('view-user-posts').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
    }

    function updateUIForLoggedInUser() {
        document.getElementById('auth-forms').style.display = 'none';
        document.getElementById('dashboard').style.display = 'block';
        document.getElementById('logout-btn').classList.remove('hidden');
        document.getElementById('delete-account-btn').classList.remove('hidden');
        displayPosts();
        populateUserList();
    }

    function updateUIForLoggedOutUser() {
        document.getElementById('dashboard').style.display = 'none';
        document.getElementById('auth-forms').style.display = 'block';
        document.getElementById('logout-btn').classList.add('hidden');
        document.getElementById('delete-account-btn').classList.add('hidden');
    }
});
