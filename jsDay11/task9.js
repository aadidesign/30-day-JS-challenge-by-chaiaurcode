const promiseX = new Promise((resolve) => setTimeout(() => resolve('Promise X resolved first'), 1000));
const promiseY = new Promise((resolve) => setTimeout(() => resolve('Promise Y resolved second'), 2000));
const promiseZ = new Promise((resolve) => setTimeout(() => resolve('Promise Z resolved third'), 3000));

Promise.race([promiseX, promiseY, promiseZ])
    .then(value => console.log(value));
