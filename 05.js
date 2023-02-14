var num1 = +prompt("Enter first number");
var num2 = +prompt("Enter second number");
var sum = num1 + num2;
var sub = num1 - num2;
var mlt = num1 * num2;
var div = num1 / num2;

document.write("Sum of " + num1 + " and " + num2 + " is " + sum);document.write("<br />");
document.write("Dif of " + num1 + " and " + num2 + " is " + sub);document.write("<br />");
document.write("Product of " + num1 + " and " + num2 + " is " + mlt);document.write("<br />");
document.write("Division of " + num1 + " and " + num2 + " is " + div);;document.write("<br /><br />");

var undefined = "";
var initial = 5;

document.write("Value after variable declaration is: " + undefined);document.write("<br />");
document.write("Initial value: " + initial++);document.write("<br />");
document.write("Value after increment is: " + initial);document.write("<br />");
initial = initial + 7;
document.write("Value after addition is: " + initial);document.write("<br />");
initial = initial - 1;
document.write("Value after decrement is: " + initial);document.write("<br />");
initial = initial % 3;
document.write("The remainder is : " + initial);document.write("<br /><br />");

var ticketPrice = 600;
var totalTicket = 5;

document.write("Total cost to buy " + totalTicket + " tickets to a movie is " + (ticketPrice * totalTicket) + "PKR");document.write("<br /><br />");

var tab = 4

document.write("4 * 1 = " + (4 * 1));document.write("<br />");
document.write("4 * 2 = " + (4 * 2));document.write("<br />");
document.write("4 * 3 = " + (4 * 3));document.write("<br />");
document.write("4 * 4 = " + (4 * 4));document.write("<br />");
document.write("4 * 5 = " + (4 * 5));document.write("<br />");
document.write("4 * 6 = " + (4 * 6));document.write("<br />");
document.write("4 * 7 = " + (4 * 7));document.write("<br />");
document.write("4 * 8 = " + (4 * 8));document.write("<br />");
document.write("4 * 9 = " + (4 * 9));document.write("<br />");
document.write("4 * 10 = " + (4 * 10));document.write("<br />");

var tempF = +prompt("Enter temperature in fahrenheit");
document.write(tempF + "°C = " + ((tempF - 32) * 5/9) + "°F");document.write("<br />");

var tempC = +prompt("Enter temperature in Celcius");
document.write(tempC + "°F = " + ((tempC * 9/5) + 32) + "°C");document.write("<br />");

var priceOfItem1 = 650
var priceOfItem2 = 100
var orderdQuantityOfItem1 = 1 * 3
var orderdQuantityOfItem2 = 1 * 7
var shippingCharges = 100

document.write("<h1>Shopping Cart</h1>");;document.write("<br />");
document.write("Price of item 1 is " + priceOfItem1);;document.write("<br />");
document.write("Ordered quantity of item 1 is " + orderdQuantityOfItem1);;document.write("<br />");

document.write("Price of item 2 is " + priceOfItem2);;document.write("<br />");
document.write("Ordered quantity of item 2 is " + orderdQuantityOfItem2);;document.write("<br />");
document.write("Shipping Charges " + shippingCharges);;document.write("<br /><br />");

document.write("Total cost of your order is " + ((priceOfItem1 * orderdQuantityOfItem1) + (priceOfItem2 * orderdQuantityOfItem2) + shippingCharges));document.write("<br />");

var totalMarks = 980
var marksObtained = 804

document.write("<h1>Marks Sheet</h1>");
document.write("Total marks: " + totalMarks);document.write("<br />");
document.write("Obtained marks: " + marksObtained);document.write("<br /><br />");
document.write("Percentage: " + ((marksObtained / totalMarks) * 100) + "%");document.write("<br /><br />");


var usd= +prompt("Enter amount of USD");
var sr= +prompt("Enter amount of SR");
var usdToPkr = usd * 267.57;
var srToPkr = sr * 71.31;

document.write("<h1>Currency In PKR</h1>")
document.write("Total currency in PKR: " + ((usd * usdToPkr) + (sr * srToPkr)));document.write("<br /><br />");

var age = 19
document.write("Age: " + (age + 5 * 10 / 2));document.write("<br />");

var currentYear = 2023;
var birthYear = +prompt("Enter your birth year");
var age = currentYear - birthYear;

document.write("<h1>Age Calculator</h1>");
document.write("Birth Year: " + birthYear);document.write("<br />");
document.write("Current Year: " + currentYear);document.write("<br />");
document.write("They are either "  + age + " or " + (age -1) + " years old");document.write("<br />");


var radius = 20
var circumference = 2 * 22/7 * radius
var area = 22/7 * (radius * radius)

document.write("<h1>The Geometrizer:</h1>");
document.write("The circumference is " + circumference);document.write("<br />");
document.write("The area is " + area);document.write("<br />");


var snacks = "Chocolate Chip";
var myCurrentAge = 19;
var estMaxAge = 50;
var perDay = 3;
var daysInYear = 365.24;
var remAge = estMaxAge - myCurrentAge;
var snacksReq = (perDay * daysInYear) * remAge;
document.write("<h1>Life Time Supply Calculator</h1>");
document.write("Favorite Snacks: " + snacks);document.write("<br />");
document.write("Current Age: " + myCurrentAge);document.write("<br />");
document.write("Estimated Maximum Age: " + estMaxAge);document.write("<br />");
document.write("Amount of snacks per day: " + perDay);document.write("<br />");
document.write("You will need " + snacksReq + " to last you until the ripe old age of " + estMaxAge);document.write("<br />");