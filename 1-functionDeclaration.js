// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 1.YÖNTEM  : FUNCTION DECLARATION
// !------------------------------------------------

console.log("****** FUNC DECLARATION *********");

//* ORNEK:
//************************************************/

function yazdir() {
    console.log("merhaba");
}

yazdir(); //* invoke, call, cagirma
yazdir();

// ***ORNEK2:*****


function selamla(ad,soyAd = "") {
    console.log(`Merhaba ${ad} ${soyAd}`)
}

selamla("Can", "Yilmaz")
selamla("Canan", "Ozturk")
selamla("Ayse");


// ************ ORNEK3*****

function yasHesapla(isim,dogumTarihi) {
    // const sonuc = `${isim} in yasi ${ new Date().getFullYear() - dogumTarihi}dir.`
    // return sonuc;
    return `${isim} in yasi ${new Date().getFullYear() - dogumTarihi}dir`;
}

const mesaj1 = yasHesapla("Elif Can", 1990);
console.log(mesaj1)
console.log(yasHesapla("Veli Canan", 1980));

// ***********ORNEK4*******************

function tekCift(sayi) {
    
    return sayi % 2 ? `${sayi} TEKTIR` : `${sayi} CIFTTIR`;
}


console.log(tekCift(5));
console.log(tekCift(2));


const sayi = +prompt("Bir sayi giriniz:")
console.log(tekCift(sayi));