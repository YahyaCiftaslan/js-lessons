// ? ===================================================
// ?                FONKSİYONLAR-SCOPE
// ? ====================================================
console.log("******* 3 - SCOPE ********");

let sayi1 = 5
console.log(sayi1);

const fonks1 = function () {
    sayi1 = 22;
    console.log(sayi1);
}

fonks1();

console.log(sayi1++) ////22
console.log(sayi1) //////23
console.log(++sayi1) /////24

////////////??
const sayi2 = 7; ////global scope
console.log(sayi2); ////7

const fonks2 = () => {
    let sayi2 = 11; ////////function scope
    console.log(sayi2);  ////11
}

fonks2()
console.log(sayi2) ////7

if (sayi2 === 7) {
    let sonuc = "merhaba"
}else {
    sonuc = "nasılsın"
    console.log(sonuc)
}

// console.log(sonuc)