const commonPrefix = function (array) {
  // ortaq herfleri tapmaq ucun bosh string yaradariq
  let result = "";
  // ortaq prefiksleri tapmaq ucun for dongusunu qururuq ve arrayin birinci ve ya ikinci elementini goturur.
  // Sebeb odur ki, biz funksiyadan neche uzunluqlu array geleceyini bilmirik.
  // En azi 2 elementli array arasindan biz ortaq prefiksler axtaracagimizdan ya birinci, ya ikinci elementi gotururuk
  for (let i = 0; i < array[0].length; i++) {
    //funksiyanin sherti budur ki, eger arrayin her bir elementinin i indeksindeki herfi birinci secdiyimiz arrayin i indeksindeki herfine beraberdise
    if (array.every((x) => x.charAt(i) === array[0][i])) {
      // o zaman hemin herfi resulta elave ele
      result += array[i].charAt(i);
      // beraber deyilse dongunu dayandir 
    } else break;
  }
  // aldigimiz neticeni qaytar
  return result;
};

console.log(commonPrefix(["alma", "albalı", "alça"]));
console.log(commonPrefix(["alim", "müəllim", "şagirdə"]));
