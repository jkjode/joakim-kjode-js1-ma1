const cats = [
    {
        name: "Blob",
        age: 10
    },
    {
        name: "Harold",
    },
    {
        name: "Blurt",
        age: 21
    }
];


//Question 1:
//Create an object called cat.
//Give the object one property called complain. complain's value should be a method (a function) which logs the string "Meow!".

let cat = new Object();

// cat(complain) {
//     function
//     console.log("Meow!");
// }

//Question 2:
//Select the h3 from the HTML using the querySelector method and assign it to a variable called heading.
//Change its innerHTML value to "Updated heading".

var heading = document.querySelector('h3');

heading.innerHTML = `<h3>Updated heading</h3>`;

//Question 3:
//Use the style property on the heading variable from the question above to change its font size to "2em".

heading.style.fontSize = "2em";

//Question 4:
//Add a class to the heading variable called subheading.

heading.addClass = ".subheading"

//Question 5:
//Write code that selects all the p elements on a page and assigns them to a variable called paragraphs.
//Loop through the p elements and change the colour of each to "red".

var paragraphs = document.getElementsByTagName('p');

// paragraphs.forEach(element => {
//     element.style.color = 'red'
// });

//Question 6:
//Select the div with a class of results, assign it to a variable called resultsContainer and set its inner HTML to be <p>New paragraph</p> and its background colour to be yellow.

var resultsContainer = document.getElementsByClassName('.results');

resultsContainer.innerHTML = '<p>Newparagraph</p>';
resultsContainer.style.backgroundColor = "yellow";

//Question 7:
//Create a function that has one parameter called list.
//Inside the function, loop through the list parameter and console log the name property in each object.
//Call the function and pass in the cats variable in the script.js file in the repo.

var this = "hello world"
console.log(this);
