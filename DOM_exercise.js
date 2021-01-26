/* JavaScript DOM Exercises 01 */

/*
  Exercise 01
  -----------
  Highlight all of the words over 8 characters long in the paragraph text (with a yellow background for example)
*/

const highlight = document.querySelector("p");
highlight.innerHTML = highlight.innerText
  .split(" ")
  .map((str) =>
    str.length > 8
      ? `<span style="background: linear-gradient(transparent 0%, #f6ff5f 0%)">${str}</span>`
      : str
  )
  .join(" ");

// const Highlight = document.querySelector("p");
// Highlight.innerHTML = Highlight.innerText
//   .split(" ")
//   .map((str) =>
//     str.length > 8
//       ? `<span style="background-color: #F6FF5F">${str}</span>`
//       : str
//   )
//   .join(" ");

// const paragraph = document.querySelector("p");
// paragraph.innerHTML = paragraph.innerText
//   .split(" ")
//   .map((word) =>
//     word.length > 8
//       ? `<span style="background-color: yellow">${word}</span>`
//       : word
//   )
//   .join(" ");

/*
  Exercise 02
  -----------
  Add a link back to the source of the text after the paragraph tag.
  (http://officeipsum.com/)
*/

const textLink = document.createElement("a");

textLink.innerHTML = textLink.innerText;
document.body.appendChild(textLink);
textLink.href = "http://officeipsum.com/";
textLink.innerText = "THIS IS THE LINK";

const allLinks = document.querySelectorAll("a");

for (let textLink of allLinks) {
  textLink.style.color = "red";
  textLink.style.textDecorationColor = "green";
  textLink.style.textDecorationStyle = "wavy";
}

/*
  Exercise 03
  -----------
  Split each new sentence on to a separate line in the paragraph text.
  A sentence can be assumed to be a string of text terminated with a period (.)
*/

const paragraph = document.querySelector("p");
paragraph.innerHTML = paragraph.innerHTML
.split(".")
.join("</p><p>");

/* 
  Exercise 04
  -----------
  Count the number of words in the paragraph tag and display the count afer the heading.
  You can assume that all words are separated by one singular whitespace.
*/


const wordCounter = highlight.innerText.split(" ").length;

const wordCounterElement = document.createElement("div");

wordCounterElement.innerText = `${wordCounter} words`;

document.body.insertBefore(wordCounterElement, highlight);


/*
  Exercise 05
  -----------
  Replace all question marks (?) with thinking faces (🤔) and exclamation marks (!) with astonished faces (😲) 
*/
