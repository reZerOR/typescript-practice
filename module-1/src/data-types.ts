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
  phoneNumber: "+1234567890"
};
