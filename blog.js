// Storing form element in a variable

const commentForm = document.querySelector('form');

// adding event listener to form

commentForm.addEventListener('submit', function(e){
    // preventing default refresh on form
    e.preventDefault();

    // storing name input in variable
    const userName = document.getElementById('name');

    // storing message input in a variable
    const userMessage = document.querySelector('textarea');

    // Creating elements for HTML structure - Again feels like there should be a better way. InnerHTML?
    const commentDiv = document.createElement('div');
    const commentText = document.createElement('div');
    const commentName = document.createElement('p');
    const commentMessage = document.createElement('p');

    // Querying Date and saving to variable

    const date = new Date().toUTCString().slice(5, 16);

    // Update Paragraphs to have correct user content

    commentName.textContent = `${date} by ${userName.value}`

    commentMessage.textContent = userMessage.value;

    // Querying outter div that we want to start appending to

    const commentSectionDiv = document.getElementById('comments');

    // Appending children to each other and setting correct classes to create HTML structure - Must be better way?

    commentSectionDiv.appendChild(commentDiv).setAttribute('class', 'comment');
    commentDiv.appendChild(commentText).setAttribute('class', 'commentText');
    commentText.appendChild(commentName)
    commentText.appendChild(commentMessage);

    // There must be a better way of writing this than appending four childer to the outer div?


    console.log('Success!')
})