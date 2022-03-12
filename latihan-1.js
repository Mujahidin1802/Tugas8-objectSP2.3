var mobil = {
  merek: "Rolls-Royce Boat Tail",
  harga: 400 + " Miliar",
  warna: "Blue Doff",
  gas: function () {
    return "Mobil Melaju";
  },
  rem: function () {
    return "Mobil Berhenti";
  },
};
document.write("Mobil ", mobil, "<br><br>");
document.write("Merk = ", mobil.merek, "<br>");
document.write("Harga = ", mobil.harga, "<br>");
document.write("Warna = ", mobil.warna, "<br>");
document.write("Gas = ", mobil.gas(), "<br>");
document.write("Rem = ", mobil.rem(), "<br><br><br>");
////////
var motor = {
  merek: "Kawasaki Ninja H2 Carbon",
  harga: 515 + " Juta",
  warna: "Green Silver ",
  gas: function () {
    return "Motor Melaju";
  },
  rem: function () {
    return "Motor Berhenti";
  },
};
document.write("Motor ", motor, "<br><br>");
document.write("Merk = ", motor.merek, "<br>");
document.write("Harga = ", motor.harga, "<br>");
document.write("Warna = ", motor.warna, "<br>");
document.write("Gas = ", motor.gas(), "<br>");
document.write("Rem = ", motor.rem(), "<br><br><br>");
////////
var handphone = {
  merek: "Iphone 13 Pro Max",
  kapasitas: 128 + " Gb",
  warna: "Biru Sierra",
  layar: 6.7 + " inci",
  turnOn: function () {
    return "Handphone Menyala";
  },
  turnOff: function () {
    return "Handphone Mati";
  },
};
document.write("Handphone ", handphone, "<br><br>");
document.write("Brand  = ", handphone.merek, "<br>");
document.write("RAM = ", handphone.kapasitas, "<br>");
document.write("Warna = ", handphone.warna, "<br>");
document.write("Layar = ", handphone.layar, "<br>");
document.write("Turn On = ", handphone.turnOn(), "<br>");
document.write("Turn Off = ", handphone.turnOff(), "<br><br><br>");
////////
var laptop = {
  merek: "ASUS Zenbook Pro Duo 15 OLED (UX582) ",
  processor: " Intel Core i9",
  harga: 51 + " Juta",
  turnOn: function () {
    return "Laptop Menyala";
  },
  turnOff: function () {
    return "Laptop Mati";
  },
};
document.write("Laptop ", laptop, "<br><br>");
document.write("Brand  = ", laptop.merek, "<br>");
document.write("Processor = ", laptop.processor, "<br>");
document.write("Harga = ", laptop.harga, "<br>");
document.write("Turn On = ", laptop.turnOn(), "<br>");
document.write("Turn Off = ", laptop.turnOff(), "<br><br><br>");
/////////
var TV = {
  merek: "Panasonic TV LED 32 inc",
  konsumsiDaya: 63 + " Watt",
  layar: 1366 + " x " + 768 + " HD",
  turnOn: function () {
    return "TV Menyala";
  },
  turnOff: function () {
    return "TV Mati";
  },
};
document.write("TV LED ", TV, "<br><br>");
document.write("Brand  = ", TV.merek, "<br>");
document.write("Konsumsi Daya = ", TV.konsumsiDaya, "<br>");
document.write("Layar = ", TV.layar, "<br>");
document.write("Turn On = ", TV.turnOn(), "<br>");
document.write("Turn Off = ", TV.turnOff(), "<br><br><br>");
/////////
