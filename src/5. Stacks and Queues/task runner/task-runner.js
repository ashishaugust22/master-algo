// Problem statement
// I want to implement something like a task runner which will be pushed new tasks. Each of those tasks could be some async operation 
// like waiting on user or making API calls or something else. The task runner makes sure that at a time only allowed number of tasks can execute, 
// while other tasks will keep on waiting till their turn comes.

class Runner {
    constructor(concurrent) {
      this.concurrent = concurrent;
      this.taskQueue = [];
      this.callStackSize = 0;
      this.initEventLoop();
    }
  
    push(task) {
      this.taskQueue.push(task);
    }
  
    initEventLoop() {
      setInterval(() => {
        this.run();
        console.log(this.taskQueue);
        console.log(this.callStackSize);
      }, 1000);
    }
  
    async run() {
      if (this.callStackSize < this.concurrent && this.taskQueue.length) {
        const nextTask = this.taskQueue.shift();
        this.callStackSize++;
        await nextTask();
        this.callStackSize--;
        console.log(new Date().toISOString());
        this.run();
      }
    }
  }
  
  function timerFunction(time) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`completed after ${time}`)
        resolve(true);
      }, time);
    });
  }
  
  
  const runner = new Runner(3);
  runner.push(timerFunction.bind({}, 5000));
  runner.push(timerFunction.bind({}, 9000));
  runner.push(timerFunction.bind({}, 7000));
  runner.push(timerFunction.bind({}, 5000));
  runner.push(timerFunction.bind({}, 10000));
  runner.push(timerFunction.bind({}, 3000));
  runner.push(timerFunction.bind({}, 4000));