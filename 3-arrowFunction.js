// ? ===============================================
// ?               FONKSİYONLAR
// ? ===============================================

// !------------------------------------------------
// ! 3.YONTEM  : ARROW FUNCTION
// !------------------------------------------------

console.log("**** ARROW ******");

//* ORNEK:
//************************************************/


const r = Number(prompt("yaricap girinşz"))
const h = Number(prompt("yukseklik giriniz"))

const hacimHesapla = (r, h) => Math.PI * r * r * h;

console.log(`${r}, ${h} => Hacmi: ${hacimHesapla(r, h).toFixed(2)}`);


///////*ORNEK: YAS HESAPLA
///////////***** */

///+++ Arrow function yöntemi */
const tarih = Number(prompt("Dogum tarihini giriniz"))

const yasHesapla = (tarih) => {
    const yas = new Date().getFullYear() - tarih;
    return yas;
}
////alternatif
const yasHesaplaKisa = (tarih) => new Date().getFullYear() - tarih;

console.log("YASINIZ:" + yasHesapla(tarih));

// console.log("YASINIZ:" + yasHesapla2(tarih));
//!Funct expression ve arrow func yontemlerinde
//! Once fonks tanimlanmalidir sonra cagrilmalidir.
//! Aksi takdirde hata alrsiniz.


/////!!!** Func Expression yöntemi
// const tarih = Number(prompt("Dogum tarihini giriniz"))

const yasHesapla2 = function (tarih) {
    const yas = new Date().getFullYear() - tarih;
    return yas;
}

console.log("YASINIZ:" + yasHesapla(tarih));

// // Func Declaration yöntemi

function yasHesapla3(tarih) {
    const yas = new Date().getFullYear() - tarih;
    return yas;
}

//* ORNEK: Girilen n. terime kadar Fibonacci sayilarinin toplamini
//* hesaplayarak yazdiran fonksiyonu dongu ile kodlayiniz.
//? FIBONACCI terimleri:  1, 1, 2, 3, 5, 8, 13, 21, ...

const fibo = (n) => {
    let fib1 = 1;
    let fib2 = 1;
    let toplam = 0;

    for(let i = 2; i < n; i++){
        toplam = fib1 + fib2;
        fib1 = fib2;
        fib2 = toplam;
        console.log(toplam)
    }
    return fib2;
}

const n = prompt("n terimini giriniz:")
if(n<=0){
    console.log("lütfen 0 dan buyuk bir sayi giriniz")
} else{
    console.log(`FIBO(${n})= ${fibo(n)}`)
}
