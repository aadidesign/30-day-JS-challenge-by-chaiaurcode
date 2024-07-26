async function asyncFunction2() {
    const promise = new Promise((_, reject) => {
        setTimeout(() => reject(new Error('Rejected promise')), 2000);
    });
    try {
        const result = await promise;
        console.log(result);
    } catch (error) {
        console.error(error.message);
    }
}
asyncFunction2();
