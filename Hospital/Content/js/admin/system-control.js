$(function () {
    "use strict";

    // for nnumbers  or rows 
    var counter = 1;

    // add new row 
    $("#new-row").click(function () {
        var row = $("table tbody tr:last-of-type").clone(true);
        $("table tbody").append(row);
        counter++;
        row.find("td").text("-");
        row.find("td:first-of-type").text(counter);
    });
    
    // remove las row 
    $("#remove-row").click(function () {
        if( $("table tbody tr").length != 1 ) {
            $("table tbody tr:last-of-type").remove();
            counter--;
        }
    });

    // add new column 
    $("#new-col").click(function () {
       $("thead tr").append("<th> - </th>");
       $("tbody tr").append("<td> - </td>");
    });

    //remove last column 

    $("#remove-col").click(function () {
        if($("thead th").length != 2) {
            $("thead th:last-of-type").remove();
            $("tbody td:last-of-type").remove();
        }
     });
});