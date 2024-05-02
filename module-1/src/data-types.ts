// data types

// string type
let person_name: string = "who know";

// number type
let nums: number = 90;

// boolean type
let isAdmin: boolean = true;

// undifined
let x: undefined = undefined;

// null
let y: null = null;

// array
let stringArray: string[] = ["name", "fame"];

let numList: number[] = [89, 69];

// tuple --> array --> order --> type of values
let coordinates: [number, number] = [67, 90];

let ageName: [number, string] = [50, "name"];

// reference type --> object
const user: {
  company: "turkeyIsp"; //type --> literal types
  firstName: string;
  lastName: string;
  middleName?: string; //optional type
  isMarried: boolean;
  readonly phoneNumber: string; // read only type the value can not be changed
} = {
  company: "turkeyIsp",
  firstName: "jorge",
  lastName: "boosh",
  isMarried: false,
  phoneNumber: "+1234567890",
};

// normal function
//arrow function

function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}

const addArrow = (num1: number, num2: number): number => num1 + num2;

// object --> function --> method
const poorMe = {
  name: "rik",
  balance: 0,
  addBalance(balance: number): string {
    return `My new balance is: ${this.balance + balance}`;
  },
};

const arr: number[] = [1, 4, 10];
const newArrayWithMap: number[] = arr.map(
  (elem: number): number => elem * elem
);


// type alias

type Student = {
    name: string,
    age: number,
    gender: "male" | "female",
    address: string,
    contactNo?: string
}

const srudent1: Student = {
    name: 'kayo',
    age: 90,
    gender: "male",
    address: "yuil", 
}
const srudent2: Student = {
    name: 'kayo',
    age: 90,
    gender: "male",
    address: "yuil", 
    contactNo: "92340238402384"
}


type UserName = string
type IsAdmin = boolean
const userName: UserName = 'persin'
const is1Admin: IsAdmin = false

type Add = (num1: number, num2: number) => number
const add2: Add = (num1, num2) => num1+num2