// function to set new paragraph text 
function setParagraphText() {
    var paragraph = document.getElementById('myParagraph');
    var newTextInput = document.getElementById('newTExtInput');
    var output = document.getElementById('output');
    var newText = newTextInput.value;


if (newText.trim() === '') {
    output.textContent = "Please enter some text to set!"
} else {
    paragraph.textContent = newText;
    output.textContent = 'Paragraph text has been uploaded!'
    newTextInput.value = '';  // Clear the input field
}
}

// function to toggle the image source 
function toggleImage() {
    var image = document.getElementById('myImage');
    var output = document.getElementById('output');

    if (image.src.includes('/images/whatsapp-logo.png')) {
        image.src = './images/instagram-logo.png';
        output.textContent = 'Image has been changed to the second Image!'
    } else {
        image.src = './images/whatsapp-logo.png';
        output.textContent = 'Image has been changed to the first Image'
    }
}

// function to hide the image 
 
function hideImage() {
    var image = document.getElementById('myImage');
    var output = document.getElementById('output');
    image.style.display = 'none';
    output.textContent = 'Image is now hidden!'
}

// function to show the image 


function showImage() {
    var image = document.getElementById('myImage');
    var output = document.getElementById('output');
    image.style.display = 'block';
    output.textContent = 'Image is now visible!'
}