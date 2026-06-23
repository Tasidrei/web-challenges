console.clear();

function handleLikeButtonClick(event) {
  const buttonElement = event.target;
  buttonElement.classList.toggle("post__button--liked");
}

const likeButton = document.querySelector('[data-js="like-button"]');
likeButton.addEventListener("click", handleLikeButtonClick);

// Exercise:
// Use document.createElement() and append another social media post to the body.

// create variables
const newPost = document.createElement('article');
const newContent = document.createElement('p');
const newFooter = document.createElement('footer');
const newUserName = document.createElement('span');
const newButton = document.createElement('button');

// configure or assign classes
newPost.classList.add('post');
newContent.classList.add('post_content');
newFooter.classList.add('post_footer');
newUserName.classList.add('post_username');
newButton.classList.add('post_button');

// add text content
newContent.textContent = "This is a new post. Like, comment and share. Thank you.";
newUserName.textContent = "@username";
newButton.textContent = "♥ Like";

// fix the "like" button position
newFooter.style.display = "flex";
newFooter.style.justifyContent = "space-between";
newFooter.style.alignItems = "center";

// add data attribute for JS selection
newButton.setAttribute("data-js", "like-button");

// appending and correct nesting (element.append(childElement1, childElement2);)
newFooter.append(newUserName, newButton);

newPost.append(newContent, newFooter);
//newContent.append(newContent);
//newUserName.append(newUserName);
//newButton.append(newButton);
document.body.append(newPost);

// add event listner to the new like button
newButton.addEventListener("click", handleLikeButtonClick);