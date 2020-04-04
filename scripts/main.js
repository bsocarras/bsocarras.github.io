let myImage = document.querySelector('img');

myImage.onclick = function () {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === './images/IMG_6720.jpeg') {
        myImage.setAttribute('src', 'images/wildcard_image.png');
    } else {
        myImage.setAttribute('src', './images/IMG_6720.jpeg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name.');
    if (!myName || myName === null) {
        setUserName();
    } else {
        localStorage.setItem('name', myName);
        myHeading.innerHTML = 'An Introduction to Brando for ' + myName;
    }
}

if (!localStorage.getItem('name')) {
    setUserName();
} else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'An Introduction to Brando for ' + storedName;
}

myButton.onclick = function () {
    setUserName();
}