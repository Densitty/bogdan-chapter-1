/* We are ready to add script to our doc */

// Variable declared and assigned value is called an expression
// Variable declared and assigned a value and ended with ; is called an expression-statement
//Ctrl + / is to comment in VSC. the / on the number keyboard not working, pls note
console.log("We are set for practise with Bodgan");

// Pressing / and ** will enable us to create multi-line comments

/**
 * Challenge 1 -
 *  Declare variable "myObject" and assign value {}.
 *  Print this variable to the console.
 *  N.B:- variable "myObject" will NOT be reassigned in the future
 */

 const myObject = {
     a:"Apple",
     b:"Ball",
     c:"Cat"
 };

 console.log(myObject);

 /**
  * Challenge 2 : 
  */

  let x = 10;
  let y = true;
  let anotherObject;

  console.log(x,y,anotherObject);

  anotherObject = {
      a: x,
      b: y,
      c: myObject
  }

  console.log(anotherObject);

//   To delete a property from our object, we use the delete operator
delete anotherObject.c;

console.log(anotherObject);

/**
    * Challenge 3
    *  Create a variable called 'myPost'
    *  Declare it as an empty object
    *  Add property called 'postTitle' and value "Object is reference type"
    *  Add one more property "postLikes" with value 0
    *  Add third property "shared" and set its value to "false"
    *  Increase the value of the "postLikes" by 1
    *  Delete property "shared"
 */

 const myPost = {};

 const postTitle = "Animals";

 myPost[postTitle] = "Dogs";
 myPost.postLikes = 0;
 myPost.shared = false;

 console.log(myPost);

 myPost["postLikes"] = myPost.postLikes + 1;

 delete myPost.shared;

 console.log(myPost);


 /*
    Challenge 4 :
        * Create object "objectWithNestedObject" with initial value {}.
        * Add property "nestedObject" with initial value {}
        * Add property "a" with value "null" to "nestedObject". Use dot notation
        * Add property "b" with value "true" to "nestedObject". Use bracket notation. Create new variable with property name
 */

 const objectWithNestedObject = {};

 objectWithNestedObject.nestedObject = {};

 objectWithNestedObject.nestedObject.a = null;

 const newProperty = "b";

 objectWithNestedObject.nestedObject[newProperty] =true;

 console.log(objectWithNestedObject);
