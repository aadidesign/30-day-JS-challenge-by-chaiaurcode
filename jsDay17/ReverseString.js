
const reverseString = (str) => {
    const stack = new Stack();
    for (let char of str) {
        stack.push(char);
    }

    let reversed = '';
    while (stack.items.length > 0) {
        reversed += stack.pop();
    }
    return reversed;
};
