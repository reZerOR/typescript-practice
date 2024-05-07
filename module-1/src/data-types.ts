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
  name: string;
  age: number;
  gender: "male" | "female";
  address: string;
  contactNo?: string;
};

const srudent1: Student = {
  name: "kayo",
  age: 90,
  gender: "male",
  address: "yuil",
};
const srudent2: Student = {
  name: "kayo",
  age: 90,
  gender: "male",
  address: "yuil",
  contactNo: "92340238402384",
};

type UserName = string;
type IsAdmin = boolean;
const userName: UserName = "persin";
const is1Admin: IsAdmin = false;

type Add = (num1: number, num2: number) => number;
const add2: Add = (num1, num2) => num1 + num2;

// union types and intersection types

type Frontend = "fakabaz" | "balo";
type Backend = "bari fakabaz" | "balo";

type Fullstack = Frontend & Backend; //value will be common set of every type
type Allstack = Frontend | Backend; //value will be every set of every type

const Developer1: Fullstack = "balo";
const Developer2: Allstack = "bari fakabaz";

// ternary, optiona chaining & nullish coalescing oparator

const age: number = 18;

const isAdult = age >= 18 ? "Adult" : "not Adult";
// console.log({isAdult});

// nullish coalescing operator
// null / undifiend --> decision making

const isAuthenticated = null;

const whoIsIt = isAuthenticated ?? "Guest"; //nullish coalescing operator

// optional chaining

type User1 = {
  name: string;
  address: {
    city: string;
    road: string;
    presentAddress: string;
    PermanentAddress?: string;
  };
};

const user1: User1 = {
  name: "who knows",
  address: {
    city: "tokyo",
    road: "4no",
    presentAddress: "back alley home",
  },
};

const PermanentAddress1 = user1?.address?.PermanentAddress ?? "Not found"; //nullish coalescing operator
const PermanentAddress2 = user1?.address?.PermanentAddress || "Not found"; //logical or oparator

console.log({ PermanentAddress1, PermanentAddress2 });

//type assertion

let anything: any;

anything = "weoeuadfajfe";

anything as string;

type CustomError = {
  message: string;
};
try {
} catch (error) {
  console.log((error as CustomError).message);
}

// interface
type User2 = {
  name: string;
  age: number;
};

interface User3 {
  name: string;
  age: number;
}

type NewUser2 = User2 & { role: string };
interface NewUser3 extends User3 {
  role: string;
}

// declearing array types with interface
type Roll1 = number[];
interface Roll2 {
  [index: number]: number;
}
const RollNumber: Roll2 = [0, 1, 3];

// declearing function types with interface

interface Add2 {
  (num1: number, num2: number): number;
}

const add3: Add2 = (num1, num2) => num1 + num2;
//use type alias for every thing either than obejcts
//use interface for objects

//generic types
type GenericArray<T> = Array<T>;

// const rollNumber2: number[] = [1,2,3]
const rollNumber2: Array<number> = [1, 2, 3];
const rollNumber3: GenericArray<number> = [1, 2, 3];

// const mentors: string[] = ["x", "y", "u"]
const mentors: Array<string> = ["x", "y", "u"];
const mentors1: GenericArray<string> = ["x", "y", "u"];

// const boolArray: boolean[] = [true, false, true]
const boolArray: Array<boolean> = [true, false, true];
const boolArray1: GenericArray<boolean> = [true, false, true];

const newuser4: GenericArray<User3> = [
  {
    name: "string",
    age: 89,
  },
];

//generic type with interface

interface Developer3<T> {
  name: string;
  computer: {
    brand: string;
    model: string;
    releaseYear: number;
  };
  smartWatch: T;
}

const poorDeveloper: Developer3<{ brand: string; model: string }> = {
  name: "name",
  computer: {
    brand: "hp",
    model: "ioej",
    releaseYear: 2345,
  },
  smartWatch: {
    brand: "apple watch",
    model: "idk",
  },
};
const richDeveloper: Developer3<{
  brand: string;
  model: string;
  releaseYear: string;
}> = {
  name: "name",
  computer: {
    brand: "hp",
    model: "ioej",
    releaseYear: 2345,
  },
  smartWatch: {
    brand: "apple watch",
    model: "idk",
    releaseYear: "34415",
  },
};
//generic type function

const createArrayGeneric = <T>(pram: T): T[] => {
  return [pram];
};

const resGeneric = createArrayGeneric<string>("hello");

//constraints

const addCourseToStudent = <
  T extends { id: number; name: string; email: string }
>(
  student: T
) => {
  const course = "emni course";
  return {
    ...student,
    course,
  };
};

const student3 = addCourseToStudent({id: 2304, name: "jani na", email: "x@y.com", money: 8960})

//generic constraint with keyof operator

type Vehicle = {
  bike: string,
  car: string,
  ship: string
}

type Owner = "bike" | "car" | "ship";//manually key written
type Owner1 = keyof Vehicle//dynamicaly key written

//in function typeof
const getPropertyValue = <X, Y extends keyof X>(obj:X, key:Y)=>{
  return obj[key]
}

const result = getPropertyValue(student3, "money")

//async typscript

type Todo={
  "userId": number,
  "id": number,
  "title": string,
  "completed": string
}
const getTodo = async (): Promise<Todo> =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  const result: Todo = await res.json()
  return result
}

//conditional types

type CheckVehicle<T> = T extends keyof Vehicle ? true : false

type HasPlan = CheckVehicle<"plain">

//mapped types 

type ArrayofSomething<T>= {
  [key in keyof T]:T[key]
}

const something: ArrayofSomething<Todo> = {
  userId: 234234,
  id: 23424,
  title: "something",
  completed: "dont know"
}

