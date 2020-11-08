/*
document.getElementById("myBtn").addEventListener("click", print);

function print() {

  document.getElementById("demo").innerHTML = "kiitos kun klikkasit";
};

*/
//document.getElementById('teksti').innerHTML +=" tämä lisää tekstin alkuperäisen perään"
//document.getElementById('teksti').innerHTML =" tämä korvaa alkuperäisen tekstin"




      // click on first button -> message
      document.getElementById("myBtn").addEventListener("click", print);
      function print() {
        document.getElementById("myMessage").innerHTML = "kiitos kun klikkasit";
      };
       // click on second button -> message
      function printName() {
        var etunimi = document.getElementById('firstName').value;
        document.getElementById('hello').innerHTML = "Hei " + etunimi + "! Mitä kuuluu?";
        if(etunimi == ""){
          alert('Et antanut etunimeäsi');
          return false;
        }
      }
       // sum for two numbers
      function sum() {
        var eka = parseInt(document.getElementById('firstNum').value);
        var toka = parseInt(document.getElementById('secNum').value);
        var summa = eka + toka;
        document.getElementById('summa').innerHTML = "Summa= " + summa;
      }
        // how many times
      function times() {
        var montakoKertaa = parseInt(document.getElementById('firstNum').value);
        for(i = 0; i < 11; i++) {
          tulos = i*montakoKertaa;
          document.getElementById('kertomat').innerHTML += tulos + ' ';
      }
    }
