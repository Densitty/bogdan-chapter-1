  #                                                    Chapter 1

Here, we are reviewing all the JavaScript basics, where we learnt that everything in JavaScript is an object.
There are two types of variables; 
  *Primitive variable types
  *Reference variable types
Primitive data types are numbers, strings, boolean, null and undefined. This hold a place in our machine memory directly
For reference data types, we do not access them in the machine memory directly, but access them through a pointer. It is the pointer that now goes into the memory to fetch these variables.(More on this will be committed as a note for reference).
For reference variable types, let's say an object or an array, if we create;
				const myObject = {a: "Apple"};
				const myObject2 = myObject;
				
The second variable is just a copy of the first variable. if we should adjust the property of the scond variable, automatically, we are adjusting the property of the first variable;
				myObject2.b = "Ball";
				console.log(myObject2) ==> {a:"Apple", b:"Ball"}
				console.log(myObject) ==> {a:"Apple", b:"Ball"}
That is why they are called reference data types.
