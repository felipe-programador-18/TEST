import  {Notafiscal} from './interface'

//Guidance about SRP (SINGLE RESPONSIBILITY PRINCIPlES) 
export class Libraries {
    constructor(nomebook:string){
     this.nomebook = nomebook
    }
    nomebook: string;
}

export class Pricebook implements Notafiscal {
    valuebook:number;
    namebook: string;
    
    constructor(pricebook:number){
     this.pricebook = pricebook
    }
    pricebook: number;
}


export class Finnaly implements Notafiscal {
    valuebook:number;
    namebook: string;

    constructor(bookone: number){
        this.bookone = bookone 
    }
    bookone:number;
}