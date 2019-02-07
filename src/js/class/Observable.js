class Observable {
  constructor() {
    this.subscriber = [];
  }

  subscribe(fn) {
    if (typeof fn !== 'function') throw new Error('Subscriber has to be function');

    this.subscriber.push(fn);
    return function unsubscribe() {
      this.subscriber.splice(this.subscriber.indexof(fn), 1);
    }.bind(this);
  }

  update() {
    this.subscriber.forEach(fn => { fn(...arguments); });
  }
}

export { Observable };
