function cariluas() {
  jari = formulir.jari.value;
  jari = formulir.jari.value;
  gp = formulir.gp.value;
  tinggi = formulir.tinggi.value;
  //formulir.luas.value = 3.14 * Math.pow(jari + Math.sqrt(Math.pow(jari, 2) + Math.pow(tinggi, 2)));
  formulir.gp.value = Math.sqrt(Math.pow(jari, 2) + Math.pow(tinggi, 2));
  formulir.luas.value = 3.14 * Math.pow(jari, 2) + 3.14 * jari * gp;

  formulir.volume.value = 0.33333333 * 3.14 * jari * jari * tinggi;
}
