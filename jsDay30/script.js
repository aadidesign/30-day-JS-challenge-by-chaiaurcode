document.addEventListener('DOMContentLoaded', () => {
    // Tab switching for authentication forms
    const authTabs = document.querySelectorAll('.auth-tab');
    authTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            document.querySelector('.auth-tab.active').classList.remove('active');
            document.querySelector('.auth-form.active').classList.remove('active');
            tab.classList.add('active');
            document.querySelector(tab.dataset.target).classList.add('active');
        });
    });

    // User Registration
    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('registerUsername').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        if (localStorage.getItem(username)) {
            alert('Username already taken');
            return;
        }

        const user = {
            username,
            email,
            password,
        };
        localStorage.setItem(username, JSON.stringify(user));
        alert('User Registered');
        document.getElementById('auth-tabs').querySelector('[data-target="#loginForm"]').click();
    });

    // User Login
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        const user = JSON.parse(localStorage.getItem(username));

        if (user && user.password === password) {
            alert('Login Successful');
            localStorage.setItem('loggedInUser', username);
            document.getElementById('profile-section').classList.remove('hidden');
            document.getElementById('createPost').classList.remove('hidden');
            document.getElementById('postsContainer').classList.remove('hidden');
            document.getElementById('notificationsContainer').classList.remove('hidden');
            displayProfile(user);
            displayPosts();
            displayNotifications();
            setActiveNav('profile');  // Set the profile link as active after login
        } else {
            alert('Invalid Credentials');
        }
    });

    // Update Profile
    document.getElementById('profileForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('profileUsername').value;
        const email = document.getElementById('profileEmail').value;
        const user = JSON.parse(localStorage.getItem(localStorage.getItem('loggedInUser')));

        if (user) {
            user.username = username;
            user.email = email;
            localStorage.setItem(username, JSON.stringify(user));
            alert('Profile Updated');
            localStorage.setItem('loggedInUser', username);
            setActiveNav('profile');  // Set the profile link as active after updating
        } else {
            alert('User not found');
        }
    });

    // Create Post
    document.getElementById('postForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const postText = document.getElementById('postText').value;
        const username = localStorage.getItem('loggedInUser');

        const post = {
            text: postText,
            user: username,
            likes: 0,
            comments: [],
        };

        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.push(post);
        localStorage.setItem('posts', JSON.stringify(posts));
        displayPosts();
    });

    // Display Posts
    function displayPosts() {
        const postsContainer = document.getElementById('postsContainer');
        postsContainer.innerHTML = '';

        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.forEach((post, index) => {
            const postElement = document.createElement('div');
            postElement.classList.add('post');

            postElement.innerHTML = `
                <div class="post-header">
                    <span><strong>${post.user}</strong></span>
                    <span class="like" data-index="${index}">Like (${post.likes})</span>
                </div>
                <p>${post.text}</p>
                <div class="comment">Comment</div>
            `;

            // Like Functionality
            postElement.querySelector('.like').addEventListener('click', () => {
                post.likes++;
                localStorage.setItem('posts', JSON.stringify(posts));
                displayPosts();
            });

            postsContainer.appendChild(postElement);
        });
    }

    // Display Profile Information
    function displayProfile(user) {
        document.getElementById('profileUsername').value = user.username;
        document.getElementById('profileEmail').value = user.email;
    }

    // Display Notifications
    function displayNotifications() {
        const notificationsContainer = document.getElementById('notificationsContainer');
        notificationsContainer.innerHTML = '';

        const posts = JSON.parse(localStorage.getItem('posts')) || [];
        posts.forEach((post) => {
            if (post.likes > 0) {
                const notification = document.createElement('div');
                notification.classList.add('notification');
                notification.innerText = `${post.user} has ${post.likes} likes on a post.`;
                notificationsContainer.appendChild(notification);
            }
        });
    }

    // Check if a user is already logged in
    if (localStorage.getItem('loggedInUser')) {
        const user = JSON.parse(localStorage.getItem(localStorage.getItem('loggedInUser')));
        document.getElementById('profile-section').classList.remove('hidden');
        document.getElementById('createPost').classList.remove('hidden');
        document.getElementById('postsContainer').classList.remove('hidden');
        document.getElementById('notificationsContainer').classList.remove('hidden');
        displayProfile(user);
        displayPosts();
        displayNotifications();
        setActiveNav('profile');  // Set the profile link as active if user is logged in
    }

    // Forgot Password functionality
    document.getElementById('forgotPassword').addEventListener('click', () => {
        const username = prompt('Enter your username:');
        const user = JSON.parse(localStorage.getItem(username));

        if (user) {
            const newPassword = prompt('Enter a new password:');
            user.password = newPassword;
            localStorage.setItem(username, JSON.stringify(user));
            alert('Password updated successfully.');
        } else {
            alert('User not found.');
        }
    });

    // Set active class for navigation links
    function setActiveNav(page) {
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === `#${page}`) {
                link.classList.add('active');
                document.querySelector(link.getAttribute('href')).classList.remove('hidden');
            } else {
                link.classList.remove('active');
                document.querySelector(link.getAttribute('href')).classList.add('hidden');
            }
        });
    }

    // Handle navigation link clicks
    document.querySelectorAll('nav ul li a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            setActiveNav(targetId);
        });
    });
});
