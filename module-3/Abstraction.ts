{
  //abstraction --1 interface --2 class

  interface Vehicle1 {
    startEngine(): string;
    stopEngine(): string;
    move(): string;
  }

  class Car implements Vehicle1 {
    startEngine(): string {
      return "i am starting";
    }
    stopEngine(): string {
      return "i am stoping";
    }
    move(): string {
      return "i am moving";
    }
    test(): string {
      return "i am testing";
    }
  }

  const toyotaCar = new Car();
  console.log(toyotaCar.startEngine());

  //   abstract class
  abstract class Car1 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
    abstract test(): void;
  }
  class ToyotaCar extends Car1 {
    startEngine(): void {
      console.log("i am starting");
    }
    stopEngine(): void {
      console.log("i am stop");
    }
    move(): void {
      console.log("i am move");
    }
    test(): void {
      console.log("i am test");
    }
  }
}
