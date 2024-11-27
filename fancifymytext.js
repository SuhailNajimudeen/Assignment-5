// Initial alert to verify JS functionality
alert("Hello, world!");

// Function to increase text size
function makeTextBigger() {
    const textArea = document.getElementById("textArea");
    textArea.style.fontSize = "24pt";
}


// Function to toggle styles based on radio button selection
function toggleStyles() {
    const textArea = document.getElementById("textArea");
    const fancyRadio = document.getElementById("fancyRadio");

    if (fancyRadio.checked) {
        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    } else {
        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

function makeTextUppercase() {
    const textArea = document.getElementById("textArea");
    let sentences = textArea.value.split("."); 
    
   
    for (let i = 0; i < sentences.length; i++) {
        let sentence = sentences[i].trim();
        if (sentence.length > 0) {
            let words = sentence.split(" "); 
            words[words.length - 1] += "-Moo"; // Add "-Moo" to the last word
            sentences[i] = words.join(". "); 
        }
    }

    textArea.value = sentences.join(". ").toUpperCase(); 
}

//onClick
document.getElementById("biggerButton").onclick = makeTextBigger;
document.getElementById("fancyRadio").onchange = toggleStyles;
document.getElementById("boringRadio").onchange = toggleStyles;
document.getElementById("mooButton").onclick = makeTextUppercase;

