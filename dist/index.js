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
