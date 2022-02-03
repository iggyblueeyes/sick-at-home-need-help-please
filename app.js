function setNavButton(buttonID, htmlFileName) {
    document.getElementById(buttonID).onclick = function() {
	window.location = htmlFileName;
    }
}

// Input filtering

function removeLastKeyIfNonLetter(input, lastKey) {
    if (!"abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".includes(lastKey)) {
        input.value = input.value.slice(0, -1);
    }
}

function removeLastKeyIfNonNumeric(input, lastKey) {
    if (!"1234567890".includes(lastKey)) {
        input.value = input.value.slice(0, -1);
    }
}

function removeLastKeyIfTooLong(input, maxLength) {
    if (input.value.length > maxLength) {
	input.value = input.value.slice(0, -1);
    }
}

setNavButton("get-started-1", "getting-started.html");
setNavButton("donate-rapid-tests", "donate-rapid-tests.html");
setNavButton("careers", "careers.html");
setNavButton("about-us", "about-us.html");
setNavButton("home", "index.html");
