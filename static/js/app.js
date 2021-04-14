var tableData = data;
console.log(tableData);

var tbody = d3.select("tbody");

function buildTable(UFOData){
    tbody.html("");
    UFOData.forEach(element => {
        // add rows
        var row = tbody.append("tr");
        // grab each column or key-value pair
        Object.entries(element).forEach(function([key, value]){
    
            var cell = row.append("td");
            // console.log(`${key}:${value}`)
            cell.text(value);
        });
    });
    
}
buildTable(tableData);

// 1 Grab a handle on the input field. The id is called datetime.

// 2 Grab a handle on the Filter Table button. The id is filter-btn.
var button = d3.select("#filter-btn");

// 3 Install an event listener on the button.
button.on("click", function(){
    console.log(`button clicked`);
    d3.event.preventDefault();
    var inputField = d3.select("#datetime").node().value;
    console.log(inputField);    

    // Build a filter that uses inputField to filter table data
// and uses the table filtered data to rebuild the table in lines 6-16.

    var filteredData = tableData;
    console.log(filteredData);
    if (inputField != ""){
        filteredData = filteredData.filter(function(row){
            if(row.datetime === inputField){
                return true;
            }
            else return false;
        });    
    }
    console.log(filteredData);

    buildTable(filteredData);

});
