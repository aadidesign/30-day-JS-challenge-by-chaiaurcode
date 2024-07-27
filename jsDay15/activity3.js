
// Task 5
function createFunctions() {
    let functions = [];
    for (let i = 0; i < 5; i++) {
        functions.push((function(index) {
            return function() {
                console.log(index);
            };
        })(i));
    }
    return functions;
}
const functionsArray = createFunctions();
functionsArray.forEach(func => func());
