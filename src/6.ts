import { rejects } from "assert"
import { resolve } from "path"

function F(){
   return 25
}

const regularNumber = F()

function F2(): number{
   return 25
}


function F3():[number,string]{
   return [25,'asdasd']
}

const awe = F3()

function F4(){
}

const qwe = F()

function LogPerson(isim : string,soyisimi : string, yas : number){
   console.log({isim,soyisimi,yas})
}

LogPerson('Ulaş', 'Demirbağ', 20)

function LogPerson2(parametreler:{
   isim:string,
   soyisim:string,
   yas:number
}): Promise<number>{
   return new Promise((resolve,rejects)=> {
      resolve(25)
   })
}

LogPerson2({
   isim:'Ulaş',
   soyisim:'Demirbağ',
   yas:25
})