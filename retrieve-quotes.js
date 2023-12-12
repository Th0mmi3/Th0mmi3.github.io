console.log(typeof(quotes2))

function addQuotes() {

    fetch("quotes.json")
        .then(response => response.json())
        .then(json => {
            let quotes = json["quotes"];
        
            let quote_html = quotes.reduce((acc, {body, author, submitter}) => 
            acc += `
            <div class="quote-container">
                <span class="quote-body">${body}<br></span>
                <p class="quote-author" id="author">- ${author}</p>
                <p class="blank-space"><br></p>
                <span class="quote-submitter">Submitted by: ${submitter}</span>
                <span class="quote-copy">Click to Copy</span>
            </div>`
            ,``);
        
            document.getElementById("quote-list").innerHTML = quote_html;
        
        
        });
}

addQuotes()

$("div.quote-container").click(function(){
    var span = $(this).find(".quote-body");
    navigator.clipboard.writeText(span.text());
    console.log("heyy")

    /*
    $(this).find(".quote-body").css("color", "white");
    $(this).find(".quote-author").css("color", "white");
    $(this).find(".quote-submitter").css("color", "white");

    setTimeout(() => {
        $(this).find(".quote-body").css("color", "#00000096");
        $(this).find(".quote-author").css("color", "#000000d0");
        $(this).find(".quote-submitter").css("color", "#0000006c");

    }, 2000);
    */

});