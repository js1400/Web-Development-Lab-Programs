$(document).ready(function() {
    $("#appendPBtn").click(function() {
        const paragraphText= $("#Pinput").val();
        if(paragraphText){
            $("#myP").append(" " + paragraphText);
            $("#Pinput").val("");
        }
        else {
            alert("Please enter text to add to the paragraph.");
        }
    });

    $("#appendLBtn").click(function() {
        const listItemText= $("#Linput").val();
        if(listItemText){
            $("#myList").append("<li>"+ listItemText+ "</li>");
            $("#Linput").val("");
        }
        else{
            alert("Please enter text to add to the list.");
        }
    });

    $(".animatedDiv").click(function() {
        $(this).animate({
            width: "180px",
            height: "180px",
            fontSize: "1.2em",
            lineHeight: "180px"
        },800, function() {
            $(this).css("background-color", "darkblue");
        });
    });
});   