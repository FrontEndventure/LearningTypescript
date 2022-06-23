"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(name, age) {
        this.name = name;
        this.getName = () => {
            return this.name;
        };
        this.name = name;
        this.age = age;
    }
    setName(value) {
        this.name = value;
    }
}
exports.User = User;
let user = new User("Taufik", 32);
console.log("ini aku React Native Developer Expert: ", user);
//public - bisa diakses di semua class / dari luar class
// protected - hanya bisa diakses dari class tersebut, dan kelas turunannya
// private = hanya bisa diakses dari class itu sendiri
/**
 *Inheritance
 */
class Admin extends User {
    constructor(phone, name, age) {
        //akses modifier ke parent class, jika pake constructor, maka pake super
        super(name, age);
        this.read = true;
        this.write = true;
        //private set dan get
        this._email = "";
        this.phone = phone;
    }
    static getNameRole() {
        return "halooo bos";
    }
    getRole() {
        return {
            read: this.read,
            write: this.write,
        };
    }
    //setter getter
    set email(value) {
        if (value.length < 5) {
            this._email = "Email kurang";
        }
        else {
            this._email = value;
        }
    }
    get email() {
        return this._email;
    }
}
//static method
Admin.getRoleName = "admin akses";
// let admin = new Admin("08231234569", "Taufik", 32);
// admin.setName("Ahmad");
// admin.getName();
// admin.getRole();
// admin.phone;
// admin.email = "adm@gmail.com";
// console.log("ini konstruktor admin: ", admin.email);
let admin = Admin.getNameRole();
console.log("akses static method admin:", admin);
