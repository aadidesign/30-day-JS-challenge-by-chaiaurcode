document.addEventListener('DOMContentLoaded', () => {
    // User Registration
    document.getElementById('registerForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('registerUsername').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        const user = {
            username,
            email,
            password,
        };
        localStorage.setItem('user', JSON.stringify(user));
        alert('User Registered');
    });

    // User Login
    document.getElementById('loginForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('loginUsername').value;
        const password = document.getElementById('loginPassword').value;
        const user = JSON.parse(localStorage.getItem('user'));

        if (user && user.username === username && user.password === password) {
            alert('Login Successful');
        } else {
            alert('Invalid Credentials');
        }
    });

    // Update Profile
    document.getElementById('profileForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('profileUsername').value;
        const email = document.getElementById('profileEmail').value;
        // Handle Profile Image upload and save it

        const user = JSON.parse(localStorage.getItem('user'));
        user.username = username;
        user.email = email;

        localStorage.setItem('user', JSON.stringify(user));
        alert('Profile Updated');
    });

    // Create Post
    document.getElementById('postForm').addEventListener('submit', (e) => {
        e.preventDefault();
        const postText = document.getElementById('postText').value;

        const post = {
            text: postText,
            user: JSON.parse(localStorage.getItem('user')).username,
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
                    <span class="like">Like (${post.likes})</span>
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

    displayPosts();
    displayNotifications();
});
