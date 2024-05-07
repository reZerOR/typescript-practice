{
  //typguard

  type AlphaNumeric = string | number;

  function add(param1: AlphaNumeric, param2: AlphaNumeric): AlphaNumeric {
    if (typeof param1 === "number" && typeof param2 === "number") {
      return param1 + param2;
    } else {
      return param1.toString() + param2.toString();
    }
  }

  type NormalUser = {
    name: string;
  };
  type AdminUser = {
    name: string;
    role: "admin";
  };

  //  in guard
  const getUser = (user: NormalUser | AdminUser) => {
    if ("role" in user) {
      console.log(`My name is ${user.name} and my role is ${user.role}`);
    } else {
      console.log(`my name is ${user.name}`);
    }
  };

  //   instance of guard

  class Animal {
    name: string;
    species: string;
    constructor(name: string, species: string) {
      this.name = name;
      this.species = species;
    }
    makeSound() {
      console.log("i am making sound");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeBark() {
      console.log("i am barking");
    }
  }
  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }
    makeMewing() {
      console.log("i am mewing");
    }
  }
  const getAnimal = (animal: Animal) => {
    if (animal instanceof Cat) {
      animal.makeMewing();
    } else if (animal instanceof Dog) {
      animal.makeBark();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("jimi", "dog");
  const cat = new Cat("pimi", "cat");

  getAnimal(cat)
}
