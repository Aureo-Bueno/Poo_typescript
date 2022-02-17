export default class Customer{
    private name: string;
    private phone: string;
    private age?: number;


    constructor(name: string,phone: string,age?: number){
        this.name = name;
        this.phone = phone;
        this.age = age;

    }

    setName(name: string){
        if (name.indexOf(" ")>= 0) {
            this.name = name
            
        }
    }

    getName(){
        return this.name
    }

}