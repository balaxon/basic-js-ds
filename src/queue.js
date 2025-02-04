const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = new ListNode(null);
}

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if (this.queue.value === null) this.queue.value = value;
        else {
            let node = this.queue;
            while (node.next !== null) {
                node = node.next;
            }
            node.next = new ListNode(value)
        }
  }

  dequeue() {
    if (this.queue.value === null) {
      return null;
  } else {
      let node = this.queue;
      this.queue = node.next;
      return node.value;
  }
  }
}

module.exports = {
  Queue
};
