function getData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => displayData(data))
        .catch(error => console.error('Error:', error));
}

function displayData(data) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = JSON.stringify(data, null, 2);
}

function getPosts() {
    getData('https://jsonplaceholder.typicode.com/posts');
}

function getComments() {
    getData('https://jsonplaceholder.typicode.com/comments');
}

function getUsers() {
    getData('https://jsonplaceholder.typicode.com/users');
}

function addUser() {
    const newUser = {
        name: 'New User',
        username: 'newuser',
        email: 'newuser@example.com'
    };

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        body: JSON.stringify(newUser),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

function addPost() {
    const newPost = {
        userId: 1,
        title: 'New Post',
        body: 'This is a new post.'
    };

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify(newPost),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}

function addComment() {
    const newComment = {
        postId: 1,
        name: 'New Comment',
        email: 'newcomment@example.com',
        body: 'This is a new comment.'
    };

    fetch('https://jsonplaceholder.typicode.com/comments', {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error('Error:', error));
}