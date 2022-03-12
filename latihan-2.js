var jualMotor = {
  iklan: function () {
    document.write(
      `BU , Saya ${this.nama} , jual Motor ${this.merk} , tahun ${this.tahun} , Bekas`
    );
  },
};
const promosi = Object.create(jualMotor);

(promosi.nama = "Boy"),
  (promosi.merk = "Kawasaki Ninja H2 Carbon"),
  (promosi.tahun = 2019);
promosi.iklan();
