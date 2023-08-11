// Analyze the below code. Do you see any issue? If yes, what is that issue?

// const object1 = {
//   a: 10,
//   b: 20,
//   c: function () {
// 	console.log(this.a + this.b);
//   },
// };
// const func = object1.c;
// func();

//The issue is OBJECT {object1.c} is not bind. So for this we have to use bind method.

const object1 = {
    a: 10,
    b: 20,
    c: function () {
      console.log(this.a + this.b);
    },
  };
  const func = object1.c.bind(object1);
  func();


  // bind is used when you want to create a new function with a specific this value.