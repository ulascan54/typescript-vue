let myname: String ='asdasd' // Type tanımlama
let myname2: string | number = 'asdad'// hem number hem string tanımlamak için
// const -> sabit sonradan değişmez

let sa = true;

sa=false;
sa=!sa;
sa = !!myname;

const c = Symbol("merhaba")

const f= undefined


function change (){
    myname = "213123"
    myname2=25
}

function check(){
    if(typeof myname === 'string'){
    }
    if(typeof myname === 'number'){
    }
}