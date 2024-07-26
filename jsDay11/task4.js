async function asyncFunction1() {
    const promise = new Promise((resolve) => {
        setTimeout(() => resolve('Resolved promise'), 2000);
    });
    const result = await promise;
    console.log(result);
}
asyncFunction1();
