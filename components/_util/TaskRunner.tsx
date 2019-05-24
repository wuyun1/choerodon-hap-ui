import Timer = NodeJS.Timer;

export default class TaskRunner {

  id: Timer;
  fn: Function;
  callbacks: (() => any)[] = [];

  constructor(fn?: Function) {
    if (fn) {
      this.fn = fn;
    }
  }

  async delay(delay: number, fn?: Function, callback?: () => any) {
    return this.start(true, delay, fn, callback);
  }

  async run(interval: number, fn?: Function, callback?: () => any) {
    return this.start(false, interval, fn, callback);
  }

  async start(once: boolean, interval: number, fn?: Function, callback?: () => any) {
    this.cancel();
    if (fn) {
      this.fn = fn;
    }
    if (typeof callback === 'function') {
      this.callbacks.push(callback);
    }
    if (this.fn) {
      return new Promise((resolve) => {
        this.id = setInterval(() => {
          if (once) {
            this.cancel();
          }
          resolve(this.fn());
          this.callbacks.forEach((cb) => cb());
          this.callbacks = [];
        }, interval);
      });
    }
    return Promise.reject('no caller');
  }

  cancel() {
    if (this.id) {
      clearInterval(this.id);
      delete this.id;
    }
    return this;
  }
}
