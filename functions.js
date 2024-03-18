console.log("functions script loaded");

showMessage();
printMessage('Rahul', "hello");
printMessage("Check");
showCount(6);
checkAge(12);
showMovie(16);

function showMessage() {
    let message = "I can't do anything about that";
    console.log(message);
}

function printMessage(from, text) {
    from = '*' + from + '*';
    console.log(from + ': ' + text);
}

function showCount(count) {
    console.log("Show count called: " + count ?? "unknown");
}

function checkAge(age) {
    if (age >= 18) {
        console.log("Yes, the given person is above 18");
        return true;
    } else {
        console.log("Nah , the given person is below 18");
    }
}

function showMovie(age) {
    if (!checkAge(age)) {
        return;
    }
    console.log("Showing you the movie");
}