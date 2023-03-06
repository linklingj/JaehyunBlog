// Get the container element to display the posts
const container = document.getElementById('main-container');

// Retrieve the posts from local storage
const posts = JSON.parse(localStorage.getItem('posts') || '[]');
console.log(posts);

// Iterate over the posts and generate HTML elements for each post
for (const post of posts) {
  // Create HTML elements for the post data
    const postContainer = document.createElement('div');
    postContainer.className = 'box-container-c';
    postContainer.id = 'post';

    const headContainerEl = document.createElement('div');
    headContainerEl.className = 'box-container-r';
    headContainerEl.id = 'post-head';

    const titleEl = document.createElement('h2');
    titleEl.textContent = post.title;

    const dateEl = document.createElement('p');
    dateEl.innerHTML = 'Published on <strong>' + post.date.substring(0, 10) + '</strong>';

    headContainerEl.appendChild(titleEl);
    headContainerEl.appendChild(dateEl);

    postContainer.appendChild(headContainerEl);
    
    if (post.image) {
        const imageEl = document.createElement('img');
        imageEl.src = post.image;
        postContainer.appendChild(imageEl);
    }

    const contentEl = document.createElement('p');
    contentEl.textContent = post.content;
    
    postContainer.appendChild(contentEl);

    container.appendChild(postContainer);
}
