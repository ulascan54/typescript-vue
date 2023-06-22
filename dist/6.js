"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function F() {
    return 25;
}
const regularNumber = F();
function F2() {
    return 25;
}
function F3() {
    return [25, 'asdasd'];
}
const awe = F3();
function F4() {
}
const qwe = F();
function LogPerson(isim, soyisimi, yas) {
    console.log({ isim, soyisimi, yas });
}
LogPerson('Ulaş', 'Demirbağ', 20);
function LogPerson2(parametreler) {
    return new Promise((resolve, rejects) => {
        resolve(25);
    });
}
LogPerson2({
    isim: 'Ulaş',
    soyisim: 'Demirbağ',
    yas: 25
});
