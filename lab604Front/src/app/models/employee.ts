export class Employee {

    constructor(private _id: number, private _name : string, private _phoneNumber: string, private _officeNumber: number, private _position: string, private _manager: string){}

    get id(){
        return this._id
    }

    set id(id : number){
        this._id = id
    }

    get name(){
        return this._name
    }

    set name(name : string){
        this._name = name
    }

    get phoneNumber(){
        return this._phoneNumber
    }

    set phoneNumber(phoneNumber : string){
        this._phoneNumber = phoneNumber
    }

    get officeNumber(){
        return this._officeNumber
    }

    set officeNumber(officeNumber : number){
        this._officeNumber = officeNumber
    }

    get position(){
        return this._position
    }

    set position(position : string){
        this._position = position
    }

    get manager(){
        return this._manager
    }

    set manager(manager : string){
        this._manager = manager
    }


}
