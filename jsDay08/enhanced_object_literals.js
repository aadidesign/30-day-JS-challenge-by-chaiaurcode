
// Activity 5: Enhanced Object Literals
// Task 8
const methods = {
    greet() {
        console.log("Hello!");
    }
};
console.log(methods);
methods.greet();

// Task 9
const propName = "dynamicProp";
const enhancedObject = {
    [propName]: "This is a dynamic property"
};
console.log(enhancedObject);
