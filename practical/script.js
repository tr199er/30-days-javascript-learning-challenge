function userDetails() {
  let userOne = {
    //creating userOne first object
    name: "Musa",
    role: "dev",
    country: "Surulere",
  };

  let userTwo = {
    //creating UserTwo object
    name: "Akanni",
    role: "frontend",
    country: "gudu",
  };

  return { userOne, userTwo }; // Return an object containing userOne and userTwo details
}
console.log(userDetails());
