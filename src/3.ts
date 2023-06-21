const Person = {
    isim: 'Ulaş',
    soyisim: 'Demirbağ',
    bilmem: 'bilmem'
};

const Person2 = {
    isim: 'Ulaş',
    soyisim: 'Demirbağ',
    bilmem: 'bilmem' as 'bilmem' | 'bilirim' | 'cahilim'
};

const P :{
    isim:string,
    soyisim:string,
    bilmem:'bilmem' | 'bilirim' | 'ne',
} = {
    isim: 'Ulaş',
    soyisim: 'Demirbağ',
    bilmem: 'bilmem'
};

let x: 5 | 25 | 35 = 5