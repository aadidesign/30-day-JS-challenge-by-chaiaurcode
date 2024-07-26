const promise2 = new Promise((_, reject) => {
    setTimeout(() => reject(new Error('Rejected after 2 seconds')), 2000);
});
promise2.catch(error => console.error(error.message));
