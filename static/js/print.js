
// Shrink up the spacing and change the size of the headers
u('#ingredients').attr("style", "margin-bottom: .5em;")
u('#ingredients').attr("class", "is-size-5")
u('#directions').attr("style", "margin: 0px;")
u('#directions').attr("class", "is-size-5")

// If we have ingredients subheadings, change the h4 headings
u('h4').addClass("is-size-6")
u('h4').attr("style", "margin: 0px;")

// Change the title size
u('#mainTitle').addClass("is-size-4")

// Change the lists margins
var directions = u('ol');
directions.attr("style", "margin-top: 0px; margin-bottom: 0px;")

var ingredients = u('ul');
ingredients.attr("style", "margin-top: 0px; margin-bottom: 0px;")

var listItems = u('li');
listItems.attr("style", "margin-top: 0px;")

// Remove the last <hr> if we have a footnote
var hrs = u('hr')
if (hrs.length > 2) {
    hrs.last().remove()
}

// Remove the footnote links
u(document.getElementsByClassName('footnote-backref')).remove()