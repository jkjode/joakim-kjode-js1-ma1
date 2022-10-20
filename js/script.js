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


//Question 1: (Finished?)

const cat = {
    complain: complain(),
    }

function complain() {
    console.log("Meow!")
} 


//Question 2: (Finished)

var heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";


//Question 3: (Finished)

heading.style.fontSize = "2em";

//Question 4: (Finished)

heading.classList.add("subheading");

//Question 5:
/*Write code that selects all the p elements on a page and assigns them to a variable called paragraphs.
Loop through the p elements and change the colour of each to "red".*/

var paragraphs = document.getElementsByTagName('p');

/* paragraphs.forEach(element => {
     element.style.color = 'red'
 });*/


//Question 6: (Finished)

var resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = '<p>Newparagraph</p>';
resultsContainer.style.backgroundColor = "yellow";

//Question 7:
/*Create a function that has one parameter called list.
Inside the function, loop through the list parameter and console log the name property in each object.
Call the function and pass in the cats variable in the script.js file in the repo.*/


cats.forEach(function (arrayItem) {
    var list = arrayItem.prop1;
    console.log(list)
})


cats.forEach(function(name) {
   // console.log(name);
})


//Question 8:
/*Create a function called createCats. The function will have one parameter called cats.
Inside the function loop through the value passed in as cats and create HTML for each object in the array.
Wrap each item in a div, each name property in an h5 tag and each age property in a p tag.
If the age property is missing, it should display “Age unknown” instead.
Return the HTML from the function.
Call the function and pass in the cats array as the argument.
Assign the return value of the function to the innerHTML property of the element on the HTML page with a class of cat-container.*/


