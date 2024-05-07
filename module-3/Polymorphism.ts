{
  class Person {
    getSleep() {
      console.log("i am sleeping 8 hours");
    }
  }

  class Student extends Person {
    getSleep() {
      console.log("i am sleeping 7 hours");
    }
  }
  class Developers extends Person {
    getSleep(): void {
      console.log("i am sleeping 6 hours");
    }
  }

  function getSleepHours(param: Person) {
    return param.getSleep();
  }
  const Person1 = new Person();
  const Person2 = new Student();
  const Person3 = new Developers();

  getSleepHours(Person1);
  getSleepHours(Person2);
  getSleepHours(Person3);

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  class Circle extends Shape {
    radius: number;
    constructor(radius: number) {
      super();
      this.radius = radius;
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }
  class Ractangle extends Shape {
    width: number;
    height: number;
    constructor(width: number, height: number) {
      super();
      this.width = width;
      this.height = height;
    }
    getArea(): number {
      return this.width * this.height;
    }
  }

  function getShapeArea(param: Shape) {
    console.log(param.getArea());
  }

  const Shape1 = new Shape()
  const Shape2 = new Circle(9)
  const Shape3 = new Ractangle(8,9)

  getShapeArea(Shape1)
  getShapeArea(Shape2)
  getShapeArea(Shape3)

}
