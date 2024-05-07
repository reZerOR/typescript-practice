{
  class Counter {
    static count: number = 0;
    static increment() {
      return ++Counter.count;
    }
    static decrement() {
      return --Counter.count;
    }
  }

  console.log(Counter.increment());
  console.log(Counter.count);
  console.log(Counter.decrement());
}
