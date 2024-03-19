// // Classes

// // class User {
// //   email: string;
// //   name: string;
// //   private readonly city: string = "";

// //   constructor(email: string, name: string) {
// //     this.email = email;
// //     this.name = name;
// //   }
// // }
// class User {
//   //   private _courseCount = 1;
//   protected _courseCount = 1; // same functionality as private except subclasses can access it

//   private readonly city: string = "";

//   constructor(public email: string, public name: string) {}

//   private deleteToken() {
//     console.log("Token deleted");
//   }

//   get getAppleEmail(): string {
//     return `apple${this.email}`;
//   }

//   get courseCount(): number {
//     return this._courseCount;
//   }
//   //   setters should have no return type
//   set courseCount(num: number) {
//     if (num <= 1) {
//       throw new Error("Course count should be greater than 1");
//     }
//     this._courseCount = num;
//   }
// }

// class SubUser extends User {
//   // Cannot access private
//   isFamily: boolean = true;

//   changeCourseCount() {
//     this._courseCount = 4;
//   }
// }

// const brian = new User("brian@gmail.com", "Brian Mason");
