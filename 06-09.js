var a = 10
document.write("The value of a is: " + a);
document.write("<hr />");

document.write("The value of ++a is: " + ++a);document.write("<br />");
document.write("Now the value of a is: " + a);document.write("<br />");document.write("<br />");

document.write("The value of a++ is: " + a++);document.write("<br />");
document.write("Now the value of a is: " + a);document.write("<br />");document.write("<br />");

document.write("The value of --a is: " + --a);document.write("<br />");
document.write("Now the value of a is: " + a);document.write("<br />");document.write("<br />");

document.write("The value of a-- is: " + a--);document.write("<br />");
document.write("Now the value of a is: " + a);document.write("<br />");document.write("<br />");document.write("<hr />");

var a = 2;
var b = 1;
document.write("The value of a is: " + a);document.write("<br />");
document.write("The value of b is: " + b);document.write("<br />");document.write("<br />");

document.write("The value of --a is: 1");document.write("<br />");
document.write("The value of --a - --b is: 1");document.write("<br />");
document.write("The value of --a - --b + ++b is: 2");document.write("<br />");
document.write("The value of --a - --b + ++b + b-- is: 3");document.write("<br />");document.write("<br />");
document.write("The result of --a - --b + ++b + b-- is: " + (--a - --b + ++b +b--));document.write("<br />");document.write("<br />");document.write("<hr />");

var name = prompt("Enter your name");
var greet = "Hello " + name + "!\n" + "Welcome to JavaScript Assignment.";
alert(greet);

var multiplication = prompt("Enter a Number");

if (multiplication > 0){
    for (var i = 1; i <11; i++) {
        document.write(multiplication + " x " + i + " = " + (multiplication * i) + "<br />");
    }
}
else {
    for (var i = 1; i <11; i++) {
        document.write("5 x " + i + " = " + (5 * i) + "<br />");
    }    
}

var sub1 = prompt("Please enter first subject");
var sub2 = prompt("Please enter second subject");
var sub3 = prompt("Please enter third subject");
var marks1 = +prompt("Please enter " + sub1 + " marks");
var marks2 = +prompt("Please enter " + sub2 + " marks");
var marks3 = +prompt("Please enter " + sub3 + " marks");
var total = marks1 + marks2 + marks3;
var subMarks = 100;
var totalSubMarks = 300;
var percentage = total / totalSubMarks * 100;

document.write("<hr /><table><thead><tr><td>SUBJECT</td><td>TOTAL MARKS</td><td>OBTAINED MARKS</td><td>PERCENTAGE</td></thead>");
document.write("<tbody><tr><td>" + sub1 + "</td><td>" + subMarks + "</td><td>" + marks1 + "</td><td>" + marks1 + "%</td></tr>");
document.write("<tr><td>" + sub2 + "</td><td>" + subMarks + "</td><td>" + marks2 + "</td><td>" + marks2 + "%</td></tr>");
document.write("<tr><td>" + sub3 + "</td><td>" + subMarks + "</td><td>" + marks3 + "</td><td>" + marks3 + "%</td></tr>");
document.write("<tr><td>Total</td><td>" + totalSubMarks + "</td><td>" + total + "</td><td>" + percentage + "%</td></tr></tbody></table>");