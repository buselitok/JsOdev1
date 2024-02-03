let message = prompt("Lütfen Adınızı Giriniz")

message = `${message[0].toUpperCase()}${message.slice(1).toLowerCase()}`

let paragraph1 = document.querySelector("#p1")

paragraph1.innerHTML=`Merhaba, ${message}! Benim Dünyama Hoşgeldin`


function tarihSaat() {
    var date = new Date().toLocaleString('tr-TR');
    document.getElementById("time").innerHTML = date;
}
// her 1 saniyede tarihSaat fonksiyonunu yeniden çalıştır
setInterval(tarihSaat, 1000); 

let paragraph2 = document.querySelector("#p2")
paragraph2.innerHTML=("Merak etme aynı zaman dilimindeyiz. Benim dünyamdaki tarih ve saat ile senin dünyandaki tarih ve saat aynı.")

