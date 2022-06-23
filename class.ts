export class User {
  //   public name: string;
  public age: number;

  constructor(public name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  setName(value: string): void {
    this.name = value;
  }

  getName = (): string => {
    return this.name;
  };
}

let user = new User("Taufik", 32);
console.log("ini aku React Native Developer Expert: ", user);

//public - bisa diakses di semua class / dari luar class
// protected - hanya bisa diakses dari class tersebut, dan kelas turunannya
// private = hanya bisa diakses dari class itu sendiri

/**
 *Inheritance
 */

class Admin extends User {
  read: boolean = true;
  write: boolean = true;
  phone: string;
  //private set dan get
  private _email: string = "";
  //static method
  static getRoleName: string = "admin akses";

  constructor(phone: string, name: string, age: number) {
    //akses modifier ke parent class, jika pake constructor, maka pake super
    super(name, age);
    this.phone = phone;
  }

  static getNameRole() {
    return "halooo bos";
  }

  getRole(): { read: boolean; write: boolean } {
    return {
      read: this.read,
      write: this.write,
    };
  }

  //setter getter
  set email(value: string) {
    if (value.length < 5) {
      this._email = "Email kurang";
    } else {
      this._email = value;
    }
  }

  get email(): string {
    return this._email;
  }
}

// let admin = new Admin("08231234569", "Taufik", 32);
// admin.setName("Ahmad");
// admin.getName();
// admin.getRole();
// admin.phone;
// admin.email = "adm@gmail.com";
// console.log("ini konstruktor admin: ", admin.email);
let admin = Admin.getNameRole();
console.log("akses static method admin:", admin);
