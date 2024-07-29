
const simulatePrinterQueue = (jobs) => {
    const queue = new Queue();
    for (let job of jobs) {
        queue.enqueue(job);
    }

    while (queue.items.length > 0) {
        console.log(`Printing job: ${queue.dequeue()}`);
    }
};
