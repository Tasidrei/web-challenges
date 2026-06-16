// console.clear();

/*
1. Create the data for a small social media post. Create a constant variable for each data point listed below:
	- a title for the post
	- text content for the post
	- the number of likes the post has received
	- the user who created the post
	- a boolean called `isReported` to indicate whether the post has been reported
*/

// --v-- write your code here --v--
const postTitle = 'Learning JavaScript!';

// --^-- write your code here --^--
const postText = 'Just started learning JavaScript today. So excited to dive into the world of programming!';
/*
2. Log all variables to the console. Then increase the number of likes by one and log the updated like count. Modify your code from step 1 if necessary.
*/
let likesCount = 35;
let updatedLikesCount = likesCount + 1;
// --v-- write your code here --v--

const postUser = 'Alice';
// --^-- write your code here --^--
const isReported = false;

console.log(postTitle);
console.log(postText);
console.log(likesCount);
console.log(updatedLikesCount);
console.log(postUser);
console.log(isReported);