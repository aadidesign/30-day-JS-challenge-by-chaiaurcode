
function higherOrderFunction(fn, num) {
    for (let i = 0; i < num; i++) {
        fn();
    }
}
