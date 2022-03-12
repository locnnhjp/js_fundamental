let year = parseInt(prompt("Nhap so nam vay"));
let amount = parseInt(prompt("Nhap so tien vay"));
let interest_rate = parseFloat(prompt("Nhap lai suat (%)"));

let total = amount + year * amount * interest_rate / 100;
document.write("So tien phai tra sau " + year + " nam la: " + total);