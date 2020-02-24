//selecting and storing the heading div in a variable
const heading = document.querySelector("h1");

//selecting all paragraphs and storing them in a variable
const paragraph = document.querySelectorAll("p")

//code which replaces the word "The" with "Replaced"  inside the heading
const replacedHeading = heading.innerText.replace("The", "Replaced");

//code which replaces all instances of the word "The" with "Replaced" and the word "the" with "replaced"  inside the first paragraph.
const replacedParagraphOne = paragraph[0].innerText.replace(/the/g, "replaced").replace(/The/g, "Replaced")

//code which replaces all instances of the word "The" with "Replaced" and the word "the" with "replaced"  inside the seccond paragraph.
const replacedParagraphTwo = paragraph[1].innerText.replace(/the/g, "replaced").replace(/The/g, "Replaced")

// the function to run after the delay
function updateText() {
    heading.innerText = replacedHeading;
    paragraph[0].innerText = replacedParagraphOne;
    paragraph[1].innerText = replacedParagraphTwo;
}

// 4000 milliseconds = 4 seconds
// the function above will run after four seconds
setTimeout(updateText, 4000);
