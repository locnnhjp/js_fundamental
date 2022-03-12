let radiusInput = prompt("Enter radius")
let radius = parseInt(radiusInput);
let pi = 3.14

let diameter = radius * 2;
let perimeter = diameter * pi;
let area = radius * radius * pi;

document.write("Diameter = " + diameter + "<br>");
document.write("Perimeter = " + perimeter + "<br>");
document.write("Area = " + area + "<br>");