const cats = [
  {
    name: "Blob",
    age: 10,
  },
  {
    name: "Harold",
  },
  {
    name: "Blurt",
    age: 21,
  },
];

//Question 1:

const cat = {
  complain: complain(),
};

function complain() {
  console.log("Meow!");
}

//Question 2:

var heading = document.querySelector("h3");

heading.innerHTML = "Updated heading";

//Question 3:

heading.style.fontSize = "2em";

//Question 4:

heading.classList.add("subheading");

//Question 5:

var paragraphs = document.querySelectorAll("p");

function changeColor(newcolor) {
  newcolor.style.color = "red";
}

for (var i = 0; i < paragraphs.length; i++) {
  changeColor(paragraphs[i]);
}

//Question 6:

var resultsContainer = document.querySelector(".results");

resultsContainer.innerHTML = "<p>New paragraph</p>";
resultsContainer.style.backgroundColor = "yellow";

//Question 7:

function listOfCats(list) {
  for (var i = 0; i < list.length; i++) {
    console.log(list[i].name);
  }
}

listOfCats(cats);

//Question 8:

const catContainer = document.querySelector(".cat-container");

function createCats(cats) {
  const newHTML = [];
  cats.forEach((cat) => {
    if (cat.age) {
      const HTML = `<div><h5>${cat.name}</h5><p>${cat.age}</p></div>`;
      newHTML.push(HTML);
    } else {
      const HTML = `<div><h5>${cat.name}</h5><p>Age unknown<p></div>`;
      newHTML.push(HTML);
    }
  });
  return newHTML;
}

catContainer.innerHTML = createCats(cats);
