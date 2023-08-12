//What will the code below output to the console and why?
//     (A)
(function(){
    var a = b = 3;
  })();
  
  console.log("a defined? " + (typeof a !== 'undefined'));
  console.log("b defined? " + (typeof b !== 'undefined'));

//  most developers incorrectly understand the statement var a = b = 3;
// var a = b;
// var b = 3;

// But in fact,  var a = b = 3; actually it is:
// b = 3;
// var a = b;

// As a result :
// a defined? false
// b defined? true

// But in strict mode, it will generate runtime error, b is not defined.

//     (B)

var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();

// In the outer function, both this and self refer to myObject 
// and therefore both can properly reference and access foo.

// In the inner function, though, this no longer refers to myObject. 
// As a result, this.foo is undefined in the inner function, 
// whereas the reference to the local variable self remains in scope
//  and is accessible there.

//   (C)

console.log(0.1 + 0.2);
console.log(0.1 + 0.2 == 0.3);

// Numbers in JavaScript are all treated with floating point precision,
// and as such, may not always yield the expected results.”

// first console will give 0.30000000000000004
// and second one will give false.


//    (D)
// (function() {
//     console.log(1); 
//     setTimeout(function(){console.log(2)}, 1000); 
//     setTimeout(function(){console.log(3)}, 0); 
//     console.log(4);
// })();

// 1 and 4 are displayed first since they are logged by simple calls to console.log()
// 2 is displayed after 3 because 2 is being logged after a delay of 1000 msecs.
// whereas 3 is being logged after a delay of 0 msecs.

//       (E)

var arr1 = "john".split('');
var arr2 = arr1.reverse();
var arr3 = "jones".split('');
arr2.push(arr3);
console.log("array 1: length=" + arr1.length + " last=" + arr1.slice(-1));
console.log("array 2: length=" + arr2.length + " last=" + arr2.slice(-1));

//         (F)

console.log(1 +  "2" + "2");
console.log(1 +  +"2" + "2");
console.log(1 +  -"1" + "2");
console.log(+"1" +  "1" + "2");
console.log( "A" - "B" + "2");
console.log( "A" - "B" + 2);