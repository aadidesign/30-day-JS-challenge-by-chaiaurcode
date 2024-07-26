const promise3 = new Promise((resolve) => {
    setTimeout(() => resolve('Data fetched from server 1'), 1000);
});
const promise4 = new Promise((resolve) => {
    setTimeout(() => resolve('Data fetched from server 2'), 2000);
});
const promise5 = new Promise((resolve) => {
    setTimeout(() => resolve('Data fetched from server 3'), 3000);
});

promise3
    .then(message => {
        console.log(message);
        return promise4;
    })
    .then(message => {
        console.log(message);
        return promise5;
    })
    .then(message => console.log(message));
