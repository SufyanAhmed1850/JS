var userCity = prompt("Enter City Name");

if (userCity == "Karachi" || userCity == "karachi") {
    alert("Welcome to the City of Lights");
}
else {
    alert("Enter Karachi & check the result");
}

var gender = prompt("Enter Your Gender");

if (gender == "Male" || gender == "male") {
    alert("Good Morning Sir.");
}
else if (gender == "Female" || gender == "female") {
    alert("Good Morning Ma’am.");
}
else {
    alert("Enter Male or Female");
}

var color = prompt("Please enter a color of road traffic signal.")


if (color == "Red" || color == "red") {
    document.write("<table><thead><tr><td>SIGNAL COLOR</td><td>MESSAGE</td></thead>");
    document.write("<thead><tr><td>Red</td><td>Must Stop</td></thead>");
    document.write("<tbody><tr><td>Yellow</td><td>Ready to move</td></tbody>");
    document.write("<tbody><tr><td>Green</td><td>Move now</td></tbody></table>");
}
else if (color == "Green" || color == "green") {
    document.write("<table><thead><tr><td>SIGNAL COLOR</td><td>MESSAGE</td></thead>");
    document.write("<tbody><tr><td>Red</td><td>Must Stop</td></tbody>");
    document.write("<tbody><tr><td>Yellow</td><td>Ready to move</td></tbody>");
    document.write("<thead><tr><td>Green</td><td>Move now</td></thead></table>");
}
else if (color == "Yellow" || color == "yellow") {
    document.write("<table><thead><tr><td>SIGNAL COLOR</td><td>MESSAGE</td></thead>");
    document.write("<tbody><tr><td>Red</td><td>Must Stop</td></tbody>");
    document.write("<thead><tr><td>Yellow</td><td>Ready to move</td></thead>");
    document.write("<tbody><tr><td>Green</td><td>Move now</td></tbody></table>");
}
else {
    document.write("<h3>PLEASE ENTER RED, YELLOW OR GREEN COLOR.</h3>");
}

var fuel = prompt("Please enter the fuel remaining in your car");

if (fuel <= 0.25) {
    document.write("Please refill the fuel in your car")
}
else {
    document.write("Refill in your car is not nessesary")
}