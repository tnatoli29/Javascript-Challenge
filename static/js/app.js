// from data.js
var tableData = data;
// console.log(tableData)

//Using D3 we wil create a table to the website and populate it with the data
//Grab the tbody from the HTML
var tbody = d3.select("tbody");


tableData.forEach((UFO) => {
    var row = tbody.append("tr");
//set up row variable to add append a table row
    Object.entries(UFO).forEach(([key, value]) => {
// set up the keys and values for each entry and iterate over them
    var cell = row.append("td");
// append the data to a cell
    cell.text(value);
    });
});



var button = d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
//Prevent the page from refreshing
    d3.event.preventDefault();
//Select the input element and get HTML node
    var inputElement = d3.select("#datetime");
//Get the value property of input element
    var inputValue = inputElement.property("value");
//Console log the user's input
    console.log(inputValue);
//Filter the data based on user's input
    var filteredData = tableData.filter(date => date.datetime === inputValue);
//Console log the filtered data based on the user's input
    console.log(filteredData);
};


//#############################
//Part 2


