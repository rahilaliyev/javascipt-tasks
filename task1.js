

function palindrome(word) {
    //eger sozde ve ya cumlede artiq durgu ishareleri varsa, silmek ucun Regex
    var regex = /[\W_]/g;
    //eger soz ve ya cumlede boyuk herfler varsa onu balaca etmek ve durgu isharelerini silmek ucun funksiya
    var lowWord = word.toLowerCase().replace(regex, '');
    // aldigimiz neticeni tersine cevirmek ucun funksiya
    var reverseWord = lowWord.split('').reverse().join(''); 
    //palindrom oldugunu yoxlamaq ucun eger tersine cevirdiyimiz funksiyadaki netice ile balaca herflere cevirdiyimiz funksiyanin neticeleri beraber olarsa bu palindromdur
    return reverseWord === lowWord;
  }
  
  console.log(palindrome("ata"))
  