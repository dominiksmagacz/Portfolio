

    function odliczanie() {



        var dzisiaj = new Date();
        var dzien = dzisiaj.getDate();
        if (dzien < 10) dzien = "0" + dzien
        var miesiac = dzisiaj.getMonth() + 1;
        if (miesiac < 10) miesiac = "0" + miesiac
        var rok = dzisiaj.getFullYear();
        var godzina = dzisiaj.getHours();
        if (godzina < 10) godzina = "0" + godzina
        var minuty = dzisiaj.getMinutes();
        if (minuty < 10) minuty = "0" + minuty
        var sekundy = dzisiaj.getSeconds();
        if (sekundy < 10) sekundy = "0" + sekundy

        document.getElementById("zegar").innerHTML =
            dzien + "/" + miesiac + "/" + rok + " | " + godzina + ":" + minuty + ":" + sekundy;
        setTimeout("odliczanie()", 1000);

}

var timer1 = 0;
var timer2 = 0;

var numer = Math.floor(Math.random() * 5) + 1;

function schowaj() {
    $("#slider").fadeOut(500);

}

function ustawslajd(nrslajdu) {
    clearTimeout(timer1);
    clearTimeout(timer2);
    numer = nrslajdu - 1;
    schowaj();
    setTimeout("zmienslajd()", 500);
}
    function zmienslajd() {
        numer++; if (numer > 5) numer = 1;
        var plik = "<img src=\"slajdy/slajd" + numer + ".jpg\"/>";
        document.getElementById("slider").innerHTML = plik;
        $("#slider").fadeIn(500);
        timer1= setTimeout("zmienslajd()", 5000);
        timer2= setTimeout("schowaj()", 4500);
    }

   

function sprawdz() {
    var liczba = document.getElementById("pole").value;

    if (liczba > 0) document.getElementById("wynik").innerHTML = "dodatnia";
    else if (liczba < 0) document.getElementById("wynik").innerHTML = "ujemna";
    else if (liczba == "") document.getElementById("wynik").innerHTML = "nic nie wpisałeś"
    else if (liczba == 0) document.getElementById("wynik").innerHTML = "zero";
    else document.getElementById("wynik").innerHTML = "to nie jest liczba, wpisałeś coś nie tak"

}

function wypisz() {
    var liczba1 = document.getElementById("pole1").value;
    var liczba2 = document.getElementById("pole2").value;
    var napis = "";

    for (i = liczba1; i <= liczba2; i++)
    {
        napis = napis + i + " ";
    }
    document.getElementById("wynikWypisz").innerHTML =napis;





}

