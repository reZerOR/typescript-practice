{
  //class
  class Animal {
    constructor(
      public name: string,
      public species: string,
      public sound: string
    ) {}

    // method
    makeSound(){
        console.log(`the ${this.name} says ${this.sound}`);
        
    }
  }

  const dog = new Animal("josi", "dog", "bow bow")
  const cat = new Animal("fosi", "dog", "mew mew")
  cat.makeSound()
  dog.makeSound()
}


