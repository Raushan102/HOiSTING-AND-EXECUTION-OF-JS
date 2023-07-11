
{
  console.log(myLet); //  error undefined (hoisted but not initialized)
  console.log(myVar); // undefined 
  console.log(myConst); // error  ReferenceError: myConst is not defined (not hoisted)

  let myLet = "Hello";
  var myVar = "World";
  const myConst = "!";
  
  console.log(myLet); // Hello
  console.log(myVar); // World
  console.log(myConst); // !
}