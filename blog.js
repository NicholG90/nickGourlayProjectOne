// Storing form element in a variable

const commentForm = document.querySelector('form');

// adding event listener to form

commentForm.addEventListener('submit', function(e){
    // preventing default refresh on form
    e.preventDefault();

    // storing name input in variable
    const userName = document.querySelector('#name');

    // storing message input in a variable
    const userMessage = document.querySelector('textarea');

    // Creating elements for HTML structure - Again feels like there should be a better way. InnerHTML?
    const commentDiv = document.createElement('div');
    const commentText = document.createElement('div');
    const commentName = document.createElement('p');
    const commentMessage = document.createElement('p');
    const commentImage = document.createElement('div');

    // Removing lastComment Class from former last comment

    const lastComment = document.querySelector('.lastComment');
    lastComment.classList.remove('lastComment');


    // Querying Date and saving to variable

    const date = new Date()

    // Breaking down date so it can be formatted correctly on user comment.

    const weekDay = date.toLocaleString('default', { weekday: 'long' });
    const month = date.toLocaleString('default', { month: 'long' });
    const day = date.getDate();
    const year = date.getFullYear();


    // Adding Ordinal Value to Date - Source https://stackoverflow.com/questions/13627308/add-st-nd-rd-and-th-ordinal-suffix-to-a-number - Apparently originally from Shopify
    function getNumberWithOrdinal(n) {
        var s = ["th", "st", "nd", "rd"],
            v = n % 100;
        return n + (s[(v - 20) % 10] || s[v] || s[0]);
    }

    // Update Paragraphs to have correct user content

    commentName.textContent = `${weekDay} ${month} ${getNumberWithOrdinal(day)}, ${year} by ${userName.value}`

    commentMessage.textContent = userMessage.value;

    // Querying outter div that we want to start appending to

    const commentSectionDiv = document.querySelector('#comments');

    // Appending children to each other and setting correct classes to create HTML structure - Must be better way?
    
    commentSectionDiv.appendChild(commentDiv).setAttribute('class', 'comment lastComment');
    commentDiv.appendChild(commentText).setAttribute('class', 'commentText');
    commentText.appendChild(commentName)
    commentText.appendChild(commentMessage);

    // There must be a better way of writing this than appending four childer to the outer div?

    // Clearing our input by setting it back to an empty string

    userName.value = "";
    userMessage.value = "";

})