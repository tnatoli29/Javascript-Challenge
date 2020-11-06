// from data.js
var tableData = data;
// console.log(tableData)

//Using D3 we wil create a table to the website and populate it with the data
//Grab the tbody from the HTML
function displayTable(sightings){

    var tbody = d3.select("tbody");

    sightings.forEach((UFO) => {

     var row = tbody.append("tr");

//set up row variable to add append a table row
        Object.entries(UFO).forEach(([key, value]) => {

// set up the keys and values for each entry and iterate over them
        var cell = row.append("td");

// append the data to a cell
        cell.text(value);
        });
    });
};

displayTable(tableData)

// clear the table for new data
function removeTbody() {
  d3.select("tbody")
    .selectAll("tr").remove()
    .selectAll("td").remove();
};


var button = d3.select("#filter-btn");
var form = d3.select("#form");

button.on("click", runEnter);
form.on("submit",runEnter);

function runEnter() {
//Prevent the page from refreshing
    d3.event.preventDefault();
    removeTbody();

//Select the input element and get HTML node
    var inputElement = d3.select("#datetime");

//Get the value property of input element
    var inputValue = inputElement.property("value");

    if (inputValue.trim() === "" ) {
    // display the whole database if the date field has no date
    var filteredData = tableData;

  } else {
    // otherwise, display the filtered dataset
    var filteredData = tableData.filter(sighting => sighting.datetime === inputValue.trim());
  };

    displayTable(filteredData)
};



